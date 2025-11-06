import { MdEmail } from "react-icons/md";
import styles from "../styles/Contact.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

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
          </div>

          <div className={styles.cardsCont}>
            <a href="mailto:kauablima26@gmail.com" className={styles.card}>
              <span className={styles.iconArea}>
                <MdEmail className={styles.icon} />
              </span>
              <div className={styles.cardText}>
                <span>Email</span>
                <p>kauablima26@gmail.com</p>
              </div>
            </a>
            <a href="tel:16997251263" className={styles.card}>
              <span className={styles.iconArea}>
                <FaPhoneAlt className={styles.icon} />
              </span>
              <div className={styles.cardText}>
                <span>Número de Contato</span>
                <p>(16) 99725-1263</p>
              </div>
            </a>
            <a href="tel:16997251263" className={styles.card}>
              <span className={styles.iconArea}>
                <IoIosPin className={styles.icon} />
              </span>
              <div className={styles.cardText}>
                <span>Localização</span>
                <p>Jaboticabal - SP</p>
              </div>
            </a>

            <div className={styles.socialList}>
              <a href="https://www.instagram.com/http_kauazinblx/" className={styles.ig}>
                <FaInstagram />
              </a>
              <a href="www.linkedin.com/in/kauablima" className={styles.linkedin}><FaLinkedin /></a>
              <a href="https://github.com/KauaLima678" className={styles.github}>
                <FaGithub />
              </a>
              <a href="" className={styles.whatsapp}><FaWhatsapp/></a>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <form action="submit">
            <h1>Envie uma Mensagem</h1>

            <div className={styles.inputArea}>
              <div className={styles.inputContent}>
                <label htmlFor="name">Nome completo</label>
                <div className={styles.input}>
                  <input
                    type="text"
                    id="name"
                    name="nome"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>

              <div className={styles.inputContent}>
                <label htmlFor="email">Email</label>
                <div className={styles.input}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                  />
                </div>
              </div>

              <div className={styles.inputContent}>
                <label htmlFor="mensagem">Mensagem</label>
                <div className={styles.textArea}>
                  <textarea
                    type="text"
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonArea}>
              <button>Enviar Mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
