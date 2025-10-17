'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Contact.module.scss'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    console.log('Message sent:', formData)
    setSubmitted(true)
  }

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We’re here to help. Reach out to us if you have questions about therapy, collaboration, or the BalanceHub community.
        </p>

        <div className={styles.content}>
          {/* Left section */}
          <div className={styles.info}>
            <h2>Get in touch</h2>
            <p>
              Email us at{' '}
              <Link href="mailto:info@balancehub.com">info@balancehub.com</Link>{' '}
              or use the form to send a message.
            </p>
            <p>
              You can also find us on social media for updates, articles, and mental health insights.
            </p>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {submitted ? (
              <p className={styles.thankYou}>
                Thank you for your message! We’ll get back to you soon 💚
              </p>
            ) : (
              <>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  />
                  {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  />
                  {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}