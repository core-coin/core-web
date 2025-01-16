import { useState, useEffect, useRef, type FC, type ReactNode } from "react";

type RenderOnViewportProps = {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number;
};

export const RenderOnViewport: FC<RenderOnViewportProps> = ({
  children,
  rootMargin = "0px",
  threshold = 0,
}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return <div ref={elementRef}>{hasBeenVisible ? children : null}</div>;
};
