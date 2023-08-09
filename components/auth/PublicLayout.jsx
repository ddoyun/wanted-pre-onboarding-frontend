import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const PublicLayout = () => {
  const navigate = useNavigate();
  const isLogin = window.localStorage.getItem('access_token');
  const { pathname } = useLocation();

  useEffect(() => {
    if (isLogin && (pathname === '/signup' || pathname === '/signin')) {
      navigate('/todo');
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
