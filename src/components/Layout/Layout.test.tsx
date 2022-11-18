import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import SignForm from "../../features/signUp/components/SignForm/SignForm";
import UiContextProvider from "../../store/UiContextProvider";
import { Layout } from "./Layout";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (element: ReactNode, node: HTMLElement) => element,
}));

describe("Given a Layout component", () => {
  describe("When instantiated with 'Hello' as a child and a button at the sidebar", () => {
    test("Then it should show the main app layout and said text", () => {
      const children = "Hello";

      render(
        <BrowserRouter>
          <UiContextProvider>
            <Layout sidebar={[SignForm]}>{children}</Layout>
          </UiContextProvider>
        </BrowserRouter>
      );

      const layout = [
        screen.getByText(children),
        screen.getByTestId("sign-form"),
      ];

      layout.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
