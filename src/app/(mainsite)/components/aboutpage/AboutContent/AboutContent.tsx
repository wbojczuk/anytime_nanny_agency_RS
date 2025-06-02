"use client"
import Shader from "../../misc/Shader/Shader"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/aboutus.png"} width={360} height={600} alt="Image of teens" />
            <Shader background="var(--primary-light)" opacity={.58} zIndex={1}/>
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">About Us</span></h2>

            <p>Anytime Nanny Agency was founded in 2015 with a simple mission: to provide families with dependable, high-quality domestic support. With over 10 years of experience and more than 1,000 families served nationwide, we’ve earned a reputation for professionalism, care, and personal attention.
<br /><br />
We take pride in being a hands-on agency that matches families with trusted caregivers and household professionals—from nannies and newborn specialists to personal chefs and estate managers. Our commitment is to help each family feel supported, confident, and cared for every step of the way.
            </p>
            <a href="/contact" className="main-link">Contact Us</a>
        </div>

        <img src="/img/aboutus-bg.png" alt="image of a sunset" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.90)"}}></div>
    </section>
  )
}
