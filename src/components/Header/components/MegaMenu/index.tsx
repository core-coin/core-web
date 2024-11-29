import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";
import { type IMegaMenuItemProps, MegaMenuItem } from "./MegaMenuItem";

type SecondaryMenuItem = {
  type: "secondary";
} & IMegaMenuItemProps;

type PrimaryMenuItem = {
  type: "primary";
  backgroundImage: string;
} & IMegaMenuItemProps;

type MegaMenuItems = PrimaryMenuItem | SecondaryMenuItem;

export interface IMegaMenu {
  title: string;
  menuItems: MegaMenuItems[];
  wrapperClassname?: string;
}

interface IMegaMenuProps extends IMegaMenu {
  position: { x: number; y: number };
  onEnter?: () => void;
  onExit?: () => void;
}

export const MegaMenu = ({
  position,
  onEnter,
  onExit,
  title,
  menuItems,
  wrapperClassname,
}: IMegaMenuProps) => {
  const primaryMenuItem = menuItems.find(
    (menuItem) => menuItem.type === "primary",
  );
  const secondaryMenuItems = menuItems.filter(
    (menuItem) => menuItem.type === "secondary",
  );

  return (
    <motion.div
      exit={{ opacity: 0, translateX: "-50%", translateY: "24px" }}
      initial={{ opacity: 0, translateX: "-50%", translateY: "24px" }}
      animate={{ opacity: 1, translateX: "-50%", translateY: "16px" }}
      className={clsx(
        styles["mega-menu"],
        twMerge(
          "w-[680px] fixed z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-black/75 shadow-black/5 backdrop-blur-xl",
          wrapperClassname,
        ),
      )}
      style={{
        top: position.y,
        left: position.x,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
    >
      <div
        className={clsx(
          styles["mega-menu__header"],
          "border-b border-white/10 p-6 text-[9px] uppercase text-white/[33%]",
        )}
      >
        {title}
      </div>
      <div className="flex gap-6 p-8">
        {primaryMenuItem && (
          <div className="group relative min-h-[300px] w-[300px] shrink-0 overflow-hidden rounded-lg border border-white/0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.10)_0%,_rgba(255,255,255,0.05)_100%)] transition-all duration-400 ease-cubic-menu hover:border-white/15 hover:bg-[linear-gradient(0deg,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0.07)_100%)]">
            <a href={primaryMenuItem.link}>
              <img
                className="transition-transform duration-400 ease-cubic-menu group-hover:-translate-y-1.5 group-hover:translate-x-1.5"
                src={primaryMenuItem.backgroundImage}
                alt=" "
              />
              <div className="absolute bottom-0 w-full p-8">
                <img
                  className="size-10"
                  src={primaryMenuItem.icon}
                  alt={primaryMenuItem.title}
                />
                <span className="mt-4 block text-xl font-medium leading-6 text-white">
                  {primaryMenuItem.title}
                </span>
                <p className="mt-1 text-sm font-regular leading-6 text-white/[33%]">
                  {primaryMenuItem.description}
                </p>
              </div>
            </a>
          </div>
        )}
        <div className="flex w-full flex-col justify-center gap-6">
          {secondaryMenuItems.map((menuItem: SecondaryMenuItem) => (
            <MegaMenuItem
              key={menuItem.title}
              title={menuItem.title}
              description={menuItem.description}
              icon={menuItem.icon}
              link={menuItem.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
