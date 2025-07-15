import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@assets/logo.png";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { AuthContext } from "@contexts/AuthContext";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <aside className={cx("sidebar")}>
      <div>
        <Link to="/">
          <img className={cx("sidebar__logo")} src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={cx("sidebar__nav")}>
        <ul className={cx("sidebar__nav-list")}>
          <li className={cx("sidebar__nav-item")}>
            <a href="/" className={cx("sidebar__nav-link")}>
              Posts
            </a>
          </li>
          <li className={cx("sidebar__nav-item")}>
            <button
              onClick={handleLogOut}
              className={cx("sidebar__logout-btn")}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
