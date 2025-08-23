'use client'

import Link from 'next/link'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import styles from './ForTherapists.module.scss'

export default function ForTherapists() {
  const questions = [
    'Your basic education\nPlace of study, name of specialty and year of graduation',
    'Your additional education in psychotherapeutic methods\nCourse name, place of study, number of hours, year of graduation\nFor example: CBT course, University of Psychology, 250 hours, 2024',
    'Work experience\nTell us what year you have been in private practice since. Also indicate your places of work (e.g., hospitals, psychotherapy centers).',
    'Are you undergoing individual supervision?\nIf yes, please specify from what year and in what approach.',
    'Attach a link to the recording of the session with the client\nYou can only record yourself on video so that we don’t see the client’s face, but their voice should be clearly audible. You may also send a demo session under special conditions (free/reduced price). Please ensure you have the client’s informed consent.',
    'Describe the consultation in the following order:\n1. Session number\n2. What approach do you use?\n3. Brief medical history\n4. Client’s problems, requests, and results achieved so far\n5. What did you do at the meeting (with justification)\n6. Your hypotheses: why the problems arose, how they are maintained, and how to work with them',
  ]

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showError, setShowError] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    consent: false,
  })

  const [finalErrors, setFinalErrors] = useState({})

  const currentQuestion = questions[step]
  const isFinalStep = step === questions.length

  const handleAnswer = (e) => {
    const value = e.target.value
    setAnswers((prev) => ({ ...prev, [step]: value }))
    if (value.trim() && showError) {
      setShowError(false)
    }
  }

  const nextStep = () => {
    const currentAnswer = answers[step]?.trim()
    if (!currentAnswer) {
      setShowError(true)
      return
    }

    if (step < questions.length) {
      setShowError(false)
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const submitForm = () => {
    const errors = {}

    if (!formData.fullName?.trim()) errors.fullName = true
    if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = true
    if (!formData.age || formData.age < 18 || formData.age > 120) errors.age = true
    if (!formData.consent) errors.consent = true

    if (!formData.phone || !/^\+\d{1,4}\s?\d{5,15}$/.test(formData.phone.replace(/[^\d+]/g, ''))) {
      errors.phone = 'invalid'
    }

    if (Object.keys(errors).length > 0) {
      setFinalErrors(errors)
      return
    }

    setFinalErrors({})

    const fullData = {
      answers,
      ...formData,
    }

    console.log('Application submitted:', fullData)
    alert('Thank you! Your application has been sent.')
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          <span className={styles.headerText}>
            Become <br />
            a psychologist <br />
            at our center
          </span>
          <img
            src="/img/paperAirplane.png"
            alt="Paper airplane"
            className={styles.paperPlane}
          />
        </h1>
        <p className={styles.invitation}>
          We invite practicing psychologists with education in evidence-based approaches to cooperate
        </p>
        <Link href="#application-form" className={styles.toForm}>
          Fill out the form
        </Link>
      </div>

      {/* === We offer === */}
      <div className={styles.opportunitySection}>
        <h2 className={styles.sectionTitle}>We offer</h2>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <strong>Stable flow of clients</strong>
              <p>Our audience trusts us, and specialists featured in our content are in high demand.</p>
            </div>
          </li>
          <li className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <strong>Individual terms</strong>
              <p>We aim to attract qualified professionals and are open to discussing personalized collaboration terms.</p>
            </div>
          </li>
          <li className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <strong>Reputation</strong>
              <p>We are respected within the psychotherapy community and actively sought after for collaboration.</p>
            </div>
          </li>
          <li className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <strong>Professional development</strong>
              <p>We organize case consultations, working groups, and lectures with invited experts.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* === What we expect === */}
      <div className={styles.requirementsSection}>
        <h3 className={styles.requirementsTitle}>What we expect</h3>
        <p className={styles.requirementsText}>
          <strong>Requirements for candidates:</strong>
        </p>
        <ul className={styles.requirementsList}>
          <li>Completed higher education.</li>
          <li>Qualification: "Clinical Psychologist".</li>
          <li>Minimum of 3 years of experience as a psychologist.</li>
          <li>Basic training in Cognitive Behavioral Therapy (250+ hours).</li>
          <li>Regular supervision with documented confirmation (letter from supervisor).</li>
        </ul>
      </div>

      <div id="application-form" className={styles.formContainer}>
        {!isFinalStep ? (
          <>
            <h2>Application Form</h2>
            <p>
              Question <strong>{step + 1}</strong> of {questions.length}
            </p>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <div className={styles.questionCard}>
              <label htmlFor="current-answer" className={styles.questionLabel}>
                {currentQuestion.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </label>
              <textarea
                id="current-answer"
                value={answers[step] || ''}
                onChange={handleAnswer}
                placeholder="Your detailed answer"
                className={`${styles.textarea} ${showError ? styles.error : ''}`}
                rows="6"
              />
              {showError && (
                <p className={styles.errorMessage}>Please answer the question before proceeding.</p>
              )}
            </div>

            <div className={styles.formNavigation}>
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 0}
                className={`${styles.navButton} ${step === 0 ? styles.disabled : ''}`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className={styles.submitButton}
              >
                {step === questions.length - 1 ? 'Go to Contact Info' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Final Step: Contact Information</h2>
            <p>Please provide your details and confirm your consent.</p>

            <div className={styles.questionCard}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className={`${styles.input} ${finalErrors.fullName ? styles.error : ''}`}
                  />
                  {finalErrors.fullName && (
                    <p className={styles.errorMessage}>Please enter your full name.</p>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <PhoneInput
                    international
                    defaultCountry="RU"
                    placeholder="+7 921 123-45-67"
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    className={`${styles.phoneInputWrapper} ${finalErrors.phone ? styles.error : ''}`}
                    inputClassName={styles.input}
                  />
                  {finalErrors.phone && (
                    <p className={styles.errorMessage}>Please enter a valid phone number.</p>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`${styles.input} ${finalErrors.email ? styles.error : ''}`}
                  />
                  {finalErrors.email && (
                    <p className={styles.errorMessage}>Please enter a valid email.</p>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className={`${styles.input} ${finalErrors.age ? styles.error : ''}`}
                  />
                  {finalErrors.age && (
                    <p className={styles.errorMessage}>Please enter your age.</p>
                  )}
                </div>
              </div>

              <div className={styles.consentBox}>
                <label>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                  />
                  I agree to the{' '}
                  <Link href="/public-offer" target="_blank" className={styles.link}>
                    Public Offer
                  </Link>{' '}
                  and consent to the processing of my personal data.
                </label>
                {finalErrors.consent && (
                  <p className={styles.errorMessage}>You must accept the agreement.</p>
                )}
              </div>
            </div>

            <div className={styles.formNavigation}>
              <button type="button" onClick={prevStep} className={styles.navButton}>
                Back
              </button>
              <button type="button" onClick={submitForm} className={styles.submitButton}>
                Submit Application
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}