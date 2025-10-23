'use client'

import React from "react"
import styles from './Tests.module.scss'
import Link from "next/link"

const Tests = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Online psychological tests and questionnaires with results and interpretation
      </h1>

      <p className={styles.description}>
        Online psychological assessments can help you identify any <b>potential</b> issues or conditions, 
        as well as regularly monitor their progress in conjunction with a{' '}
        <Link href="/specialists" className={styles.specialistLink}>
          professional
        </Link>.
        <br /><br />
        You can access these tests for free on our website, where you will find a range of options 
        for taking the tests <b>anonymously</b>.
      </p>

      <div className={styles.testsList}>
        <Link href="/tests/ptsd" className={styles.testCard}>
          <div className={styles.testHeader}>PTSD</div>
          <p className={styles.testSubtitle}>Post-Traumatic Stress Disorder Test</p>
        </Link>
        <Link href="/tests/bar" className={styles.testCard}>
          <div className={styles.testHeader}>BAR</div>
          <p className={styles.testSubtitle}>Bipolar Affective Disorder Test</p>
        </Link>
        <Link href="/tests/psychosomatic" className={styles.testCard}>
          <div className={styles.testHeader}>Psychosomatics</div>
          <p className={styles.testSubtitle}>Psychosomatic Symptoms Test</p>
        </Link>
      </div>
      <div className={styles.noteBlock}>
        <h2 className={styles.noteTitle}> Please note!</h2>
        <p className={styles.noteText}>
          No test to identify psychological problems or a questionnaire can serve as a full-fledged basis for making a diagnosis. <br />
          To receive a diagnosis and assessment of the condition, as well as for psychological help, 
          you need to contact a{' '}
          <Link href="/specialists" className={styles.noteLink}>
            specialist
          </Link>.
          <br /><br />
          Psychological tests are more like tools for <strong>self-discovery</strong>, and passing them 
          can be a starting point on the way to therapy. You can take psychological tests and, 
          based on their results, choose a suitable <strong>specialist</strong> or approach.
        </p>
      </div>
    </div>
  )
}

export default Tests