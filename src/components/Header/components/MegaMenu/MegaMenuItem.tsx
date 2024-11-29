export interface IMegaMenuItemProps {
  link: string;
  icon: string;
  title: string;
  description: string;
}

export const MegaMenuItem = ({
  link,
  icon,
  title,
  description,
}: IMegaMenuItemProps) => {
  return (
    <a
      href={link}
      className="group flex flex-row gap-4 rounded-lg p-4 hover:bg-[linear-gradient(324deg,_rgba(255,255,255,0.03)_0%,_rgba(255,255,255,0.1)_100%)]"
    >
      <img src={icon} alt="" className="size-10" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-6 text-white">
          {title}
        </span>
        <p className="text-sm font-regular leading-6 text-white/[33%] transition-all duration-400 ease-cubic-menu group-hover:text-white/[66%]">
          {description}
        </p>
      </div>
    </a>
  );
};
