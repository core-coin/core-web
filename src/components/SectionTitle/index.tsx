import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ISectionTitleProps {
  title: string;
  variant?: "primary" | "secondary";
}

export const SectionTitle = ({
  title,
  variant = "primary",
}: ISectionTitleProps) => {
  const variantClasses = {
    primary:
      "bg-[linear-gradient(135deg,_rgba(38,38,38,1)_0%,_rgba(0,0,0,1)_100%)]",
    secondary:
      "bg-[linear-gradient(135deg,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.05)_100%)]",
  };

  const borderClasses = {
    primary:
      "flex rounded-full bg-[linear-gradient(135deg,_rgba(94,94,94,1)_0%,_rgba(23,23,23,1)_100%)] p-[1px]",
    secondary: "",
  };

  return (
    <span className={borderClasses[variant]}>
      <span
        className={clsx(
          twMerge(
            variantClasses[variant],
            "rounded-full px-5 py-3 font-regular uppercase tracking-[0.20rem] text-white text-xxs",
          ),
        )}
      >
        {title}
      </span>
    </span>
  );
};