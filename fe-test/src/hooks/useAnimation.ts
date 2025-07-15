import { useEffect } from "react";

const useAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "[class*='animate--']"
    ) as NodeListOf<HTMLElement>;

    let lastScrollTop = window.scrollY;
    const states = new WeakMap<HTMLElement, "entered" | "left">();

    const checkVisibility = () => {
      const scrollDirection = window.scrollY > lastScrollTop ? "down" : "up";
      lastScrollTop = window.scrollY;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

        const disappear = el.classList.contains("disappear");
        const delay = el.dataset.delay || "0s";
        const isInstant = el.hasAttribute("data-instant");
        const prev = states.get(el);

        // ----- Vào màn hình
        if (inView) {
          if (
            (!el.classList.contains("animate--active") || prev === "left") &&
            scrollDirection === "down"
          ) {
            el.style.animationDelay = delay;

            if (isInstant) {
              setTimeout(() => {
                el.classList.add("animate--active");
              }, parseDelay(delay));
            } else {
              el.classList.add("animate--active");
            }

            el.classList.remove("leave");
            states.set(el, "entered");
          }
        }

        // ----- Rời khỏi màn hình (chỉ khi disappear)
        else if (disappear) {
          if (scrollDirection === "up" && rect.bottom < 0) {
            el.classList.add("leave");
            el.classList.remove("animate--active");
            states.set(el, "left");
          } else if (
            scrollDirection === "down" &&
            rect.top > window.innerHeight
          ) {
            el.classList.add("leave");
            el.classList.remove("animate--active");
            states.set(el, "left");
          }
        }
      });
    };

    const onScroll = () => {
      requestAnimationFrame(checkVisibility);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    let rafId: number;
    let repeat = 0;
    const initialCheck = () => {
      checkVisibility();
      repeat++;
      if (repeat < 3) rafId = requestAnimationFrame(initialCheck);
    };
    initialCheck();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
};

const parseDelay = (delay: string): number => {
  if (delay.endsWith("ms")) return parseFloat(delay);
  if (delay.endsWith("s")) return parseFloat(delay) * 1000;
  return 0;
};

export default useAnimation;
