import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import handleSession from '../services/handleSession';

const useRouteProtection = (sessionItem: string, to: string) => {
  const navigate = useNavigate();
  const itemFound = handleSession().getItem(sessionItem);

  useEffect(() => {
    if (itemFound !== 'true') {
      navigate(to);
    }
  }, [itemFound, to, navigate]);
};

export default useRouteProtection;
