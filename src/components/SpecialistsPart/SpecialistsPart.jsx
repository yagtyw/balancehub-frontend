'use client'

import { useState } from 'react'
import styles from './SpecialistsPart.module.scss'

const blocksData = [
  {
    text: "Long-term Training",
    description: "All our psychologists continuously improve their qualifications and hold higher education"
  },
  {
    text: "Supervisions & Intervisions",
    description: "Our specialists are never left alone with challenging issues and receive peer support"
  },
  {
    text: "Ethics",
    description: "All our specialists have been tested for adherence to ethical standards and follow them in their work"
  },
  {
    text: "Therapy Structure",
    description: "Sessions and therapy are structured and goal-oriented; you can always know which stage of the process you are at"
  },
];

export default function WordsBlock() {
  return (
    <div className={styles.wordsBlockWrapper}>
      <div className={styles.blockHeader}>
        <h2>Getting to Us</h2>
        <p>Specialists go through a strict selection process</p>
        <span>How We Select</span>
      </div>
      <div className={styles.wordsBlockGrid}>
        {blocksData.map((block, index) => (
          <div key={index} className={styles.blockCard}>
            <h3>{block.text}</h3>
            <p>{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}