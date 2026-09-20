/**
 * Helper to generate a minimalist avatar placeholder SVG data URI using the Cafe Collection tokens:
 * FROTH (#F1EEEB), CREME (#CDC6C3), CHAI (#E4D8CB), ACCENT (#6B483D), LATTE (#A09086)
 */
const createPortraitSvg = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="320" height="320">
    <rect width="320" height="320" rx="16" fill="#F1EEEB"/>
    <rect x="2" y="2" width="316" height="316" rx="14" fill="none" stroke="#CDC6C3" stroke-width="2"/>
    <!-- Abstract Formulator Silhouette -->
    <g transform="translate(160, 160)" text-anchor="middle">
      <circle cx="0" cy="-35" r="42" fill="#E4D8CB" stroke="#6B483D" stroke-width="2.5"/>
      <path d="M -65 65 C -65 10, -35 5, 0 5 C 35 5, 65 10, 65 65" fill="#E4D8CB" stroke="#6B483D" stroke-width="2.5"/>
      <circle cx="0" cy="-35" r="14" fill="#6B483D" opacity="0.15"/>
    </g>
    <text x="160" y="285" fill="#6E625B" font-family="'Instrument Sans', sans-serif" font-size="11" font-weight="600" text-anchor="middle" letter-spacing="2">R&amp;D FORMULATOR</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

/**
 * Profile, Biography & Contact Section Data
 */
export const profileData = {
  eyebrow: "Pharmacist & Personal Care Formulator",
  name: "Fatima Aslam",
  designation: "Pharmacist · Formulation Strategist · Product Architect",
  location: "Lahore, PK",
  subline: "R&D Monographs",
  
  // Work values and keywords: exactly one or two words per item
  keywords: [
    "Clinical Rigor",
    "Tactile Beauty",
    "Evidence-Based",
    "Thermal Stability",
    "Product Architecture",
    "Consumer Empathy"
  ],

  ctaText: "Let's talk",
  ctaLink: "#contact",

  // Section 6: Biographical Notes
  about: {
    eyebrow: "Background & Philosophy",
    title: "Biographical Notes",
    paragraphs: [
      "I am a licensed clinical pharmacist specializing in personal care and cosmetic formulation physics. My work bridges strict molecular pharmacodynamics with high-luxury sensory architecture, ensuring every emulsion delivers verifiable cellular efficacy without compromising tactile delight.",
      "Over the past six years, I have engineered clinical protocols, scaled pilot batches to commercial manufacturing, and steered regulatory dossiers for innovative dermaceutical brands across the UK, EU, and South Asia."
    ],
    // Single highlighted line stating the core goal
    goal: "To eliminate pseudoscience from skincare by formulating uncompromising, peer-reviewed clinical products that scale reliably.",
    // Optional portrait image configuration
    showPortrait: true,
    portrait: {
      src: createPortraitSvg(),
      alt: "Fatima Aslam - Pharmacist and Formulation Strategist"
    }
  },

  // Section 7: Contact Info & Channels
  contact: {
    eyebrow: "Inquiries & Consultancies",
    title: "Let's Talk",
    description: "Whether you require a custom formulation pilot, accelerated stability troubleshooting, or clean-label regulatory substantiation, let's discuss your product roadmap.",
    channels: [
      {
        id: "email",
        label: "Direct Email",
        value: "contact@fatimaaslam.com",
        href: "mailto:contact@fatimaaslam.com",
        icon: "Mail"
      },
      {
        id: "whatsapp",
        label: "WhatsApp / Direct Desk",
        value: "+92 300 1234567",
        href: "https://wa.me/923001234567",
        icon: "MessageSquare"
      },
      {
        id: "linkedin",
        label: "LinkedIn Professional",
        value: "linkedin.com/in/fatima-aslam",
        href: "https://linkedin.com/in/fatima-aslam",
        icon: "Linkedin"
      },
      {
        id: "instagram",
        label: "Formulation Journal",
        value: "@fatima.formulates",
        href: "https://instagram.com/fatima.formulates",
        icon: "Instagram"
      }
    ]
  }
}
