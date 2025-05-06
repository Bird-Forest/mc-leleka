import React from "react";
import styles from "./card.module.css";
import women from "/women.jpg";

export default function DoctorUSD() {
  return (
    <div className={`${styles.docWrap} ${styles.bgRight}`}>
      <img src={women} className={styles.docImg} />
      <div className={styles.wrapInfo}>
        <div className={styles.docInfo}>
          <p className={styles.docText}>лікар ультразвукової діагностики</p>
          <h2 className={styles.docTitle}>Козирева Оксана Вікторівна</h2>
          <p className={styles.docText}>
            Завдяки надзвичайній уважності, ретельному підходу та невпинному
            навчанню, наш лікар УЗД забезпечує максимально точну діагностику.
          </p>
        </div>
        <button className={styles.btnDoc}>Записатися на прийом</button>
      </div>
    </div>
  );
}
