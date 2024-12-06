import { Button } from "@src/components";

export const BecomePartnerSection = () => (
  <div className="flex justify-center bg-black py-[100px]">
    <div className="flex w-full max-w-[1200px] gap-8 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.1)_0%,rgba(0,0,0,0)_100%)] p-16">
      <div className="flex flex-1 flex-col items-center gap-10 px-16 py-8">
        <div className="flex flex-col items-center gap-4">
          <span className="block text-[13px] font-thin uppercase leading-none tracking-[0.33em] text-white/50">
            enterprise solutions
          </span>
          <span className="text-center text-[32px] font-thin leading-[1.3em] tracking-[-0.03em] text-white">
            Enhance your business with a blockchain-powered ecosystem.
          </span>
        </div>
        <Button as="a" href="/" variant="bordered">
          Become a partner
        </Button>
      </div>
      <span className="h-full w-px bg-white/10" />
      <div className="flex flex-1 flex-col items-center gap-10 px-16 py-8">
        <div className="flex flex-col items-center gap-4">
          <span className="block text-[13px] font-thin uppercase leading-none tracking-[0.33em] text-white/50">
            booster program & dao
          </span>
          <span className="text-center text-[32px] font-thin leading-[1.3em] tracking-[-0.03em] text-white">
            Study our DAO structure and obtain a boost for your project.
          </span>
        </div>
        <Button as="a" href="/" variant="bordered">
          Boost Now
        </Button>
      </div>
    </div>
  </div>
);
