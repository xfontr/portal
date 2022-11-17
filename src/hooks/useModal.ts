import { useContext, useEffect, useState } from 'react';
import { UiContext, UiStatus } from '../store/UiContext';

const modalTimeout = 1500;

const useModal = () => {
  const { status, message, setUiStatus } = useContext(UiContext);
  const [localStatus, setLocalStatus] = useState<UiStatus>(status);

  useEffect(() => {
    setLocalStatus(status);

    if (status === 'LOADING' || status === 'IDLE') {
      return;
    }

    setTimeout(() => {
      setLocalStatus('IDLE');
      setUiStatus((currentState) => ({
        ...currentState,
        status: 'IDLE',
        message: '',
      }));
    }, modalTimeout);
  }, [setUiStatus, status]);

  return [message, localStatus];
};

export default useModal;
