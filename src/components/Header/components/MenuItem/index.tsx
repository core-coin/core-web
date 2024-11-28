import { CaretDown } from "@phosphor-icons/react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface IMenuItemProps {
  title: string;
}

export const MenuItem = ({ title }: IMenuItemProps) => {
  return (
    <li
      className={clsx(
        styles["menu-item"],
        "group inline-flex cursor-pointer items-center gap-1 px-8 py-4 text-sm font-light",
      )}
    >
      <span className={clsx(styles["menu-mask"], "relative overflow-hidden")}>
        <span
          className={clsx(
            styles["menu-text"],
            styles["menu-text-normal"],
            "flex text-sm leading-none text-gray-888 transition-transform duration-400 ease-cubic-menu will-change-transform",
          )}
        >
          {title}
        </span>
        <span
          className={clsx(
            styles["menu-text"],
            styles["menu-text-hover"],
            "flex text-sm leading-none text-white transition-transform duration-400 ease-cubic-menu will-change-transform",
          )}
        >
          {title}
        </span>
      </span>
      <CaretDown
        size={16}
        className="fill-gray-888 transition-all duration-400 ease-cubic-menu group-hover:-rotate-180 group-hover:fill-brand"
      />
    </li>
  );
};
