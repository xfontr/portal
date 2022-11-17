import Button from "../components/Button/Button";
import paths from "../routes/paths";

const NotFoundPage = (): JSX.Element => (
  <Button to={paths.joinList}>Go back to the main page</Button>
);

export default NotFoundPage;
