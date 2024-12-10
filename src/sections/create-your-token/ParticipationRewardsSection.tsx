import { Button } from "@src/components";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const ParticipationRewardsSection = () => (
  <div className="flex w-full justify-center bg-black py-[200px] max-lg:relative max-lg:p-8">
    <div className="flex w-full max-w-[1200px] flex-col gap-16">
      <div className="flex flex-1 flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="relative size-16">
            <img src="/images/participation-rewards.png" alt="" />
            <img
              className={clsx(
                styles["glowing-icon"],
                "absolute top-0 scale-110 blur-[5px]",
              )}
              src="/images/participation-rewards.png"
              alt=""
            />
          </div>
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-center max-lg:text-[32px]">
            Participation rewards - Core Coins
          </h3>
        </div>
        <p className="w-[900px] text-center text-[18px] font-regular leading-normal text-white max-lg:w-full max-lg:text-[15px]">
          <b>Core Coin (XCB)</b> is the native currency of the Core Blockchain.
          It processes all transactions and network fees and generates value
          based on an entire ecosystem of Dapps and real-world implementations.
          This facilitation of services creates a natural demand for the coin.
          So, as the ecosystem grows and expands, so does the value of the coin.
        </p>
        <div className="flex flex-row gap-6 max-lg:flex-col max-lg:items-center">
          <Button as="a" href="/" size="sm" className="px-8 py-3">
            Start mining
          </Button>
          <Button as="a" href="/" size="sm" className="px-8 py-3">
            Build and Develop
          </Button>
          <Button as="a" href="/" size="sm" className="px-8 py-3">
            Explore DeFi
          </Button>
          <Button as="a" href="/" size="sm" className="px-8 py-3">
            RWA and DePIN Solutions
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[18px] font-regular leading-normal tracking-normal text-white max-lg:text-sm">
            Be the change you want to see in the world
          </p>
          <p className="w-[600px] text-center text-sm font-regular leading-normal tracking-normal text-white/[66%] max-lg:w-full">
            So, if you wish to regain autonomy, rebuild outdated systems,
            participate in groundbreaking tech, and get rewarded for your
            participation, become a part of the Core Blockchain today.
          </p>
        </div>
      </div>
    </div>
  </div>
);
