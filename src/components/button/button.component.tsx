import React from "react";
import { Icon, IconNames } from "../icon";
import { joinClass } from "../../helpers";
import styles from "./button.module.scss";

export enum ButtonTypes {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export enum ButtonPresets {
  primary = "primary",
  secondary = "secondary",
  link = "link",
}

export enum ButtonIconAlignments {
  left = "left",
  right = "right",
}

type ButtonProps = {
  label?: string;
  icon?: IconNames;
  onClick?: () => void;
  type?: ButtonTypes;
  disabled?: boolean;
  preset?: ButtonPresets;
  iconAlignment?: ButtonIconAlignments;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  type,
  disabled,
  preset = ButtonPresets.primary,
  iconAlignment = ButtonIconAlignments.left,
}) => {
  const buttonClassNamesByPreset = {
    [ButtonPresets.primary]: "button__primary",
    [ButtonPresets.secondary]: "button__secondary",
    [ButtonPresets.link]: "button__link",
  };

  const buttonClassNamesByIconAlignment = {
    [ButtonIconAlignments.left]: "button__iconLeft",
    [ButtonIconAlignments.right]: "button__iconRight",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={joinClass(
        styles.button,
        disabled && styles["button__disabled"],
        styles[buttonClassNamesByIconAlignment[iconAlignment]],
        styles[buttonClassNamesByPreset[preset]]
      )}
    >
      {icon && <Icon className={styles.icon} name={icon} />}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};
