import styles from './style.module.css'
import { FaGithub, FaLinkedin, FaMapPin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from '../../images/Planet-gap.png'
import { FaInstagram } from 'react-icons/fa6';

export default function Footer() {
 return (
   <footer>
    <div className={styles.topContent}>
        <div className={styles.col1}>
            <div className={styles.title}>
            <img src={Logo} alt="" />
            <h1>Kauã Lima</h1>
            </div>
            <p>Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas e inovadoras que conectam tecnologia e criatividade.</p>

            {/* <div className={styles.social}>
                <a href='https://github.com/KauaLima678' className={`${styles.icon} ${styles.github}`}>
                    <FaGithub/>
                </a>
                <a href='www.linkedin.com/in/kauablima' className={`${styles.icon} ${styles.linkedin}`}>
                    <FaLinkedin/>
                </a>
                <a href='https://wa.link/g1fx6g' className={`${styles.icon} ${styles.whatsaap}`}>
                    <FaWhatsapp/>
                </a>
            </div> */}
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
            </ul>
        </div>

        <div className={styles.col4}>
            <h1>Redes Sociais</h1>
            <ul>
                <li><FaGithub/> <a href='https://github.com/KauaLima678'>KauaLima678</a></li>
                <li><FaLinkedin/> <a href="">Kauã Lima</a></li>
                  <li>
                    <FaInstagram />
                    <a href="https://www.instagram.com/http_kauazinblx/">@http_kauazinblx</a>
                </li>
            </ul>
        </div>

    </div>
    <div className={styles.bottomContent}>
        <p>&copy; Desenvolvido po Kauã Lima | Todos os direitos reservados - 2026</p>
    </div>
   </footer>
 );
}