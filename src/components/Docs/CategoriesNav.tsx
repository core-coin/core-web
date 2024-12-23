import {
  AcademicCapIcon,
  BookOpenIcon,
  CodeBracketIcon,
  HomeIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

const CATEGORIES = [
  {
    title: "documentation",
    icon: HomeIcon,
    link: "/",
  },
  {
    title: "tutorials",
    icon: AcademicCapIcon,
    link: "/",
  },
  {
    title: "guides",
    icon: BookOpenIcon,
    link: "/",
  },
  {
    title: "terminology",
    icon: UnderlineIcon,
    link: "/",
  },
  {
    title: "rpc api",
    icon: CodeBracketIcon,
    link: "/",
  },
];

export const CategoriesNav = () => {
  const activeCategory = "documentation";
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const isScrolled = useRef<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current! - scrollYProgress.getPrevious()!;
    isScrolled.current = true;

    if (direction < 0) {
      document.body.classList.add("has-category-nav");
      setVisible(true);
    } else {
      document.body.classList.remove("has-category-nav");
      setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        className="fixed inset-x-0 top-24 z-10 bg-black/75 pb-4 backdrop-blur-lg"
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
        <div className="mx-auto flex max-w-screen-lg gap-2 rounded-md border border-white/10 p-3">
          {CATEGORIES.map((category) => (
            <a
              key={category.title}
              href={category.link}
              className={clsx(
                "flex flex-1 flex-row items-center justify-center gap-2.5 rounded px-6 py-3 transition-colors duration-300 hover:bg-white/10",
                {
                  "group bg-white/10 border border-[#222] hover:bg-brand/20 hover:border-brand/[33%]":
                    activeCategory === category.title,
                },
              )}
            >
              <category.icon
                width={16}
                height={16}
                className="text-white/30 transition-colors duration-300 group-hover:text-brand"
              />
              <span className="text-xs uppercase leading-normal tracking-[0.25em] text-white/[66%] transition-colors duration-300 group-hover:text-brand">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
