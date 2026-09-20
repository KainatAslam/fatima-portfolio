/**
 * Helper to generate a placeholder SVG data URI using ONLY the Cafe Collection tokens:
 * CHAI (#E4D8CB), FROTH (#F1EEEB), CREME (#CDC6C3), LATTE (#A09086), CINNA (#CFB3A9), INK (#241E1C), ACCENT (#6B483D)
 */
const createPlaceholderSvg = (code, title) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" width="640" height="400">
    <rect width="640" height="400" fill="#F1EEEB"/>
    <rect x="1" y="1" width="638" height="398" fill="none" stroke="#CDC6C3" stroke-width="2"/>
    <g transform="translate(320, 180)" text-anchor="middle">
      <rect x="-35" y="-70" width="70" height="125" rx="12" fill="#E4D8CB" stroke="#6B483D" stroke-width="2"/>
      <rect x="-14" y="-92" width="28" height="22" rx="4" fill="#6B483D"/>
      <line x1="-35" y1="-20" x2="35" y2="-20" stroke="#CDC6C3" stroke-width="1.5" stroke-dasharray="4 2"/>
      <circle cx="0" cy="15" r="8" fill="none" stroke="#6B483D" stroke-width="2"/>
    </g>
    <text x="36" y="52" fill="#6B483D" font-family="'Instrument Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="2">${code}</text>
    <text x="36" y="358" fill="#241E1C" font-family="'Bricolage Grotesque', sans-serif" font-size="22" font-weight="700">${title}</text>
    <text x="604" y="358" fill="#6E625B" font-family="'Instrument Sans', sans-serif" font-size="11" font-weight="600" text-anchor="end" letter-spacing="1.5">FORMULATION R&amp;D</text>
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

/**
 * Product showcase items
 */
export const productsData = {
  eyebrow: "Selected Formulations",
  title: "Product Showcase",
  description: "Proprietary cosmetic & dermatological formulations engineered for stability, tactile perfection, and active bioavailability.",
  items: [
    {
      id: "prod-01",
      code: "FORM-802",
      client: "Aura Dermaceuticals",
      product: "Cellular Repair Barrier Serum",
      category: "Biomimetic Emulsion",
      description: "Multi-lamellar ceramide complex with 5% ectoin and physiological lipid ratio (3:1:1).",
      image: createPlaceholderSvg("FORM-802", "Cellular Repair Serum"),
      alt: "Cellular Repair Barrier Serum prototype",
    },
    {
      id: "prod-02",
      code: "FORM-714",
      client: "Verdant Botanics",
      product: "Peptide & Bakuchiol Night Elixir",
      category: "Clinical Oil-Serum",
      description: "Anhydrous active delivery system preserving cold-pressed botanical squalane matrix.",
      image: createPlaceholderSvg("FORM-714", "Peptide & Bakuchiol Elixir"),
      alt: "Peptide & Bakuchiol Night Elixir prototype",
    },
    {
      id: "prod-03",
      code: "FORM-920",
      client: "Kroma Labs",
      product: "Encapsulated Retinal 0.15% Fluid",
      category: "Active Suspension",
      description: "Liposomal delivery cage preventing thermal degradation and reducing epidermal irritation.",
      image: createPlaceholderSvg("FORM-920", "Encapsulated Retinal 0.15%"),
      alt: "Encapsulated Retinal 0.15% Fluid prototype",
    },
    {
      id: "prod-04",
      code: "FORM-506",
      client: "PureOrigin Labs",
      product: "Ceramide Multi-Defense Mist",
      category: "Micro-Emulsion",
      description: "High-pressure micro-fluidized suspension with sub-micron droplet distribution.",
      image: createPlaceholderSvg("FORM-506", "Multi-Defense Mist"),
      alt: "Ceramide Multi-Defense Mist prototype",
    },
    {
      id: "prod-05",
      code: "FORM-640",
      client: "Solstice Skincare",
      product: "Invisible Fluid SPF 50+ PA++++",
      category: "Photostable Hybrid",
      description: "Ultra-sheer organic UV filter mesh with zero white cast and non-greasy dry touch.",
      image: createPlaceholderSvg("FORM-640", "Invisible Fluid SPF 50+"),
      alt: "Invisible Fluid SPF 50+ prototype",
    },
    {
      id: "prod-06",
      code: "FORM-432",
      client: "Nourish Flora",
      product: "Prebiotic Scalp Follicle Treatment",
      category: "Trichological Tonic",
      description: "Water-light scalp tonic with 3% Redensyl, fermented minerals, and zinc PCA.",
      image: createPlaceholderSvg("FORM-432", "Scalp Follicle Treatment"),
      alt: "Prebiotic Scalp Follicle Treatment prototype",
    }
  ]
}
