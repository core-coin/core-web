import { BlurTextReveal, Button, SectionTitle } from "@src/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

const RevealItem = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const translateX = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, scale, translateX, rotateY }}
    >
      {children}
    </motion.div>
  );
};

export const ExploreSection = () => (
  <div className="flex w-full justify-center bg-black py-[196px]">
    <div className="relative flex w-full max-w-[1200px] gap-[120px]">
      <div className="sticky top-[200px] flex h-min w-[33%] flex-col items-start gap-14">
        <div className="flex flex-col items-start gap-5">
          <SectionTitle title="explore" />
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03rem] text-transparent">
            The Core Blockchain Ecosystem
          </h3>
          <BlurTextReveal
            className="text-lg font-thin leading-normal text-white/[66%]"
            sentence="From smart buildings, entire city infrastructures, and a wide array of decentralized applications powered by Core Blockchain, our network offers a way to break away from centralization and monitoring and move to a privacy-first, more democratized and transparent future."
          />
        </div>
        <Button as="a" href="/" size="lg">
          Explore
        </Button>
      </div>
      <motion.div className="flex flex-1 flex-col items-start gap-[120px]">
        <RevealItem className="flex w-full flex-col gap-4">
          <div className="relative h-[500px] w-full rounded-2xl bg-[linear-gradient(225deg,#252933_0%,rgb(26,26,26)_66.66655669341216%,rgb(18,18,18)_100%)]">
            <img
              src="/images/corepass.avif"
              alt="CorePass"
              className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2"
            />
            <img
              src="/images/corepass-logo.svg"
              alt="CorePass"
              className="absolute bottom-8 left-8 size-16"
            />
          </div>
          <div className="flex flex-col items-start gap-10 p-8">
            <div className="flex flex-col gap-4">
              <span className="block text-[13px] font-thin uppercase leading-none tracking-[0.33em] text-white/50">
                corepass
              </span>
              <span className="block text-[32px] font-thin leading-[1.3em] tracking-[-0.03em]">
                Step Into a Privacy-First Future
              </span>
              <p className="text-sm font-thin leading-normal text-white/50">
                CorePass is a decentralized digital ID & login app that gives
                you full control over your personal data, allowing you to choose
                how you share it and with whom. It is the world&#39;s most
                advanced and fully GDPR-compliant digital identity platform,
                with monetizable sharing of verified data on a need-to-know
                basis.
              </p>
            </div>
            <Button as="a" href="/" size="sm" variant="bordered">
              Get CorePass
            </Button>
          </div>
        </RevealItem>
        <RevealItem className="flex w-full flex-col gap-4">
          <div className="relative h-[500px] w-full rounded-2xl bg-[linear-gradient(225deg,#ffffff_0%,rgb(64,76,222)_34.23434420748874%,rgb(17,19,38)_100%)]">
            <img
              src="/images/ping-exchange.avif"
              alt="Ping Exchange"
              className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 scale-[1.07]"
            />
            <img
              src="/images/ping-logo.svg"
              alt="Ping Exchange"
              className="absolute bottom-8 left-8 size-16"
            />
          </div>
          <div className="flex flex-col items-start gap-10 p-8">
            <div className="flex flex-col gap-4">
              <span className="block text-[13px] font-thin uppercase leading-none tracking-[0.33em] text-white/50">
                ping exchange
              </span>
              <span className="block text-[32px] font-thin leading-[1.3em] tracking-[-0.03em]">
                The Exchange That Lets You Take Control
              </span>
              <p className="text-sm font-thin leading-normal text-white/50">
                Ping Exchange is a hybrid exchange with an unparalleled
                utilization of blockchain, a uniquely secure login, an
                innovative approach to user data. Ping Exchange became the first
                exchange to reward users for their KYC data. This approach
                ensures all users are fairly compensated for their data.
              </p>
            </div>
            <Button as="a" href="/" size="sm" variant="bordered">
              Get CorePass
            </Button>
          </div>
        </RevealItem>
        <RevealItem className="flex w-full flex-col gap-4">
          <div className="relative h-[500px] w-full rounded-2xl bg-[linear-gradient(225deg,#54db1f_0%,rgb(107,176,90)_22.7026587134009%,rgb(20,20,20)_100%)]">
            <img
              src="/images/xcb-holder.avif"
              alt="XCB Holder"
              className="absolute bottom-0 left-1/2 w-[90%] translate-x-[-46%]"
            />
            <img
              src="/images/xcb-holder-logo.png"
              alt="XCB Holder"
              className="absolute bottom-8 left-8 size-16"
            />
          </div>
          <div className="flex flex-col items-start gap-10 p-8">
            <div className="flex flex-col gap-4">
              <span className="block text-[13px] font-thin uppercase leading-none tracking-[0.33em] text-white/50">
                xcb holder
              </span>
              <span className="block text-[32px] font-thin leading-[1.3em] tracking-[-0.03em]">
                A Wallet Tailored to Your Needs
              </span>
              <p className="text-sm font-thin leading-normal text-white/50">
                XCB Hodler is a dedicated wallet exclusively designed for Core
                Coins, providing a simplified and efficient transaction
                experience tailored to the needs of miners. It ensures air-tight
                security and storage of your digital assets, while providing
                added conveniences of a mobile wallet.
              </p>
            </div>
            <Button as="a" href="/" size="sm" variant="bordered">
              Get CorePass
            </Button>
          </div>
        </RevealItem>
        <RevealItem className="flex h-[620px] w-full items-end rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#121212_0%,rgba(0,0,0,.85)_52.702702702702695%,rgba(0,0,0,.65)_100%)] backdrop-blur-lg">
          <div className="flex flex-col items-start p-16">
            <span className="block text-[13px] font-thin uppercase leading-none tracking-[0.33em] text-white/50">
              contribute to the ecosystem
            </span>
            <span className="mt-4 block text-[32px] font-thin leading-[1.3em] tracking-[-0.03em]">
              Can’t find anything that interests you?
            </span>
            <p className="my-8 text-sm font-thin leading-normal text-white/50">
              Core Blockchain fully supports its developers and contributors
              with tutorials, guides, manuals, and a full-fledged dev platform,
              called Foxar.
            </p>
            <Button as="a" href="/" size="sm" variant="bordered">
              Start Developing Today
            </Button>
          </div>
        </RevealItem>
      </motion.div>
    </div>
  </div>
);
