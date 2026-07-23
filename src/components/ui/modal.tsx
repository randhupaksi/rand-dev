import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

export const Modal = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;

export function ModalContent({
  className,
  children,
  ...props
}: Dialog.Popup.Props) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-50 bg-overlay backdrop-blur-sm transition-opacity" />
      <Dialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Popup
          className={cn(
            "relative w-full max-w-lg rounded-[var(--modal-radius)] border border-border bg-popover p-[var(--card-padding)] text-popover-foreground shadow-[var(--shadow-modal)] outline-none",
            className,
          )}
          {...props}
        >
          {children}
          <Dialog.Close className="ds-icon-control absolute right-4 top-4 size-10" aria-label="Tutup dialog">
            <X className="size-4" aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Viewport>
    </Dialog.Portal>
  );
}

export function ModalTitle({ className, ...props }: Dialog.Title.Props) {
  return <Dialog.Title className={cn("type-h4 pr-12", className)} {...props} />;
}

export function ModalDescription({ className, ...props }: Dialog.Description.Props) {
  return <Dialog.Description className={cn("type-body-sm mt-2", className)} {...props} />;
}

export const ModalClose = Dialog.Close;
