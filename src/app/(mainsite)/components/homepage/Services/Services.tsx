"use client"

import styles from "./services.module.css"
import Service from "./Service"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Services(props: servicesModuleType) {

    const serviceElems = props.services.map((service, i)=>{
        return <Service hidden={false} {...service} key={i} />
    })

  return (
    <section className={styles.services}>
            <h2>Our Services</h2>

            <div className={styles.servicesWrapper}>
                {serviceElems}
            </div>
            
    </section>
  )
}
