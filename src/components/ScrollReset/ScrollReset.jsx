// ScrollReset.js
import { useEffect } from 'react';
import useRouter from '../../utils/useRouter';
import { Navigate } from 'react-router-dom';
const ScrollReset = () => {
  const { location } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, Navigate]);

  return null;
};

export default ScrollReset;
