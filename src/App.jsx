import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projetos from "./sections/Projetos";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
function App() {
  return (
    <>
    <Header/>
      <Hero/>
      <About />
      <Skills/>
      <Services />
      <Projetos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
