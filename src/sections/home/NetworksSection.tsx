import { Button, SectionTitle } from "@src/components";
import { motion } from "framer-motion";

interface INetworkItemProps {
  icon: string;
  title: string;
  description: string;
}

const networksData = [
  {
    icon: "/images/main-network.png",
    title: "Main Network",
    description:
      "The main ledger of the Core Blockchain. All transactions and smart contracts on this network are real, and their information is carried and verified by nodes.",
  },
  {
    icon: "/images/test-network.png",
    title: "Test Network",
    description:
      "The network where you can test the blockchain’s functionality. Smart contracts and transactions on this network are not valid or verified by nodes.",
  },
  {
    icon: "/images/enterprise-network.png",
    title: "Enterprise Network",
    description:
      "The perfect choice for organizations seeking tech-savvy solutions. Your own independent fork of the Core Blockchain, operating via a private network of nodes in a closed-loop system.",
  },
];

const NetworkItem = ({ icon, title, description }: INetworkItemProps) => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-row items-center">
      <img src={icon} alt={title} className="mr-4 w-12" />
      <span className="text-[32px] font-regular leading-[1.3em] tracking-[-0.03rem] text-white max-lg:text-2xl">
        {title}
      </span>
    </div>
    <p className="text-sm font-regular leading-normal tracking-normal text-[#949494]">
      {description}
    </p>
  </div>
);

export const NetworksSection = () => (
  <div className="flex w-full justify-center bg-black py-[196px] max-lg:p-8">
    <div className="relative flex w-full max-w-[1200px] gap-[200px] max-lg:flex-col max-lg:gap-16">
      <div className="sticky top-[200px] flex h-min flex-1 flex-col items-start gap-14 max-lg:relative max-lg:top-0">
        <SectionTitle title="core blockchain networks" />
        <h5 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[32px] font-regular leading-[1.3em] tracking-[-0.03em] text-transparent max-lg:text-2xl">
          Explore the different networks Core Blockchain offers, each tailored
          to meet specific needs – from genuine transactions to experimental
          testing and enterprise-level solutions.
        </h5>
        <Button as="a" href="/" variant="primary" size="lg">
          Explore
        </Button>
      </div>
      <motion.div className="flex flex-1 flex-col items-start gap-16">
        {networksData.map((networkItem, index) => (
          <>
            <NetworkItem
              key={networkItem.title}
              icon={networkItem.icon}
              title={networkItem.title}
              description={networkItem.description}
            />
            {index < networksData.length - 1 && (
              <span className="h-px w-full bg-white/10" />
            )}
          </>
        ))}
      </motion.div>
    </div>
  </div>
);
