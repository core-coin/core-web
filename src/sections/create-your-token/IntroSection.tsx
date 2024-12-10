import { SectionTitle } from "@src/components";
import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export const IntroSection = () => {
  return (
    <section className="flex w-screen items-center justify-center pt-[160px] max-lg:h-auto max-lg:items-start max-lg:py-16">
      <div className="relative z-10 mx-auto flex size-full w-[1000px] max-w-screen-lg flex-col items-center justify-start gap-6 p-16 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
        <div className="relative size-[200px] shrink-0 max-lg:relative max-lg:flex max-lg:h-auto max-lg:w-full max-lg:flex-row-reverse max-lg:items-end max-lg:justify-center">
          <img
            className={clsx(
              styles["core-left"],
              "absolute left-[130px] top-1/2 z-10 w-[95px] will-change-transform max-lg:relative max-lg:left-[-80px] max-lg:h-max max-lg:w-[143px]",
            )}
            src="/images/ecosystem/core-left.png"
            alt=""
          />
          <img
            className={clsx(
              styles["core-right"],
              "absolute bottom-0 left-0 z-10 w-[209px] will-change-transform max-lg:relative max-lg:bottom-[-30px] max-lg:left-[130px] max-lg:h-max max-lg:w-[71px]",
            )}
            src="/images/ecosystem/core-right.png"
            alt=""
          />
        </div>
        <div className="box-content flex w-full flex-col items-center gap-8 p-16 max-lg:mt-8 max-lg:w-full max-lg:items-center max-lg:p-0">
          <motion.div
            initial={{ y: 10, scale: 0.8, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ amount: 0.8 }}
          >
            <SectionTitle title="intro" />
          </motion.div>
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[80px] font-thin leading-[1.2em] -tracking-wider text-transparent max-lg:text-center max-lg:text-[32px]">
            Create your token
          </h3>
          <p className="text-center text-lg font-regular leading-normal text-white max-lg:text-center max-lg:text-sm">
            Core Blockchain gives you the power to create your own tokens by
            developing smart contracts on the Core Blockchain and converting
            real-life assets into CBC Tokens. CBC is a versatile token standard
            that allows you to create, split, distribute, and manage real-life
            assets in a tamper-proof environment. However, CBC is not just used
            for the tokenization of real-world assets. It is also a suitable
            standard for developers who wish to create purely digital
            currencies.
          </p>
        </div>
      </div>
    </section>
  );
};
