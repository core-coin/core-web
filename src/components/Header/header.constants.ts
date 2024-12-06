import type { IMenuItemProps } from "./components";

export const MENU_ITEMS: IMenuItemProps[] = [
  {
    title: "Discover",
    megaMenu: {
      title: "Discover core blockchain",
      menuItems: [
        {
          type: "primary",
          icon: "/images/ecosystem.png",
          backgroundImage: "/images/ecosystem-bg.png",
          title: "Ecosystem",
          description: "Interconnected network driving project growth",
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
          description: "Explore the heart of Core Blockchain's infrastructure.",
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
    },
  },
  {
    title: "Develop",
    megaMenu: {
      title: "Discover core blockchain",
      wrapperClassname: "w-[860px]",
      menuItems: [
        {
          type: "primary",
          icon: "/images/get-started.png",
          backgroundImage: "/images/get-started-bg.png",
          title: "Get Started",
          description: "Interconnected network driving project growth",
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
    },
  },
  {
    title: "Participate",
    megaMenu: {
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
    },
  },
];
