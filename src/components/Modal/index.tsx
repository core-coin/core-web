import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { Button, Portal } from "..";
import clsx from "clsx";

export type ModalRef = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  children: ReactNode;
  contentClassname?: string;
  customBody?: ReactNode;
};

const Modal = forwardRef<ModalRef, ModalProps>(
  ({ children, contentClassname, customBody }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    useImperativeHandle(ref, () => ({
      open,
      close,
    }));

    return (
      <Portal>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="fixed inset-0 z-40 bg-white/5 backdrop-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
              />
              <motion.div
                className="fixed right-1/2 top-1/2 z-50 max-h-[90%] w-[600px] max-w-full translate-x-1/2 translate-y-1/2 overflow-y-auto rounded-2xl bg-black"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  translateX: "50%",
                  translateY: "-50%",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  translateX: "50%",
                  translateY: "-50%",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  translateX: "50%",
                  translateY: "-50%",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full">
                  <div className="sticky inset-x-0 top-0 flex flex-col items-end p-6">
                    <Button
                      as="button"
                      variant="secondary"
                      onClick={close}
                      hasIcon
                    >
                      <X width={14} height={14} />
                    </Button>
                  </div>
                  <div className={clsx(contentClassname, "p-16")}>
                    {children}
                  </div>
                  {customBody}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Portal>
    );
  },
);

export default Modal;
