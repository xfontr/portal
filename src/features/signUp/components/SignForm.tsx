import { SyntheticEvent, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import useForm from "../../../hooks/useForm";
import useUsers from "../hooks/useUsers";
import { Users } from "../types/Users";

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

    console.log("User added");
  };

  return (
    <div data-testid="sign-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="you@mail.schwarz"
          onChange={handleChange}
        />
        <Button>Add me to the list</Button>
      </form>
    </div>
  );
};

export default SignForm;
