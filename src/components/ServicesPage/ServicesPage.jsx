'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ServicesPage.module.scss'
import Psychologists from '@/components/Psychologists/Psychologists.jsx'

const therapies = [
  {
    title: 'Cognitive Behavioral Therapy (CBT)',
    description:
      'Do you feel stuck in a cycle of negative thinking? Cognitive Behavioral Therapy (CBT) is a practical, evidence-based approach that helps you identify the unhelpful thought and behavior patterns that fuel emotional distress. We’ll work together to understand how your thoughts, feelings, and actions are connected. You’ll learn concrete skills to gently challenge distorted thinking (like overthinking or self-criticism) and replace ineffective behaviors (like avoidance) with healthier responses. CBT is a collaborative and empowering therapy focused on providing you with the tools to manage challenges and build a more fulfilling life, both now and in the future.',
    link: '/blog/cbt',
  },
  {
    title: 'Acceptance and Commitment Therapy (ACT)',
    description:
      'What if the goal was not to eliminate pain, but to live a rich and meaningful life despite it? Acceptance and Commitment Therapy (ACT) helps you do just that. Instead of struggling against difficult thoughts and feelings, we teach you mindfulness skills to accept them with kindness, making room for them without being controlled by them. The core of ACT is clarifying your deepest values—what truly matters to you—and committedly taking steps, even small ones, to build a life aligned with those values. It is about building psychological flexibility to engage fully in your life.',
    link: '/blog/act',
  },
  {
    title: 'Schema Therapy',
    description:
      'Are you struggling with deep, long-standing patterns that feel ingrained? These might include feeling not good enough, fearing abandonment, or feeling overly responsible for others. Schema Therapy is designed to help with these core issues. We gently explore the childhood and adolescent origins of these patterns, known as "schemas," to understand how they began. In a supportive environment, we help you get your core emotional needs met and challenge these lifelong patterns. The goal is to break free from these cycles and build new, healthier ways of relating to yourself and others, leading to lasting change.',
    link: '/blog/schema',
  },
  {
    title: 'Rational Emotive Behavioral Therapy (REBT)',
    description:
      'Do you often feel intense anger, anxiety, or depression in response to life’s challenges? Rational Emotive Behavior Therapy (REBT) focuses on the powerful connection between your beliefs and your emotional suffering. We identify the rigid and absolute beliefs (like "I must succeed" or "People should treat me fairly") that are at the root of your distress. Together, we will actively and compassionately challenge these beliefs, not to dismiss your pain, but to transform them into more flexible, realistic perspectives. This process empowers you to respond to setbacks in a healthier way, freeing you from self-imposed rules and reducing emotional turmoil.',
    link: '/blog/rebt',
  },
  {
    title: 'Dialectical Behavior Therapy (DBT)',
    description:
      'Are your emotions intense, overwhelming, and seem to control your life and relationships? Dialectical Behavior Therapy (DBT) is a highly effective skills-based therapy designed to help you build a life worth living. It provides practical tools in four key areas: managing painful emotions, tolerating distress without making situations worse, improving your relationships through effective communication, and staying present in the moment. DBT helps you find a balance between accepting yourself as you are and making positive changes. You will learn to calm the storm, navigate crises, and communicate your needs without losing your sense of self.',
    link: '/blog/dbt',
  },
  {
    title: 'Compassion-Focused Therapy',
    description:
      'Is your inner critic a constant, harsh presence? Compassion-Focused Therapy (CFT) is built on the understanding that we often struggle with shame and self-criticism. This approach teaches that compassion is not a weakness or a luxury, but a courageous skill that can be developed for profound healing. We work to activate your natural soothing system, helping you relate to your struggles with kindness and understanding instead of judgment. CFT provides practical exercises to calm your threat system, quiet the critical voice, and ultimately, transform your relationship with yourself. Learn to meet your pain with support and become a true friend to yourself.',
    link: '/blog/cft',
  },
]

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.container}>
      {/* Intro */}
      <section className={styles.hero}>
        <h1>Psychological Assistance Services</h1>
        <p className={styles.lead}>
          Our specialists work exclusively in therapeutic approaches with proven medical effectiveness.
        </p>
        <p>
          We help you understand your struggles, build practical skills, and move toward a more balanced and meaningful life.
        </p>
      </section>

      {/* Conditions */}
      <section className={styles.conditions}>
        <h2>We Help With</h2>
        <div className={styles.conditionsGrid}>
          <div className={styles.condition}>Anxiety Disorders</div>
          <div className={styles.condition}>Depressive States</div>
          <div className={styles.condition}>Panic Attacks</div>
          <div className={styles.condition}>Bipolar Disorder</div>
          <div className={styles.condition}>ADHD</div>
          <div className={styles.condition}>Negative Thinking</div>
          <div className={styles.condition}>Eating Disorders</div>
          <div className={styles.condition}>Obsessive States</div>
          <div className={styles.condition}>Depersonalization</div>
          <div className={styles.condition}>Low Self-Esteem</div>
          <div className={styles.condition}>Guilt & Shame</div>
          <div className={styles.condition}>Low Confidence</div>
        </div>
      </section>

      {/* Therapies Split Layout */}
      <section className={styles.therapies}>
        <div className={styles.therapiesText}>
          <h2 className={styles.therapiesHeader}>How We Work</h2>
          <p className={styles.helperText}>Hover or click on a method to explore →</p>
        </div>
        <div className={styles.splitLayout}>
          {/* Left side */}
          <div className={styles.therapyList}>
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className={`${styles.therapyButton} ${index === activeIndex ? styles.active : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {therapy.title}
                <span className={styles.arrow}>→</span>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className={styles.therapyDetail}>
            <h3>{therapies[activeIndex].title}</h3>
            <p>{therapies[activeIndex].description}</p>
            <Link href={therapies[activeIndex].link} className={styles.learnMoreButton}>
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Psychologists */}
      <section className={styles.specialists}>
        <Psychologists />
      </section>

      {/* Extra Info */}
      <section className={styles.extraInfo}>
        <p>
          Based on your situation, psychological support can include assessments, one-on-one counseling, or group sessions and trainings led by a clinical psychologist.
        </p>
      </section>
    </div>
  )
}

export default ServicesPage
