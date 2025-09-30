import styles from "../styles/Skills.module.css";

export default function Skills() {

const skills = [
  {
    id: 1,
    name: 'React.js',
    random: 60,
    type: "front",
    color: "#0077ffff"
  },
  {
    id: 2,
    name: 'JavaScript',
    random: 70,
    type: "front",
    color: "#fbff00ff"
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    random: 20,
    type: "front",
    color: "#00c3ffff"
  },
  {
    id: 4,
    name: 'Node.js',
    random: 40,
    type: 'back',
    color: "#6bff4dff"
  },
  {
    id: 5,
    name: 'PostgreSQL',
    random: 30,
    type: 'back',
    color: "#52a3ffff"
  },
  {
    id: 6,
    name: 'Express.js',
    random: 40,
    type: 'back',
    color: "#acacacff"
  },
  {
    id: 7,
    name: 'Git',
    random: 90,
    type: 'tools',
    color: "#ff5100ff"
  },
  {
    id: 8,
    name: 'Figma',
    random: 70,
    type: 'tools',
    color: "#b9a0ffff"
  },
  {
    id: 9,
    name: 'VS Code',
    random: 95,
    type: 'tools',
    color: "#0026ffff"
  }
]

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
          {skills.map((skill) => ( skill.type === 'front' && 
              <div className={styles.skillArea} key={skill.id}>
              <div className={styles.headerSkill}>
                <span className={styles.skill} style={{color: `${skill.color}`}}>{skill.name}</span>
                <span className={styles.skillRandom}>{`${skill.random}%`}</span>
              </div>
              <div className={styles.skillBarArea}>
                <div className={styles.skillBar} style={{width: `${skill.random}%`}}></div>
              </div>
          </div>
          ))}          
        </div>
        <div className={styles.skillsCard}>
          <h2>BackEnd</h2>
          {skills.map((skill) => ( skill.type === 'back' && 
              <div className={styles.skillArea} key={skill.id}>
              <div className={styles.headerSkill}>
                <span className={styles.skill} style={{color: `${skill.color}`}}>{skill.name}</span>
                <span className={styles.skillRandom}>{`${skill.random}%`}</span>
              </div>
              <div className={styles.skillBarArea}>
                <div className={styles.skillBar} style={{width: `${skill.random}%`}}></div>
              </div>
          </div>
          ))}

        </div>
        <div className={styles.skillsCard}>
          <h2>Ferramentas</h2>

          {skills.map((skill) => ( skill.type === 'tools' && 
              <div className={styles.skillArea} key={skill.id}>
              <div className={styles.headerSkill}>
                <span className={styles.skill} style={{color: `${skill.color}`}}>{skill.name}</span>
                <span className={styles.skillRandom}>{`${skill.random}%`}</span>
              </div>
              <div className={styles.skillBarArea}>
                <div className={styles.skillBar} style={{width: `${skill.random}%`}}></div>
              </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}
