"use client"

import Link from 'next/link';
import styles from './nationwide.module.css';

export default function Nationwide(){
return (
 <div className={styles.find}>

    <h2>Serving Families<br />Nationwide</h2>

    <h3>providing trusted care wherever you call home.</h3>
 
    <img src='/img/nationwide.png' alt='Image of usa' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.95)"}} className='shader'></div>
 </div>
)};