import Link from "next/link"
import styles from "./pagetitle.module.css"
import Shader from "../Shader/Shader"

export default function PageTitle(props: {title: string, subtitle: string, noButton?: boolean}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <div className={`center ${styles.linkWrapper}`}>
        
        </div>

        <img src="/img/pagetitle.png" className="bg-img" aria-hidden />
       <Shader background="var(--primary-light)" opacity={.92} />
    </header>
  )
}
