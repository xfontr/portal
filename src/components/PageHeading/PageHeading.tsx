import PageInformation from "../../types/PageInformation";

type PageHeadingProps = {
  heading: PageInformation;
};

const PageHeading = ({
  heading: { title, subtitle },
}: PageHeadingProps): JSX.Element => (
  <section className="heading">
    <h1 className="heading__title">{title.toUpperCase()}</h1>
    <span className="heading__subtitle">{subtitle}</span>
  </section>
);

export default PageHeading;
