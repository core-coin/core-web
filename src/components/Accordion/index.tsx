import React, { type ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface AccordionItemProps {
  title: string;
  content: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.title}
          className="flex flex-1 flex-col gap-2.5 border-b border-white/10 last:border-b-0"
        >
          <button
            type="button"
            onClick={() => toggleAccordion(index)}
            className="flex flex-1 appearance-none items-center gap-4 px-6 py-8"
          >
            <span className="text-2xl font-thin leading-none text-white">
              {item.title}
            </span>
            <ArrowRightIcon
              width={24}
              height={24}
              className="text-white/[33%]"
            />
          </button>
          <motion.div
            initial="collapsed"
            animate={expanded === index ? "expanded" : "collapsed"}
            variants={{
              collapsed: { height: 0 },
              expanded: { height: "auto" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-6"
          >
            <div>{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
