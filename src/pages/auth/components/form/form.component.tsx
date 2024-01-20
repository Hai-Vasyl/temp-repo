import React, { useState } from "react";
import styles from "./form.module.scss";
import {
  Button,
  ButtonPresets,
  ButtonTypes,
  Input,
  InputTypes,
} from "../../../../components";

enum AuthFormFields {
  username = "username",
  email = "email",
  password = "password",
}

export const Form = () => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [form, setForm] = useState({
    [AuthFormFields.username]: "",
    [AuthFormFields.email]: "",
    [AuthFormFields.password]: "",
  });

  const onChangeField = (name: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleRegisterUser = () => {
    console.log("Register user");
  };

  const handleLoginUser = () => {
    console.log("Login user");
  };

  const handleSubmitAuthForm = () => {
    return isRegisterForm ? handleRegisterUser() : handleLoginUser();
  };

  const handleChangeAuthForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmitAuthForm}>
      <div className={styles.title}>
        {isRegisterForm ? "Register" : "Login"}
      </div>
      <div className={styles.inputs}>
        {isRegisterForm && (
          <Input
            label="Username"
            name={AuthFormFields.username}
            onChange={onChangeField}
            error=""
            required
            maxLength={20}
          />
        )}
        <Input
          label="Email"
          name={AuthFormFields.email}
          onChange={onChangeField}
          error=""
          required
          type={InputTypes.email}
        />
        <Input
          label="Password"
          name={AuthFormFields.password}
          onChange={onChangeField}
          error="Some error"
          required
          maxLength={20}
          type={InputTypes.password}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          label={isRegisterForm ? "Register" : "Login"}
          preset={ButtonPresets.primary}
        />
        <Button
          onClick={handleChangeAuthForm}
          label={isRegisterForm ? "Login" : "Register"}
          preset={ButtonPresets.link}
          type={ButtonTypes.button}
        />
      </div>
    </form>
  );
};
