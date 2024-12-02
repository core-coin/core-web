import { BlurTextReveal, Button, SectionTitle } from "@src/components";
import { Plus } from "@phosphor-icons/react";

interface ITrilemmaItemProps {
  title: string;
  description: string;
}

const TrilemmaItem = ({ title, description }: ITrilemmaItemProps) => (
  <div className="relative flex h-[402px] flex-1 rounded-2xl border border-white/[10%] backdrop-blur-lg">
    <div className="absolute inset-x-0 bottom-0 flex flex-row gap-10 p-8">
      <div className="flex flex-col gap-4">
        <span className="text-[26px] font-regular leading-[1.4em] tracking-[-0.04em]">
          {title}
        </span>
        <p className="text-sm font-regular leading-normal tracking-normal text-white/[50%]">
          {description}
        </p>
      </div>
      <div className="flex items-end">
        <Button as="button" variant="secondary" onClick={() => {}} hasIcon>
          <Plus width={14} height={14} />
        </Button>
      </div>
    </div>
  </div>
);

export const BlockchainTrilemmaSection = () => (
  <div className="flex w-full justify-center py-[100px]">
    <div className="flex w-full max-w-[1200px] flex-col gap-16">
      <div className="flex flex-1 flex-col items-center gap-5">
        <SectionTitle title="ACHIEVING PERFECT BALANCE" />
        <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03rem] text-transparent">
          The Blockchain Trilemma
        </h3>
        <BlurTextReveal
          className="w-[900px] text-center"
          sentence="The blockchain trilemma is the challenge of achieving
          decentralization, scalability, and security simultaneously, often
          requiring a compromise in one area to optimize the others. How does
          Core Blockchain achieve this?"
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <TrilemmaItem
          title="Scalability"
          description="Core Blockchain quickly distributes ledger information globally, even on internetless networks."
        />
        <TrilemmaItem
          title="Decentralization"
          description="An improved PoW mechanism, called PoDE ensures true decentralization."
        />
        <TrilemmaItem
          title="Security"
          description="The first blockchain to use the advanced ”Goldilocks” ED448 encryption method."
        />
      </div>
    </div>
  </div>
);
