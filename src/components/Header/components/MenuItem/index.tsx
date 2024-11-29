import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { MegaMenu } from "@src/components/Header/components";
import { Portal } from "@src/components";
import { type MouseEvent, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface IMenuItemProps {
  title: string;
}

export const MenuItem = ({ title }: IMenuItemProps) => {
  const [menuPosition, setMenuPosition] = useState<{
    y: number;
    x: number;
  } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMegaMenuHovered = useRef<boolean>(false);

  const handleMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      y: rect.bottom,
      x: rect.left + rect.width / 2,
    });
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isMegaMenuHovered.current) {
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const handleMouseEnterMenu = () => {
    setIsMenuOpen(true);
    isMegaMenuHovered.current = true;
  };

  const handleMouseLeaveMenu = () => {
    setIsMenuOpen(false);
    isMegaMenuHovered.current = false;
  };

  return (
    <>
      <li
        className={clsx(
          styles["menu-item"],
          "group relative inline-flex cursor-pointer items-center gap-1 px-8 py-4 text-sm font-medium",
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
          {isMenuOpen && menuPosition && (
            <MegaMenu
              position={menuPosition}
              onEnter={handleMouseEnterMenu}
              onExit={handleMouseLeaveMenu}
              title="Discover core blockchain"
              menuItems={[
                {
                  type: "primary",
                  icon: "/images/depin.png",
                  backgroundImage: "/images/depin.avif",
                  title: "Ecosystem",
                  description: "Interconnected network driving project growth",
                  link: "",
                },
                {
                  type: "secondary",
                  icon: "/images/depin.png",
                  title: "DePIN & RWA Solutions",
                  description:
                    "Integrate real-world assets into Core's blockchain ecosystem.",
                  link: "",
                },
                {
                  type: "secondary",
                  icon: "/images/depin.png",
                  title: "DePIN & RWA Solutions",
                  description:
                    "Integrate real-world assets into Core's blockchain ecosystem.",
                  link: "",
                },
                {
                  type: "secondary",
                  icon: "/images/depin.png",
                  title: "DePIN & RWA Solutions",
                  description:
                    "Integrate real-world assets into Core's blockchain ecosystem.",
                  link: "",
                },
              ]}
            />
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
