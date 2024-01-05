import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import styles from "./styles.module.css"
import Preloader from "../../components/Preloader"
import { preloader, titles } from "../../config/labels"
import Header from "../../components/Header"
import { motion } from "framer-motion"
import { links } from "../../config/links"
import Image from "next/image"
import ContactCard from "../../components/ContactCard"

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{titles.contact}</title>
      </Head>
      <Header />
      <PageContent>
        <div className={styles.ContactContainer}>
          <motion.div className={styles.GridContentText}>
            <h1 className={styles.Title}>
              Conversemos. Háblame de tu proyecto.
            </h1>
            <p className={styles.Subtext}>Construyamos algo juntos ⚡</p>
            <div className={styles.Contacts}>
              <ContactCard icon={faEnvelope} to={links.email}>
                <div className={styles.ContactText}>
                  <div>Envíame un email a</div>
                  <div className={styles.ContactLink}>ilanangelesrodriguez@gmail.com</div>
                </div>
              </ContactCard>
              <ContactCard icon={faWhatsapp} to={links.whatsappContact}>
                <div className={styles.ContactText}>
                  <div>
                    Envíame un{" "}
                    <span className={styles.ContactLink}>WhatsApp</span>
                  </div>
                </div>
              </ContactCard>
            </div>
            <p className={styles.Subtext}>
              Horario habitual: Lunes a Viernes de 9:00 a 13:00 (GMT-5)
            </p>
          </motion.div>
          <div className={styles.GridContentImage}>
            <div className={styles.ImageContainer}>
              <div className={styles.ImageDesktop}>

              </div>
            </div>
          </div>
        </div>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.contact} />
    </>
  )
}

export default Contact
