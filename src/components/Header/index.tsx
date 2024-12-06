import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { MenuItem } from "./components";
import { Button } from "..";
import { useRef, useState } from "react";

export function Header() {
  const { scrollYProgress } = useScroll();
  const isScrolled = useRef<boolean>(false);

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current! - scrollYProgress.getPrevious()!;
    isScrolled.current = true;

    if (direction < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        className="fixed inset-x-0 z-40 flex justify-center bg-black/75 backdrop-blur-lg"
        initial={
          isScrolled.current
            ? { opacity: 1, translateY: -100 }
            : { opacity: 0, translateY: -20, scale: 1.1 }
        }
        animate={
          isScrolled.current
            ? {
                translateY: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
              }
            : { opacity: 1, translateY: 0, scale: 1 }
        }
        transition={
          isScrolled.current
            ? { type: "linear", duration: 0.4 }
            : { type: "spring", stiffness: 30 }
        }
      >
        <div className="relative flex h-24 w-full max-w-[1400px] flex-row flex-nowrap items-center gap-2.5 border-b border-white/15 px-6">
          <div className="w-[260px]">
            <a href="/">
              <img
                className="w-[90px] brightness-0 invert hover:brightness-100 hover:invert-0"
                src="/images/core-logo.svg"
                alt="Core Logo"
              />
            </a>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            <ul className="flex h-full items-stretch gap-6">
              <MenuItem
                title="Discover"
                megaMenu={{
                  title: "Discover core blockchain",
                  menuItems: [
                    {
                      type: "primary",
                      icon: "/images/ecosystem.png",
                      backgroundImage: "/images/ecosystem-bg.png",
                      title: "Ecosystem",
                      description:
                        "Interconnected network driving project growth",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/depin.png",
                      title: "DePIN & RWA Solutions",
                      description:
                        "Integrate real-world assets into Core's blockchain ecosystem.",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/about.png",
                      title: "More about CORE Blockchain",
                      description:
                        "Explore the heart of Core Blockchain's infrastructure.",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/10minute.png",
                      title: "10 Minute Primer",
                      description:
                        "Learn the essentials of Core Blockchain in 10 minutes or less.",
                      link: "",
                    },
                  ],
                }}
              />
              <MenuItem
                title="Develop"
                megaMenu={{
                  title: "Discover core blockchain",
                  wrapperClassname: "w-[860px]",
                  menuItems: [
                    {
                      type: "primary",
                      icon: "/images/get-started.png",
                      backgroundImage: "/images/get-started-bg.png",
                      title: "Get Started",
                      description:
                        "Interconnected network driving project growth",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/devhub.png",
                      title: "Dev HUB",
                      description:
                        "Explore all necessary documentation for Core Blockchain development.",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/dev-toolkit.png",
                      title: "Dev Toolkit",
                      description:
                        "Equip yourself with the essential tools you'll need to build on the Core Blockchain.",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/create-token.png",
                      title: "Create Your Token",
                      description:
                        "Convert real-world assets into tokens or create fully digital tokens on the Core Blockchain.",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/cip.png",
                      title: "CIP",
                      description:
                        "Propose and set norms and standards for the Core platform.",
                      link: "",
                    },
                  ],
                }}
              />
              <MenuItem
                title="Participate"
                megaMenu={{
                  title: "Discover core blockchain",
                  menuItems: [
                    {
                      type: "primary",
                      icon: "/images/get-core-coin.png",
                      backgroundImage: "/images/get-core-coin-bg.png",
                      title: "Get Core Coin",
                      description:
                        "Learn how you can obtain Core Blockchain's native currency -- XCB",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/start-mining.png",
                      title: "Start Mining",
                      description:
                        "Put your computer to work and start earning XCB rewards.",
                      link: "",
                    },
                    {
                      type: "secondary",
                      icon: "/images/community.png",
                      title: "Community",
                      description:
                        "Tune into the latest & greatest news about Core Blockchain.",
                      link: "",
                    },
                  ],
                }}
              />
            </ul>
          </div>
          <div className="flex w-[260px] justify-end">
            <Button as="a" href="/">
              Get Started
            </Button>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
