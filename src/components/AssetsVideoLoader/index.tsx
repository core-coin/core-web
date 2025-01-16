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
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <video
      src={src}
      className={className}
      controls={false}
      autoPlay
      loop
    ></video>
  </RenderOnViewport>
);
