import type { ReactNode } from "react";
import "@src/styles/global.css";

interface IPageFrameProps {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

const PageFrame = (props: IPageFrameProps) => {
  return (
    <div className="pt-24">
      {props.header}
      <div className="flex">
        {props.sidebar}
        <article className="flex flex-1 [&>div]:flex-1 [&_.right-sidebar]:sticky [&_.right-sidebar]:top-10 [&_.right-sidebar]:border-s-0 [&_.right-sidebar]:p-0">
          {props.children}
        </article>
      </div>
    </div>
  );
};

export default PageFrame;
