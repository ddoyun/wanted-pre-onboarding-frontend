import { React, useState, useCallback } from 'react';
//import styled from "styled-components";

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
    <form onSubmit={handleSubmit}>
      <input type="text" data-testid="email-input" value={email} onChange={confirmEmail} />
      {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
      <input type="password" data-testid="password-input" value={password} onChange={confirmPassword} />
      {password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
      <button type="submit" form="sign" data-testid={authData} disabled={!(isEmail && isPassword)} onClick={onSubmit}>
        {authData === 'signup-button' ? '회원가입' : '로그인'}
      </button>
    </form>
  );
};

export default SignForm;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
