import React from "react";
import styles from "./header.module.css";
import logo from "/family.png";
export default function Header() {
  return (
    <header className={styles.top}>
      <img src={logo} alt="logo" width={48} height={48} />
      <p className={styles.topText}> Медичний центр "Лелека" </p>
      <span className={styles.topText}>|</span>
      <a
        href="tel:+380673940871"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.topTel}
      >
        +38 (067) 394 08 71
      </a>
    </header>
  );
}
