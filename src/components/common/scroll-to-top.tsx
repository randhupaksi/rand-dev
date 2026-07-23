import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Mengembalikan posisi scroll ke atas pada perpindahan route, dan menghormati
 * anchor hash (mis. /#portfolio) ketika ada.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
