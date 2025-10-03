import { Code, Database, Globe, Palette, Smartphone, Zap } from "lucide-react";
import styles from "../styles/Services.module.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Desenvolvimento Web",
      description:
        "Sites responsivos e aplicações web modernas com as melhores tecnologias do mercado.",
      features: [
        "React & Next.js",
        "Performance otimizada",
        "SEO avançado",
        "Design responsivo",
      ],
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Aplicações Mobile",
      description:
        "Apps mobile nativos e híbridos para iOS e Android com experiência excepcional.",
      features: [
        "React Native",
        "Interface intuitiva",
        "Performance nativa",
        "Multiplataforma",
      ],
    },
    {
      id: 3,
      icon: Database,
      title: "Backend & APIs",
      description:
        "Desenvolvimento de APIs robustas e sistemas backend escaláveis e seguros.",
      features: [
        "Node.js & Python",
        "Bancos de dados",
        "Arquitetura escalável",
        "Segurança avançada",
      ],
    },
    {
      id: 4,
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Interfaces modernas e experiências de usuário que convertem visitantes em clientes.",
      features: [
        "Design responsivo",
        "Prototipagem",
        "Testes de usabilidade",
        "Identidade visual",
      ],
    },
    {
      id: 5,
      icon: Zap,
      title: "Otimização",
      description:
        "Melhoria de performance e otimização de aplicações existentes para máxima eficiência.",
      features: [
        "Auditoria técnica",
        "Otimização SEO",
        "Performance",
        "Manutenção",
      ],
    },
    {
      id: 6,
      icon: Code,
      title: "Consultoria Técnica",
      description:
        "Consultoria especializada em arquitetura de software e escolha de tecnologias.",
      features: [
        "Arquitetura de sistemas",
        "Code review",
        "Boas práticas",
        "Mentoria técnica",
      ],
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal('.cardServiceReveal', {
      delay: 200,
      origin: 'bottom',
      interval: 500,
      duration: 2000,
      easing: 'ease',
      reset: false,
      distance: '100px'
    }
    )
  }, [])

  return (
    <section id="Services" className={styles.servicesSection}>
      <div className={styles.sectionTitle}>
        <h1>
          Meus <span>Serviços</span>
        </h1>

        <p className={styles.subtitle}>
          Soluções completas e boas práticas que ofereço para transformar suas
          ideias em realidade digital
        </p>
      </div>

      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <div className={`${styles.cardService} cardServiceReveal`} key={service.id}>
            <div className={styles.headerService}>
                <div className={styles.iconArea}>
              <service.icon size={38} className={styles.icon} />
            </div>
            <div className={styles.serviceTitle}>{service.title}</div>
            </div>
            
            <div className={styles.info}>
              {/* <div className={styles.serviceTitle}>{service.title}</div> */}
              <div className={styles.description}>{service.description}</div>
            </div>

            <div className={styles.list}>
              {service.features.map((feature, index) => (
                <div className={styles.services} key={index}>
                    <div className={styles.mark}></div>
                    <p>{feature}</p>
                </div>
                
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
