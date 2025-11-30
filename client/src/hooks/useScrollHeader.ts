import { useEffect } from "react";

export const useScrollHeader = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 60) header.classList.add("active");
      else header.classList.remove("active");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};
