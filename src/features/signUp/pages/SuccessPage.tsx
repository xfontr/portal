import Button from "../../../components/Button/Button";
import session from "../../../configs/session";
import useSession from "../../../hooks/useSession";
import paths from "../../../routes/paths";

const SuccessPage = (): JSX.Element => {
  useSession(session.isAllowed(), paths.joinList);

  return (
    <Button to={paths.joinList} onClick={() => sessionStorage.clear()}>
      Add more people to the list
    </Button>
  );
};

export default SuccessPage;
