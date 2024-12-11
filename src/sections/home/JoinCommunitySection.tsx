import { BlurTextReveal, SectionTitle } from "@src/components";

const logos = [
  "/images/logos/ting.svg",
  "/images/logos/akk.svg",
  "/images/logos/ping.svg",
  "/images/logos/coretoken.svg",
  "/images/logos/luna.svg",
  "/images/logos/wallmoney.svg",
  "/images/logos/corepass.svg",
];

export const JoinCommunitySection = () => {
  return (
    <>
      <div className="flex w-full justify-center bg-black py-[100px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-14">
          <div className="flex w-[980px] max-w-full flex-1 flex-col items-center gap-5 max-lg:w-3/4">
            <SectionTitle title="JOIN COMMUNITY" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
              Be the first to hear about the latest and greatest updates,
              features, and all the exciting happenings within the Core
              Blockchain ecosystem.
            </h3>
            <BlurTextReveal
              className="w-[680px] text-center text-lg text-white/[66%] max-lg:w-full max-lg:text-[15px]"
              sentence="Engage in discussions and shape the future of Core Blockchain."
            />
          </div>
          <div className="relative flex h-[170px] w-full flex-row items-center max-lg:h-20">
            <div className="flex gap-5 overflow-x-hidden gradient-mask">
              <div className="flex min-w-full shrink-0 animate-scroll-x gap-5 whitespace-nowrap will-change-transform">
                {logos.map((logo, i) => (
                  <img
                    className="flex"
                    src={logo}
                    alt=""
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={`logo-item-${i}`}
                  />
                ))}
              </div>
              <div className="flex min-w-full shrink-0 animate-scroll-x gap-5 whitespace-nowrap will-change-transform">
                {logos.map((logo, i) => (
                  <img
                    className="flex"
                    src={logo}
                    alt=""
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={`logo-item-duplicated-${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
