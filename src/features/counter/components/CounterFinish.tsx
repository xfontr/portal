import { Navigate } from "react-router-dom";
import paths from "../../../routes/paths";

type CounterFinishProps = {
  limitDate: `${string}-${string}-${string}`;
};

const CounterFinish = ({ limitDate }: CounterFinishProps): JSX.Element => {
  sessionStorage.setItem("isEndDate", "true");

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
