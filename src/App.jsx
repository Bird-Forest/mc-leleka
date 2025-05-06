import "./App.css";
import DoctorGorohov from "./components/CardDoctor/DoctorGorohov";
import DoctorG from "./components/CardDoctor/DoctorGorohov";
import DoctorPoboynya from "./components/CardDoctor/DoctorPoboynya";
import DoctorUSD from "./components/CardDoctor/DoctorUSD";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="box">
          <Hero />
        </div>
        <div className="box">
          <DoctorGorohov />
        </div>
        <div className="box">
          <DoctorPoboynya />
        </div>
        <div className="box">
          <DoctorUSD />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
