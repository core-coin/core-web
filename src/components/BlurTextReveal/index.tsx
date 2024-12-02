import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

interface IBlurTextRevealProps {
  sentence: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const BlurTextReveal = ({
  sentence,
  className,
  filter = true,
  duration = 0.4,
}: IBlurTextRevealProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const wordsArray = sentence.split(" ").filter((word) => word !== "");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.1),
        },
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              /* eslint-disable-next-line react/no-array-index-key */
              key={`${word}-${idx}`}
              className="opacity-0"
              style={{
                filter: filter ? "blur(24px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="text-lg font-thin leading-normal text-white/[66%]">
        {renderWords()}
      </div>
    </div>
  );
};
