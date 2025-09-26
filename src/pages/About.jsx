import { FaCode, FaRegLightbulb } from 'react-icons/fa';
import styles from '../styles/About.module.css'
import { IoRocketOutline } from 'react-icons/io5';
import { BiSolidCoffee } from 'react-icons/bi';

export default function About() {
 return (
   <>
    <section id='About' className={styles.aboutSection}>
        <div className={styles.sectionTitle}> <h1>Sobre <span>mim</span></h1></div>
        <div className={styles.aboutContainer}>
        <div className={styles.colLeft}>
            <div className={styles.text}>
                <p>Sou um desenvolvedor apaixonado por tecnologia com mais ou menos 2 anos de experiência criando soluções web inovadoras. Minha jornada começou com curiosidade sobre como os sites funcionam e evoluiu para uma carreira dedicada a transformar ideias complexas em experiências digitais intuitivas e impactantes.</p>
                <p>Atualmente busco especializar-me em desenvolvimento full stack, sempre buscando equilibrar funcionalidade, performance e design. Acredito que a tecnologia deve ser uma ponte entre problemas reais e soluções elegantes.</p>
            </div>
            <div className={styles.cards1}>
                <div className={styles.cardLeft}>
                    <h2>50+</h2>
                    <span>Projetos concluidos</span>
                </div>
                <div className={styles.cardLeft}>
                    <h2>2+</h2>
                    <span>Anos na área</span>
                </div>
            </div>
        </div>
        <div className={styles.colRight}>
            <div className={styles.cardsRight}>
                <div className={styles.cardRight}>
                    <div className={styles.icon}>
                        <FaCode />
                    </div>
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Código limpo</h2>
                        <p>Desenvolvimento com foco em qualidade e manutenibilidade</p>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.icon}>
                        <FaRegLightbulb />
                    </div>
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Inovação</h2>
                        <p>Sempre buscando soluções criativas e tecnologias emergentes</p>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.icon}>
                        <IoRocketOutline />
                    </div>
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Performance</h2>
                        <p>Otimização constante para máxima velocidade e eficiência</p>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.icon}>
                        <BiSolidCoffee />
                    </div>
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Dedicação</h2>
                        <p>Comprometimento total com cada projeto desenvolvido</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
   </>
 );
}