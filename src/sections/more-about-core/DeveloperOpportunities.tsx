import { BlurTextReveal, Button } from "@src/components";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const DeveloperOpportunities = () => (
  <div className="flex w-full justify-center bg-black py-[200px] max-lg:relative max-lg:p-8">
    <div className="flex w-full max-w-[1200px] flex-col gap-16">
      <div className="flex flex-1 flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="relative size-16">
            <img src="/images/developer-opportunities.png" alt="" />
            <img
              className={clsx(
                styles["glowing-icon"],
                "absolute top-0 scale-110 blur-[5px]",
              )}
              src="/images/developer-opportunities.png"
              alt=""
            />
          </div>
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
            Developer Opportunities
          </h3>
        </div>
        <BlurTextReveal
          className="w-[900px] text-center leading-normal text-white max-lg:w-full max-lg:text-[15px]"
          sentence="Core Blockchain offers extensive documentation and support for developers, including access to the Ylem Smart Contract Compiler and the handy Foxar.Dev platform. Developers can create their own CBC tokens, draft Core Improvement Proposals (CIPs), and participate in the open-source community to enhance and expand the ecosystem."
        />
        <Button as="a" href="/" size="sm">
          Join the Core Blockchain Community
        </Button>
        <BlurTextReveal
          className="max-w-[600px] text-center text-sm font-regular leading-normal tracking-normal text-white/50 max-lg:w-full"
          sentence="Explore the many facets of the Core Blockchain, contribute to the community, and start building on the most advanced blockchain platform today."
        />
      </div>
    </div>
  </div>
);
