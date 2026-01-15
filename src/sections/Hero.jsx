import { SiGithub, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import DarkVeil from "../components/DarkVeil";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import styles from "../styles/Hero.module.css";

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
         Sou movido pela curiosidade e pela vontade de transformar ideias em experiências digitais que realmente importam. Busco entender as pessoas por trás de cada projeto para criar soluções úteis, intuitivas e impactantes. Acredito na força da colaboração e do aprendizado constante, evoluindo junto com a tecnologia para entregar produtos preparados para os desafios de amanhã.
        </p>

        <div className={styles.heroActions}>
          <a href="#Projetos" className={`${styles.btn} ${styles.btnPrimary}`}>
            Meus Projetos
          </a>
            <a href="#Contato" className={`${styles.btn} ${styles.btnSecondary}`}>
            Entrar em Contato
          </a>
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
