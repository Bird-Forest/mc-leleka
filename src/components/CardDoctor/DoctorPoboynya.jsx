import React from "react";
import styles from "./card.module.css";
import women from "/women.jpg";

export default function DoctorPoboynya() {
  return (
    <div className={`${styles.docWrap} ${styles.bgLeft}`}>
      <div className={styles.wrapInfo}>
        <div className={styles.docInfo}>
          <p className={styles.docText}>лікар сімейної медицини</p>
          <h2 className={styles.docTitle}>Побойня Олена Анатоліївна</h2>
          <p className={styles.docText}>
            Сімейний лікар, яку цінують пацієнти за її виняткову уважність,
            ґрунтовні знання та досвід у лікуванні хронічних захворювань.
          </p>
        </div>
        <button className={styles.btnDoc}>Записатися на прийом</button>
      </div>

      <img src={women} className={styles.docImg} />
    </div>
  );
}
//  Уважний лікар сімейної медицини, яка має ґрунтовні знання та досвід
//           у лікуванні хронічних захворювань, знаходячи особливий підхід до
//           всіх пацієнтів.

//  Сімейний лікар із 10-річним досвідом, спеціалізується на лікуванні
//             хронічних захворювань та профілактиці.
