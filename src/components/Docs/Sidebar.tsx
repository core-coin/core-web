import type { Props } from "@astrojs/starlight/props";
import clsx from "clsx";
import { isBrowser } from "@src/utils";
import { Copy } from "@phosphor-icons/react";

const sidebarTitleMap: Record<string, string> = {
  docs: "documentation",
  tutorials: "tutorials",
  guides: "guides",
};

export const Sidebar = ({ sidebar }: Props) => {
  const documentationBasePath =
    isBrowser() && window.location.pathname?.split("/")[1];

  return (
    <aside className="sticky top-10 flex w-[320px] flex-col gap-8 self-start p-12">
      {documentationBasePath && (
        <span className="text-xs font-regular uppercase leading-normal tracking-[0.25em] text-white/[66%]">
          {sidebarTitleMap[documentationBasePath]}
        </span>
      )}
      {sidebar.map((sidebarItem) => {
        if (sidebarItem.type === "group") {
          return (
            <div className="flex flex-col gap-2" key={sidebarItem.label}>
              <span className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-[16px] font-regular leading-normal text-white/[66%]">
                {sidebarItem.label}
                <Copy width={14} className="text-[#666]" />
              </span>
              <div className="flex flex-col">
                {sidebarItem.entries.map((item) => {
                  const Tag = item.type === "link" ? "a" : "span";
                  const isLink = item.type === "link";

                  return (
                    <Tag
                      href={isLink ? item.href : ""}
                      className={clsx(
                        "rounded-lg px-4 py-2 text-lg font-regular leading-normal text-white",
                        {
                          "bg-[#F5F2FF]/5": isLink && item.isCurrent,
                        },
                      )}
                      key={item.label}
                    >
                      {item.label}
                    </Tag>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <a
            href={sidebarItem.href}
            className={clsx(
              "rounded-lg px-4 py-2 text-lg leading-normal text-white",
              {
                "bg-[#F5F2FF]/5": sidebarItem.isCurrent,
              },
            )}
            key={sidebarItem.label}
          >
            {sidebarItem.label}
          </a>
        );
      })}
    </aside>
  );
};
