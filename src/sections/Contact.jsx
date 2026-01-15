import { MdEmail } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser'
import styles from "../styles/Contact.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosCloseCircle, IoIosPin } from "react-icons/io";
import { type } from "@testing-library/user-event/dist/type";
import { FaCircleCheck } from "react-icons/fa6";

const SERVICE_ID = 'service_7lhmp5g';
const TEMPLATE_ID = 'template_u13sf0p';
const PUBLIC_KEY = 'g_H8VzXu9X0PWLl-s';

export default function Contact() {
  const form = useRef();

  const [statusMessage, setStatusMessage] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init({publicKey: PUBLIC_KEY});
  },[])

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current).then((result) => {
      console.log('Email enviado com sucesso', result.text);
      setStatusMessage({type: 'sucess', text: 'Email enviado com sucesso !'});
      e.target.reset();
    }, (error) => {
      console.log("Falha ao enviar E-mail", error.text);
      setStatusMessage({type: 'error', text: 'Falha ao enviar E-mail.'})
    }) .finally(() => {
      setIsSending(false);
      setTimeout(() => setStatusMessage(null), 6000);
    })
  }

  return (
    <section className={styles.contactContainer} id="Contato">
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
            <p>
              Estou sempre aberto a discutir novos projetos, oportunidades
              criativas ou simplesmente bater um papo sobre tecnologia.
            </p>
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
          <form action="" ref={form} onSubmit={sendEmail}>
            <h1>Envie uma Mensagem</h1>

            <div className={styles.inputArea}>
              <div className={styles.inputContent}>
                <label htmlFor="name">Nome completo</label>
                <div className={styles.input}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome completo"
                    required
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
                    required
                  />
                </div>
              </div>

              <div className={styles.inputContent}>
                <label htmlFor="email">Assunto</label>
                <div className={styles.input}>
                  <input
                    type="text"
                    id="assunto"
                    name="title"
                    placeholder="Digite seu assunto"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputContent}>
                <label htmlFor="mensagem">Mensagem</label>
                <div className={styles.textArea}>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem"
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonArea}>
              <button type="submit" disabled={isSending}>{isSending ? 'Enviando...' : 'Enviar Mensagem'}</button>
            </div>
            {statusMessage  &&(
              <div className={styles.notificationCard}>
                {statusMessage.type === 'error' ? <IoIosCloseCircle color="#eb0000" /> : <FaCircleCheck color="#00ff00" />}
                <div className={styles.borderMessage} style={{backgroundColor: statusMessage.type === 'error' ? '#eb0000' : '#00ff00'}}></div>
                <div className={styles.message}>
                <span className={styles.titleMessage} style={{color: statusMessage.type === 'error' ? '#eb0000' : '#00ff00'}}>{statusMessage.type === 'error' ? 'Algo deu errado': 'Sucesso'}</span>
                <p>{statusMessage.text}</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
