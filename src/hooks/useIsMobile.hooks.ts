import { useState, useEffect } from "react";
import { isBrowser } from "@src/utils";

const MOBILE_BREAKPOINTS = 1400;

export const useIsMobile = (): boolean => {
  if (!isBrowser()) return false;

  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= MOBILE_BREAKPOINTS,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINTS);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
