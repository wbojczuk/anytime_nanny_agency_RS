"use client"
import { CSSProperties } from "react"
import styles from "./aboutwithicons.module.css"
import Link from "next/link"
import Shader from "../../misc/Shader/Shader"

export default function AboutWithIcons() {

  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="ipSCheckOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)"/></svg>

  const text = ["Hands-On Service", "Trusted Professionals","Flexible Scheduling","Vetted Caregivers","Personalized Matching","Family-Focused Approach",]

  const iconElems = text.map((text, i)=>{
    return(<div key={i} className={styles.icon}>{icon} {text}</div>)
  })

  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About Anytime <br /> <span className="underline">Nanny</span> Agency</h1>

            <p>Anytime Nanny Agency is built on trust, care, and hands-on service. With years of experience, we’re dedicated to matching families with reliable, compassionate professionals who bring peace of mind and support to every home.</p>

            <div className={styles.icons}>
              {iconElems}
            </div>

            <Link className="main-link main-link-outline" href="/contact">Contact Us</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/about.webp" alt="image of a woman" className={styles.mainImg} />
            <Shader background="var(--primary-light)" opacity={.39} zIndex={100}/>
            {/* <div className={styles.imgStyle}></div> */}
          </div>
        </div>
    </section>
  )
}
