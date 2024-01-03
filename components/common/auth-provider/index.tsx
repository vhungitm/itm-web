'use client';

import Loading from '@/app/loading';
import { authActions } from '@/redux/auth-slice';
import { useAppDispatch } from '@/redux/store';
import { ReactNode, useEffect, useState } from 'react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    dispatch(authActions.setUser(user));
    setLoading(false);
  }, []);

  return <>{loading ? <Loading /> : children}</>;
};

export default AuthProvider;
