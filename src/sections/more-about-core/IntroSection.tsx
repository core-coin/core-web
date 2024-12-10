import { Button, SectionTitle } from "@src/components";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const IntroSection = () => (
  <section className="flex h-screen w-screen items-center justify-center max-lg:h-auto max-lg:items-start max-lg:py-16">
    <div className="relative z-10 flex size-full max-w-screen-lg flex-col items-end justify-center gap-6 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <div className="absolute left-0 h-full w-1/2 max-lg:relative max-lg:flex max-lg:h-auto max-lg:w-full max-lg:flex-row-reverse max-lg:items-end max-lg:justify-center">
        <img
          className={clsx(
            styles["core-left"],
            "absolute right-[130px] top-[20%] z-10 w-[458px] will-change-transform max-lg:relative max-lg:left-0 max-lg:h-max max-lg:w-[143px]",
          )}
          src="/images/ecosystem/core-left.png"
          alt=""
        />
        <img
          className={clsx(
            styles["core-right"],
            "absolute bottom-[2%] left-[40px] w-[307px] will-change-transform max-lg:relative max-lg:right-0 max-lg:h-max max-lg:w-[71px]",
          )}
          src="/images/ecosystem/core-right.png"
          alt=""
        />
      </div>
      <div className="flex w-3/5 flex-col items-start gap-6 p-16 max-lg:w-full max-lg:items-center max-lg:p-8">
        <SectionTitle title="about core" />
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[80px] font-thin leading-[1.2em] -tracking-wider text-transparent max-lg:text-center max-lg:text-[32px]">
          More about <br />
          Core Blockchain
        </h3>
        <p className="text-lg font-regular leading-normal text-white/[66%] max-lg:text-center max-lg:text-sm">
          In 2014, amidst global shifts and technological breakthroughs, Michael
          and Ockert Loubser, and Rastislav Vašička envisioned a revolution in
          decentralized technology. Today, Core Blockchain stands as a testament
          to their vision: the fastest, most secure, scalable, and affordable
          blockchain accessible to everyone, everywhere.
        </p>
        <Button as="a" href="/" size="lg" className="mt-8 max-lg:mt-3">
          Start Building
        </Button>
      </div>
    </div>
  </section>
);
