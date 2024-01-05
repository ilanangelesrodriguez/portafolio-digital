import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader, titles } from "../../config/labels"
import about from "../../public/images/about/profile.png"
import styles from "./styles.module.css"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{titles.about}</title>
      </Head>
      <Header />
      <Menu />
      <PageContent>
        <div className={styles.Grid}>
          <div className={styles.GridContent}>
            <div className={styles.ContentContainer}>
              <h1 className={styles.Title}>¡Hola!</h1>
              <p className={styles.Text}>
                Soy Ilan Angeles, un desarrollador web de la ciudad de Chimbote,
                Perú. Me encanta crear sitios web y aplicaciones web con React, Next.js y
                otras tecnologías.
              </p>
            </div>
          </div>
          <div >
            <div className={styles.ImageContainer}>
              <Image className={styles.Images} src={about} layout="responsive" alt="about" />
            </div>
          </div>
        </div>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.about} />
    </>
  )
}

export default About
