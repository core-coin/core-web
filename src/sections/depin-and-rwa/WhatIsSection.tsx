import type { ReactNode } from "react";
import { BlurTextReveal, SplineLoader } from "@src/components";

interface ILeadingFeatureItemProps {
  title: string | ReactNode;
  subtitle: string;
  description: string;
  bg: string;
}

const LeadingFeatureItem = ({
  title,
  subtitle,
  description,
  bg,
}: ILeadingFeatureItemProps) => {
  return (
    <div className="bg-[linear-gradient(135deg,#121212 0%,rgba(0,0,0,.85) 52.702702702702695%,rgba(0,0,0,.65) 100%)] relative flex h-[480px] flex-1 overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl max-lg:h-[400px] max-lg:w-full max-lg:flex-none">
      <SplineLoader
        className="pointer-events-none absolute inset-0 flex items-center justify-end max-lg:flex [&>canvas]:!h-full [&>canvas]:!w-full [&>canvas]:object-cover"
        scene={bg}
      />
      <div className="absolute bottom-14 left-14 flex w-[55%] flex-col gap-5 max-lg:inset-x-8 max-lg:w-auto max-lg:gap-3">
        <span className="text-[13px] font-regular uppercase leading-none tracking-third text-white/50">
          {subtitle}
        </span>
        <span className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-transparent max-lg:text-2xl">
          {title}
        </span>
        <BlurTextReveal
          className="text-lg font-regular leading-normal text-white/[66%] max-lg:text-[15px]"
          sentence={description}
        />
      </div>
    </div>
  );
};

export const WhatIsSection = () => (
  <section className="flex w-screen items-center justify-center max-lg:h-auto max-lg:items-start max-lg:py-0">
    <div className="relative z-10 mx-auto flex size-full w-full max-w-screen-lg flex-row items-center justify-center gap-2.5 p-16 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0 max-lg:p-4">
      <LeadingFeatureItem
        title="What is Real-World Asset?"
        subtitle="RWA"
        description="Financial assets that are tokenized and represented on a blockchain. These can include a wide range of asset types, such as real estate, commodities, bonds, stocks, art, and even intellectual property. By tokenizing these assets, blockchain technology basically enables fractional ownership, increased liquidity, and easier transferability."
        bg="/models/real-assets.splinecode"
      />
      <LeadingFeatureItem
        title="What is DePIN?"
        subtitle="DEPIN"
        description="A Decentralized Physical Infrastructure Network (or DePIN) is an innovative approach to establishing physical networks through Web3 technology. DePIN leverages the full potential of blockchain technology to create a decentralized infrastructure model, where businesses and individuals can contribute to and benefit from the services of the infrastructure."
        bg="/models/real-connectivity.splinecode"
      />
    </div>
  </section>
);
