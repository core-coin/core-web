import {
  AssetsVideoLoader,
  BlurTextReveal,
  SectionTitle,
} from "@src/components";
import clsx from "clsx";
import type { ReactNode } from "react";

interface ILeadingFeatureItemProps {
  variant: "primary" | "secondary";
  title: string | ReactNode;
  subtitle: string;
  description: string;
  bg: string;
}

const LeadingFeatureItem = ({
  variant,
  title,
  subtitle,
  description,
  bg,
}: ILeadingFeatureItemProps) => {
  const variantClasses = {
    primary: "flex-1",
    secondary: "w-[480px]",
  };

  return (
    <div
      className={clsx(
        variantClasses[variant],
        "bg-[linear-gradient(135deg,#121212 0%,rgba(0,0,0,.85) 52.702702702702695%,rgba(0,0,0,.65) 100%)] relative flex h-[480px] overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl max-lg:h-[400px] max-lg:w-full max-lg:flex-none",
      )}
    >
      <AssetsVideoLoader
        className="pointer-events-none absolute inset-0 flex w-full items-center justify-end max-lg:flex [&>canvas]:!h-full [&>canvas]:!w-full [&>canvas]:object-cover"
        src={bg}
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

export const LeadingFeaturesSection = () => {
  return (
    <div className="flex w-full justify-center bg-black py-16 max-lg:p-4">
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-col items-center gap-5 p-12 max-lg:mb-8 max-lg:p-0">
          <SectionTitle title="real-world assets" />
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[56px] font-thin leading-[1.2] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
            What Makes Core Blockchain <br /> the Leading Real-World Blockchain?
          </h3>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col flex-wrap gap-2 py-8 max-lg:p-0">
          <div className="flex gap-2 max-lg:flex-wrap">
            <LeadingFeatureItem
              variant="primary"
              title={
                <>
                  Tokenize and Protect <br /> Real-World Assets
                </>
              }
              subtitle="REAL ASSETS"
              description="Transforming them into digital goods you can utilize, distribute, and protect. Anything real can have a tangible presence on our blockchain network."
              bg="/videos/real-assets.mp4"
            />
            <LeadingFeatureItem
              variant="secondary"
              title="Verify and Secure Identities"
              subtitle="REAL IDENTITIES"
              description="All interactions within the Core ecosystem are verified and transparent. You never have to second-guess the user you are interacting with."
              bg="/videos/real-identities.mp4"
            />
          </div>
          <div className="flex gap-2 max-lg:flex-wrap">
            <LeadingFeatureItem
              variant="secondary"
              title="Integrate and Build Transparent Systems"
              subtitle="REAL INFRASTRUCTURE"
              description="To improve the transparency and decentralization of your systems and processes. Developers can integrate our infrastructure or build their own on the blockchain."
              bg="/videos/real-infrastructure.mp4"
            />
            <LeadingFeatureItem
              variant="primary"
              title="Seamless Connectivity Without the Internet"
              subtitle="REAL CONNECTIVITY"
              description="The Core Ecosystem facilitates data transfers and streaming using the Lunaº Mesh network. With Luna, you’re able to stay completely connected without the internet. Even in the event of a disaster."
              bg="/videos/real-connectivity.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
