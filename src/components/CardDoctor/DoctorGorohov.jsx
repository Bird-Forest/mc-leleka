import React from "react";
import styles from "./card.module.css";
import man from "/man.jpg";

export default function DoctorGorohov() {
  return (
    <div className={`${styles.docWrap} ${styles.bgRight}`}>
      <img src={man} className={styles.docImg} />
      <div className={styles.wrapInfo}>
        <div className={styles.docInfo}>
          <p className={styles.docText}>лікар сімейної медицини</p>
          <h2 className={styles.docTitle}>
            Горохов <b /> Володимир Вікторович
          </h2>
          <p className={styles.docText}>
            Досвідчений фахівець з великим досвідом лікування дітей, якому
            довіряють батьки та життєрадісним ставленням до своєї справи.
          </p>
        </div>
        <button className={styles.btnDoc}>Записатися на прийом</button>
      </div>
    </div>
  );
}
