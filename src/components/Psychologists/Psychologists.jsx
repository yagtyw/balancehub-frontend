'use client'

import React from "react"
import Link from "next/link"
import psychologists from "../../data/psychologistsData.js"
import styles from './Psychologists.module.scss'

const Psychologists = () => {
  return (
    <section className={styles.psychologists}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Specialists</h2>
        <p className={styles.subtitle}>Meet our professional psychologists</p>
      </div>

      <div className={styles.grid}>
        {psychologists.map((p) => (
          <div className={styles.card} key={p.id}>
            <div className={styles.photo}>
              <img src={p.photo} alt={p.firstName + ' ' + p.lastName} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>
                {p.firstName + ' ' + p.lastName}
              </h3>
              <p className={styles.speciality}>{p.speciality}</p>
              <p className={styles.experience}>Experience: {p.experience}</p>
              <p className={styles.price}>Price: {p.price}</p>
              <button className={styles.button}>{p.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Link href="/psychologists" className={styles.footerButton}>
          View all specialists
        </Link>
      </div>
    </section>
  );
};

export default Psychologists;
