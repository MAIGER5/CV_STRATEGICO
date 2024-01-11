import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const ScrollToTop = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    navigate(location.pathname, {replace:true});
    window.scrollTo(0, 0);
  }, [location.pathname, navigate])
  return null;
}
