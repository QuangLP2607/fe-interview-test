import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Slider.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  if (items.length === 0) {
    return <div className={cx("slider")}>No items to display</div>;
  }

  const prevSlide = () => {
    setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  };

  const nextSlide = () => {
    setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50;

      if (distance > swipeThreshold) {
        nextSlide();
      } else if (distance < -swipeThreshold) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={cx("slider")}>
      <div className={cx("slider__container")}>
        <button
          onClick={prevSlide}
          className={cx("slider__btn", "slider__btn-prev")}
          aria-label="Previous slide"
        >
          <Icon icon="heroicons-outline:arrow-long-left" />
        </button>

        <div
          className={cx("slider__content")}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {renderItem(items[current], current)}
        </div>

        <button
          onClick={nextSlide}
          className={cx("slider__btn", "slider__btn-next")}
          aria-label="Next slide"
        >
          <Icon icon="heroicons-outline:arrow-long-right" />
        </button>
      </div>

      <div className={cx("slider__dots")}>
        {items.map((_, idx) => (
          <span
            key={idx}
            className={cx("slider__dot", {
              "slider__dot--active": idx === current,
            })}
            onClick={() => setCurrent(idx)}
            role="button"
            aria-label={`Go to slide ${idx + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setCurrent(idx);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
