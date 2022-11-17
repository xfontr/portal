import { useCallback, useContext } from 'react';
import environment from '../../../configs/environment';
import api from '../../../services/api/api';
import { UiContext } from '../../../store/UiContext';
import { User, Users } from '../types/Users';

const useUsers = () => {
  const { setUiStatus } = useContext(UiContext);

  const getUsers = useCallback(async () => {
    try {
      const { data: users } = await api.get<Users>(environment.usersApiUrl);

      return users ?? [];
    } catch (error) {
      setUiStatus((currentState) => ({
        ...currentState,
        status: 'ERROR',
        message: "Couldn't load the users",
      }));
    }
  }, [setUiStatus]);

  const signUser = useCallback(
    async (user: Omit<User, 'id'>) => {
      setUiStatus((currentState) => ({
        ...currentState,
        status: 'LOADING',
        message: 'Signing you up...',
      }));

      try {
        await api.post(environment.usersApiUrl, user);

        setUiStatus((currentState) => ({
          ...currentState,
          status: 'SUCCESS',
          message: 'You have been signed up',
        }));
      } catch (error) {
        setUiStatus((currentState) => ({
          ...currentState,
          status: 'ERROR',
          message: 'It was not possible to sign you up due to an unknown error',
        }));
      }
    },
    [setUiStatus]
  );

  return {
    getUsers,
    signUser,
  };
};

export default useUsers;
