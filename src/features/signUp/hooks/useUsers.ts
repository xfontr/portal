import { useCallback } from 'react';
import environment from '../../../configs/environment';
import api from '../../../services/api/api';
import { User, Users } from '../types/Users';

const useUsers = () => {
  const getUsers = useCallback(async () => {
    try {
      const { data: users } = await api.get<Users>(environment.usersApiUrl);
      return users ?? [];
    } catch (error) {}
  }, []);

  const signUser = useCallback(async (user: Omit<User, 'id'>) => {
    try {
      await api.post(environment.usersApiUrl, user);
    } catch (error) {}
  }, []);

  return {
    getUsers,
    signUser,
  };
};

export default useUsers;
