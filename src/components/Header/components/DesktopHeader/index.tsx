import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@src/components";
import { MenuItem } from "..";
import { MENU_ITEMS } from "../../header.constants";
import clsx from "clsx";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function DesktopHeader() {
  const { scrollYProgress } = useScroll();
  const isScrolled = useRef<boolean>(false);
  const [isDocumentationPages, setIsDocumentationPages] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("/docs")) {
      setIsDocumentationPages(true);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current! - scrollYProgress.getPrevious()!;
    isScrolled.current = true;

    if (direction < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const handleDocumentationSearchClick = () => {
    const searchWrapper = document.querySelector(".search-wrapper>button");
    if (searchWrapper) {
      setTimeout(() => {
        (searchWrapper as HTMLButtonElement).click();
      }, 0);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.header
        className="fixed inset-x-0 top-0 z-40 flex justify-center bg-black/75 backdrop-blur-lg"
        initial={
          isScrolled.current
            ? { opacity: 1, translateY: -100 }
            : { opacity: 0, translateY: -20, scale: 1.1 }
        }
        animate={
          isScrolled.current
            ? {
                translateY: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
              }
            : { opacity: 1, translateY: 0, scale: 1 }
        }
        transition={
          isScrolled.current
            ? { type: "linear", duration: 0.4 }
            : { type: "spring", stiffness: 30 }
        }
      >
        <div
          className={clsx(
            "relative flex h-24 w-full max-w-screen-lg flex-row flex-nowrap items-center gap-2.5 border-b border-white/15 px-6",
            {
              "border-none": isDocumentationPages,
            },
          )}
        >
          <div className="w-[260px]">
            <a href="/">
              <img
                className="w-[90px] brightness-0 invert hover:brightness-100 hover:invert-0"
                src="/images/core-logo.svg"
                alt="Core Logo"
              />
            </a>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            <ul className="flex h-full items-stretch gap-6">
              {MENU_ITEMS.map((menuItem) => (
                <MenuItem
                  key={menuItem.title}
                  title={menuItem.title}
                  megaMenu={menuItem.megaMenu}
                />
              ))}
            </ul>
          </div>
          <div className="flex w-[260px] justify-end gap-6">
            {isDocumentationPages && (
              <div className="flex items-center justify-center">
                <button type="button" onClick={handleDocumentationSearchClick}>
                  <MagnifyingGlass width={20} className="text-[#424242]" />
                </button>
              </div>
            )}
            <Button as="a" href="/" size="xs">
              Get Started
            </Button>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
