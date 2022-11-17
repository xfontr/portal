import { PropsWithChildren, useState } from "react";
import { IUiContext, UiContext } from "./UiContext";

export const UiInitialState: IUiContext = {
  status: "IDLE",
  message: "Loading...",
  setUiStatus: () => {},
};

const UiContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [uiStatus, setUiStatus] = useState<IUiContext>(UiInitialState);

  return (
    <UiContext.Provider
      value={{
        ...uiStatus,
        setUiStatus,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
