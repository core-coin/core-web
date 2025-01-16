import { RenderOnViewport } from "..";

interface IAssetsVideoLoaderProps {
  src: string;
  className?: string;
}

export const AssetsVideoLoader = ({
  src,
  className,
}: IAssetsVideoLoaderProps) => (
  <RenderOnViewport>
    <video
      src={src}
      className={className}
      controls={false}
      playsInline
      muted
      autoPlay
      loop
    ></video>
  </RenderOnViewport>
);
