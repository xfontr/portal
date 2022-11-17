import { SyntheticEvent, useContext, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import useForm from "../../../hooks/useForm";
import { UiContext } from "../../../store/UiContext";
import useUsers from "../hooks/useUsers";
import { Users } from "../types/Users";
import "./SignForm.scss";

const formInitialState = {
  email: "",
};

const SignForm = (): JSX.Element => {
  const { getUsers, signUser } = useUsers();
  const { values, handleChange } = useForm(formInitialState);
  const [users, setUsers] = useState<Users>();
  const { setUiStatus } = useContext(UiContext);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, [getUsers]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const emailList = users?.map(({ email }) => email);

    if (emailList?.includes(values.email)) {
      setUiStatus((currentState) => ({
        ...currentState,
        status: "ERROR",
        message: "User already signed up",
      }));

      return;
    }

    await signUser({
      email: values.email,
    });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="sign-form" className="sign-form">
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
  );
};

export default SignForm;
