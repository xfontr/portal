import Button from "../../../components/Button/Button";
import session from "../../../configs/session";
import useRouteProtection from "../../../hooks/useRouteProtection";
import paths from "../../../routes/paths";
import handleSession from "../../../services/handleSession";

const SuccessPage = (): JSX.Element => {
  useRouteProtection(session.isAllowed, paths.joinList);

  return (
    <Button to={paths.joinList} onClick={() => handleSession().clearAll()}>
      Add more people to the list
    </Button>
  );
};

export default SuccessPage;
