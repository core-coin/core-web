import {
  BlurTextReveal,
  Button,
  type ModalRef,
  SectionTitle,
  SplineLoader,
} from "@src/components";
import { motion } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { type KeyboardEvent, useRef } from "react";
import Modal from "@src/components/Modal";

const advantagesModalContent = {
  pow: {
    title: "Scalability",
    subtitle:
      "Core Blockchain’s modular architecture is designed with scalability at its heart, addressing the blockchain trilemma by allowing the network to grow without being bogged down by congestion.",
    description: (
      <>
        With Ylem-based smart contracts and a flexible CBC-20 token standard,
        Core supports a diverse range of applications—from digital identity to
        stable token issuance—across decentralized finance and enterprise
        solutions.
        <br />
        <br />
        This flexibility means that as user demand increases, Core can adapt and
        expand, leveraging both on-chain and off-chain resources to meet the
        needs of high-throughput applications without compromising speed or
        decentralization.
        <br />
        <br />
        By implementing a system where components can scale independently, Core
        Blockchain effectively sidesteps the scalability issues that many
        blockchains face, positioning it as a robust platform for long-term
        growth.
      </>
    ),
  },
  pode: {
    title: "Decentralization",
    subtitle:
      "Decentralization is a cornerstone of Core Blockchain’s infrastructure. Core Blockchain brings an inclusive model that relies on a global network of nodes running on IoT devices and mobile hardware.",
    description: (
      <>
        This broad distribution not only strengthens the network’s resilience
        but also lowers the entry barriers for participants, making it easier
        for individuals and small businesses to join the network and contribute
        to it.
        <br />
        <br />
        Core employs its CorePass digital identity system and ICAN (a digital
        version of IBAN) to create a decentralized yet secure transaction and
        identification network, preventing centralization by design.
        <br />
        <br />
        This approach addresses a core aspect of the trilemma by reinforcing
        decentralized trust without sacrificing accessibility, ensuring that
        control remains truly distributed and enhancing the system&#39;s
        resistance to manipulation.
      </>
    ),
  },
  security: {
    title: "Security",
    subtitle:
      "Security is foundational to Core Blockchain’s infrastructure, as it adopts the advanced ED448-Goldilocks encryption method, offering an elevated security level unmatched by conventional cryptographic algorithms like ECDSA, which are widely used in legacy blockchains such as Bitcoin and Ethereum, but also in more modern blockchains as well.",
    description: (
      <>
        With its 448-bit key length, ED448 provides far greater resistance to
        cryptographic attacks than ECDSA’s 256-bit key, ensuring a more potent
        defense against potential threats. Additionally, the modern elliptic
        curve of ED448 not only enables faster verification but also has an
        inherent design advantage against side-channel attacks. <br />
        <br />
        This sophisticated encryption approach strengthens Core Blockchain’s
        resilience without compromising scalability or decentralization,
        reinforcing a secure, decentralized framework that minimizes the risks
        of manipulation and ensures trust at every layer.
      </>
    ),
  },
  depin: {
    title: "Security",
    subtitle:
      "Security is foundational to Core Blockchain’s infrastructure, as it adopts the advanced ED448-Goldilocks encryption method, offering an elevated security level unmatched by conventional cryptographic algorithms like ECDSA, which are widely used in legacy blockchains such as Bitcoin and Ethereum, but also in more modern blockchains as well.",
    description: (
      <>
        With its 448-bit key length, ED448 provides far greater resistance to
        cryptographic attacks than ECDSA’s 256-bit key, ensuring a more potent
        defense against potential threats. Additionally, the modern elliptic
        curve of ED448 not only enables faster verification but also has an
        inherent design advantage against side-channel attacks. <br />
        <br />
        This sophisticated encryption approach strengthens Core Blockchain’s
        resilience without compromising scalability or decentralization,
        reinforcing a secure, decentralized framework that minimizes the risks
        of manipulation and ensures trust at every layer.
      </>
    ),
  },
};

interface IAdvantagesItemProps {
  name: "pow" | "pode" | "security" | "depin";
  scene: string;
  title: string;
  description: string;
}

const AdvantagesItem = ({
  name,
  title,
  scene,
  description,
}: IAdvantagesItemProps) => {
  const modalRef = useRef<ModalRef>(null);
  const modalContent = advantagesModalContent[name];

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      modalRef?.current?.open();
    }
  };

  return (
    <>
      <div
        className="relative flex h-[500px] flex-1 cursor-pointer rounded-2xl border border-white/[10%] backdrop-blur-lg max-lg:w-full max-lg:flex-none"
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => {
          modalRef?.current?.open();
        }}
      >
        <SplineLoader
          className="pointer-events-none absolute inset-0 max-lg:flex max-lg:justify-center [&>canvas]:aspect-square [&>canvas]:!h-auto [&>canvas]:!w-full"
          scene={scene}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-10 p-[30px]">
          <div className="flex flex-col gap-4 max-lg:flex-1">
            <span className="text-[26px] font-regular leading-[1.4em] tracking-[-0.04em]">
              {title}
            </span>
            <p className="text-sm font-regular leading-normal tracking-normal text-white/[50%]">
              {description}
            </p>
          </div>
          <div className="flex items-end">
            <Button
              as="button"
              variant="secondary"
              onClick={() => {
                modalRef?.current?.open();
              }}
              hasIcon
            >
              <Plus width={14} height={14} />
            </Button>
          </div>
        </div>
      </div>
      <Modal ref={modalRef} contentClassname="flex gap-8 pt-[260px] flex-col">
        <h6 className="bg-[linear-gradient(162deg,_rgb(255,255,247)_0%,_rgba(255,255,247,0.34)_131%)] bg-clip-text text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent">
          {modalContent.title}
        </h6>
        <span className="text-lg font-thin leading-normal text-white">
          {modalContent.subtitle}
        </span>
        <p className="text-sm font-thin leading-normal text-white/50">
          {modalContent.description}
        </p>
        <SplineLoader
          className="pointer-events-none absolute inset-0 mx-auto !w-[90%] max-lg:flex max-lg:justify-center [&>canvas]:aspect-square [&>canvas]:!h-auto [&>canvas]:!w-full"
          scene={scene}
        />
      </Modal>
    </>
  );
};

export const CoreAdvantages = () => {
  return (
    <>
      <motion.div className="sticky top-20 flex w-full justify-center bg-black py-[100px] max-lg:relative max-lg:p-4 max-lg:pb-20">
        <div className="flex w-full max-w-[1200px] flex-col gap-16">
          <div className="flex flex-1 flex-col items-center gap-5 max-lg:p-6">
            <SectionTitle title="core blockchain" />
            <h3 className="bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.5)_100%)] bg-clip-text text-left text-[56px] font-thin leading-[1.2em] tracking-[-0.03em] text-transparent max-lg:text-[32px]">
              Accessible to everyone, everywhere
            </h3>
            <BlurTextReveal
              className="w-[900px] text-center leading-normal max-lg:text-[15px]"
              sentence="Those are all just pretty words until you understand what makes it so"
            />
          </div>
          <div className="flex flex-row items-center gap-4 max-lg:flex-col">
            <AdvantagesItem
              name="pow"
              title="Proof of Work – Why is it important?"
              description="Though many blockchains have moved to a more energy-efficient proof-of-stake system."
              scene="/models/scalability.splinecode"
            />
            <AdvantagesItem
              name="pode"
              title="Efficiency and eco-friendly mining"
              description="Core Blockchain developed an improved algorithm called “Proof-of-Distributed-Efficiency.”"
              scene="/models/security.splinecode"
            />
            <AdvantagesItem
              name="security"
              title="Unmatched encrypted Security"
              description="The most common type of encryption in blockchain technology is public-key cryptography"
              scene="/models/decentralization.splinecode"
            />
            <AdvantagesItem
              name="depin"
              title="DePIN & RWA Solutions"
              description="A Decentralized Physical Infrastructure Network (DePIN) is an innovative approach."
              scene="/models/security.splinecode"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
