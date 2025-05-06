import React from "react";
import styles from "./hero.module.css";
// import heroMob from "/hero-mobile1.jpg";
import heroTab from "/hero-doc.jpg";

export default function Hero() {
  return (
    <>
      {/* <div className={styles.imgMob}>
        <img src={heroMob} alt="Лікар оберігає" className={styles.heroImg} />
      </div>
      <div className={styles.imgTab}> */}
      <img src={heroTab} alt="Лікар оберігає" className={styles.heroImg} />
      {/* </div> */}

      <div className={styles.hero}>
        <div className={styles.caseTitle}>
          <h1 className={styles.heroTitle}>Медичний центр "Лелека"</h1>
          <h2 className={styles.heroSubtitle}>
            це сімейна медицина <br /> з турботою про вас і ваших близьких
          </h2>
        </div>

        <div className={styles.caseText}>
          <article className={styles.heroArticle}>
            <h4 className={styles.artTitle}>Ми дбаємо про всю родину</h4>
            <p className={styles.artText}>
              Від немовлят до людей похилого віку — комплексний підхід до
              здоров’я кожного члена сім’ї.
            </p>
          </article>
          <article className={styles.heroArticle}>
            <h4 className={styles.artTitle}>Досвідчені фахівці</h4>
            <p className={styles.artText}>
              Наші лікарі мають великий досвід у веденні пацієнтів та постійно
              підвищують кваліфікацію.
            </p>
          </article>
          <article className={styles.heroArticle}>
            <h4 className={styles.artTitle}>Доступність і комфорт</h4>
            <p className={styles.artText}>
              Запис на прийом онлайн або телефоном. Комфортні умови перебування
              в медичному центрі.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
