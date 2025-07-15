import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={cx("modal-overlay")} onClick={onClose}>
      <div className={cx("modal")} onClick={(e) => e.stopPropagation()}>
        {title && <h2 className={cx("modal__title")}>{title}</h2>}
        <div className={cx("modal__body")}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
