import { SectionTitle } from "@src/components";
import { motion } from "framer-motion";

export const IntroSection = () => (
  <section className="flex w-screen flex-col items-center justify-center gap-16 bg-[linear-gradient(180deg,#000000_0%,rgb(0,0,0)_35.495517490146405%,rgba(28,28,28,1)_100%)] py-[200px] max-lg:h-auto max-lg:items-start max-lg:px-4 max-lg:py-16">
    <div className="relative z-10 mx-auto flex w-[900px] max-w-full flex-col items-center justify-start gap-6 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <motion.div
        className="box-content flex w-full flex-col items-center gap-5 px-16 max-lg:mt-8 max-lg:w-full max-lg:items-center max-lg:p-6"
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ y: 10, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ amount: 0.8 }}
        >
          <SectionTitle title="dev hub" />
        </motion.div>
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-center max-lg:text-[32px]">
          Developer Resources
        </h3>
        <p className="text-center text-lg font-regular leading-normal text-white/[66%] max-lg:text-center max-lg:text-[15px]">
          Dive into our comprehensive development resources. Learn, build, and
          scale faster with expert guidance, tools, and documentation tailored
          for developers at every level.
        </p>
      </motion.div>
    </div>
    <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-4">
      <motion.div
        className="flex flex-row gap-4 max-lg:flex-col"
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="group relative flex h-[240px] flex-1 flex-col items-start justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
          <span className="relative rounded border border-white px-[11px] py-[5px] text-xs font-bold leading-normal text-white transition-all duration-400 group-hover:bg-white group-hover:text-black">
            Docs
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="relative text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-white">
              Documentation
            </h5>
            <span className="text-sm font-regular leading-normal text-white/50">
              Explore in-depth technical documentation to understand the
              platform and its APIs.
            </span>
          </div>
        </div>
        <div className="group relative flex h-[240px] flex-1 flex-col items-start justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
          <span className="relative rounded border border-white px-[11px] py-[5px] text-xs font-bold leading-normal text-white transition-all duration-400 group-hover:bg-white group-hover:text-black">
            Learning
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="relative text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-white">
              Courses
            </h5>
            <span className="text-sm font-regular leading-normal text-white/50">
              Take step-by-step courses to master development on our platform.
            </span>
          </div>
        </div>
        <div className="group relative flex h-[240px] flex-1 flex-col items-start justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
          <span className="relative rounded border border-white px-[11px] py-[5px] text-xs font-bold leading-normal text-white transition-all duration-400 group-hover:bg-white group-hover:text-black">
            How-to
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="relative text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-white">
              Guides
            </h5>
            <span className="text-sm font-regular leading-normal text-white/50">
              Follow practical guides to solve common challenges and implement
              features.
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-row gap-4 max-lg:flex-col"
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="group relative flex flex-1 flex-col items-start justify-between gap-6 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
          <img src="/images/test-network.png" alt="" className="size-10" />
          <div className="flex flex-col gap-2">
            <h5 className="relative text-[26px] font-regular leading-[1.4em] tracking-[-0.04em] text-white/[66%] transition-colors group-hover:text-white">
              Create Node
            </h5>
            <span className="text-sm font-regular leading-normal text-white/50">
              Set up and manage your node to power your applications on the
              network
            </span>
          </div>
        </div>
        <div className="group relative flex flex-1 flex-col items-start justify-between gap-6 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
          <img src="/images/10minute.png" alt="" className="size-10" />
          <div className="flex flex-col gap-2">
            <h5 className="relative text-[26px] font-regular leading-[1.4em] tracking-[-0.04em] text-white/[66%] transition-colors group-hover:text-white">
              Terminology
            </h5>
            <span className="text-sm font-regular leading-normal text-white/50">
              Familiarize yourself with key terms and concepts to navigate the
              ecosystem
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
