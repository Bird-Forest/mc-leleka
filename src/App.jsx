import styles from "./App.module.css";
import DoctorGorohov from "./components/CardDoctor/DoctorGorohov";
import DoctorPoboynya from "./components/CardDoctor/DoctorPoboynya";
import DoctorUSD from "./components/CardDoctor/DoctorUSD";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.box}>
          <Hero />
        </div>
        <div className={styles.box}>
          <DoctorGorohov />
        </div>
        <div className={styles.box}>
          <DoctorPoboynya />
        </div>
        <div className={styles.box}>
          <DoctorUSD />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
