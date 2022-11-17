import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import useForm from "../../../../hooks/useForm";
import paths from "../../../../routes/paths";
import { UiContext } from "../../../../store/UiContext";
import useUsers from "../../hooks/useUsers";
import { Users } from "../../types/Users";
import Errors from "../Errors/Errors";
import "./SignForm.scss";

const formInitialState = {
  email: "",
};

const SignForm = (): JSX.Element => {
  const { getUsers, signUser } = useUsers();
  const { values, handleChange } = useForm(formInitialState);
  const [users, setUsers] = useState<Users>();
  const [errors, setErrors] = useState<string[]>([]);
  const { setUiStatus } = useContext(UiContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, [getUsers]);

  const isFormValid = (input: string): boolean => {
    const regex = new RegExp("[a-z0-9]+@mail.schwarz");

    return regex.test(input);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    setErrors([]);

    const emailList = users?.map(({ email }) => email);

    if (emailList?.includes(values.email)) {
      setUiStatus((currentState) => ({
        ...currentState,
        status: "ERROR",
        message: "User already signed up",
      }));

      return;
    }

    if (!isFormValid(values.email)) {
      setErrors([
        "The email entered is not valid. Please make sure the domain is '@mail.schwarz'",
      ]);
      return;
    }

    await signUser({
      email: values.email,
    });

    sessionStorage.setItem("success", "true");
    navigate(paths.signSuccess);
  };

  return (
    <>
      <img
        src="img/xmas.png"
        alt="Girl smiling dressed up with christmas clothing"
        height={320}
        width={320}
      />

      <form
        onSubmit={handleSubmit}
        data-testid="sign-form"
        className="sign-form"
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="sign-form__email"
          type="text"
          placeholder="you@mail.schwarz"
          onChange={handleChange}
        />
        <Button>Add me to the list</Button>
      </form>

      <Errors {...{ errors }} />
    </>
  );
};

export default SignForm;
