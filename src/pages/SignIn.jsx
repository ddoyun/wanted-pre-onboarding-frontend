import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInApi } from '../api/api';
import SignForm from '../components/sign/SignForm';

const SignIn = () => {
  const navigate = useNavigate();

  // 로그인
  const handleSubmit = async (signInData) => {
    try {
      const res = await signInApi(signInData);
      if (res.status === 200) {
        window.localStorage.setItem('access_token', res.data.access_token);
      }
    } catch (error) {
      if (error.request.status === 404) {
        alert('해당 사용자가 존재하지 않습니다.');
      }
      console.error(error);
    } finally {
      navigate('/todo');
    }
  };

  return <SignForm handleSubmit={handleSubmit} authData="signin-button" />;
};

export default SignIn;
