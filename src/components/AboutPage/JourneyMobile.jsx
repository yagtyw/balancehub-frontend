import React from 'react'
import styles from './AboutPage.module.scss'

export default function JourneyMobile() {
  return (
    <div className={styles.journeyCards}>
      <div className={styles.journeyCard}>
        <h3>2019</h3>
        <p>
          <strong>Dr. Emily Carter</strong> and <strong>Dr. Jordan Kim</strong> began discussing a new kind of mental health support.
        </p>
        <div className={styles.arrowDown}></div>
      </div>

      <div className={styles.journeyCard}>
        <h3>2020</h3>
        <p>
          Launched the first BalanceHub sessions. Created self-help tools and exercises.
        </p>
        <div className={styles.arrowDown}></div>
      </div>

      <div className={styles.journeyCard}>
        <h3>2022</h3>
        <p>
          Grew to a team of 10 licensed psychologists. Started publishing articles and guides.
        </p>
        <div className={styles.arrowDown}></div>
      </div>

      <div className={styles.journeyCard}>
        <h3>2024</h3>
        <p>
          Today, we’re 20 specialists helping people worldwide. Still grounded in science.
        </p>
      </div>
    </div>
  )
}
