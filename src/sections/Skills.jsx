import styles from "../styles/Skills.module.css";
import background from "../images/background.png"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPhp, SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";
import { FaSquareJs } from "react-icons/fa6";
export default function Skills() {

 useEffect(() => {
    ScrollReveal().reveal('.skillsCardReveal', {
      duration: 2000,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease',
      interval: 300,
      reset: false,
    });
  }, []);

const skills = [
  {
    id: 1,
    icon: <RiReactjsLine /> ,
    name: 'React.js',                                                    
    random: 70,
    type: "front",
    color: "#0077ffff"
  },
  {
    id: 2,
    icon: <FaSquareJs />,
    name: 'JavaScript',
    random: 70,
    type: "front",
    color: "#fbff00ff"
  },
  {
    id: 3,
    icon: <RiTailwindCssFill />,
    name: 'Tailwind CSS',
    random: 20,
    type: "front",
    color: "#00c3ffff"
  },
  {
    id: 4,
    icon: <IoLogoNodejs />,
    name: 'Node.js',
    random: 60,
    type: 'back',
    color: "#6bff4dff"
  },
  {
    id: 5,
    icon: <SiPostgresql />,
    name: 'PostgreSQL',
    random: 70,
    type: 'back',
    color: "#52a3ffff"
  },
  {
    id: 6,
    icon: <SiPhp />,
    name: 'Php',
    random: 80,
    type: 'back',
    color: "#d6c7ffff"
  },
  {
    id: 7,
    icon: <FaGitAlt />,
    name: 'Git',
    random: 90,
    type: 'tools',
    color: "#ff5100ff"
  },
  {
    id: 8,
    icon: <LuFigma />,
    name: 'Figma',
    random: 80,
    type: 'tools',
    color: "#b9a0ffff"
  },
  {
    id: 9,
    icon: <VscVscode />,
    name: 'VS Code',
    random: 95,
    type: 'tools',
    color: "#0026ffff"
  }
]

const {ref, inView} = useInView({
  threshold: 0.2,
  triggerOnce: true
})

  return (
    <section id="Skills" className={styles.skillsSection}>
      <div className={styles.bgCont}>
      <img className={styles.bg} src={background} alt="" />
      <div className={styles.blur}></div>
      </div>
      <div className={styles.sectionTitle}>
        <h1>
          Minhas <span>Habilidades</span>
        </h1>
        <p>Tecnologias e ferramentas que domino para criar soluções completas e robustas</p>
      </div>
      <div className={`${styles.skillsContainer} skillsCardReveal`}>
        <div className={styles.skillsCard} ref={ref}>
          <h2>FrontEnd</h2>
          {skills.map((skill) => ( skill.type === 'front' && 
              <div className={styles.skillArea} key={skill.id}>
              <div className={styles.headerSkill}>
                <div className={styles.nameSkill}>
                <span className={styles.icon}  style={{color: `${skill.color}`}}>{skill.icon}</span>  
                <span className={styles.skill} style={{color: `${skill.color}`}}>{skill.name}</span>
                </div>
                <span className={styles.skillRandom}>{`${skill.random}%`}</span>
              </div>
              <div className={styles.skillBarArea}>
                <div className={`${styles.skillBar} barReveal`} style={{width: inView ? `${skill.random}%` : '0%' }}></div>
              </div>
          </div>
          ))}          
        </div>
        <div className={styles.skillsCard} ref={ref}>
          <h2>BackEnd</h2>
          {skills.map((skill) => ( skill.type === 'back' && 
              <div className={styles.skillArea} key={skill.id}>
              <div className={styles.headerSkill}>
                <div className={styles.nameSkill}>
                <span className={styles.icon}  style={{color: `${skill.color}`}}>{skill.icon}</span>  
                <span className={styles.skill} style={{color: `${skill.color}`}}>{skill.name}</span>
                </div>
                <span className={styles.skillRandom}>{`${skill.random}%`}</span>
              </div>
              <div className={styles.skillBarArea}>
                <div className={`${styles.skillBar} barReveal`} style={{width: inView ? `${skill.random}%` : '0%' }}></div>
              </div>
          </div>
          ))}

        </div>
        <div className={styles.skillsCard} ref={ref}>
          <h2>Ferramentas</h2>

          {skills.map((skill) => ( skill.type === 'tools' && 
              <div className={styles.skillArea} key={skill.id}>
              <div className={styles.headerSkill}>
                <div className={styles.nameSkill}>
                <span className={styles.icon}  style={{color: `${skill.color}`}}>{skill.icon}</span>  
                <span className={styles.skill} style={{color: `${skill.color}`}}>{skill.name}</span>
                </div>
                <span className={styles.skillRandom}>{`${skill.random}%`}</span>
              </div>
              <div className={styles.skillBarArea}>
                <div className={`${styles.skillBar} barReveal`} style={{width: inView ? `${skill.random}%` : '0%' }}></div>
              </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}
