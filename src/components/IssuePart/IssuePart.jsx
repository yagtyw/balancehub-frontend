'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './IssuePart.module.scss'

const specialists = [
  { name: "Dr. Anna", title: "CBT Therapist", photo: "/specialists/anna.jpg" },
  { name: "Dr. Lisa", title: "Clinical Psychologist", photo: "/specialists/lisa.jpg" },
  { name: "Dr. Maria", title: "Mindfulness Coach", photo: "/specialists/maria.jpg" },
  { name: "Dr. Elena", title: "Counseling Psychologist", photo: "/specialists/elena.jpg" },
]

const issues = [
  'Depersonalization',
  'Guilt',
  'Low Confidence',
  'Intrusive Thoughts',
  'Anxiety',
  'Panic Attacks',
  'Addiction',
  'Depression',
  'Low Self-Esteem',
  'Divorce',
  'Fears',
  'Loss of a Loved One',
  'Trauma',
];

export default function SelfDiscovery() {
  const [activeIssue, setActiveIssue] = useState(null);

  const handleIssueClick = (issue) => {
    setActiveIssue(issue);
    window.location.href = `/support?issue=${encodeURIComponent(issue)}`;
  };

  return (
    <div className={styles.container}>
      {/* Discover Yourself */}
      <div className={styles.intro}>
        <h1><span>Discover Yourself</span> with Expert Guidance</h1>
        <p>
          Our sessions are designed to help you understand yourself better. 
          All our specialists are experienced and work with evidence-based methods to ensure real results.
        </p>
        <Link href="/specialists" className={styles.link}>See Our Specialists  &#8594;</Link>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {specialists.concat(specialists).map((spec, index) => (
            <div className={styles.slide} key={index}>
              <img src={spec.photo} alt={spec.name} />
              <div className={styles.overlay}>
                <p>{spec.name}</p>
                <p>{spec.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.gridSection}>
        <div className={styles.gridContainer}>
          {/* First column */}
          <div className={styles.column}>
            <Link href="/cbt" className={styles.gridItem}>
              Cognitive Behavioral Therapy (CBT)
            </Link>
            <Link href="/cpt" className={styles.gridItem}>
              Cognitive Processing Therapy (CPT)
            </Link>
            <Link href="/rebt" className={styles.gridItem}>
              Rational Emotive Behavioral Therapy (REBT)
            </Link>
          </div>

          {/* Second column */}
          <div className={styles.column}>
            <Link href="/act" className={styles.gridItem}>
              Acceptance and Commitment Therapy (ACT)
            </Link>
            <Link href="/schema-therapy" className={styles.gridItem}>
              Schema Therapy
            </Link>
            <Link href="/dbt" className={styles.gridItem}>
              Dialectical Behavior Therapy (DBT)
            </Link>
            <Link href="/compassion-focused" className={styles.gridItem}>
              Compassion-Focused Therapy
            </Link>
          </div>

          {/* Third column */}
          <div className={styles.column}>
            <h3>Our Specialists</h3>
            <p>They work exclusively with evidence-based approaches.</p>
            <Link href="/join" className={styles.gridItemLink}>
              If you are a practicing psychologist with training in evidence-based methods, you can collaborate with us — learn more
            </Link>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <div className={styles.supportContainer}>
          <h2 className={styles.supportSectionTitle}>
            We’ll help you cope with difficult situations, feelings, and emotions
          </h2>
          <div className={styles.wordsCloud}>
            {issues.map((issue) => (
              <a
                key={issue}
                className={activeIssue === issue ? styles.wordLink + ' ' + styles.active : styles.wordLink}
                onMouseEnter={() => setActiveIssue(issue)}
                onMouseLeave={() => setActiveIssue(null)}
              >
                {issue}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}