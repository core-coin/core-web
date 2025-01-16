import { lazy, Suspense } from "react";
import { RenderOnViewport, SpinnerLoading } from "..";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface ISplineLoaderProps {
  scene: string;
  className?: string;
}

export const SplineLoader = ({ scene, className }: ISplineLoaderProps) => (
  <RenderOnViewport>
    <Suspense
      fallback={
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <SpinnerLoading />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  </RenderOnViewport>
);
