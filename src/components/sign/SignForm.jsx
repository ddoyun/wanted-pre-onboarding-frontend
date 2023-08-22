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
      <Title>{authData === 'signup-button' ? '회원가입' : '로그인'}</Title>
      <Form onSubmit={handleSubmit}>
        <InputContent>
          <p>아이디</p>
          <Input type="text" data-testid="email-input" value={email} onChange={confirmEmail} />
          {email.length > 0 && <Message className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Message>}
        </InputContent>
        <p>비밀번호</p>
        <InputContent>
          <Input type="password" data-testid="password-input" value={password} onChange={confirmPassword} />
          {password.length > 0 && (
            <Message className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Message>
          )}
        </InputContent>
        <Button type="submit" form="sign" data-testid={authData} disabled={!(isEmail && isPassword)} onClick={onSubmit}>
          {authData === 'signup-button' ? '회원가입' : '로그인'}
        </Button>
      </Form>
      {authData === 'signup-button' ? '' : <SignUpButton href="signup">회원가입</SignUpButton>}
    </SignSumit>
  );
};

export default SignForm;

const SignSumit = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')}
  ${({ theme }) => theme.MIXINS.positionCenter()};
  background-color: ${({ theme }) => theme.colors.contentBg};
  max-width: 500px;
  min-width: 350px;
  width: 40vw;
  height: 80vh;
  ${({ theme }) => theme.styles.border};
  ${({ theme }) => theme.styles.shadow};
  padding: 60px 40px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  margin: 0 auto 60px 0;
`;

const Form = styled.form`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'initial')}
  gap: 10px;
  width: 100%;
  p {
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const InputContent = styled.div`
  margin-bottom: 15px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'initial')}
  gap: 10px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 30px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.styles.button};
  margin-top: 10px;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: auto;
  }
`;

const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.red};
  &.success {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const SignUpButton = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.pointText};
  color: ${({ theme }) => theme.colors.black};
  margin-top: auto;
`;
