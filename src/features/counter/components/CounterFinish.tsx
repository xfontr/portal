import { Navigate } from "react-router-dom";
import session from "../../../configs/session";
import paths from "../../../routes/paths";
import handleSession from "../../../services/handleSession";

type CounterFinishProps = {
  limitDate: `${string}-${string}-${string}`;
};

const CounterFinish = ({ limitDate }: CounterFinishProps): JSX.Element => {
  handleSession().setItem(session.isEndDate, "true");

  return (
    <>
      {new Date().toDateString() === new Date(limitDate).toDateString() ? (
        <Navigate to={paths.counterEndDate} />
      ) : (
        <Navigate to={paths.counterIsOver} />
      )}
    </>
  );
};

export default CounterFinish;
