import { Button, SectionTitle, SplineLoader } from "@src/components";
import clsx from "clsx";

export const IntroSection = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <SplineLoader
        className="pointer-events-none absolute inset-0 opacity-80"
        scene="/models/home-intro.splinecode"
      />
      <div className="z-10 flex w-full max-w-screen-lg flex-col items-center justify-center gap-6 max-lg:p-8">
        <SectionTitle title="core blockchain" variant="secondary" />
        <h3
          className={clsx(
            "text-[80px] font-thin leading-[1.2] -tracking-wider text-white max-lg:text-center max-lg:text-[32px]",
          )}
        >
          The Real-World Blockchain
        </h3>
        <p className="text-lg font-regular leading-6 text-white/[66%] max-lg:text-center max-lg:text-[15px]">
          Decentralized, secure, and scalable real-world solutions. A Layer-1
          Proof of Work Blockchain.
        </p>
        <div className="flex flex-row gap-8 p-8 max-lg:flex-col">
          <Button as="a" href="/" size="lg">
            Start Building
          </Button>
          <Button as="a" href="/" size="lg" variant="secondary">
            Explore CORE
          </Button>
        </div>
      </div>
    </section>
  );
};
