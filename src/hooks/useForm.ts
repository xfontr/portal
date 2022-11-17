import { ChangeEvent, useState } from 'react';

export type ValuesState = Record<string, string>;

const useForm = (initialState: ValuesState) => {
  const [values, setValues] = useState<ValuesState>(initialState);

  const handleChange = ({
    currentTarget: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [id]: value });
  };

  return { values, handleChange };
};

export default useForm;
