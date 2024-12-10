export const TechnicalDetailsSection = () => (
  <section className="mt-16 flex w-screen items-center justify-center max-lg:mt-0 max-lg:h-auto max-lg:items-start max-lg:py-0">
    <div className="relative z-10 mx-auto flex size-full w-[1000px] max-w-screen-lg flex-row items-center justify-start gap-2.5 max-lg:h-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-0">
      <div className="flex flex-1 flex-col items-start gap-8 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.1)_0%,rgba(0,0,0,0)_100%)] p-14 max-lg:p-6">
        <span className="text-[26px] font-regular leading-[1.4em] tracking-[-0.04em] text-white">
          Technical details
        </span>
        <ul className="flex flex-col gap-[20px] pl-6">
          <li className="relative text-lg font-regular leading-normal tracking-normal text-white/[66%] before:absolute before:-left-6 before:top-2.5 before:size-2 before:rounded-full before:border before:border-brand">
            Constructor: Initializes the token with the required parameters for
            the inherited functionalities.
          </li>
          <li className="relative text-lg font-regular leading-normal tracking-normal text-white/[66%] before:absolute before:-left-6 before:top-2.5 before:size-2 before:rounded-full before:border before:border-brand">
            Backward compatibility: the CBC Standard ensures interoperability
            with existing Core Blockchain-based systems and applications.
          </li>
          <li className="relative text-lg font-regular leading-normal tracking-normal text-white/[66%] before:absolute before:-left-6 before:top-2.5 before:size-2 before:rounded-full before:border before:border-brand">
            Ylem Version: {">"}0.8.0
          </li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col gap-8 p-16 max-lg:mt-16">
        <span className="text-[26px] font-regular leading-[1.4em] tracking-[-0.04em] text-white">
          Security Considerations
        </span>
        <p className="text-lg font-regular leading-normal tracking-normal text-white max-lg:text-sm">
          Given its multifunctionality, a CBC contract requires thorough
          security audits and reviews to ensure the integrity of its various
          components. Particular attention should be paid to the interactions
          between different functionalities to mitigate potential
          vulnerabilities.
        </p>
        <p className="text-sm font-regular leading-normal tracking-normal text-white/50">
          For more information, read the CBC CIP{" "}
          <a href="/" className="text-brand">
            here
          </a>
          .
        </p>
      </div>
    </div>
  </section>
);
