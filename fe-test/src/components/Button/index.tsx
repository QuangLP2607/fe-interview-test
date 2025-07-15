import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={cx("button", className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
