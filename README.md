# Fatima Aslam — Portfolio Website

A fast, responsive, and accessible personal portfolio built with **Vue 3 (Composition API with `<script setup>`)**, **Vite**, and **Tailwind CSS**.

---

## 1. Quick Start & Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 2. Project Architecture & File Conventions

```
Portfolio/
├── index.html                   # HTML entrypoint, SEO tags, Google Fonts
├── tailwind.config.js           # Theme token definitions (Cafe Collection)
├── src/
│   ├── assets/
│   │   └── main.css             # Base styles, color tokens, and resets
│   ├── components/
│   │   ├── base/                # Reusable design system components
│   │   │   ├── BaseButton.vue   # Primary, outline & ghost buttons/links
│   │   │   ├── BaseCard.vue     # Uniform surface card container
│   │   │   ├── BaseInput.vue    # Accessible form input with validation
│   │   │   ├── BaseSection.vue  # Section wrapper with responsive padding
│   │   │   ├── BaseTextarea.vue # Accessible textarea with validation
│   │   │   ├── SectionHeading.vue # Eyebrow, heading & help text
│   │   │   ├── StatusBadge.vue  # Status indicator with token dots
│   │   │   └── TagBadge.vue     # Categorical & discipline badge
│   │   ├── layout/
│   │   │   └── FloatingNav.vue  # Quick nav pill (appears after intro)
│   │   └── sections/
│   │       ├── IntroSection.vue # Hero introduction & work values
│   │       ├── ScopeSection.vue # 3-stage framework & method
│   │       ├── ShowcaseSection.vue # Scroll-snap product carousel
│   │       ├── CaseStudiesSection.vue # Master-detail case studies
│   │       ├── DirectorySection.vue # Searchable & filterable table/cards
│   │       ├── AboutSection.vue # Biographical notes & core goal
│   │       └── ContactSection.vue # Direct channels & validated form
│   ├── composables/
│   │   ├── useActiveSection.js  # IntersectionObserver section tracker
│   │   ├── useContactForm.js    # Form state, validation & submission
│   │   ├── useDirectoryFilter.js # Search & category/status filter
│   │   └── useScrollCarousel.js # Scroll-snap track step calculations
│   ├── data/
│   │   ├── caseStudies.js       # Master-detail technical cases
│   │   ├── directory.js         # Archive of client engagements
│   │   ├── products.js          # Product showcase prototypes
│   │   ├── profile.js           # Bio, name, values, and contact links
│   │   └── scope.js             # 3-step development methodology
│   ├── services/
│   │   └── contact.js           # API integration stub for contact form
│   ├── App.vue                  # Main application flow
│   └── main.js                  # App instantiation
```

---

## 3. Where to Edit Content (All Data Files)

All content is completely decoupled from components. Edit the files below:

| File | Section | Content to Edit |
| :--- | :--- | :--- |
| `src/data/profile.js` | **Intro**, **About**, **Contact** | Name, designation, work value keywords, biography paragraphs, core goal, portrait toggle, and direct contact channels (Email, WhatsApp, LinkedIn, Instagram). |
| `src/data/scope.js` | **Scope & Framework** | Methodology title, help text, 3-stage framework steps, deliverables, and stage output boxes. |
| `src/data/products.js` | **Product Showcase** | 6 showcase cards: product name, client, category tag, description, and prototype image. |
| `src/data/caseStudies.js`| **Case Studies** | 3 in-depth technical studies: problem challenge, constraints, technical decisions, domain tags, and quantified result metrics. |
| `src/data/directory.js` | **Work Directory** | 10 client engagement records with client name, category, deliverables list, status (`Completed`, `In progress`, `On hold`, `Discovery`), and year. |

---

## 4. Theme & Color Palette Tokens (Cafe Collection)

All colors are centralized in `tailwind.config.js` and `src/assets/main.css`:

```javascript
// tailwind.config.js
colors: {
  background: '#E4D8CB', // CHAI   (RGB: 228 216 203) - Warm sand page background
  surface:    '#F1EEEB', // FROTH  (RGB: 241 238 235) - Ivory card & table surface
  ink:        '#241E1C', // Deep Espresso - Crisp high-contrast text & headings
  muted:      '#6E625B', // LATTE  (RGB: 160 144 134) - Secondary & caption text
  line:       '#CDC6C3', // CREME  (RGB: 204 198 195) - Dividers & subtle borders
  accent:     '#6B483D', // Roasted Mocha - Primary CTA, focus rings, links
  'accent-ink': '#FFFFFF',
  signal:     '#CFB3A9', // CINNA  (RGB: 207 179 169) - Warm blush signal & badges
}
```

### Typography
- **Headings**: `Bricolage Grotesque`
- **Body**: `Instrument Sans`
- Defined in `index.html` via Google Fonts and configured in `tailwind.config.js`.

---

## 5. How to Connect the Contact Form

Open `src/services/contact.js` and point `sendMessage` to your backend or third-party service:

### Option A: Formspree
```javascript
export async function sendMessage(formData) {
  if (formData._honey) return { success: true }

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(formData)
  })
  if (!response.ok) throw new Error('Submission failed.')
  return await response.json()
}
```

### Option B: EmailJS
```javascript
import emailjs from '@emailjs/browser'

export async function sendMessage(formData) {
  if (formData._honey) return { success: true }
  return await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
}
```

---

## 6. Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploying to Netlify
1. Push your code to your Git provider.
2. In [Netlify](https://netlify.com), select **"Add new site"** → **"Import an existing project"**.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.
