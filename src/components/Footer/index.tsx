export const Footer = () => (
  <footer className="sticky bottom-0 -z-10 flex h-screen flex-col items-center gap-16 bg-brand py-16">
    <div className="flex size-full max-w-[1400px] flex-col items-center justify-between">
      <div className="flex flex-row gap-12">
        <div className="flex flex-1">
          <img
            src="/images/core-sign.svg"
            alt="Core Logo"
            className="mt-3 size-10"
          />
        </div>
        <div className="flex flex-1">
          <p className="text-[32px] font-regular leading-[1.25em] text-black">
            Transform the Real World. The future is being built on Core. Dont be
            left behind! Join the thousands of innovators.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row gap-2.5">
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-sm font-medium leading-[1.25em] text-black">
            Use
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Network
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Foundation
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Press
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Brand Identity
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-sm font-medium leading-[1.25em] text-black">
            Learn
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Developer Docs
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Core on Github
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-sm font-medium leading-[1.25em] text-black">
            Community
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Forum
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Governance
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Core Diaspora
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Core Collective
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-sm font-medium leading-[1.25em] text-black">
            Build
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Boosters
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Explorers
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Use Cases
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                PayTo composer
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-sm font-medium leading-[1.25em] text-black">
            Resources
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Get Started
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Core Assistant
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Core Whitepaper
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-regular leading-normal text-black"
                href="/"
              >
                Glossary
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-end gap-12 pt-[97px]">
        <div />
        <div className="flex flex-[0.5] flex-row gap-2.5">
          <span className="flex-1 text-xs font-medium leading-normal text-black">
            © 2024 CORE FOUNDATION
          </span>
          <span className="flex-1 text-xs font-medium leading-normal text-black">
            This website is maintained by CORE FOUNDATION
          </span>
        </div>
      </div>
    </div>
  </footer>
);