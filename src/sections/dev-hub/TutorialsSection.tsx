import { SectionTitle } from "@src/components";
import { motion } from "framer-motion";

export const TutorialsSection = () => (
  <section className="flex w-screen flex-col items-center justify-center gap-16 bg-[linear-gradient(180deg,#000000_0%,rgb(0,0,0)_35.495517490146405%,rgba(28,28,28,1)_100%)] py-[100px] max-lg:h-auto max-lg:items-start max-lg:px-4 max-lg:py-16">
    <div className="relative z-10 mx-auto flex w-[900px] max-w-full flex-col items-center justify-start gap-6 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <div className="box-content flex w-full flex-col items-center gap-5 px-16 max-lg:mt-8 max-lg:w-full max-lg:items-center max-lg:p-6">
        <motion.div
          initial={{ y: 10, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ amount: 0.8 }}
        >
          <SectionTitle title="tutorials" />
        </motion.div>
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-center max-lg:text-[32px]">
          Learn Core Development
        </h3>
        <p className="text-center text-lg font-regular leading-normal text-white/[66%] max-lg:text-center max-lg:text-[15px]">
          Dive into our comprehensive development resources. Learn, build, and
          scale faster with expert guidance, tools, and documentation tailored
          for developers at every level.
        </p>
      </div>
    </div>
    <div className="mx-auto flex w-[1200px] max-w-full flex-row gap-4 max-lg:flex-col">
      <div className="group relative flex h-[320px] flex-1 flex-col items-start justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
        <span className="relative rounded border border-white px-[11px] py-[5px] text-xs font-bold leading-normal text-white transition-all duration-400 group-hover:bg-white group-hover:text-black">
          6 Lessons
        </span>

        <h5 className="relative text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-white">
          Onchain program development
        </h5>
        <span className="text-sm font-regular leading-normal text-white/50">
          Learn into basics of how to interact with the Core blockchain.
        </span>
      </div>
      <div className="group relative flex h-[320px] flex-1 flex-col items-start justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
        <span className="relative rounded border border-white px-[11px] py-[5px] text-xs font-bold leading-normal text-white transition-all duration-400 group-hover:bg-white group-hover:text-black">
          6 Lessons
        </span>

        <h5 className="relative text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-white">
          Tokens and NFTs on Core
        </h5>
        <span className="text-sm font-regular leading-normal text-white/50">
          Learn into basics of how to interact with the Core blockchain.
        </span>
      </div>
      <div className="group relative flex h-[320px] flex-1 flex-col items-start justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_100%)] p-8 transition-all duration-400 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-400 hover:shadow-[black_0px_24px_40px_0px] hover:before:opacity-100 max-lg:flex-none">
        <span className="relative rounded border border-white px-[11px] py-[5px] text-xs font-bold leading-normal text-white transition-all duration-400 group-hover:bg-white group-hover:text-black">
          6 Lessons
        </span>

        <h5 className="relative text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-white">
          Introduction to cryptography and Core clients
        </h5>
        <span className="text-sm font-regular leading-normal text-white/50">
          Learn into basics of how to interact with the Core blockchain.
        </span>
      </div>
    </div>
  </section>
);
