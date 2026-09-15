import { Eye, Image as ImageIcon } from "lucide-react";
import { useState, type HTMLAttributes } from "react";

import { Modal, ModalContent, ModalTitle, ModalTrigger } from "@/components/ui/modal";
import { cn } from "@/lib/utils";

type MediaPlaceholderProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  hint?: string;
  src?: string;
  alt?: string;
  aspect?: "video" | "wide" | "square";
  cropBottom?: boolean;
  preview?: boolean;
  className?: string;
};

const aspectClassMap = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export function MediaPlaceholder({
  label = "Visual coming soon",
  hint,
  src,
  alt = label,
  aspect = "wide",
  cropBottom = false,
  preview = false,
  className,
  ...props
}: MediaPlaceholderProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div
      {...props}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-(--card-radius) border border-border bg-card",
        aspectClassMap[aspect],
        className,
      )}
    >
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            className={cn(
              "absolute inset-0 size-full object-cover",
              cropBottom && "scale-[1.02]",
            )}
          />

          {preview ? (
            <Modal open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
              <ModalTrigger
                className="ds-icon-control absolute right-3 top-3 z-10 hidden size-10 bg-background/85 text-accent shadow-sm backdrop-blur-sm hover:border-border-strong hover:bg-surface-hover hover:text-highlight active:scale-90 lg:inline-flex"
                aria-label={`Preview ${label}`}
                title={`Preview ${label}`}
              >
                <Eye className="size-4" aria-hidden="true" />
              </ModalTrigger>
              <ModalContent
                className="max-w-6xl bg-background/95 p-3 sm:p-4"
                closeClassName="border-red-500/70 bg-red-500/10 text-red-400 hover:border-red-400 hover:bg-red-500/20 hover:text-red-300 active:scale-90"
              >
                <ModalTitle className="sr-only">Preview {label}</ModalTitle>
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[82vh] w-full object-contain"
                />
              </ModalContent>
            </Modal>
          ) : null}
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="media-placeholder-grid absolute inset-0 opacity-70"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 bg-primary-surface blur-2xl"
          />

          <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-8 text-center">
            <span className="ds-icon-control">
              <ImageIcon className="size-4" aria-hidden="true" />
            </span>
            <div className="content-stack-xs items-center">
              <p className="type-overline">
                {label}
              </p>
              {hint ? (
                <p className="type-caption max-w-64">
                  {hint}
                </p>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
