"use client"

import Shader from "../../misc/Shader/Shader"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>

        <div className={styles.content}>
            <h1>Anytime <br /> <span>Nanny Agency</span></h1>
        </div>

        <div className={styles.content}>
            <p>Welcome to Anytime Nanny Agency — your trusted source for professional, hands-on domestic support. From expert nannies and newborn care specialists to personal chefs and estate managers, we provide quality assistance to families nationwide with care, reliability, and heart.</p>

            <div className={styles.buttonWrapper}>
                <Link className="main-link" href="/#services">Learn More</Link>
                <Link href="/contact" className="main-link main-link-outline">Contact Us</Link>
            </div>
        </div>

        <Shader background="white" opacity={.95} />
        <img src="/img/header-bg.webp" alt="Image of Bible" className="bg-img" />

        <div className={styles.pageBreak}></div>
    </header>
  )
}
