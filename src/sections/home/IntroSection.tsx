import Spline from "@splinetool/react-spline";
import { Button, SectionTitle } from "@src/components";
import clsx from "clsx";

export const IntroSection = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <Spline
        className="absolute inset-0 opacity-80"
        scene="/models/home-intro.splinecode"
      />
      <div className="z-10 flex w-full max-w-[1400px] flex-col items-center justify-center gap-6">
        <SectionTitle title="core blockchain" variant="secondary" />
        <h3
          className={clsx(
            "text-[80px] font-thin leading-[1.2] tracking-[-0.25rem] text-white",
          )}
        >
          The Real-World Blockchain
        </h3>
        <p className="text-lg font-thin leading-6 text-white/[66%]">
          Decentralized, secure, and scalable real-world solutions. A Layer-1
          Proof of Work Blockchain.
        </p>
        <div className="flex flex-row gap-8 p-8">
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
