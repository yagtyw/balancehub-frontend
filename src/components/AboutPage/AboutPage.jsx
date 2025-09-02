'use client'

import React from 'react'
import Link from 'next/link'
import JourneyDesktop from './JourneyDesktop'
import JourneyMobile from './JourneyMobile'
import useIsMobile from '@/hooks/useIsMobile'
import styles from './AboutPage.module.scss'

const OurCenter = () => {
  const isMobile = useIsMobile()

  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1>Hi, we’re BalanceHub</h1>
        <p>
          We started this center because we believe everyone deserves support that works — 
          not just talk, but real tools to feel better, grow, and live with more balance.
        </p>
        <p>
          We’re psychologists trained in evidence-based methods. 
          No magic, no clichés — just science, care, and practical help.
        </p>
      </section>

      {/* Mission === */}
      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          To make effective therapy accessible and understandable. 
          We help people break free from anxiety, low mood, and self-doubt — 
          not by fixing “broken” parts, but by building skills that last.
        </p>
      </section>

      {/* How We Work */}
      <section className={styles.howWeWork}>
        <div className={styles.badge}>How we work</div>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <h3>Science-Backed</h3>
            <p>We only use methods proven by research: CBT, ACT, DBT, and other evidence-based approaches.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.highlight}>
            <h3>Personalized</h3>
            <p>No copy-paste therapy. We adapt to your personality, goals, and pace.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.highlight}>
            <h3>Practical</h3>
            <p>We focus on real-life tools — not just insight, but action.</p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className={styles.questionsSection}>
        <h2 className={styles.sectionTitle}>You’re not alone in this</h2>
        <p className={styles.introText}>
          These thoughts? We hear them every day. And yes — it’s normal to feel this way.
        </p>

        <div className={styles.thoughtsGrid}>
          <div className={styles.thought}>
            <p><em>“Am I just lazy, or is it depression?”</em></p>
            <span>— This question itself is a sign of awareness.</span>
          </div>
          <div className={styles.thought}>
            <p><em>“Why do I feel guilty for resting?”</em></p>
            <span>— Because you’ve been taught to earn rest. But it’s your right.</span>
          </div>
          <div className={styles.thought}>
            <p><em>“Is it normal to feel nothing?”</em></p>
            <span>— Emotional numbness is a protection. We’ll help you reconnect.</span>
          </div>
          <div className={styles.thought}>
            <p><em>“Can I get better without medication?”</em></p>
            <span>— Many do. It depends on you — not a label.</span>
          </div>
          <div className={styles.thought}>
            <p><em>“How do I know if I need help?”</em></p>
            <span>— If the thought came up — that’s your answer.</span>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <p>Our specialists will help you understand what’s happening — without judgment.</p>
          <Link href="/specialists" className={styles.link}>Talk to a specialist →</Link>
        </div>
      </section>

      {/* Our Journey (Desktop/Mobile switch) */}
      <section className={styles.journeySection}>
        <h2 className={styles.journeyName}>Our Story</h2>
        {isMobile ? <JourneyMobile /> : <JourneyDesktop />}
      </section>

      {/*  CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Want to work with us?</h2>
        <div className={styles.ctaButtons}>
          <Link href="/specialists" className={styles.link}>Meet our team</Link>
          <Link href="/join" className={styles.ctaButton}>Join as a therapist</Link>
        </div>
      </section>
    </div>
  )
}

export default OurCenter
