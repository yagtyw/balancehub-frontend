'use client'

import React, { useState } from 'react'
import styles from './PTSDTest.module.scss'
import tests from "../../data/testsData.js"

const PTSDTest = () => {
  const test = tests.find((t) => t.slug === 'ptsd')

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(test.questions.length).fill(null))
  const [score, setScore] = useState(null)

  const handleAnswer = (value) => {
    const updated = [...answers]
    updated[current] = value
    setAnswers(updated)
  }

  const handleNext = () => {
    if (answers[current] === null) return
    setCurrent((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (current > 0) setCurrent((prev) => prev - 1)
  }

  const handleSubmit = () => {
    if (answers.includes(null)) return
    const total = answers.filter(a => a === 'yes').length
    setScore(total)
  }

  const restartTest = () => {
    setAnswers(Array(test.questions.length).fill(null))
    setScore(null)
    setCurrent(0)
  }

  return (
    <div className={styles.pageBackground}>
      <div className={styles.headerBlock}>
        <h1 className={styles.mainTitle}>{test.title}</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.textColumn}>
          <p className={styles.instruction}>{test.instruction}</p>
          <div className={styles.decoding}>
            <h3>Decoding the results</h3>
            <p>{test.decoding}</p>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.form}>
            {score === null ? (
              <>
                <p className={styles.question}>
                  <span className={styles.number}>
                    {current + 1} / {test.questions.length}
                  </span>
                  {test.questions[current]}
                </p>

                <div className={styles.options}>
                  <button
                    className={`${styles.option} ${answers[current] === 'yes' ? styles.activeYes : ''}`}
                    onClick={() => handleAnswer('yes')}
                  >
                    Yes
                  </button>
                  <button
                    className={`${styles.option} ${answers[current] === 'no' ? styles.activeNo : ''}`}
                    onClick={() => handleAnswer('no')}
                  >
                    No
                  </button>
                </div>

                <div className={styles.nav}>
                  <button
                    className={styles.navBtn}
                    onClick={handlePrev}
                    disabled={current === 0}
                  >
                    Previous
                  </button>

                  {current < test.questions.length - 1 ? (
                    <button
                      className={styles.navBtn}
                      onClick={handleNext}
                      disabled={answers[current] === null}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={styles.submitBtn}
                      onClick={handleSubmit}
                      disabled={answers[current] === null}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className={styles.resultBox}>
                <h2>Your result: {score} / {test.questions.length}</h2>
                {score < test.threshold ? (
                  <p>No clear signs of PTSD were detected.</p>
                ) : (
                  <p>
                    The score indicates the presence of post-traumatic stress symptoms.  
                    It is recommended to consult a mental health professional for assessment and support.
                  </p>
                )}
                <button className={styles.restartBtn} onClick={restartTest}>
                  Take Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PTSDTest
