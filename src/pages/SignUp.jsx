import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../api/api';
import SignForm from '../components/sign/SignForm';

const SignUp = () => {
  const navigate = useNavigate();

  // 회원가입
  const handleSubmit = async (signUpData) => {
    try {
      const res = await signUpApi(signUpData);
      if (res.status === 201) {
        alert('회원가입 성공!');
        navigate('/signin');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <SignForm handleSubmit={handleSubmit} authData="signup-button" />;
};

export default SignUp;
