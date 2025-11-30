export const useScrollTo = () => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return scrollTo;
};
