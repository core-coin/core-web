import {
  AcademicCapIcon,
  BookOpenIcon,
  CodeBracketIcon,
  HomeIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

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

  return (
    <nav className="relative z-10 flex gap-2 rounded-md border border-white/10 p-3">
      {CATEGORIES.map((category) => (
        <a
          key={category.title}
          href={category.link}
          className={clsx(
            "group flex flex-1 flex-row items-center justify-center gap-2.5 rounded px-6 py-3 transition-colors duration-300 hover:bg-white/10",
            {
              "bg-white/10 border border-[#222] hover:bg-brand/20 hover:border-brand/[33%]":
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
    </nav>
  );
};
