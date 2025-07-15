import styles from "./Intro.module.scss";
import introImg from "@assets/intro.png";
import Button from "@components/Button";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Intro = () => {
  return (
    <div className={cx("intro")}>
      <h1
        className={cx("intro__title")}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        Save your data storage here.
      </h1>

      <p
        className={cx("intro__desc", "disappear")}
        data-aos="fade-down"
        data-aos-delay="500"
      >
        Data Warehouse is a data storage area that has been tested for security,
        so you can store your data here safely but not be afraid of being stolen
        by others.
      </p>

      <Button
        className={cx("intro__button", "disappear")}
        data-aos="fade-down"
        data-aos-delay="600"
      >
        Learn more
      </Button>

      <img
        className={cx("intro__image")}
        data-aos="fade-up"
        data-aos-delay="700"
        src={introImg}
        alt="introImg"
      />
    </div>
  );
};

export default Intro;
