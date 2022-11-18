import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./theme/index.scss";
import UiContextProvider from "./store/UiContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import FallbackError from "./components/FallbackError/FallbackError";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={FallbackError}>
      <BrowserRouter>
        <UiContextProvider>
          <App />
        </UiContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
