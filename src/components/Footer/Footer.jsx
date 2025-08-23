"use client" 

import styles from './Footer.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'


const RelaxGame = () => {
    useEffect(() => {
        const canvas = document.getElementById('bubbleCanvas')
        const ctx = canvas.getContext('2d')
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const directions = ['up', 'down', 'left', 'right']
        const maxBubbles = 12

        const bubbles = Array.from({ length: maxBubbles }, () => {
            const dir = directions[Math.floor(Math.random() * directions.length)]
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 15 + Math.random() * 20,
                speed: 0.1 + Math.random() * 0.1, 
                dir,
                popping: false,
                alpha: 1
            }
        })

        canvas.addEventListener('click', (e) => {
            bubbles.forEach(b => {
                const dx = e.offsetX - b.x
                const dy = e.offsetY - b.y
                if (Math.sqrt(dx * dx + dy * dy) < b.radius) {
                    b.popping = true
                }
            })
        })

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            bubbles.forEach(b => {
                if (!b.popping) {
                    switch (b.dir) {
                        case 'up': b.y -= b.speed; break;
                        case 'down': b.y += b.speed; break;
                        case 'left': b.x -= b.speed; break;
                        case 'right': b.x += b.speed; break;
                    }

                    if (b.y + b.radius < 0) b.y = canvas.height + b.radius
                    if (b.y - b.radius > canvas.height) b.y = -b.radius
                    if (b.x + b.radius < 0) b.x = canvas.width + b.radius
                    if (b.x - b.radius > canvas.width) b.x = -b.radius

                    ctx.beginPath()
                    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
                    ctx.strokeStyle = 'black'
                    ctx.lineWidth = 0.7
                    ctx.stroke()
                } else {
                    ctx.beginPath()
                    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
                    ctx.fillStyle = 'transparent'
                    ctx.fill()
                    ctx.strokeStyle = `rgba(52, 219, 147, ${b.alpha})`
                    ctx.lineWidth = 2
                    ctx.stroke()

                    b.alpha -= 0.03
                    if (b.alpha <= 0) {
                        b.x = Math.random() * canvas.width
                        b.y = Math.random() * canvas.height
                        b.radius = 15 + Math.random() * 20
                        b.alpha = 1
                        b.popping = false
                        b.dir = directions[Math.floor(Math.random() * directions.length)]
                    }
                }
            })

            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return <canvas id="bubbleCanvas" className={styles.relaxGameCanvas}></canvas>
}




const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3>Support</h3>
                        <Link href="/publicOffer" className={styles.link}>Public offer</Link>
                        <Link href="/userAgreement" className={styles.link}>User agreement</Link>
                        <Link href="/privacyPolicy" className={styles.link}>Privacy Policy</Link>
                        <Link href="/dataProcessing" className={styles.link}>Consent to data processing</Link>
                        <Link href="/newsletter" className={styles.link}>Newsletter</Link>
                    </div>

                    <div className={styles.column}>
                        <Link href="/specialists" className={styles.link}>Specialists</Link>
                        <Link href="/tests" className={styles.link}>Tests</Link>
                        <Link href="/blog" className={styles.link}>Blog</Link>
                        <Link href="/exercises" className={styles.link}>Exercises</Link>
                    </div>  
                </div>

                <RelaxGame />

                <div className={styles.bottom}>
                    <div className={styles.social}>
                        <Link href="/" className={styles.socialLink}>Facebook</Link>
                        <Link href="/" className={styles.socialLink}>X</Link>
                        <Link href="/" className={styles.socialLink}>Instagram</Link>
                        <Link href="/" className={styles.socialLink}>YouTube</Link>
                    </div>

                    <div className={styles.copyright}>
                        <span>© 2025, BalanceHub</span>
                    </div>
                </div>       
            </div>
        </footer>
    )
}

export default Footer
