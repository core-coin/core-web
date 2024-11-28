import { MegaMenu, MenuItem } from "./components";
import { Button } from "..";

export function Header() {
  return (
    <header className="flex justify-center bg-black/75 backdrop-blur-lg">
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
            <MenuItem title="Discover" />
            <MenuItem title="Develop" />
            <MenuItem title="Participate" />
          </ul>
        </div>
        <div className="flex w-[260px] justify-end">
          <Button as="a" href="/">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
