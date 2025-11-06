import { SiGithub, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import DarkVeil from "../components/DarkVeil";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import styles from "../styles/Hero.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiGithub />, title: "Github", href: "https://Github.com/KauaLima678" },
  { node: <SiPostgresql />, title: "Postgresql", href: "https://www.postgresql.org/" },
  { node: <SiPhp />, title: "Php", href: "https://www.php.net/" },
  { node: <SiNodedotjs />, title: "Node js", href: "https://nodejs.org/pt" },
];

  return (
    <section id="Hero" className={styles.heroContainer}>
      <DarkVeil />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Kauã Lima - <span>Desenvolvedor</span> Web
        </h1>

        <p className={styles.heroDescription}>
         Sou movido pela curiosidade e pela satisfação de ver uma ideia ganhar vida no ambiente digital. Meu ponto de partida é sempre entender as pessoas por trás de cada projeto para criar soluções que sejam genuinamente úteis e agradáveis de usar. Acredito que os melhores resultados nascem da colaboração e do aprendizado contínuo. Em um mundo de tecnologia que evolui sem parar, meu compromisso é crescer junto, aplicando minha energia para construir produtos que não só funcionem hoje, mas que estejam prontos para os desafios de amanhã.
        </p>

        <div className={styles.heroActions}>
          <a href="#projetos" className={`${styles.btn} ${styles.btnPrimary}`}>
            Meus Projetos
          </a>
          <div className={styles.btnSocial}>
            <a href="#contato" className={`${styles.btn} ${styles.btnSecondary}`}>
            Entrar em Contato
          </a>

          <div className={styles.containerSocial}></div>
          <div className={styles.socialIconsArea}>
            <div className={styles.square}></div>
            <a href=""><FaInstagram/></a>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaGithub/></a>
          </div>
          </div>
          
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          width: "100%",
          height: "80px",
          overflow: "hidden",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
