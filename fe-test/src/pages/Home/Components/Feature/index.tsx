import styles from "./Feature.module.scss";
import classNames from "classnames/bind";
import feature1 from "@assets/feature1.png";
import feature2 from "@assets/feature2.png";
import feature3 from "@assets/feauture3.png";
import feature4 from "@assets/feauture4.png";
import feature1bg from "@assets/feature1bg.png";
import feature2bg from "@assets/feauture2bg.png";
import feature3bg from "@assets/feauture3bg.png";
import feature4bg from "@assets/feauture4bg.png";
import { Icon } from "@iconify/react";

const cx = classNames.bind(styles);

const Feature = () => {
  return (
    <div className={cx("feature")}>
      <h1
        className={cx("feature__title")}
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Features
      </h1>
      <p
        className={cx("feature__desc")}
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Some of the features and advantages that we provide for those of you
        <br />
        who store data in this Data Warehouse.
      </p>
      <div className={cx("feature__grid")}>
        <div
          className={cx("feature__item")}
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="400"
          style={{
            background: `url(${feature1bg}) right center / auto 100% no-repeat`,
          }}
        >
          <img
            className={cx("feature__item-img")}
            data-aos="zoom-in-right"
            data-aos-delay="400"
            src={feature1}
            alt="feature1"
          />

          <div>
            <h2 className={cx("feature__item-title")}>Search Data</h2>
            <p className={cx("feature__item-desc")}>
              Don’t worry if your data is very large, the Data Warehouse
              provides a search engine, which is useful for making it easier to
              find data effectively saving time.
            </p>
            <div className={cx("feature__item-action")}>
              <div className={cx("feature__item-action-text")}>Learn more</div>
              <Icon
                className={cx("feature__item-action-icon")}
                icon="bi:arrow-right"
              />
            </div>
          </div>
        </div>
        <div
          className={cx("feature__item")}
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="400"
          style={{
            background: `url(${feature2bg}) right center / auto 100% no-repeat`,
          }}
        >
          <img
            className={cx("feature__item-img")}
            data-aos="zoom-in-right"
            data-aos-delay="400"
            src={feature2}
            alt="feature2"
          />

          <div>
            <h2 className={cx("feature__item-title")}>24 Hours Access</h2>
            <p className={cx("feature__item-desc")}>
              Access is given 24 hours a full morning to night and meet again in
              the morning, giving you comfort when you need data when urgent.
            </p>
            <div className={cx("feature__item-action")}>
              <div className={cx("feature__item-action-text")}>Learn more</div>
              <Icon
                className={cx("feature__item-action-icon")}
                icon="bi:arrow-right"
              />
            </div>
          </div>
        </div>
        <div
          className={cx("feature__item")}
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="400"
          style={{
            background: `url(${feature3bg}) right center / auto 100% no-repeat`,
          }}
        >
          <img
            className={cx("feature__item-img")}
            data-aos="zoom-in-right"
            data-aos-delay="400"
            src={feature3}
            alt="feature3"
          />

          <div>
            <h2 className={cx("feature__item-title")}>Print Out</h2>
            <p className={cx("feature__item-desc")}>
              Print out service gives you convenience if someday you need print
              data, just edit it all and just print it.
            </p>
            <div className={cx("feature__item-action")}>
              <div className={cx("feature__item-action-text")}>Learn more</div>
              <Icon
                className={cx("feature__item-action-icon")}
                icon="bi:arrow-right"
              />
            </div>
          </div>
        </div>
        <div
          className={cx("feature__item")}
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="400"
          style={{
            background: `url(${feature4bg}) right center / auto 100% no-repeat`,
          }}
        >
          <img
            className={cx("feature__item-img")}
            data-aos="zoom-in-right"
            data-aos-delay="400"
            src={feature4}
            alt="feature4"
          />

          <div>
            <h2 className={cx("feature__item-title")}>Security Code</h2>
            <p className={cx("feature__item-desc")}>
              Data Security is one of our best facilities. Allows for your files
              to be safer. The file can be secured with a code or password that
              you created, so only you can open the file.
            </p>
            <div className={cx("feature__item-action")}>
              <div className={cx("feature__item-action-text")}>Learn more</div>
              <Icon
                className={cx("feature__item-action-icon")}
                icon="bi:arrow-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
