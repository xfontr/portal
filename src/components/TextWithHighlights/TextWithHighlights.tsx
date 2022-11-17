type TextWithHighlightsProps = {
  text: string;
  words: string[];
  className?: string;
};

const TextWithHighlights = ({
  text,
  words,
  className = "heading--highlight",
}: TextWithHighlightsProps): JSX.Element => (
  <>
    {text.split(" ").map((word, index) =>
      words.includes(word) ? (
        <span key={index} {...{ className }}>
          {word}{" "}
        </span>
      ) : (
        `${word} `
      )
    )}
  </>
);

export default TextWithHighlights;
