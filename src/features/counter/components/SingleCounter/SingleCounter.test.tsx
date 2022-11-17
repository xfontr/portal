import { render, screen } from "@testing-library/react";
import SingleCounter from "./SingleCounter";

describe("Given a SingleCounter component", () => {
  describe("When instantiated with a count and a title", () => {
    test("Then it should display both values", () => {
      const count = 1;
      const title = "Days";

      render(<SingleCounter {...{ count, title }} />);

      const singleCounter = [
        screen.getByRole("heading", { name: title }),
        screen.getByText(count.toString()),
      ];

      singleCounter.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
