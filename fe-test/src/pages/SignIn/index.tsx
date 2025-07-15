import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import styles from "./SignIn.module.scss";
import classNames from "classnames/bind";
import authService from "@services/authService";
import { AuthContext } from "@contexts/AuthContext";

const cx = classNames.bind(styles);

const SignIn = () => {
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await authService.login({ username });

      if (response.status === 201 && response.data.accessToken) {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        setIsSignedIn(true);
        setTimeout(() => navigate("/"), 1500);
      } else {
        alert("Login failed. Please check your username.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login error. Please try again.");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <form
        className={cx("form")}
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <h1 className={cx("form__title")}>Sign In</h1>
        <div className={cx("form__group")}>
          <label htmlFor="username" className={cx("form__label")}>
            Username
          </label>
          <input
            id="username"
            className={cx("form__input")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <Button type="submit" className={cx("form__button")}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
