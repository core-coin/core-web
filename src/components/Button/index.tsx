import styles from "./styles.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";

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
};

type ButtonProps = CommonButtonProps & (ButtonAsAnchor | ButtonAsButton);

export const Button = ({ children, className, as, ...rest }: ButtonProps) => {
  const commonClasses = clsx(
    styles.btn,
    "relative overflow-hidden rounded px-12 py-3 text-xs font-bold leading-loose",
    className,
  );

  const Tag = as;

  return (
    <Tag {...rest} className={commonClasses}>
      {children}
    </Tag>
  );
};
