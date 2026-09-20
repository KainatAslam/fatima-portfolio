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
      shortProblem: "Phase separation and oxidation in a barrier serum.",
      problem: {
        challenge: "The serum split under thermal cycling and its actives oxidized within 14 days.",
        constraints: [
          "PEG- and silicone-free",
          "Skin-penetrating lamellar structure",
          "Scale to 2,000L without degradation"
        ]
      },
      solution: {
        approach: "Rebuilt the fluid structure with micro-fluidized lecithin and a dual-phase antioxidant system.",
        decisions: [
          "Swapped carbomer for a high-tolerance sclerotium-xanthan mesh.",
          "Used nitrogen-purged batching below 38°C.",
          "Selected airless pouch-in-bottle packaging."
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
      shortProblem: "Photolytic instability and irritation in a high-potency retinoid.",
      problem: {
        challenge: "Retinaldehyde converts quickly but degrades in light and stings sensitive skin.",
        constraints: [
          "No synthetic penetration enhancers",
          "Crystal clarity without precipitation",
          "Non-irritating HRIPT safety profile"
        ]
      },
      solution: {
        approach: "Built a cyclodextrin-lipid cage to shield retinaldehyde and release it slowly on skin.",
        decisions: [
          "Paired a cyclodextrin cavity with a cold-processed squalane shell.",
          "Buffered with panthenol and bisabolol.",
          "Used amber glass with a metered dropper."
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
      shortProblem: "White cast and oiliness across diverse skin tones.",
      problem: {
        challenge: "The SPF fluid needed high UVA protection, water-like spread, and an invisible finish.",
        constraints: [
          "EU Annex VI and FDA OTC compliant",
          "Oxybenzone- and Octinoxate-free",
          "Dry-touch and non-comedogenic"
        ]
      },
      solution: {
        approach: "Created a hybrid lattice of silica-coated Zinc Oxide and photostable organic filters in plant alkanes.",
        decisions: [
          "Used silica encapsulation to limit mineral-filter reactivity.",
          "Replaced heavy silicones with biodegradable isoamyl laurate.",
          "Added Pongamia extract to improve in-vivo SPF efficiency."
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
