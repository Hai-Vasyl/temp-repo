import React, { useState } from "react";
import styles from "./auth.module.scss";
import { Form } from "./components";

export const AuthPage = () => {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
};
