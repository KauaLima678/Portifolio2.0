import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <section id="Skills" className={styles.skillsSection}>
      <div className={styles.sectionTitle}>
        <h1>
          Minhas <span>Habilidades</span>
        </h1>
        <p>Tecnologias e ferramentas que domino para criar soluções completas e robustas</p>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsCard}>
          <h2>FrontEnd</h2>
        </div>
        <div className={styles.skillsCard}>
          <h2>BackEnd</h2>
        </div>
        <div className={styles.skillsCard}>
          <h2>Ferramentas</h2>
        </div>
      </div>
    </section>
  );
}
