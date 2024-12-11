import { Button, SectionTitle } from "@src/components";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const IntroSection = () => (
  <section className="flex h-screen w-screen items-center justify-center max-lg:h-auto max-lg:items-start max-lg:py-16">
    <div className="relative mx-auto flex size-full w-full max-w-screen-lg flex-row items-center justify-start max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <div className="box-content flex w-3/5 flex-col items-start gap-6 p-16 max-lg:mt-8 max-lg:w-full max-lg:items-center max-lg:p-0">
        <motion.div
          initial={{ y: 10, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ amount: 0.8 }}
        >
          <SectionTitle title="solutions" />
        </motion.div>
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[80px] font-thin leading-[1.2em] -tracking-wider text-transparent max-lg:text-center max-lg:text-[32px]">
          Our DePIN <br /> and RWA Solutions
        </h3>
        <Button
          as="a"
          href="/"
          variant="secondary"
          size="lg"
          className="mt-8 max-lg:mt-2"
        >
          Explore
        </Button>
      </div>
      <div className="absolute right-[-5vw] w-[55%] max-w-[900px] shrink-0 max-lg:relative max-lg:right-0 max-lg:mx-auto max-lg:mt-4 max-lg:flex max-lg:h-auto max-lg:w-3/4 max-lg:flex-row-reverse max-lg:items-end max-lg:justify-center">
        <img
          className={clsx(styles["depin-image"], "w-full")}
          src="/images/depin-intro.png"
          alt=""
        />
      </div>
    </div>
  </section>
);
