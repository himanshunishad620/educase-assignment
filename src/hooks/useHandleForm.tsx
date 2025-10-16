import { useState } from "react";

type Props = {
  [key: string]: string | number | boolean;
};

export default function useHandleForm<T extends Props>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const resetForm = () => {
    setValues(initialValues);
  };
  const allFilled = Object.values(values).every(
    (value) => value !== "" && value !== null && value !== undefined
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return { values, allFilled, handleChange, resetForm };
}
