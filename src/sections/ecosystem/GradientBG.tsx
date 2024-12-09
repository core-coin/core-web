import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export const GradientBG = () => {
  const { scrollYProgress } = useScroll();
  const [isFooterReached, setIsFooterReached] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrolledToBottom = latest >= 0.8;
    setIsFooterReached(scrolledToBottom);
  });

  return (
    <div
      className={clsx(
        "pointer-events-none fixed inset-0 z-10 transition-all duration-500 max-lg:hidden",
        {
          "opacity-0": isFooterReached,
        },
      )}
    >
      <div className="absolute bottom-[-581px] right-10 h-[682px] w-[811px] rounded-full bg-brand blur-[100px]" />
      <div className="absolute bottom-[-210px] left-24 h-[300px] w-[690px] rounded-full bg-[#636363] blur-[100px]" />
    </div>
  );
};
