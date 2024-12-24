import type { Props } from "@astrojs/starlight/props";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const Pagination = ({ pagination }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid">
        {pagination.prev && (
          <a
            href={pagination.prev.href}
            rel="prev"
            className="inline-flex items-center gap-1 justify-self-start text-lg font-regular text-brand"
          >
            <CaretLeft width={12} height={12} />
            <span>{pagination.prev.label}</span>
          </a>
        )}
      </div>

      <div className="grid">
        {pagination.next && (
          <a
            href={pagination.next.href}
            rel="next"
            className="inline-flex items-center gap-1 justify-self-end text-lg font-regular text-brand"
          >
            <span>{pagination.next.label}</span>
            <CaretRight width={12} height={12} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Pagination;
