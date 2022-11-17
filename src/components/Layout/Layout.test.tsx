import { render, screen } from "@testing-library/react";
import SignForm from "../../features/signUp/components/SignForm/SignForm";
import { Layout } from "./Layout";

describe("Given a Layout component", () => {
  describe("When instantiated with 'Hello' as a child and a button at the sidebar", () => {
    test("Then it should show the main app layout and said text", () => {
      const children = "Hello";

      render(<Layout sidebar={[SignForm]}>{children}</Layout>);

      const layout = [
        screen.getByText(children),
        screen.getByTestId("sign-form"),
      ];

      layout.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
