import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMemo, useRef, useState } from "react";
import { Button } from "@src/components";
import Accordion from "@src/components/Accordion";
import { MENU_ITEMS } from "@src/components/Header/header.constants.ts";

interface IAccordionMenuItemProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const AccordionMenuItem = ({
  title,
  description,
  icon,
  link,
}: IAccordionMenuItemProps) => (
  <div className="flex flex-1">
    <a href={link} className="flex flex-1 justify-between py-6">
      <div className="flex flex-col gap-1">
        <span className="text-[16px] font-regular leading-normal text-white/[66%]">
          {title}
        </span>
        <p className="text-[16px] font-thin leading-[1.4em] text-white/[33%]">
          {description}
        </p>
      </div>
      <img src={icon} alt={title} className="size-10" />
    </a>
  </div>
);

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenHeight = useRef<number>();

  const handleToggleMenu = () => {
    screenHeight.current = window.innerHeight;
    setIsMenuOpen(!isMenuOpen);
  };

  const accordionItems = useMemo(() => {
    return MENU_ITEMS.map((menuItem) => {
      const accordionContent = menuItem.megaMenu.menuItems.map(
        (megaMenuItem) => {
          if (megaMenuItem.type === "secondary") {
            return (
              <AccordionMenuItem
                key={megaMenuItem.title}
                title={megaMenuItem.title}
                description={megaMenuItem.description}
                icon={megaMenuItem.icon}
                link={megaMenuItem.link}
              />
            );
          }
        },
      );

      return {
        title: menuItem.title,
        content: accordionContent,
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-40 flex flex-col overflow-hidden bg-black/25 backdrop-blur-xl transition-all duration-400 will-change-auto"
      style={{
        height: isMenuOpen ? `${screenHeight.current}px` : "72px",
      }}
    >
      <div className="flex h-[72px] shrink-0 items-center justify-between px-6">
        <a href="/">
          <img
            className="w-[90px] brightness-0 invert hover:brightness-100 hover:invert-0"
            src="/images/core-logo.svg"
            alt="Core Logo"
          />
        </a>
        <button
          type="button"
          className="appearance-none"
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? (
            <XMarkIcon width={24} height={24} />
          ) : (
            <Bars2Icon width={24} height={24} />
          )}
        </button>
      </div>
      <div className="p-6">
        <Button
          as="a"
          href="/"
          variant="primary"
          size="lg"
          className="justify-center"
        >
          Get Started
        </Button>
      </div>
      <div>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};
