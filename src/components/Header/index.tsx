import { DesktopHeader, MobileHeader } from "./components";
import { useIsMobile } from "@src/hooks";

export function Header() {
  const isMobile = useIsMobile();

  return !isMobile ? <DesktopHeader /> : <MobileHeader />;
}
