'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './WhyTherapy.module.scss'

export default function WhyTherapy() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.fadeIn}`)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title + ' ' + styles.fadeIn}>
          Therapy That Works — Backed by Science, Rooted in Care
        </h1>

        <div className={styles.intro + ' ' + styles.fadeIn}>
          <p>
            Feeling overwhelmed, stuck, or just not like yourself? You're not alone. 
            Millions of people turn to therapy not because they're "broken," 
            but because they want to feel better — and <strong>therapy is a proven way to do that</strong>.
          </p>
        </div>

        <section className={styles.section + ' ' + styles.fadeIn}>
          <h2>Therapy is a proven way to feel better</h2>
          <p>
            Decades of research show that evidence-based psychotherapy helps people reduce anxiety, 
            overcome depression, manage stress, and improve relationships. 
            It’s not about quick fixes — it’s about real change. 
            When you work with a trained therapist, you’re not just talking — 
            you’re building tools that help you understand yourself and respond to life more effectively.
          </p>
        </section>

        <section className={styles.section + ' ' + styles.fadeIn}>
          <h2>Personalized to you</h2>
          <p>
            No two people are the same — so therapy shouldn’t be one-size-fits-all. 
            Our specialists choose methods based on <strong>your unique challenges, personality, and goals</strong>. 
            Whether you respond better to structured exercises, deep reflection, or mindful awareness, 
            your therapist will adapt the approach to fit <em>you</em>, not the other way around.
          </p>
        </section>

        <section className={styles.section + ' ' + styles.fadeIn}>
          <h2>Skills that last a lifetime</h2>
          <p>
            Unlike temporary relief, therapy rooted in science gives you <strong>skills you can use forever</strong>. 
            You’ll learn how to recognize unhelpful thought patterns, regulate emotions, 
            set boundaries, and move toward what matters most to you. 
            Even after therapy ends, these tools continue to support your mental well-being — 
            like emotional fitness that keeps you resilient through life’s ups and downs.
          </p>
        </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>
            Ready to feel better — for real?
          </p>
          <Link href="/specialists" className={styles.ctaButton}>
            Meet our specialists →
          </Link>
        </div>
    </section>
      </div>
    </div>
  )
}
