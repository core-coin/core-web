export const DataRecordsSection = () => (
  <section className="mt-16 flex w-screen items-center justify-center max-lg:mt-0 max-lg:h-auto max-lg:items-start max-lg:py-0">
    <div className="relative z-10 mx-auto flex size-full w-[1000px] max-w-screen-lg flex-col items-center justify-start gap-16 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <div className="flex w-full max-w-[1200px] flex-col items-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.1)_0%,rgba(0,0,0,0)_100%)] p-16 max-lg:p-6">
        <span className="bg-[linear-gradient(135deg,rgb(255,255,255)_0%,rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-transparent max-lg:text-2xl">
          26 billion of your data records. Just like that.
        </span>
        <span className="bg-[linear-gradient(135deg,rgb(255,255,255)_0%,rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-transparent max-lg:text-2xl">
          So, how can Core Blockchain prevent this from happening in the future?
        </span>
      </div>
      <div className="flex flex-col gap-16 p-16 max-lg:mt-16">
        <div>
          <p className="text-sm font-regular leading-normal tracking-normal text-white/[66%]">
            Core Blockchain is a completely decentralized software solution that
            offers a platform for developers who wish to build projects that put
            the user back in control. These projects are often referred to as
            Decentralized Applications or DApps for short. In other words, the
            Core Blockchain is a platform for services controlled by you, the
            user. Not Google, not Facebook, but you.
          </p>
          <p className="mt-[20px] text-sm font-regular leading-normal tracking-normal text-white/[66%]">
            What’s more, Core Blockchain takes this one step further and even
            offers solutions to rebuild and decentralize real-life
            infrastructures, such as architecture infrastructures and even
            entire cities. We call these solutions Decentralized Physical
            Infrastructure Networks, or DePIN for short.
          </p>
        </div>
        <div className="flex flex-col items-start gap-8">
          <span className="bg-[linear-gradient(135deg,rgb(255,255,255)_0%,rgba(255,255,255,0.5)_100%)] bg-clip-text text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-transparent max-lg:text-2xl">
            How does this ecosystem work?
          </span>
          <p className="text-[18px] font-regular leading-normal tracking-normal text-white max-lg:text-sm">
            Blockchains are essentially databases made up of individual blocks
            carrying information. These blocks are arranged in a line, like a
            chain, and the information inside them is secured by
            near-impenetrable encryptions. Each new block is validated by miners
            who use their computers to solve complicated tasks that reward them
            with the native currency of the blockchain – this process is called
            Proof-of-Work. What makes blockchains truly decentralized is the
            fact that this information cannot be altered, not even by the
            original developers.
          </p>
          <p className="text-sm font-regular leading-normal tracking-normal text-white/[66%]">
            So, in short, information is stored inside blocks, blocks are
            validated by miners who receive rewards, and the whole chain is
            self-preserving and immutable, meaning it cannot be altered from the
            outside or the inside. This system of information is then used by
            developers to create decentralized applications and offer
            democratized services to users.
          </p>
        </div>
        <div className="flex flex-col items-start gap-8">
          <span className="bg-[linear-gradient(135deg,rgb(255,255,255)_0%,rgba(255,255,255,0.5)_100%)] bg-clip-text text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-transparent max-lg:text-2xl">
            What makes Core Blockchain special?
          </span>
          <p className="text-[18px] font-regular leading-normal tracking-normal text-white max-lg:text-sm">
            Many successful Blockchains, such as Bitcoin or Ethereum, already
            exist. So, what makes ours any different?
          </p>
          <div>
            <p className="text-sm font-regular leading-normal tracking-normal text-white/[66%]">
              Core Blockchain is the only blockchain that truly focuses on
              real-world solutions and their implementation. Our DePIN
              technology impacts not only the end user but also the real-life
              environment around them. In short, Core Blockchain users always
              remain in control of their assets and data, while enterprises
              facilitate a trustworthy, decentralized environment.
            </p>
            <p className="mt-[20px] text-sm font-regular leading-normal tracking-normal text-white/[66%]">
              Secondly, the encryption method Core uses is miles above other
              blockchains. The ED448 “Goldilocks” is the golden standard of
              encryption that combines maximum security with maximum efficiency,
              hence the name “Goldilocks.”
            </p>
            <p className="mt-[20px] text-sm font-regular leading-normal tracking-normal text-white/[66%]">
              Thirdly, while other blockchains are criticized for their
              environmentally unfriendly mining practices, Core Blockchain
              developed an improved algorithm called
              “Proof-of-Distributed-Efficiency.” It enables mining on small IoT
              devices and brings down our miners’ energy consumption and carbon
              footprint to a minimum, to be exact, it reduces it by X amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
