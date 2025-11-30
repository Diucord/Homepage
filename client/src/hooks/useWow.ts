import { useEffect } from "react";

export const useWow = () => {
  useEffect(() => {
    const WOW = (window as any).WOW;
    if (WOW) {
      new WOW({ live: false }).init();
    }
  }, []);
};
