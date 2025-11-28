import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projetos from "./sections/Projetos";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import cursor from './images/cursor.png'
function App() {

  useEffect(() => {

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    })

  },)


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

      <div className="cursor">
        <img src={cursor} alt="" />
      </div>
    </>
  );
}

export default App;
