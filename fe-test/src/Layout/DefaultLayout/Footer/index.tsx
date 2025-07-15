import { Icon } from "@iconify/react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")} data-aos="fade-up">
      <hr className={cx("line")}></hr>
      <div className={cx("footer__container")}>
        {/* Info section */}
        <div className={cx("footer__info")}>
          <div className={cx("footer__info-title")}>DataWarehouse</div>

          <p className={cx("footer__info-address")}>
            Warehouse Society, 234 Bahagia Ave <br />
            Street PRBW 29281
          </p>

          <p className={cx("footer__info-contact")}>
            info@warehouse.project <br />
            1-232-3434 (Main)
          </p>
        </div>
        {/* About section */}
        <div className={cx("footer__about")}>
          <div className={cx("footer__about-title")}>About</div>
          <nav className={cx("footer__about-nav")}>
            <ul className={cx("footer__about-list")}>
              <li className={cx("footer__about-item")}>
                <a href="/" className={cx("footer__about-link")}>
                  Profile
                </a>
              </li>
              <li className={cx("footer__about-item")}>
                <a href="/" className={cx("footer__about-link")}>
                  Features
                </a>
              </li>
              <li className={cx("footer__about-item")}>
                <a href="/" className={cx("footer__about-link")}>
                  Careers
                </a>
              </li>
              <li className={cx("footer__about-item")}>
                <a href="/" className={cx("footer__about-link")}>
                  DW News
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Help section */}
        <div className={cx("footer__help")}>
          <div className={cx("footer__help-title")}>Help</div>
          <nav className={cx("footer__help-nav")}>
            <ul className={cx("footer__help-list")}>
              <li className={cx("footer__help-item")}>
                <a href="/" className={cx("footer__help-link")}>
                  Support
                </a>
              </li>
              <li className={cx("footer__help-item")}>
                <a href="/" className={cx("footer__help-link")}>
                  Sign up
                </a>
              </li>
              <li className={cx("footer__help-item")}>
                <a href="/" className={cx("footer__help-link")}>
                  Guide
                </a>
              </li>
              <li className={cx("footer__help-item")}>
                <a href="/" className={cx("footer__help-link")}>
                  Reports
                </a>
              </li>
              <li className={cx("footer__help-item")}>
                <a href="/" className={cx("footer__help-link")}>
                  Q&A
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Media section */}
        <div className={cx("footer__social")}>
          <div className={cx("footer__social-title")}>Social Media</div>
          <nav className={cx("footer__social-nav")}>
            <ul className={cx("footer__social-list")}>
              <li className={cx("footer__social-item")}>
                <a href="/" className={cx("footer__social-link")}>
                  <Icon icon="mdi:youtube" />
                </a>
              </li>
              <li className={cx("footer__social-item")}>
                <a href="/" className={cx("footer__social-link")}>
                  <Icon icon="mdi:instagram" />
                </a>
              </li>{" "}
              <li className={cx("footer__social-item")}>
                <a href="/" className={cx("footer__social-link")}>
                  <Icon icon="mdi:github" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom */}
      <div className={cx("footer__bottom")} data-aos="fade-up">
        <p className={cx("footer__bottom-copyright")}>
          © Datawarehouse™, 2020. All rights reserved. <br /> Company
          Registration Number: 21479524.
        </p>
        <div className={cx("footer__bottom-chat")}>
          <Icon icon="line-md:chat-round-dots-filled" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
