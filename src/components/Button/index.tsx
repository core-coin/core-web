import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { twMerge } from "tailwind-merge";

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
  hasIcon?: boolean;
};

type ButtonProps = CommonButtonProps & (ButtonAsAnchor | ButtonAsButton);

export const Button = ({
                         children,
                         className,
                         as,
                         size = "sm",
                         variant = "primary",
                         hasIcon,
                         ...rest
                       }: ButtonProps) => {
  const sizeClasses = {
    sm: "px-12 py-3 text-xs h-12",
    lg: "px-[60px] py-4 text-sm h-16",
  };

  const commonClasses = clsx(
    twMerge(
      styles.btn,
      "relative overflow-hidden rounded font-bold leading-loose flex items-center",
      sizeClasses[size],
      className,
      hasIcon && [
        "size-[38px] p-0 flex justify-center items-center !border-white/[10%]",
      ],
    ),
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
