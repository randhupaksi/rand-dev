import { useEffect } from "react";

/** Menyetel document.title dan meta description per halaman (SPA). */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    if (description) {
      const meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );

      if (meta) {
        meta.content = description;
      }
    }
  }, [title, description]);
}
