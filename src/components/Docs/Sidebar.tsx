import type { Props } from "@astrojs/starlight/props";
import clsx from "clsx";

const Sidebar = ({ sidebar }: Props) => {
  return (
    <aside className="flex w-[320px] flex-col gap-8 p-12">
      {sidebar.map((sidebarItem) => {
        if (sidebarItem.type === "group") {
          return (
            <div className="flex flex-col gap-2" key={sidebarItem.label}>
              <span className="rounded-lg bg-white/5 px-4 py-3 text-[16px] font-regular leading-normal text-white/[66%]">
                {sidebarItem.label}
              </span>
              <div className="flex flex-col">
                {sidebarItem.entries.map((item) => {
                  const Tag = item.type === "link" ? "a" : "span";
                  const isLink = item.type === "link";

                  return (
                    <Tag
                      href={isLink ? item.href : ""}
                      className={clsx(
                        "rounded-lg px-4 py-2 text-lg leading-normal text-white",
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

export default Sidebar;
