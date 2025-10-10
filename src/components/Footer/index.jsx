import styles from './style.module.css'
import { FaGithub, FaLinkedin, FaMapPin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
 return (
   <footer>
    <div className={styles.topContent}>
        <div className={styles.col1}>
            <h1>Kauã Lima</h1>
            <p>Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas e inovadoras que conectam tecnologia e criatividade.</p>

            <div className={styles.social}>
                <div className={styles.icon}>
                    <FaGithub/>
                </div>
                <div className={styles.icon}>
                    <FaLinkedin/>
                </div>
                <div className={styles.icon}>
                    <FaWhatsapp/>
                </div>
            </div>
        </div>

        <div className={styles.col2}>
            <h1>Links Rápidos</h1>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">Sobre</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projetos</a></li>
                <li><a href="#Services">Serviços</a></li>
                <li><a href="#Contact">Contato</a></li>
            </ul>
        </div>

        <div className={styles.col3}>
            <h1>Contatos</h1>
            <ul>
                <li>
                    <MdEmail />
                    <a href="mailto:kauablima26@gmail.com">kauablima26@gmail.com</a>
                </li>
                
                <li>
                    <FaWhatsapp />
                    <a href="tel:16997251263">(16) 99725-1263</a>
                </li>

                
                <li>
                    <FaMapPin />
                    <a href="mailto:kauablima26@gmail.com">kauablima26@gmail.com</a>
                </li>
            </ul>
        </div>

    </div>
   </footer>
 );
}