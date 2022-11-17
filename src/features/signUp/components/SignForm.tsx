import { SyntheticEvent, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import useForm from "../../../hooks/useForm";
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

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, [getUsers]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const emailList = users?.map(({ email }) => email);

    if (emailList?.includes(values.email)) {
      throw new Error("User already signed up");
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
