import "@src/styles/global.css";
import type { Props } from "@astrojs/starlight/props";
import { useEffect, useState } from "react";
import clsx from "clsx";

const TOC = ({
  items,
}: {
  items: NonNullable<Props["toc"]>["items"] | undefined;
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(
        ".sl-markdown-content h2, .sl-markdown-content h3, .sl-markdown-content h4",
      ),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveId(visibleEntry.target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 },
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return items?.map((item) => (
    <li key={item.text}>
      <a
        href={`#${item.slug}`}
        className={clsx(
          "relative block border-l-2 border-l-[#222] py-4 pl-[26px] font-regular",
          "before:absolute before:left-[-2px] before:top-0 before:h-full before:w-[2px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(0,255,111,0.5)_48.64%,rgba(255,255,255,0.1)_100%)] before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:left-[-5px] after:top-1/2 after:size-2 after:-translate-y-1/2 after:rounded-full after:border after:border-brand after:bg-black after:opacity-0 after:transition-opacity after:duration-300",
          {
            "before:opacity-100 after:opacity-100 text-brand":
              activeId === item.slug,
          },
        )}
      >
        {item.text}
      </a>
      {item.children.length > 0 && (
        <ul className="text-sm [&_a]:pl-10">
          <TOC items={item.children} />
        </ul>
      )}
    </li>
  ));
};

export const PageSidebar = (props: Props) => {
  return (
    <aside className="px-4 py-12">
      <span className="text-xs font-regular uppercase leading-normal tracking-[0.25em] text-white/[66%]">
        On this page
      </span>
      <ul className="mt-6 text-[16px] text-white/[66%]">
        <TOC items={props.toc?.items} />
      </ul>
    </aside>
  );
};
