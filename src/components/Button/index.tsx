import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

type ButtonAsAnchor = {
  as: "a";
  href: string;
};

type ButtonAsButton = {
  as: "button";
  onClick: () => void;
};

type CommonButtonProps = {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "lg";
  variant?: "primary" | "secondary";
};

type ButtonProps = CommonButtonProps & (ButtonAsAnchor | ButtonAsButton);

export const Button = ({
  children,
  className,
  as,
  size = "sm",
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-12 py-3 text-xs h-12",
    lg: "px-[60px] py-4 text-sm h-16",
  };

  const commonClasses = clsx(
    styles.btn,
    "relative overflow-hidden rounded font-bold leading-loose",
    sizeClasses[size],
    className,
  );

  const Tag = as;

  return (
    <Tag
      {...rest}
      className={commonClasses}
      data-size={size}
      data-variant={variant}
    >
      {children}
    </Tag>
  );
};
