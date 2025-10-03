import "./App.css";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
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
      <Contact />
    </>
  );
}

export default App;
