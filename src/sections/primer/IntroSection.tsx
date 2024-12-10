import { SectionTitle } from "@src/components";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const IntroSection = () => (
  <section className="flex w-screen items-center justify-center pt-[160px] max-lg:h-auto max-lg:items-start max-lg:py-16">
    <div className="relative z-10 mx-auto flex size-full w-[1000px] max-w-screen-lg flex-col items-center justify-start gap-6 p-16 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <div className="relative size-[200px] shrink-0 max-lg:relative max-lg:flex max-lg:h-auto max-lg:w-full max-lg:flex-row-reverse max-lg:items-end max-lg:justify-center">
        <img
          className={clsx(
            styles["core-left"],
            "absolute left-[130px] top-1/2 z-10 w-[95px] will-change-transform max-lg:relative max-lg:left-0 max-lg:h-max max-lg:w-[143px]",
          )}
          src="/images/ecosystem/core-left.png"
          alt=""
        />
        <img
          className={clsx(
            styles["core-right"],
            "absolute bottom-0 left-0 z-10 w-[209px] will-change-transform max-lg:relative max-lg:right-0 max-lg:h-max max-lg:w-[71px]",
          )}
          src="/images/ecosystem/core-right.png"
          alt=""
        />
      </div>
      <div className="box-content flex w-full flex-col items-center gap-8 p-16 max-lg:w-full max-lg:items-center max-lg:p-8">
        <SectionTitle title="intro" />
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[80px] font-thin leading-[1.2em] -tracking-wider text-transparent max-lg:text-center max-lg:text-[32px]">
          10-minute primer
        </h3>
        <p className="text-center text-lg font-regular leading-normal text-white max-lg:text-center max-lg:text-sm">
          Over the last 2 decades, the internet has evolved from a sort of Wild
          West to an environment where a few key companies rule the system. In
          other words, it has become increasingly centralized.
        </p>
        <p className="text-center text-lg font-regular leading-normal text-white/[66%] max-lg:text-center max-lg:text-sm">
          Though this presents a sense of structure, it also means most users
          have to relinquish control over their online autonomy. But what
          happens when the companies who are in charge misuse their control, or,
          even worse, lose it?
        </p>
        <p className="text-center text-lg font-regular leading-normal text-white max-lg:text-center max-lg:text-sm">
          In January 2024, a data breach referred to as the &#34;mother of all
          breaches&#34; was discovered. Over 26 billion data records, including
          some from Twitter, Adobe, Canva, LinkedIn, and Dropbox, were stolen
          and published. No organization immediately claimed responsibility.
        </p>
      </div>
    </div>
  </section>
);
