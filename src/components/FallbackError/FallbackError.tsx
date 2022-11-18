import Button from "../Button/Button";
import paths from "../../routes/paths";
import PageHeading from "../PageHeading/PageHeading";

const FallbackError = (): JSX.Element => {
  const title = "Something went terribly wrong (500)";
  const subtitle = "Sorry, the app crashed. Please, try again :(";

  return (
    <>
      <PageHeading heading={{ ...{ title, subtitle } }} />
      <Button to={paths.joinList}>Try again</Button>
    </>
  );
};

export default FallbackError;
