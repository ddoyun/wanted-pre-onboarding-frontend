import { React, useState, useCallback } from 'react';
import styled from 'styled-components';

const SignForm = ({ handleSubmit, authData }) => {
  // 이메일, 비밀번호
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 오류 메세지
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 이메일 유효성 검사
  const confirmEmail = useCallback((e) => {
    const regex = /@+/;
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!regex.test(emailValue)) {
      setEmailMessage('이메일은 @ 문자를 포함해야 합니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  }, []);

  // 비밀번호 유효성 검사
  const confirmPassword = useCallback((e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue.length < 8) {
      setPasswordMessage('비밀번호는 8자 이상입니다.');
      setIsPassword(false);
    } else {
      setPasswordMessage('올바른 비밀번호 형식입니다.');
      setIsPassword(true);
    }
  }, []);

  // 데이터 전달
  const onSubmit = () => {
    const signData = {
      email: email,
      password: password,
    };
    handleSubmit(signData);
  };

  return (
    <SignSumit>
      <Form onSubmit={handleSubmit}>
        <Input first type="text" data-testid="email-input" value={email} onChange={confirmEmail} />
        {email.length > 0 && <Message className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Message>}
        <Input type="password" data-testid="password-input" value={password} onChange={confirmPassword} />
        {password.length > 0 && (
          <Message className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Message>
        )}
        <button type="submit" form="sign" data-testid={authData} disabled={!(isEmail && isPassword)} onClick={onSubmit}>
          {authData === 'signup-button' ? '회원가입' : '로그인'}
        </button>
      </Form>
    </SignSumit>
  );
};

export default SignForm;

const SignSumit = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic()}
  background-color: ${({ theme }) => theme.colors.contentBg};
`;

const Form = styled.form`
  ${({ theme }) => theme.MIXINS.flexBox('column')}
  gap: ${({ theme }) => theme.pixelToRem(15)};
`;

const Input = styled.input`
  border: 1px solid ${(props) => (props.first ? props.theme.colors.white : props.theme.colors.darkGray)};
`;

const Message = styled.span``;
