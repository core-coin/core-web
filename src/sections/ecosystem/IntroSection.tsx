import { Button, BlurTextReveal, SectionTitle } from "@src/components";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const IntroSection = () => (
  <section className="flex h-screen w-screen items-center justify-center">
    <div className="relative z-10 flex size-full max-w-screen-lg flex-col items-start justify-center gap-6">
      <div className="flex w-3/5 flex-col items-start gap-6 p-16">
        <SectionTitle title="ecosystem" />
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[80px] font-thin leading-[1.2em] -tracking-wider text-transparent max-lg:text-[32px]">
          What’s possible <br />
          with Core Blockchain
        </h3>
        <p className="text-lg font-regular leading-normal text-white/[66%] max-lg:text-[15px]">
          Core Blockchain supports and encourages the development of
          applications and technology that seek to shake up the status quo. Its
          extensive and robust security features, along with its DePIN-centric
          architecture, make it a great choice for forward-thinking apps and
          developers looking to restructure outdated systems and
          infrastructures.
        </p>
        <Button as="a" href="/" size="lg" className="mt-8">
          Start Building
        </Button>
      </div>
      <div className="absolute right-0 h-full w-1/2">
        <img
          className={clsx(
            styles["core-left"],
            "absolute left-[110px] top-[19%] z-10 w-[458px] will-change-transform",
          )}
          src="/images/ecosystem/core-left.png"
          alt=""
        />
        <img
          className={clsx(
            styles["core-right"],
            "absolute bottom-[2%] right-[-30px] w-[307px] will-change-transform",
          )}
          src="/images/ecosystem/core-right.png"
          alt=""
        />
      </div>
    </div>
  </section>
);
