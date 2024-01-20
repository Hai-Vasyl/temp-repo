import React from "react";
import { joinClass } from "../../helpers";
import styles from "./icon.module.scss";

export enum IconNames {
  add = "add",
}

export enum IconSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

type IconProps = {
  name: IconNames;
  size?: IconSizes;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = IconSizes.medium,
  className,
}) => {
  const iconClassNamesBySize = {
    [IconSizes.small]: "icon__small",
    [IconSizes.medium]: "icon__medium",
    [IconSizes.large]: "icon__large",
  };

  return (
    <span
      className={joinClass(
        "material-symbols-outlined",
        styles.icon,
        styles[iconClassNamesBySize[size]],
        className
      )}
    >
      {name}
    </span>
  );
};
