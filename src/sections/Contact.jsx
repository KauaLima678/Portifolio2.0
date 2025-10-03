import { MdEmail } from "react-icons/md";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.title}>
        <h1>
          Entre em <span>Contato</span>
        </h1>
        <p className={styles.subtitle}>
          Pronto para transformar sua ideia em realidade? Vamos conversar sobre
          seu próximo projeto
        </p>
      </div>

        <div className={styles.contactContent}>
      <div className={styles.colLeft}>
        <div className={styles.infoContact}>
            <h1>Informações de Contato</h1>
            <p>Estou sempre aberto a discutir novos projetos, oportunidades criativas ou simplesmente bater um papo sobre tecnologia.</p>
        </div>

        <div className={styles.cardsCont}>
            <a href="mailto:kauablima26@gmail.com" className={styles.card}>
                <span className={styles.iconArea}>
                    <MdEmail />
                </span>
                <div className={styles.cardText}>
                    <span>Email</span>
                    <p>kauablima26@gmail.com</p>
                </div>
            </a>
            <a href="tel:16997251263" className={styles.card}>
                <span className={styles.iconArea}>
                    <MdEmail />
                </span>
                <div className={styles.cardText}>
                    <span>Número de Contato</span>
                    <p>(16) 99725-1263</p>
                </div>
            </a>
        </div>
      </div>
      <div className={styles.form}>
        <form action="submit">
            <h1>Envie uma Mensagem</h1>

            <div className={styles.inputArea}>
                <div className={styles.inputContent}>
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" name="nome" placeholder="Digite seu nome completo" />
                </div>

                <div className={styles.inputContent}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu email" />
                </div>


                <div className={styles.inputContent}>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea type="text" id="mensagem" name="mensagem" placeholder="Digite sua mensagem" />
                </div>

            </div>
        </form>
      </div>
      </div>
    </section>
  );
}
