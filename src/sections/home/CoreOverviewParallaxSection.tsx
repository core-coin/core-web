import { BlockchainTrilemmaSection } from "./BlockchainTrilemmaSection";
import { CoreCoinSection } from "./CoreCoinSection";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export const CoreOverviewParallaxSection = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative" ref={container}>
      <BlockchainTrilemmaSection scrollYProgress={scrollYProgress} />
      <CoreCoinSection />
    </div>
  );
};
