import React, { PropsWithChildren } from "react";
import styles from "./wrapper.module.scss";

type WrapperProps = PropsWithChildren;

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
