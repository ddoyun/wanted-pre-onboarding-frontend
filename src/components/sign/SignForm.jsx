import { React, useState, useCallback } from 'react';
import Button from '../common/Button';
import Title from '../common/Title';
import Input from './../common/Input';
import { Content, Message } from '../../styles/commonStyle';
import { Form, InputContent, SignUpButton } from '../../styles/signStyle';

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
    <Content>
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
    </Content>
  );
};

export default SignForm;
