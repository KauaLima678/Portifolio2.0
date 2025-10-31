import EasyBank from "../images/2 (1).png";
import ColorMax from "../images/ColorMax Preview.png";
import ClearTask from "../images/Clear Task Preview.png";
import styles from '../styles/Projetos.module.css'

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      title: "EasyBank",
      description:
        "Conclusão bem-sucedida de um desafio do Frontend Mentor. Este projeto de landing page focou-se em aumentar a minha precisão e fidelidade na tradução de designs, consolidando a minha habilidade em entregar projetos que cumprem rigorosamente as especificações visuais propostas.",
      imageUrl: EasyBank,
      skills: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/KauaLima678/easyBank.git",
      demo: 'true',
      demoUrl: 'https://kaualima678.github.io/easyBank/'
    },
    {
        id: 2,
        title: 'ColorMax Tintas',
        description: 'Sistema de gestão de inventário de tintas e materiais construído com React e integração com Banco de Dados. Projetado para otimizar o controle de estoque, evitar rupturas e facilitar a localização de produtos. Este projeto destaca a minha capacidade de desenvolver soluções práticas de negócio, unindo um frontend moderno com uma persistência de dados confiável.',
        imageUrl: ColorMax,
        skills: ['JavaScript', 'React.Js', 'Node.js', 'Prisma'],
        url: 'https://github.com/KauaLima678/Estoque.git'
    },
    {
      id: 3,
        title: 'Clear Task',
        description: 'Sistema de gerenciamento de tarefas construido em PHP, JavaScript e MySql para organização pessoal e produtividade. Permite aos usuários criar, editar e excluir tarefas, e acompanhar o progresso. Este projeto demonstra minhas habilidades em desenvolvimento web full-stack, focando na criação de uma aplicação funcional e intuitiva para o usuário final.',
        imageUrl: ClearTask,
        skills: ['PHP', 'JavaScript', 'MySql'],
        url: 'https://github.com/KauaLima678/To-do-list.git'
    }
  ];

  return (
  <section id="Projetos" className={styles.projetosSection}>
    <div className={styles.sectionTitle}>
        <h1>
          Meus <span>Projetos</span>
        </h1>

        <p className={styles.subtitle}>
          Conheça alguns dos meus projetos recentes que demonstram minhas habilidades e experiência em desenvolvimento web.
        </p>
      </div>

      <div className={styles.projetosContainer}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className={ projeto.id === 2 ? `${styles.projetoInvert}` : `${styles.projeto}`}>
            <div className={styles.projetoImage}>
              <img src={projeto.imageUrl} alt='Preview Projeto' />
            </div>
            <div className={styles.infoProjeto}>
              <h2>{projeto.title}</h2>
              <p>{projeto.description}</p>
              <div className={styles.skillsProjeto}>
                {projeto.skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            <div className={styles.buttonArea}>
              {projeto.demo === 'true' && (
                <a href={projeto.demoUrl}>Ver Demo</a>
              )}
              <a href={projeto.url}>Ver mais</a>
            </div>
              </div>
        </div>
        ))}

      </div>
  </section>
  );
}
