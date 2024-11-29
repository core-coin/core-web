interface ISectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: ISectionTitleProps) => (
  <span className="rounded-full bg-[linear-gradient(135deg,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.05)_100%)] px-5 py-3 text-xxs font-regular uppercase tracking-[0.20rem] text-white">
    {title}
  </span>
);
