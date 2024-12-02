import { Button, SectionTitle } from "@src/components";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface IMetricItemProps {
  value: string;
  title: string;
  valueColor: string;
}

const MetricItem = ({ value, title, valueColor }: IMetricItemProps) => (
  <div className="flex flex-col gap-3">
    <span
      className={clsx(
        twMerge(
          valueColor,
          "bg-clip-text text-[100px] font-thin tracking-[-0.02em] text-transparent leading-[1.2em]",
        ),
      )}
    >
      {value}
    </span>
    <span className="text-lg font-thin leading-normal text-white/[66%]">
      {title}
    </span>
  </div>
);

export const MetricsSection = () => (
  <div className="flex w-full justify-center py-[196px]">
    <div className="flex w-full max-w-[1200px] gap-[300px]">
      <div className="flex flex-1 flex-col items-start gap-14">
        <div className="flex flex-col items-start gap-5">
          <SectionTitle title="TRANSFORM THE REAL WORLD" />
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03rem] text-transparent">
            Be the change you want to see in the chain
          </h3>
          <p className="text-lg font-thin leading-normal text-white/[66%]">
            The Core Blockchain allows for the decentralized management of
            physical infrastructures (DePIN), tokenization and digital
            management of real-world assets (RWA), and the optimization of
            real-world processes for more efficient use (RWP).
          </p>
        </div>
        <Button as="a" href="/" variant="secondary" size="lg">
          Learn More
        </Button>
      </div>
      <div className="flex flex-1 flex-col items-start gap-16">
        <MetricItem
          value="7M+"
          title="Transactions"
          valueColor="bg-[linear-gradient(315deg,_rgb(0,117,51)_0%,_rgb(0,255,111)_100%)]"
        />
        <MetricItem
          value="51M+"
          title="Circulating Supply"
          valueColor="bg-[linear-gradient(315deg,_rgb(39,125,76)_0%,_rgb(82,255,157)_100%)]"
        />
        <MetricItem
          value="930M"
          title="Network Difficulty"
          valueColor="bg-[linear-gradient(315deg,_rgb(82,122,100)_0%,_rgb(171,255,207)_100%)]"
        />
        <MetricItem
          value="8k+"
          title="Active Wallets"
          valueColor="bg-[linear-gradient(315deg,_rgb(115,125,119)_0%,_rgb(237,255,245)_100%)]"
        />
      </div>
    </div>
  </div>
);
