import Link from "next/link"
import { links } from "../../../config/links"
import styles from "./styles.module.css"

const Brand = () => {
  return (
    <Link href={links.home} className={styles.Brand}>
      <a className={styles.Brand}>Ilan Néstor</a>
    </Link>
  )
}

export default Brand
