import { FaCode, FaRegLightbulb } from 'react-icons/fa';
import styles from '../styles/About.module.css'
import { IoRocketOutline } from 'react-icons/io5';
import { BiSolidCoffee } from 'react-icons/bi';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


export default function About() {
    useEffect(() => {
        ScrollReveal().reveal('.colLeftReveal', {
            duration: 2000,
            opacity: 0,
            distance: '100px',
            origin: 'left',
            easing: 'ease',
            interval: 300,
            reset: false,
            delay: 500
        });

        ScrollReveal().reveal('.titleReveal', {
            duration: 2000,
            opacity: 0,
            distance: '100px',
            origin: 'left',
            easing: 'ease',
            interval: 300,
            reset: false,
            delay: 500
        });

         ScrollReveal().reveal('.cardReveal', {
            duration: 2000,
            opacity: 0,
            distance: '100px',
            origin: 'right',
            easing: 'ease',
            interval: 300,
            reset: false,
            delay: 500
        });

    }, []);

    const cards = [
        {
            id: 1,
            icon: <FaCode />,
            title: "Código limpo",
            description: "Desenvolvimento com foco em qualidade e manutenibilidade"
        },
        {
            id: 2,
            icon: <FaRegLightbulb />,
            title: "Inovação",
            description: "Sempre buscando soluções criativas e tecnologias emergentes"
        },
        {
            id: 3,
            icon: <IoRocketOutline />,
            title: "Performance",
            description: "Otimização constante para máxima velocidade e eficiência"
        },
        {
            id: 4,
            icon: <BiSolidCoffee />,
            title: "Dedicação",
            description: "Comprometimento total com cada projeto desenvolvido"
        }

    ]
 return (
   <>
    <section id='About' className={styles.aboutSection}>
        <div className={`${styles.sectionTitle} titleReveal`}> <h1>Sobre <span>mim</span></h1></div>
        <div className={styles.aboutContainer}>
        <div className={`${styles.colLeft} colLeftReveal`}>
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
                {cards.map ((card) => (
                    <div key={card.id} className={`${styles.cardRight} cardReveal`}>
                    <div className={styles.icon}>
                        {card.icon}
                    </div>
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>
   </>
 );
}