import { BlurTextReveal, Button, SectionTitle } from "@src/components";
import clsx from "clsx";
import styles from "./styles.module.scss";

const CircleItem = ({ hasLogo = false }: { hasLogo?: boolean }) => (
  <span className="flex size-[80px] items-center justify-center rounded-full bg-[radial-gradient(126%_86%_at_84.8%_0%,#474747_0%,rgb(0,0,0)_100%)] shadow-[inset_0_0_15px_#ffffff1a,inset_0_2px_4px_#ffffff59]">
    {hasLogo && (
      <img
        src="/images/corepass-gray.svg"
        alt="CorePass Logo"
        className="size-[42px]"
      />
    )}
  </span>
);

export const CreateYourOwnSection = () => {
  return (
    <>
      <div className="flex w-full justify-center bg-black py-[100px] max-lg:p-8">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-16">
          <div className="flex flex-1 flex-col items-center gap-5">
            <SectionTitle title="one standard. unlimited freedom" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
              Create Your Own CBC Token
            </h3>
            <BlurTextReveal
              className="w-[680px] text-center text-lg text-white max-lg:w-full max-lg:text-[15px]"
              sentence="Core Blockchain also gives you the power to create your own tokens by developing smart contracts on the Core Blockchain and converting real-life assets into CBC Tokens."
            />
            <BlurTextReveal
              className="w-[680px] text-center text-sm font-regular leading-normal text-white/[50%] max-lg:w-full"
              sentence="CBC is a versatile token standard that allows you to create, split, distribute, and manage real-life assets in a tamper-proof environment. But CBC is not just used for tokenization of real-world assets. It is also a suitable standard for developers who wish to create their own purely digital currencies."
            />
          </div>
          <div className="relative flex h-[170px] w-full flex-row items-center">
            <div className="flex flex-1 gap-5 overflow-x-hidden gradient-mask">
              <div className="flex animate-scroll-x gap-5 whitespace-nowrap opacity-60 will-change-transform animation-reverse">
                {Array.from({ length: 7 }).map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <CircleItem key={`circle-item-${i}`} />
                ))}
              </div>
              <div className="flex animate-scroll-x gap-5 whitespace-nowrap opacity-60 will-change-transform animation-reverse">
                {Array.from({ length: 7 }).map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <CircleItem key={`circle-item-duplicated-${i}`} />
                ))}
              </div>
            </div>
            <div className="absolute left-1/2 z-10 flex -translate-x-1/2 scale-[1.4] items-center justify-center">
              <div
                className={clsx(
                  styles["pulse"],
                  "relative size-[38px] scale-[2] overflow-hidden rounded-full bg-[radial-gradient(75%_50%_at_50%_100%,#292929_0%,#000_100%)]",
                )}
              >
                <div className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-80 shadow-[0_1px_10px_#c636ffb3,0_1px_6px_#8c45ff99] grayscale-[1]">
                  <div className={styles["pulse-magic"]}>
                    <div className="blur-[2px] grayscale-[1] magic-gradient-mask">
                      <video
                        src="/videos/magic.mp4"
                        loop
                        controls={false}
                        muted
                        playsInline
                        autoPlay
                      />
                    </div>
                  </div>
                </div>
                <div className="size-full bg-gradient-to-b from-[#00ff6f] to-[#009e45] mix-blend-overlay"></div>
              </div>
              <div className="absolute -z-10 size-[74px] animate-pulse rounded-full bg-brand/80 shadow-[inset_0_0_6px_3px_#fff6] will-change-transform animation-delay-500" />
              <div className="absolute -z-10 size-[74px] animate-pulse rounded-full bg-brand/80 shadow-[inset_0_0_6px_3px_#fff6] will-change-transform animation-delay-[1.2s]" />
              <div className="absolute -z-10 size-[74px] animate-pulse rounded-full bg-brand/80 shadow-[inset_0_0_6px_3px_#fff6] will-change-transform animation-delay-[1.7s]" />
            </div>
            <div className="flex flex-1 gap-5 overflow-x-hidden gradient-mask">
              <div className="flex animate-scroll-x gap-5 whitespace-nowrap opacity-60 will-change-transform animation-reverse">
                {Array.from({ length: 7 }).map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <CircleItem key={`circle-item-logo-${i}`} hasLogo />
                ))}
              </div>
              <div className="flex animate-scroll-x gap-5 whitespace-nowrap opacity-60 will-change-transform animation-reverse">
                {Array.from({ length: 7 }).map((_, i) => (
                  <CircleItem
                    // eslint-disable-next-line react/no-array-index-key
                    key={`circle-item-logo-duplicated-${i}`}
                    hasLogo
                  />
                ))}
              </div>
            </div>
          </div>
          <Button as="a" href="/" variant="secondary" size="lg">
            Create Your Token
          </Button>
        </div>
      </div>
    </>
  );
};
