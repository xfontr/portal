import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import paths from "../../../routes/paths";

const SuccessPage = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAllowed = sessionStorage.getItem("success");

    if (isAllowed !== "true") {
      navigate(paths.joinList);
    }
  }, [navigate]);

  return (
    <Button to={paths.joinList} onClick={() => sessionStorage.clear()}>
      Add more people to the list
    </Button>
  );
};

export default SuccessPage;
