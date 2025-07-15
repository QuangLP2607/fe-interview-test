import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
}

const DefaultLayout = ({
  children,
  showHeader = true,
  showSidebar = true,
  showFooter = true,
}: DefaultLayoutProps) => {
  return (
    <div className={cx("wrapper")}>
      {showHeader && <Header />}

      <div className={cx("wrapper__content")}>
        {showSidebar && <Sidebar />}
        <main className={cx("wrapper__content--main")}>{children}</main>
      </div>

      {showFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;
