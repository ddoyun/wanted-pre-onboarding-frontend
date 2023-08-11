import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const navigate = useNavigate();
  const isLogin = window.localStorage.getItem('access_token');

  useEffect(() => {
    if (!isLogin) {
      navigate('/signin');
    }
  }, [isLogin, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
