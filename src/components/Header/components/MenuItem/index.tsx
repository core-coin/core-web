import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { MegaMenu } from "@src/components/Header/components";
import { Portal } from "@src/components";
import { type MouseEvent, useState } from "react";
import styles from "./styles.module.scss";

interface IMenuItemProps {
  title: string;
}

export const MenuItem = ({ title }: IMenuItemProps) => {
  const [menuPosition, setMenuPosition] = useState<{
    y: number;
    x: number;
  } | null>(null);

  const handleMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      y: rect.bottom,
      x: rect.left + rect.width / 2,
    });
  };

  const handleMouseLeave = () => {
    setMenuPosition(null);
  };

  return (
    <>
      <li
        className={clsx(
          styles["menu-item"],
          "group inline-flex cursor-pointer items-center gap-1 px-8 py-4 text-sm font-medium",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          className="box-content fill-gray-888 p-1 transition-all duration-400 ease-cubic-menu group-hover:-rotate-180 group-hover:fill-brand"
        />
      </li>

      <Portal>
        <AnimatePresence>
          {menuPosition && <MegaMenu position={menuPosition} />}
        </AnimatePresence>
      </Portal>
    </>
  );
};
