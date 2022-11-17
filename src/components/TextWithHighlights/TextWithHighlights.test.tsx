import { render, screen } from "@testing-library/react";
import TextWithHighlights from "./TextWithHighlights";

describe("Given a TextWithHighglights component", () => {
  describe("When instantiated with a text, and a list of words", () => {
    test("Then it should display the passed text with highlighted words", () => {
      const text = "this is a test";
      const words = ["test"];
      const defaultClassName = "heading--highlight";

      render(<TextWithHighlights {...{ text, words }} />);

      const view = [screen.getByText("this is a"), screen.getByText(words[0])];

      view.forEach((node) => expect(node).toBeInTheDocument());
      expect(view[1].className).toBe(defaultClassName);
    });
  });
});
