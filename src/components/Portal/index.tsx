import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode;
  target?: HTMLElement;
}

export const Portal = ({ children, target }: IPortalProps) => {
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    setCanShow(true);
  }, []);

  if (!canShow) return null;

  const portalRoot = target || document.body;

  return createPortal(children, portalRoot);
};
