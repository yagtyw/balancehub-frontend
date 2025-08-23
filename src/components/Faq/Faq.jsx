'use client'

import { useState } from 'react'
import styles from './Faq.module.scss'

const faqItems = [
  {
    question: "How do I book a session?",
    answer: "Fill out the form on our website, and our admin will contact you to suggest a specialist and schedule your appointment."
  },
  {
    question: "Can I choose a specialist by phone?",
    answer: "No, selecting a specialist by phone isn’t available. You can only choose a specialist through the online form under “Find a Specialist.”"
  },
  {
    question: "Can I pay from abroad?",
    answer: "Yes! International payments are accepted. Please check details with our admin."
  },
  {
    question: "How much does a consultation cost?",
    answer: "Consultations start at $80. The exact price depends on the specialist’s experience and training."
  },
  {
    question: "Are sessions offline or online?",
    answer: "Currently, all sessions are online via Zoom or Google Meet."
  },
  {
    question: "Can psychologists prescribe medication?",
    answer: "No, they cannot prescribe medication. If needed, they will recommend clinics or psychiatrists for further consultation."
  },
  {
    question: "How long does therapy usually last?",
    answer: "Duration varies. Clinical issues (e.g., depression, anxiety) usually take 10–20 sessions, sometimes more. Non-clinical topics (relationships, decision-making) may require fewer sessions."
  },
  {
    question: "How do I pay for a session?",
    answer: "Payment is via a link sent to your email or messenger 3 days before your session."
  },
  {
    question: "Can I cancel or reschedule?",
    answer: "Yes! Free cancellations or rescheduling up to 48 hours before the session. After that, prepayment is non-refundable."
  },
  {
    question: "What if I’m not happy with my specialist?",
    answer: "Share your concerns via our feedback form. If needed, we can suggest another specialist."
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? styles.faqItem + ' ' + styles.active : styles.faqItem}>
      <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.questionText}>{question}</h3>
        <span className={styles.faqToggle}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  )
}



export default function FAQPage() {
  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>
        Answering the most frequently asked <span>questions</span>
      </h2>

      <div className={styles.faqGrid}>
        <div>
          {faqItems.slice(0, 5).map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div>
          {faqItems.slice(5).map((item, index) => (
            <FAQItem
              key={index + 5}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
