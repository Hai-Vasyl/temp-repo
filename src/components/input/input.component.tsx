import React, { useState } from "react";
import styles from "./input.module.scss";
import { joinClass } from "../../helpers";

export enum InputTypes {
  text = "text",
  email = "email",
  password = "password",
}

type InputProps = {
  label: string;
  type?: InputTypes;
  name: string;
  value?: string;
  error?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  onChange: (name: string, value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = InputTypes.text,
  name,
  value: defaultValue = "",
  required = false,
  minLength,
  maxLength,
  error: defaultError,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(defaultError);

  console.log(error);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(name, value);
    setError("");
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={joinClass(
          styles.input,
          !!error?.length && styles.input__error
        )}
        type={type}
        required={required}
        name={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChangeInput}
      />
      <div className={styles.error}>{error}</div>
    </div>
  );
};
