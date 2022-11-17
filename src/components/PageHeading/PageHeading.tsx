import TextWithHighlights from "../TextWithHighlights/TextWithHighlights";
import setClass from "../../services/setClass/setClass";
import PageInformation from "../../types/PageInformation";
import "./PageHeading.scss";

type PageHeadingProps = {
  heading: PageInformation;
};

const PageHeading = ({
  heading: { title, subtitle, highlights, props },
}: PageHeadingProps): JSX.Element => (
  <section {...props} className={setClass("heading", props?.className)}>
    <h1 className="heading__title">
      {highlights ? (
        <TextWithHighlights
          text={title}
          words={highlights.words}
          className={highlights.className}
        />
      ) : (
        title
      )}
    </h1>
    <span className="heading__subtitle">{subtitle}</span>
  </section>
);

export default PageHeading;
