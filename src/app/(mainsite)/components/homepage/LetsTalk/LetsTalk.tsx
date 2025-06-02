"use client"

import Link from 'next/link';
import styles from './letstalk.module.css';

export default function LetsTalk(){
return (
 <div className={styles.find}>

    <h2>L<span className="underline">et’s Tal</span>k</h2>

    <h3>Have questions or ready to find the perfect caregiver? We’re here to help every step of the way. Reach out today and let’s talk about how we can support your family’s unique needs.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact Us</Link>
    </div>
 
    <img src='/img/letstalk.webp' alt='Image of happy kids' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.95)"}} className='shader'></div>
 </div>
)};