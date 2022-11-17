import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./theme/index.scss";
import UiContextProvider from "./store/UiContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UiContextProvider>
        <App />
      </UiContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
