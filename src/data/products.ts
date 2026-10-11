import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "52708060102995",
    variantId: "52708060102995",
    slug: "hydra-foam-cleanser",
    title: "Hydra-Foam Cleanser",
    step: "Step 01: Cleanse",
    subtitle: "Gentle Micro-Foam with Salmon DNA PDRN & Low pH Amino Complex",
    tagline: "Supporting skin's defensive moisture barrier without stripping essential lipids",
    price: 35.0,
    volume: "150ml / 5.1 fl oz",
    images: [
      "/assets/products/cleanser-1.jpg",
      "/assets/products/cleanser-2.jpg",
    ],
    description:
      "A cloud-dense, micro-cellular cleansing foam formulated with bio-purified salmon DNA PDRN and gentle amino acid surfactants. Effectively dissolves airborne micro-particulates, excess sebum, and impurities while actively protecting your delicate acidic mantle.",
    benefits: [
      "Micro-bubble cellular absorption technology",
      "Maintains optimal pH 5.5 skin equilibrium",
      "Infuses bio-compatible PDRN to calm oxidative stress",
      "Non-stripping, ultra-soft post-cleanse barrier feel",
    ],
    ingredients: [
      {
        name: "Sodium DNA (PDRN)",
        description: "Medical-grade bio-active nucleotide that accelerates barrier restoration and cellular energy.",
      },
      {
        name: "17-Amino Acid Complex",
        description: "Biomimetic moisture factors mirroring human skin lipids for zero dryness post-wash.",
      },
      {
        name: "Centella Asiatica (Cica)",
        description: "High-grade botanical extract that calms micro-inflammation and redness.",
      },
      {
        name: "Ceramide NP",
        description: "Binds intercellular moisture lipids to shield against environmental pollutants.",
      },
    ],
    howToUse:
      "Dispense 1-2 pumps onto dampened palms. Massage gently over face and neck in circular motions for 60 seconds. Rinse thoroughly with lukewarm water. Use morning and night as Step 01 of your Skin Fitness routine.",
    clinicalResults: [
      "98% noted zero tightness or dryness after cleansing",
      "94% experienced clearer, refreshed pores within 7 days",
      "100% agreed skin felt soothingly calm and hydrated",
    ],
  },
  {
    id: "52708175642963",
    variantId: "52708175642963",
    slug: "reset-serum",
    title: "Reset Serum",
    step: "Step 02: Activate",
    subtitle: "Potent Bio-Cellular Concentrate for Rapid Regeneration",
    tagline: "High-concentration PDRN serum engineered to reset structural skin fatigue",
    price: 75.0,
    volume: "30ml / 1.0 fl oz",
    images: [
      "/assets/products/serum-1.jpg",
      "/assets/products/serum-2.jpg",
    ],
    description:
      "The crown jewel of our Skin Fitness line. Formulated with our proprietary bio-purified salmon DNA PDRN at clinical grade concentration, paired with multi-depth hyaluronic acid and niacinamide to restore elasticity, firm micro-contours, and impart radiant vitality.",
    benefits: [
      "Clinically proven +84% increase in deep dermal moisture",
      "Visibly firms, plumps, and smooths uneven texture",
      "Accelerates post-treatment barrier recovery & tone balance",
      "Weightless silk-gel texture absorbs in seconds without residue",
    ],
    ingredients: [
      {
        name: "High-Concentration PDRN (Sodium DNA)",
        description: "Bio-engineered salmon polydeoxyribonucleotides activating fibroblast regeneration.",
      },
      {
        name: "Niacinamide (5%)",
        description: "Brightens hyperpigmentation, balances sebum, and visibly refines pore appearance.",
      },
      {
        name: "8-Layer Hyaluronic Acid Complex",
        description: "Multi-weight molecular hyaluronic acids penetrating every epidermal layer.",
      },
      {
        name: "Adenosine & Tripeptide-1",
        description: "Stimulates collagen synthesis to soften dynamic micro-lines and wrinkles.",
      },
    ],
    howToUse:
      "Apply 3-4 drops directly to cleansed skin after toner. Smooth evenly over face, neck, and décolletage. Gently press with warm palms to optimize micro-cellular absorption. Follow with Step 03: Hydra-Nutrition Essence.",
    clinicalResults: [
      "+84% increase in cellular moisture retention after 24 hours",
      "92% observed firmer skin rebound within 14 days",
      "89% noticed reduced redness and improved glow",
    ],
  },
  {
    id: "52708176101715",
    variantId: "52708176101715",
    slug: "hydra-nutrition-essence",
    title: "Hydra-Nutrition Essence",
    step: "Step 03: Recovery",
    subtitle: "Intense Moisture Infusion & Barrier Reinforcement",
    tagline: "Restoring physiological hydration levels and lipid envelope balance",
    price: 65.0,
    volume: "100ml / 3.4 fl oz",
    images: [
      "/assets/products/essence-1.jpg",
      "/assets/products/essence-2.jpg",
    ],
    description:
      "A nutrient-dense micro-emulsion that delivers deep nourishment without heaviness. Melts into the skin to seal in active serums and replenish essential ceramides, plant squalane, and vital fatty acids for long-lasting cellular vitality.",
    benefits: [
      "Replenishes the epidermal lipid bilayer barrier",
      "Delivers 48-hour continuous hydration lock",
      "Shields skin against oxidative stress and blue-light damage",
      "Imparts an unmistakable Korean glass-skin dewy finish",
    ],
    ingredients: [
      {
        name: "PDRN + Galactomyces Ferment Filtrate",
        description: "Enhances cellular metabolic turnover and refines rough stratum corneum.",
      },
      {
        name: "Olive-Derived Squalane",
        description: "Biomimetic emollient providing deep velvet softness without clogging pores.",
      },
      {
        name: "Triple Ceramide Matrix (EOP, NS, NP)",
        description: "Rebuilds damaged skin barriers and prevents trans-epidermal water loss (TEWL).",
      },
      {
        name: "D-Panthenol (Vitamin B5)",
        description: "Deeply quenches dehydration while relieving sensitive, reactive skin conditions.",
      },
    ],
    howToUse:
      "Dispense a nickel-sized amount into palms. Press and gently roll across face and neck until fully absorbed. Layer a second coat on dry zones during colder climates or night routines.",
    clinicalResults: [
      "96% showed measurable skin barrier reinforcement",
      "95% reported all-day suppleness without oiliness",
      "91% saw noticeable improvement in skin texture luminosity",
    ],
  },
  {
    id: "52696490180947",
    variantId: "52696490180947",
    slug: "lash-and-eye-conditioner",
    title: "Lash and Eye Conditioner",
    step: "Step 04: Maintain",
    subtitle: "Targeted Micro-Circulation & Peptide Follicle Support",
    tagline: "Dual-action conditioning for delicate peri-orbital skin and lash density",
    price: 65.0,
    volume: "15ml / 0.5 fl oz",
    images: [
      "/assets/products/eye-1.jpg",
      "/assets/products/eye-2.jpg",
    ],
    description:
      "An ultra-precision dual formula that addresses under-eye dark circles, morning puffiness, and fine crow's feet while simultaneously conditioning eyelash and brow follicles for fuller, healthier lash density.",
    benefits: [
      "Visibly diminishes under-eye shadows and puffiness",
      "Promotes stronger, thicker, and more conditioned eyelashes",
      "Ophthalmologist and dermatologist tested, safe for sensitive contact lens wearers",
      "Cooling, fatigue-reversing instant drainage effect",
    ],
    ingredients: [
      {
        name: "Bio-PDRN + Acetyl Hexapeptide-8",
        description: "Relaxes micro-contractions around eye contours to smooth dynamic expression lines.",
      },
      {
        name: "Biotinoyl Tripeptide-1",
        description: "Nourishes hair follicle root cells to prevent premature eyelash breakage.",
      },
      {
        name: "Natural Green Coffee Extract",
        description: "Stimulates lymphatic drainage to rapidly de-puff eye bags.",
      },
      {
        name: "Camellia Sinensis Bio-Flavonoids",
        description: "Potent free-radical scavenger preserving orbital dermal elasticity.",
      },
    ],
    howToUse:
      "Using your ring finger or the applicator tip, gently pat a pearl-sized amount along the orbital bone from inner to outer corner. Sweep any remainder upward through clean lash tips and brow hairs.",
    clinicalResults: [
      "88% saw brighter under-eye contours in 2 weeks",
      "85% noticed visibly longer-looking, nourished lashes in 4 weeks",
      "97% experienced zero stinging or eye irritation",
    ],
  },
  {
    id: "53279358419283",
    variantId: "53279358419283",
    slug: "skin-fitness-collection",
    title: "Skin Fitness Collection",
    step: "Complete Regimen",
    subtitle: "The Complete 4-Step Korean Skin Fitness Protocol",
    tagline: "All four core formulations engineered to synergistically cleanse, activate, recover, and maintain",
    price: 225.0,
    originalPrice: 240.0,
    volume: "Complete 4-Step System",
    images: [
      "/assets/products/collection-1.jpg",
      "/assets/products/cleanser-1.jpg",
      "/assets/products/serum-1.jpg",
      "/assets/products/essence-1.jpg",
    ],
    description:
      "The ultimate complete regimen engineered for complete cellular skin fitness. Contains full-size bottles of all four cornerstone products: Hydra-Foam Cleanser, Reset Serum, Hydra-Nutrition Essence, and Lash and Eye Conditioner in an embossed luxury presentation gift box.",
    benefits: [
      "Save $15 with our complete curated regimen bundle",
      "Synergistic 4-phase PDRN bio-delivery system",
      "Comprehensive care: Cleanses, Activates, Recovers, and Maintains",
      "Includes luxury embossed keepsake packaging",
    ],
    ingredients: [
      {
        name: "Step 01: Hydra-Foam Cleanser (150ml)",
        description: "Low pH cellular wash that preserves defensive lipids.",
      },
      {
        name: "Step 02: Reset Serum (30ml)",
        description: "Medical-grade PDRN regeneration booster.",
      },
      {
        name: "Step 03: Hydra-Nutrition Essence (100ml)",
        description: "Ceramide + squalane continuous hydration lock.",
      },
      {
        name: "Step 04: Lash and Eye Conditioner (15ml)",
        description: "Orbital de-puffing & follicle strengthening.",
      },
    ],
    howToUse:
      "Follow the daily 4-Step routine both morning and evening. 1: Cleanse with Hydra-Foam, 2: Activate with Reset Serum, 3: Recover with Hydra-Nutrition Essence, and 4: Maintain with Lash and Eye Conditioner.",
    clinicalResults: [
      "99% reported noticeably stronger, more resilient skin barrier",
      "+92% measured improvement in dermal elasticity & bounce",
      "100% would recommend the 4-step routine to skincare enthusiasts",
    ],
  },
];

export const UPSELL_PRODUCTS = PRODUCTS.slice(0, 4);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
