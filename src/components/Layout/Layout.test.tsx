import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Given a Layout component", () => {
  describe("When instantiated with 'Hello' as a child and a button at the sidebar", () => {
    test("Then it should show the main app layout and said text", () => {
      const children = "Hello";
      const buttonText = "Click me";
      const button = <button>{buttonText}</button>;

      render(<Layout sidebar={[button]}>{children}</Layout>);

      const layout = [
        screen.getByText(children),
        screen.getByRole("button", { name: buttonText }),
      ];

      layout.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
