# BalanceHub Frontend

BalanceHub is a mental health support platform built on evidence-based psychology.  
The frontend is developed with **React** and **Next.js**, following modern web development practices.

---

## Overview

Currently implemented pages:
- **Home page**
- **For Therapists** — application form for psychologists who want to join
- **Our Center** — About Us, Services, Contacts
- **Specialists** — directory of psychologists with detailed profiles
- **Tests & Exercises** — interactive self-assessment tools and guided exercises
- - **Contact Form** — request submission with validation and feedback
Planned pages and features:
- **Blog** — mental health articles with filtering and search

---

## Key Features

### 🧩 React & Next.js
- Built with **React** and **Next.js App Router**
- Client-side navigation using `next/link`
- Uses hooks: `useState`, `useRef` for interactive components

### 📱 Responsive Design
- Fully responsive layout for **mobile, tablet, and desktop**
- Mobile-first approach
- Smooth **burger menu** with overlay and close-on-click
- Desktop **dropdown menus** with hover effects and delayed close

### 🎨 Styling & UI
- **SCSS modules** for scoped, maintainable, and reusable styles
- Consistent design system (typography, buttons, forms, animations)
- Custom animations for hover effects, transitions, and loading states

### 🔌 Interactivity
- Interactive mobile menu with smooth open/close
- Dropdowns with timing control to prevent accidental close
- Form validation and user feedback in the "For Therapists" section
- Animated elements (e.g. flying paper airplane) for visual engagement

### ✅ Planned Enhancements
- Interactive psychological tests with instant results
- Step-by-step exercises with progress tracking
- Blog with filters, categories, and search functionality
- Specialist profiles with photos, experience, and contact options
- Form validation with real-time error messages and success confirmation

---
## Technologies

- **React** — Component-based UI library
- **Next.js** — React framework for SSR, SSG, and App Router
- **SCSS** — CSS preprocessor for scalable and maintainable styling
- **Git & GitHub** — Version control and project hosting
- **VS Code** — Development environment

---

## Installation & Running

1. Clone the repository:
```bash
git clone https://github.com/yagtyw/balancehub-frontend.git

```

2. Navigate to the project folder:
cd balancehub-frontend

3. Install dependencies:
npm install

4. Run in development mode:
npm run dev

5. Open in your browser:  http://localhost:3000


Scripts

dev – Run project in development mode
build – Create production-ready build
start – Run production build
