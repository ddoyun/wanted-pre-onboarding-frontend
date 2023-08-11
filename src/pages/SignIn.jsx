import { React } from 'react';
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
        alert('로그인 성공!');
        navigate('/todo');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <SignForm handleSubmit={handleSubmit} authData="signin-button" />;
};

export default SignIn;
