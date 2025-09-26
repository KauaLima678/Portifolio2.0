import { useState, useEffect } from 'react'; // 1. Importe os hooks
import styles from './style.module.css';
import logo from '../../images/Planet.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Hero')

 // Dentro do seu componente Header, após o useState
useEffect(() => {
  // 1. Seleciona todas as seções da página que têm um ID
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', 
    threshold: 0,
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
        console.log('Seções encontradas:', sections);

      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => observer.observe(section));

  // 6. Função de limpeza: para de observar tudo quando o componente "morre"
  return () => {
    sections.forEach(section => observer.unobserve(section));
  };
}, [setActiveSection]); // Dependência adicionada para boas práticas 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  console.log('Seção Ativa ATUALMENTE:', activeSection);

  return (
    <>
        <div className={styles.headerContainer}>
                <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.logoArea}>
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <a className={`${styles.navItem} ${activeSection === 'Hero' ? styles.activeLink : ''}`} href="#Hero">Home</a>
          <a  className={`${styles.navItem} ${activeSection === 'About' ? styles.activeLink : ''}`} href="#About">Sobre</a>
          <a  className={`${styles.navItem} ${activeSection === 'Skills' ? styles.activeLink : ''}`} href="#Skills">Skills</a>
          <a  className={`${styles.navItem} ${activeSection === 'Projetos' ? styles.activeLink : ''}`} href="#Projetos">Projetos</a>
          <a  className={`${styles.navItem} ${activeSection === 'Contato' ? styles.activeLink : ''}`} href="#Contato">Contato</a>
        </nav>
      </header>
        </div>
      
    </>
  );
}