import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface ISplineLoaderProps {
  scene: string;
  className?: string;
}

export const SplineLoader = ({ scene, className }: ISplineLoaderProps) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Spline
      scene={scene}
      className={className}
      onLoad={(app) => {
        console.log(app);
      }}
    />
  </Suspense>
);
