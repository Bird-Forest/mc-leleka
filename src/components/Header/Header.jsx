import React from "react";
import styles from "./header.module.css";
import logo from "/family.png";
export default function Header() {
  return (
    <header className={styles.top}>
      <div className={styles.topCase}>
        <img src={logo} alt="logo" className={styles.topImg} />
        <p className={styles.topText}>МЦ "Лелека"</p>
        <div className={styles.topTablet}>
          <span className={styles.topText}>|</span>
          <p className={styles.topText}>м.Калинівка</p>
          <span className={styles.topText}>|</span>
          <a
            href="tel:+380673940871"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topTel}
          >
            +38 (067) 394 08 71
          </a>
        </div>
      </div>
    </header>
  );
}
