import { BlurTextReveal, Button, SectionTitle } from "@src/components";
import { motion } from "framer-motion";

interface IStoreAssetMethodProps {
  icon: string;
  method: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const StoreAssetMethod = ({
  icon,
  method,
  title,
  description,
  buttonText,
  link,
}: IStoreAssetMethodProps) => {
  return (
    <div className="relative flex flex-1 flex-col items-start justify-between gap-8">
      <div className="flex flex-col">
        <img src={icon} alt={method} className="size-12" />
        <span className="mt-10">
          <span className="block text-[13px] font-regular uppercase leading-none tracking-[0.33em] text-white/50">
            {method}
          </span>
          <span className="mt-2 block text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] max-lg:text-2xl">
            {title}
          </span>
        </span>
        <p className="my-5 text-sm font-regular leading-normal text-white/50 max-lg:mb-0">
          {description}
        </p>
      </div>
      <Button as="a" href={link} variant="bordered">
        {buttonText}
      </Button>
    </div>
  );
};

export const StoreAssetsSection = () => {
  return (
    <>
      <motion.div className="flex w-full justify-center bg-black pb-[120px] pt-1 max-lg:px-8 max-lg:py-[100px]">
        <div className="flex w-full max-w-[1200px] flex-col gap-16">
          <div className="flex flex-1 flex-col items-start gap-5">
            <SectionTitle title="REAL-WORLD ASSETS" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
              Store Your Assets
            </h3>
            <BlurTextReveal
              className="max-lg:text-[15px]"
              sentence="To start mining Core Coins, you first need to find a safe place to store them. Core Blockchain utilizes the well-proven ICAN address format, which is like the crypto equivalent of IBAN. There are a couple of ways to store your assets securely and efficiently:"
            />
          </div>
          <div className="flex flex-row items-stretch gap-[72px] max-lg:flex-col max-lg:gap-6">
            <StoreAssetMethod
              icon="/images/store-corepass.png"
              method="corepass"
              title="The go-to option"
              description="An all-in-one mobile app where your funds are secured with a complex 24-word seed phrase, and transactions are executed at lightning-fast speeds."
              buttonText="Start using CorePass"
              link="/"
            />
            <span className="h-full w-px bg-white/10" />
            <StoreAssetMethod
              icon="/images/store-xcb-holder.png"
              method="xcb holder"
              title="A mobile wallet dedicated to XCB"
              description="After you’ve generated your UTC file or private key, you can choose to import them into the XCB Hodler App."
              buttonText="Get Started"
              link="/"
            />
            <span className="h-full w-px bg-white/10" />
            <StoreAssetMethod
              icon="/images/store-private-key.png"
              method="private key"
              title="For crypto veterans"
              description="You can generate a private key or UTC file that serves as a cold wallet for your hard-earned Core Coins. "
              buttonText="Generate a wallet"
              link="/"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
