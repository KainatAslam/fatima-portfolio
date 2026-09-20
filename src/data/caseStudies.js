/**
 * Case Studies Data
 * Master-detail technical investigations, trade-offs, and quantified results.
 */
export const caseStudiesData = {
  eyebrow: "Proven Impact",
  title: "Technical Case Studies",
  description: "Real-world engineering and formulation breakthroughs addressing severe chemical, stability, and scale constraints.",
  cases: [
    {
      id: "case-1",
      client: "Aura Dermaceuticals",
      title: "Stabilizing Volatile Bio-Actives in Water-Rich Emulsions",
      shortProblem: "Phase separation and rapid oxidation in a 5% Ectoin + Multi-Ceramide barrier serum.",
      problem: {
        challenge: "The formulation team faced severe phase-splitting under accelerated thermal cycling (45°C/75% RH) and premature active oxidation within 14 days of pilot packaging.",
        constraints: [
          "Zero synthetic emulsifiers (PEG-free, silicone-free mandate)",
          "Must achieve skin-penetrating lamellar vesicle structure",
          "Target batch scale-up to 2,000L without high-shear homogenization degradation"
        ]
      },
      solution: {
        approach: "Re-architected the fluid structure using high-pressure micro-fluidized lecithin bilayer self-assembly coupled with a dual-phase synergistic antioxidant complex (Ferulic Acid + Tocopherol isomer).",
        decisions: [
          "Replaced standard acrylic carbomer with sclerotium-xanthan bio-ferment mesh for high electrolyte tolerance at pH 5.2.",
          "Implemented nitrogen-purged low-temperature batching (<38°C) to prevent thermal degradation during emulsification.",
          "Selected airless pouch-in-bottle pump to preserve active oxidation state over 24-month shelf life."
        ],
        stack: [
          "Micro-Fluidization",
          "Liposomal Carrier",
          "Phospholipid Matrix",
          "Freeze-Thaw Cycling",
          "INCI Compliance"
        ],
        results: [
          {
            value: "24 Mo",
            label: "Verified Thermal Shelf Stability"
          },
          {
            value: "98.4%",
            label: "Active Retention at 6 Months"
          },
          {
            value: "4.8/5.0",
            label: "Consumer Sensory Barrier Score"
          }
        ]
      }
    },
    {
      id: "case-2",
      client: "Kroma Labs",
      title: "Encapsulating 0.15% Retinaldehyde Without Barrier Irritation",
      shortProblem: "Photolytic instability and transepidermal water loss (TEWL) spike in high-potency retinoid.",
      problem: {
        challenge: "Retinaldehyde provides 11x faster conversion than retinol but exhibits intense photolytic degradation and severe epidermal barrier sting in sensitive skin cohorts.",
        constraints: [
          "No synthetic penetration enhancers (no ethoxydiglycol or propylene glycol)",
          "Must achieve crystalline clarity without cloudiness or precipitating crystals",
          "Non-irritating clinical safety profile verified by HRIPT dermatological patch test"
        ]
      },
      solution: {
        approach: "Engineered a supramolecular cyclodextrin-lipid cage that shields the conjugated polyene chain from light while enabling slow-release enzymatic triggering upon contact with skin esterases.",
        decisions: [
          "Engineered cyclodextrin inclusion cavity with cold-processed squalane shell.",
          "Buffering with panthenol and bisabolol to prevent inflammatory mediator release.",
          "Amber borosilicate glass packaging with calibrated 0.25ml metered dropper."
        ],
        stack: [
          "Supramolecular Chemistry",
          "Controlled Release",
          "HRIPT Patch Testing",
          "UV-Vis Spectrophotometry",
          "Squalane Solubilization"
        ],
        results: [
          {
            value: "0.0%",
            label: "Adverse Irritation in HRIPT Trials"
          },
          {
            value: "3.2x",
            label: "Enhanced Retinoid Bioavailability"
          },
          {
            value: "< 0.5%",
            label: "Degradation After 90-Day Light Exposure"
          }
        ]
      }
    },
    {
      id: "case-3",
      client: "Solstice Skincare",
      title: "Zero-White-Cast SPF 50+ Hybrid Photostable System",
      shortProblem: "Heavy chalky residue and oiliness across diverse skin phototypes (Fitzpatrick I–VI).",
      problem: {
        challenge: "Creating an ultra-high protection broad-spectrum sun care fluid (UVA-PF > 25) that spreads with water-like fluidity and leaves undetectable finish across all skin tones.",
        constraints: [
          "Compliant with stringent EU Annex VI and FDA OTC Monograph standards",
          "Reef-safe requirement (strictly Oxybenzone- and Octinoxate-free)",
          "Non-comedogenic, dry-touch finish suitable under makeup and humid conditions"
        ]
      },
      solution: {
        approach: "Created a bi-continuous hybrid lattice combining micronized, silica-coated Zinc Oxide with modern organic photostable filters (Tinosorb S, Uvinul A Plus) suspended in volatile plant alkanes.",
        decisions: [
          "Used silica encapsulation to prevent catalytic ROS formation from inorganic mineral filters.",
          "Replaced heavy silicone fluids with biodegradable C13-15 isoamyl laurate for zero-tack dry down.",
          "Integrated antioxidant Pongamia extract to boost in-vivo SPF efficiency by +18%."
        ],
        stack: [
          "Photostability Kinetics",
          "Critical Wavelength >375nm",
          "Silica Surface Modification",
          "EU / FDA Regulatory Protocol",
          "ISO 24443 / 24444"
        ],
        results: [
          {
            value: "SPF 56.2",
            label: "In-Vivo Broad-Spectrum Tested"
          },
          {
            value: "100%",
            label: "Zero White Cast on Fitzpatrick V & VI"
          },
          {
            value: "80 Min",
            label: "Water Resistance Standard Passed"
          }
        ]
      }
    }
  ]
}
