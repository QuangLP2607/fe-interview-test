import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@components/Button";
import logo from "@assets/logo.png";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { AuthContext } from "@contexts/AuthContext";

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsSignedIn(false);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header
      className={cx("header")}
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div>
        <Link to="/">
          <img className={cx("header__logo")} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={cx("header__action")}>
        {isSignedIn ? (
          <>
            <Button
              className={cx("header__action-btn")}
              onClick={handleProfile}
            >
              Posts
            </Button>
            <Button className={cx("header__action-btn")} onClick={handleLogOut}>
              Log out
            </Button>
          </>
        ) : (
          <Button className={cx("header__action-btn")} onClick={handleSignIn}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
