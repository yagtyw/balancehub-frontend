'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
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

  const faqData = [
    {
      question: 'When will I receive a response to my application?',
      answer:
        'We aim to contact you within two weeks after you submit your application, provided your profile matches our criteria. If you don’t hear from us, it means we’re unable to move forward at this time — but we truly appreciate your interest.',
    },
    {
      question: 'Is there a deadline for submitting the application?',
      answer: 'No, there are no deadlines. We are continuously welcoming new specialists who align with our values and approach.',
    },
    {
      question: 'What kind of cooperation terms do you offer?',
      answer:
        'All terms are discussed individually. We aim to create a flexible and mutually beneficial collaboration based on your experience and needs.',
    },
    {
      question: 'Why do I need to share a session recording?',
      answer:
        'We review session recordings to better understand your therapeutic style and approach. Only the heads of our psychological service have access. You can share a link and delete it anytime. The recording should be of a full session (typically 50–60 minutes).',
    },
    {
      question: 'Which therapeutic approaches do you work with?',
      answer:
        'We focus on evidence-based behavioral approaches. If your practice is rooted in CBT, DBT, or other cognitive-behavioral methods, you\'re a great fit.',
    },
    {
      question: 'Do you accept psychologists who work with teenagers?',
      answer: 'Currently, we provide consultations only for adult clients (18+). We do not offer services for minors.',
    },
  ]

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showError, setShowError] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
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
    if (value.trim() && showError) setShowError(false)
  }

  const nextStep = () => {
    const currentAnswer = answers[step]?.trim()
    if (!currentAnswer) {
      setShowError(true)
      return
    }
    setShowError(false)
    setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const submitForm = () => {
    const errors = {}
    const phoneClean = formData.phone?.replace(/[^\d+]/g, '')

    if (!formData.fullName?.trim()) errors.fullName = true
    if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = true
    if (!formData.age || formData.age < 18 || formData.age > 120) errors.age = true
    if (!formData.consent) errors.consent = true
    if (!formData.phone || !/^\+\d{1,4}\s?\d{5,15}$/.test(phoneClean)) errors.phone = 'invalid'

    if (Object.keys(errors).length > 0) {
      setFinalErrors(errors)
      return
    }

    setFinalErrors({})
    console.log('Application submitted:', { answers, ...formData })
    alert('Thank you! Your application has been sent.')
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const form = document.getElementById('application-form')
    if (form) observer.observe(form)

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          <span className={styles.headerText}>
            Become <br />
            a psychologist <br />
            at our center
          </span>
          <img src="/img/paperAirplane.png" alt="Paper airplane" className={styles.paperPlane} />
        </h1>
        <p className={styles.invitation}>
          We invite practicing psychologists with education in evidence-based approaches to cooperate
        </p>
        <button
          type="button"
          onClick={() => {
            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={styles.toForm}
        >
          Fill out the form
        </button>
      </div>

      <div className={styles.opportunitySection}>
        <h2 className={styles.sectionTitle}>We offer</h2>
        <ul className={styles.benefitsList}>
          {[
            'Stable flow of clients',
            'Individual terms',
            'Reputation',
            'Professional development',
          ].map((title, i) => (
            <li key={i} className={styles.benefitItem}>
              <span className={styles.checkIcon}>✓</span>
              <div>
                <strong>{title}</strong>
                <p>{[
                  'Our audience trusts us, and specialists featured in our content are in high demand.',
                  'We aim to attract qualified professionals and are open to discussing personalized collaboration terms.',
                  'We are respected within the psychotherapy community and actively sought after for collaboration.',
                  'We organize case consultations, working groups, and lectures with invited experts.',
                ][i]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

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

      <div className={styles.selectionProcess}>
        <h2 className={styles.processTitle}>How is the selection process going?</h2>
        <div className={styles.steps}>
          {[1, 2, 3].map((num, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>{num}</div>
              <h3>{['Application Form', 'Interview', 'Final interview'][i]}</h3>
              <p>{[
                'Fill out the form below and attach a link to a video recording of the session with the client (with his consent and without a video image of the client himself).',
                'If your application is suitable for us, our manager will contact you and offer you an initial interview, including a role-playing game with the team.',
                'Final interview with the heads of the center. We coordinate the details of the cooperation and get to work.',
              ][i]}</p>
            </div>
          ))}
          <div className={styles.stepLine}></div>
          <div className={styles.stepLine}></div>
        </div>
      </div>

      <div className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsTitle}>Testimonials from Our Team</h2>
        <div className={styles.testimonialsGrid}>
          {[
            {
              name: 'Emily Carter',
              position: 'Head of Psychological Services',
              quotes: [
                'From the very beginning of my professional journey, it was important to me not only to provide psychological support, but to do so among like-minded professionals who share my values and ethical principles.',
                'Supervision sessions hold special value for me. They are a safe space where I can openly discuss both professional challenges and personal experiences, knowing I’ll receive support, guidance, and diverse perspectives — not criticism.',
                'The center offers excellent opportunities for <span class="highlight">professional growth</span>: internal training with experienced specialists, regular knowledge exchange among psychologists, and thematic working groups.',
                'An important advantage for me is that the center takes care of <span class="highlight">administrative tasks</span>. This allows me to focus on the quality of my work and dedicate more time to self-development.',
              ],
            },
            {
              name: 'Theo Bennett',
              position: 'Clinical Psychologist, CBT Specialist',
              quotes: [
                'Joining BalanceHub was one of the best decisions in my career. I finally found a place where my approach is not only accepted but actively supported.',
                'The <span class="highlight">stable flow of clients</span> allows me to maintain a balanced schedule without the stress of self-promotion.',
                'I appreciate the culture of mutual respect and continuous learning. We have access to <span class="highlight">professional development programs</span>, lectures from leading experts, and case discussions that deepen my understanding.',
                'What truly sets this center apart is the sense of community. Here, I don’t feel like just another therapist — I’m part of a team that values collaboration, transparency, and genuine care for both clients and colleagues.',
              ],
            },
          ].map((item, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.testimonialQuoteIcon}>“</div>
              <div className={styles.testimonialImage}>
                <img src={`/img/${i === 0 ? 'EmilyCarter' : 'TheoBennett'}.png`} alt={item.name} />
              </div>
              <div className={styles.testimonialContent}>
                <h3>{item.name}</h3>
                <p className={styles.position}>{item.position}</p>
                {item.quotes.map((q, idx) => (
                  <p
                    key={idx}
                    className={styles.quote}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
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
              <button type="button" onClick={nextStep} className={styles.submitButton}>
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

      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>
          Frequently Asked <span>Questions</span>
        </h2>
        <div className={styles.faqGrid}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className={styles.faqQuestion}>
                <h3 className={styles.questionText}>{item.question}</h3>
                <span className={styles.faqToggle}>{activeFaq === index ? '−' : '+'}</span>
              </div>
              {activeFaq === index && <p className={styles.faqAnswer}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}