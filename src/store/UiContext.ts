import { createContext } from 'react';

export type UiStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

export type IUiContext = {
  status: UiStatus;
  message: string;
  setUiStatus: React.Dispatch<React.SetStateAction<IUiContext>>;
};

export const UiContext = createContext<IUiContext>({} as IUiContext);
