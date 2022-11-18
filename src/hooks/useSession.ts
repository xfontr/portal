import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useSession = (sessionItem: string | null, to: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionItem !== 'true') {
      navigate(to);
    }
  }, [sessionItem, to, navigate]);
};

export default useSession;
