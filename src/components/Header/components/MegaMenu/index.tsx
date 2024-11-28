import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface IMegaMenuProps {
  position: { x: number; y: number };
}

export const MegaMenu = ({ position }: IMegaMenuProps) => {
  return (
    <motion.div
      exit={{ opacity: 0, translateX: "-50%", translateY: "24px" }}
      initial={{ opacity: 0, translateX: "-50%", translateY: "24px" }}
      animate={{ opacity: 1, translateX: "-50%", translateY: "16px" }}
      className={clsx(
        styles["mega-menu"],
        "fixed z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-black/75 shadow-black/5 backdrop-blur-xl",
      )}
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <div
        className={clsx(
          styles["mega-menu__header"],
          "border-b border-white/10 p-6 text-[9px] uppercase text-white/[33%]",
        )}
      >
        Discover core blockchain
      </div>
      <div className="flex gap-6 p-8">
        <div className="min-h-[300px] w-[300px] shrink-0 overflow-hidden rounded-lg border border-white/0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.10)_0%,_rgba(255,255,255,0.05)_100%)] transition-all duration-400 ease-cubic-menu hover:border-white/15 hover:bg-[linear-gradient(0deg,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0.07)_100%)]">
          Hello world
        </div>
        <div className="w-full">menu items</div>
      </div>
    </motion.div>
  );
};
