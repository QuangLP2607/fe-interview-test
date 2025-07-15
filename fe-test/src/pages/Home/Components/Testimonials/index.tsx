import styles from "./Testimonials.module.scss";
import classNames from "classnames/bind";
import Slider from "@components/Slider";
import type { Gallery } from "@mytypes/gallery";
import defaultImg from "@assets/defaultImg.png";

const cx = classNames.bind(styles);

interface TestimonialsProps {
  galleries: Gallery[];
}

const Testimonials = ({ galleries }: TestimonialsProps) => {
  return (
    <div
      className={cx("testimonials")}
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <h1 className={cx("testimonials__title")}>Testimonials</h1>

      <Slider
        items={galleries}
        renderItem={(gallery) => (
          <div className={cx("slider")}>
            <img
              className={cx("slider__image")}
              src={gallery.imageUrl}
              alt={gallery.desctiption}
              onError={(e) => {
                (e.target as HTMLImageElement).src = defaultImg;
              }}
            />

            <div className={cx("slider__info")}>
              <div className={cx("slider__info-author")}>John Fang</div>
              <div className={cx("slider__info-website")}>wordfaang.com</div>
            </div>

            <div className={cx("slider__description")}>
              {gallery.desctiption}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Testimonials;
