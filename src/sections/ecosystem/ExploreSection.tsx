import { BlurTextReveal, Button, SectionTitle } from "@src/components";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { ECOSYSTEM_ITEMS } from "@src/constants";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const CATEGORIES = [
  "all",
  "payments & transactions",
  "data & security",
  "blockchain development",
  "trading",
  "wallets & mining",
  "community",
  "blockchain explorers",
];

const EcosystemCard = ({
  logo,
  category,
  title,
  description,
  link,
}: {
  logo: string;
  category: string;
  title: string;
  description: string;
  link: string;
}) => (
  <div className="flex flex-col gap-12 rounded-2xl border border-white/10 p-12 backdrop-blur-lg">
    <div className="flex items-start justify-between">
      <img src={logo} alt={title} className="size-16" />
      <span className="rounded-full border border-white/20 bg-white/0 px-3 py-2 text-[9px] font-medium uppercase leading-none tracking-[0.25em] text-white/50 transition-all">
        {category}
      </span>
    </div>
    <div className="flex flex-col gap-4">
      <BlurTextReveal
        className="text-[26px] font-regular leading-[1.4em] tracking-[-0.04em] text-white"
        sentence={title}
      />
      <div className="flex flex-row items-end gap-8">
        <BlurTextReveal
          className="flex-1 text-sm font-regular leading-normal text-white/50"
          sentence={description}
        />
        <Button as="a" href={link} variant="bordered">
          Try Out
        </Button>
      </div>
    </div>
  </div>
);

const CategoryItem = ({
  title,
  isSelected,
  onClick,
}: {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    className={clsx(
      twMerge(
        "rounded border border-transparent bg-white/10 px-6 py-2 text-xs font-regular uppercase leading-normal tracking-[0.25em] text-white/50 transition-all hover:border-white/20 hover:bg-white/20",
        isSelected &&
          "border-brand/[66%] bg-brand/20 hover:border-brand hover:bg-brand/[33%] text-brand",
      ),
    )}
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

export const ExploreSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredEcosystemItems = useMemo(() => {
    if (selectedCategory === "all") return ECOSYSTEM_ITEMS;

    return ECOSYSTEM_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex w-full justify-center bg-black py-16 max-lg:p-4">
      <div className="flex w-full max-w-screen-lg flex-col gap-10">
        <div className="flex flex-col items-center gap-5">
          <SectionTitle title="explore" />
          <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-center text-[56px] font-thin leading-[1.2] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
            Core Blockchain Ecosystem
          </h3>
          <p className="text-lg font-regular leading-normal text-white/[66%] max-lg:text-[15px]">
            So, what can you try out and what’s still in the oven?
          </p>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-10 p-16 max-lg:p-0">
          <div className="mx-auto flex w-[70%] flex-wrap justify-center gap-4">
            {CATEGORIES.map((category) => (
              <CategoryItem
                key={category}
                title={category}
                isSelected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              key={`ecosystem-wrapper-${selectedCategory}`}
            >
              <div className="grid grid-cols-2 flex-wrap gap-8">
                {filteredEcosystemItems.map((ecosystemItem) => (
                  <EcosystemCard
                    key={ecosystemItem.title}
                    logo={ecosystemItem.logo}
                    category={ecosystemItem.category}
                    title={ecosystemItem.title}
                    description={ecosystemItem.description}
                    link={ecosystemItem.link}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mx-auto flex w-[70%] flex-col items-center gap-4 py-[200px]">
          <div className="relative flex flex-col items-center gap-5">
            <span className="absolute text-sm font-regular uppercase leading-[1.7em] tracking-[0.5em] text-[#adb1b8]">
              contribute to the future
            </span>
            <span
              className={clsx(
                styles["glowing-text"],
                "text-sm font-regular uppercase leading-[1.7em] tracking-[0.5em] text-[#EDEEF0]",
              )}
            >
              contribute to the future
            </span>
          </div>
          <h6 className="text-center text-[56px] font-thin leading-[1.2em] tracking-[-0.03em]">
            You, too, can contribute to the future of the Core Blockchain by
            developing projects using our developer platform
          </h6>
          <Button as="a" href="/" variant="primary" className="mt-6" size="lg">
            Start Building
          </Button>
        </div>
      </div>
    </div>
  );
};
