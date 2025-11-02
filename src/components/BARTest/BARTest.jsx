'use client'

import React, { useState } from 'react'
import styles from '../PTSDTest/PTSDTest.module.scss'
import tests from '../../data/testsData.js'

const BARTest = () => {
  const test = tests.find((t) => t.slug === 'bar')
  if (!test) {
    return <div>Test not found</div>;
  }

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
    <div className={styles.page}>
      <h1 className={styles.title}>{test.title}</h1>

      <div className={styles.topBlock}>
        <p>{test.description}</p>
        <h2>{test.subTitle}</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.left}>
            <div className={styles.instruction}>
                <p>{test.instruction}</p>
            </div>
          <div className={styles.decoding}>
            <h3>Decoding the results</h3>
            <p>{test.decoding}</p>
          </div>
        </div>

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
                  className={`${styles.option} ${answers[current] === 'yes' ? styles.optionYes : ''}`}
                  onClick={() => handleAnswer('yes')}
                >
                  Yes
                </button>
                <button
                  className={`${styles.option} ${answers[current] === 'no' ? styles.optionNo : ''}`}
                  onClick={() => handleAnswer('no')}
                >
                  No
                </button>
              </div>

              <div className={styles.nav}>
                <button
                  className={styles.btn}
                  onClick={handlePrev}
                  disabled={current === 0}
                >
                  Previous
                </button>

                {current < test.questions.length - 1 ? (
                  <button
                    className={styles.btn}
                    onClick={handleNext}
                    disabled={answers[current] === null}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className={styles.btn}
                    onClick={handleSubmit}
                    disabled={answers[current] === null}
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className={styles.result}>
              <h2>Your result: {score} / {test.questions.length}</h2>
              {score < test.threshold ? (
                <p>No clear signs of burnout were detected.</p>
              ) : (
                <p>
                  The score indicates possible signs of burnout.  
                  It is recommended to take rest and consult a psychologist if needed.
                </p>
              )}
              <button className={styles.restart} onClick={restartTest}>
                Take Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BARTest