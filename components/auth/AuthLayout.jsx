import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
//import isLogin from '../../utils/isLogin';

const AuthLayout = () => {
  const navigate = useNavigate();
  const isLogin = window.localStorage.getItem('access_token');

  useEffect(() => {
    if (!isLogin) {
      navigate('/signin');
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
