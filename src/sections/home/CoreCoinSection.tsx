import { BlurTextReveal, Button, SectionTitle } from "@src/components";

export const CoreCoinSection = () => (
  <div className="sticky top-[200px] flex w-full justify-center bg-black py-[196px]">
    <div className="flex w-full max-w-[1200px] gap-[150px]">
      <div className="relative flex flex-1 flex-col items-start gap-[240px]">
        <div className="flex flex-1 flex-col items-start gap-14">
          <div className="flex flex-col items-start gap-5">
            <SectionTitle title="CORE COIN" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03rem] text-transparent">
              The Coin Behind It All
            </h3>
            <BlurTextReveal
              className="text-lg font-regular leading-normal text-white/[66%]"
              sentence="XCB is the native currency of the Core Blockchain, and it processes all of the blockchain’s hash transactions and network fees. XCB generates value based on an entire ecosystem of Dapps and real-world implementations, and this creates a natural demand for the coin. You can acquire XCB by mining it or trading it."
            />
          </div>
          <Button as="a" href="/" size="lg">
            Learn More
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-start gap-14">
          <div className="flex flex-col items-start gap-5">
            <SectionTitle title="MINING ALGORITM" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03rem] text-transparent">
              Start Mining XCB
            </h3>
            <BlurTextReveal
              className="text-lg font-regular leading-normal text-white/[66%]"
              sentence="Core Blockchain’s improved mining algorithm, Proof-of-Distributed-Efficiency (or simply PoDE), enables the mining of XCB on regular CPUs and even small IoT devices."
            />
            <BlurTextReveal
              className="text-sm font-regular leading-normal text-white/[50%]"
              sentence="This cuts the energy consumption of our miners and addresses environmental concerns. So, lead by example, and dampen the negative effects of mining on our planet with a 0% net carbon impact blockchain."
            />
          </div>
          <Button as="a" href="/" size="lg" variant="secondary">
            Start Mining
          </Button>
        </div>
      </div>
      <div className="sticky top-[160px] flex h-[650px] flex-1 flex-col items-start gap-16 bg-white/5">
        Spline model will be placed here.
      </div>
    </div>
  </div>
);