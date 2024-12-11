import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BlurTextReveal,
  Button,
  SectionTitle,
  SplineLoader,
} from "@src/components";

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

export const SolutionsSection = () => (
  <section className="flex w-screen items-center justify-center py-[300px] max-lg:h-auto max-lg:items-start max-lg:p-4 max-lg:pb-[300px]">
    <div className="relative z-10 mx-auto flex size-full w-full max-w-[1200px] flex-row items-start justify-start gap-[120px] max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-8">
      <div className="sticky top-[200px] flex h-min w-[33%] flex-col items-start gap-14 max-lg:relative max-lg:top-0 max-lg:w-full max-lg:items-center max-lg:gap-8 max-lg:p-8">
        <div className="flex flex-col items-start gap-8 max-lg:items-center">
          <div className="flex flex-col items-start gap-4 max-lg:items-center">
            <SectionTitle title="solution" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-center max-lg:text-[32px]">
              The Main Components That Make Our DePIN Solution Possible
            </h3>
          </div>
          <BlurTextReveal
            className="text-lg font-regular leading-normal text-white/[66%] max-lg:w-full max-lg:text-center max-lg:text-[15px]"
            sentence="DePIN Solutions developed on our network are built with the intent to change real-world infrastructures and outdated systems."
          />
        </div>
        <Button as="a" href="/" size="lg">
          Explore
        </Button>
      </div>
      <motion.div className="flex flex-1 flex-col items-start gap-[120px]">
        <RevealItem className="flex w-full flex-col-reverse gap-4">
          <div className="relative h-[500px] max-h-[360px] w-full rounded-2xl bg-[linear-gradient(225deg,#252933_0%,rgb(26,26,26)_66.66655669341216%,rgb(18,18,18)_100%)]">
            <img
              src="/images/corepass.avif"
              alt="CorePass"
              className="absolute bottom-0 left-1/2 w-[78%] -translate-x-1/2 max-lg:w-full"
            />
            <img
              src="/images/corepass-logo.svg"
              alt="CorePass"
              className="absolute bottom-8 left-8 size-16"
            />
          </div>
          <div className="flex flex-col items-start gap-10 p-8">
            <div className="flex flex-col gap-4">
              <span className="block text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] max-lg:text-2xl">
                Lunaº Mesh
              </span>
              <p className="text-sm font-regular leading-normal text-white/50">
                Lunaº Mesh is a decentralized, borderless network topology
                infrastructure of nodes connected directly, dynamically and
                non-hierarchically for interactive streaming of blockchain-based
                encrypted data. The main purpose of Lunaº Mesh is to facilitate
                internetless data streaming and transfer on the Core Blockchain
                network, as well as to provide a last-mile reach solution for
                ISP and connectivity infrastructure providers.
              </p>
            </div>
          </div>
        </RevealItem>
        <RevealItem className="flex w-full flex-col-reverse gap-4">
          <div className="relative h-[500px] max-h-[360px] w-full rounded-2xl bg-[linear-gradient(225deg,#ffffff_0%,rgb(64,76,222)_34.23434420748874%,rgb(17,19,38)_100%)]">
            <img
              src="/images/ping-exchange.avif"
              alt="Ping Exchange"
              className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 scale-125 max-lg:bottom-14 max-lg:w-full"
            />
            <img
              src="/images/ping-logo.svg"
              alt="Ping Exchange"
              className="absolute bottom-8 left-8 size-16"
            />
          </div>
          <div className="flex flex-col items-start gap-10 p-8">
            <div className="flex flex-col gap-4">
              <span className="block text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] max-lg:text-2xl">
                Core Blockchain
              </span>
              <p className="text-sm font-regular leading-normal text-white/50">
                Core Blockchain is a Layer-1 PoW Blockchain that provides
                decentralized, secure, and scalable real-world solutions that
                impact not only the blockchain&#39;s end users but also the
                real-world environment around them. It uses the ED448
                “Goldilocks” encryption method, which is the golden standard of
                encryption that combines maximum security with maximum
                efficiency, hence the name “Goldilocks.” To mitigate
                environmental risks, Core Blockchain developed an improved PoW
                algorithm called Proof of Distributed Efficiency (PoDE). It
                enables mining on small IoT devices and brings down our miners’
                energy consumption and carbon footprint to a minimum.
              </p>
            </div>
          </div>
        </RevealItem>
        <RevealItem className="flex w-full flex-col-reverse gap-4">
          <div className="relative h-[500px] max-h-[360px] w-full rounded-2xl bg-[linear-gradient(225deg,#ffffff_0%,rgb(64,76,222)_34.23434420748874%,rgb(17,19,38)_100%)]">
            <img
              src="/images/ping-exchange.avif"
              alt="Ping Exchange"
              className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 scale-125 max-lg:bottom-14 max-lg:w-full"
            />
            <img
              src="/images/ping-logo.svg"
              alt="Ping Exchange"
              className="absolute bottom-8 left-8 size-16"
            />
          </div>
          <div className="flex flex-col items-start gap-10 p-8">
            <div className="flex flex-col gap-4">
              <span className="block text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] max-lg:text-2xl">
                CorePass
              </span>
              <p className="text-sm font-regular leading-normal text-white/50">
                CorePass is a peer-to-peer decentralized digital ID & login app
                that allows you to digitize and utilize your government-issued
                documents. CorePass leverages digital identity attributes in an
                integrated, frictionless and multi-layered environment built on
                the Core Blockchain Network, making it possible to verify your
                data and use it to access applications/services that use
                CorePass. It is the world&#39;s most advanced and fully
                GDPR-compliant digital identity platform, with monetizable
                sharing of verified data on a need-to-know basis.
              </p>
            </div>
          </div>
        </RevealItem>
      </motion.div>
    </div>
  </section>
);
