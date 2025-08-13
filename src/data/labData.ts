export type MarkerCategory = 
  | "Basic Health"
  | "Heart Health"
  | "Metabolic Health"
  | "Hormones"
  | "Vitamins & Minerals"
  | "Inflammation & Immunity"
  | "Liver & Kidney"
  | "Blood Health"
  | "Cancer Markers"
  | "Specialty Tests";

export type Marker = 
  // Basic Health
  | "CBC"
  | "CMP"
  | "Lipid Panel"
  | "Basic Metabolic Panel"
  | "Thyroid Panel"
  
  // Heart Health
  | "hs-CRP"
  | "Homocysteine"
  | "Lipoprotein(a)"
  | "Apolipoprotein B"
  | "LDL Particle Number"
  
  // Metabolic Health
  | "Hemoglobin A1c"
  | "Fasting Glucose"
  | "Insulin"
  | "C-Peptide"
  | "OGTT"
  
  // Hormones
  | "TSH"
  | "Free T4"
  | "Free T3"
  | "Reverse T3"
  | "TPO Antibodies"
  | "Testosterone Total"
  | "Testosterone Free"
  | "Estradiol Sensitive"
  | "DHEA-S"
  | "Cortisol"
  | "Growth Hormone"
  | "IGF-1"
  | "LH"
  | "FSH"
  | "Prolactin"
  | "SHBG"
  
  // Vitamins & Minerals
  | "Vitamin D 25-OH"
  | "Vitamin B12"
  | "Folate"
  | "Iron"
  | "Ferritin"
  | "TIBC"
  | "Transferrin Saturation"
  | "Magnesium"
  | "Zinc"
  
  // Inflammation & Immunity
  | "ESR"
  | "ANA"
  | "RF"
  | "Anti-CCP"
  
  // Liver & Kidney
  | "ALT"
  | "AST"
  | "Bilirubin"
  | "Creatinine"
  | "BUN"
  | "eGFR"
  | "Microalbumin"
  
  // Blood Health
  | "PT/INR"
  | "PTT"
  | "D-Dimer"
  
  // Cancer Markers
  | "PSA"
  | "CEA"
  | "CA 19-9"
  | "CA 125"
  | "AFP"
  
  // Specialty Tests
  | "Methylmalonic Acid"
  | "Omega-3 Index"
  | "CoQ10"
  | "HbA1c Estimated Average Glucose";

export const markerCategories: Record<MarkerCategory, Marker[]> = {
  "Basic Health": [
    "CBC",
    "CMP", 
    "Lipid Panel",
    "Basic Metabolic Panel",
    "Thyroid Panel"
  ],
  "Heart Health": [
    "hs-CRP",
    "Homocysteine", 
    "Lipoprotein(a)",
    "Apolipoprotein B",
    "LDL Particle Number"
  ],
  "Metabolic Health": [
    "Hemoglobin A1c",
    "Fasting Glucose",
    "Insulin",
    "C-Peptide", 
    "OGTT"
  ],
  "Hormones": [
    "TSH",
    "Free T4",
    "Free T3",
    "Reverse T3",
    "TPO Antibodies",
    "Testosterone Total",
    "Testosterone Free", 
    "Estradiol Sensitive",
    "DHEA-S",
    "Cortisol",
    "Growth Hormone",
    "IGF-1",
    "LH",
    "FSH",
    "Prolactin",
    "SHBG"
  ],
  "Vitamins & Minerals": [
    "Vitamin D 25-OH",
    "Vitamin B12",
    "Folate",
    "Iron",
    "Ferritin",
    "TIBC", 
    "Transferrin Saturation",
    "Magnesium",
    "Zinc"
  ],
  "Inflammation & Immunity": [
    "ESR",
    "ANA",
    "RF",
    "Anti-CCP"
  ],
  "Liver & Kidney": [
    "ALT",
    "AST", 
    "Bilirubin",
    "Creatinine",
    "BUN",
    "eGFR",
    "Microalbumin"
  ],
  "Blood Health": [
    "PT/INR",
    "PTT",
    "D-Dimer"
  ],
  "Cancer Markers": [
    "PSA",
    "CEA",
    "CA 19-9", 
    "CA 125",
    "AFP"
  ],
  "Specialty Tests": [
    "Methylmalonic Acid",
    "Omega-3 Index",
    "CoQ10",
    "HbA1c Estimated Average Glucose"
  ]
};

export const markers: Marker[] = Object.values(markerCategories).flat();

export interface Panel {
  id: string;
  provider: string;
  name: string;
  price: number; // USD
  drawFee: number; // USD - lab draw fee
  markers: Marker[];
  url: string; // Affiliate or outbound URL
  description?: string;
}

export const lastUpdatedISO = "2025-01-13T00:00:00.000Z";

export const panels: Panel[] = [
  // Comprehensive Value Bundles
  {
    id: "ulta-complete-wellness",
    provider: "Ulta Lab Tests",
    name: "Complete Wellness Panel",
    price: 149,
    drawFee: 25,
    markers: ["CBC", "CMP", "Lipid Panel", "TSH", "Free T4", "Vitamin D 25-OH", "Hemoglobin A1c"],
    url: "https://www.ultalabtests.com/partner/complete-wellness",
    description: "Comprehensive health screening covering blood, metabolic, thyroid, and vitamin D status"
  },
  {
    id: "walkin-hormone-comprehensive-women",
    provider: "Walk-In Lab", 
    name: "Women's Hormone Complete Panel",
    price: 189,
    drawFee: 30,
    markers: ["Estradiol Sensitive", "TSH", "Free T4", "Free T3", "LH", "FSH", "Prolactin", "DHEA-S", "Testosterone Total"],
    url: "https://www.walkinlab.com/affiliate/womens-hormone-complete",
    description: "Comprehensive female hormone assessment including thyroid, reproductive, and adrenal hormones"
  },
  {
    id: "privatemd-mens-health-advanced",
    provider: "PrivateMDLabs",
    name: "Men's Advanced Health Panel", 
    price: 199,
    drawFee: 25,
    markers: ["Testosterone Total", "Testosterone Free", "SHBG", "TSH", "Free T4", "PSA", "CBC", "CMP", "Lipid Panel"],
    url: "https://www.privatemdlabs.com/affiliate/mens-advanced",
    description: "Complete men's health screening including hormones, prostate, blood work, and metabolic panel"
  },
  
  // Heart Health Focused
  {
    id: "dlabs-cardiac-risk",
    provider: "DiscountedLabs",
    name: "Advanced Cardiac Risk Assessment",
    price: 129,
    drawFee: 20,
    markers: ["Lipid Panel", "hs-CRP", "Homocysteine", "Lipoprotein(a)", "Apolipoprotein B"],
    url: "https://www.discountedlabs.com/affiliate/cardiac-risk",
    description: "Advanced cardiovascular risk markers beyond standard cholesterol testing"
  },
  
  // Metabolic Health
  {
    id: "ulta-diabetes-complete",
    provider: "Ulta Lab Tests",
    name: "Complete Diabetes Monitoring",
    price: 89,
    drawFee: 25,
    markers: ["Hemoglobin A1c", "Fasting Glucose", "Insulin", "C-Peptide"],
    url: "https://www.ultalabtests.com/partner/diabetes-complete",
    description: "Comprehensive diabetes and insulin resistance assessment"
  },
  
  // Thyroid Comprehensive
  {
    id: "walkin-thyroid-complete",
    provider: "Walk-In Lab",
    name: "Complete Thyroid Panel",
    price: 119,
    drawFee: 30,
    markers: ["TSH", "Free T4", "Free T3", "Reverse T3", "TPO Antibodies"],
    url: "https://www.walkinlab.com/affiliate/thyroid-complete",
    description: "Comprehensive thyroid function and autoimmune assessment"
  },
  
  // Nutrient Status
  {
    id: "privatemd-nutrient-panel",
    provider: "PrivateMDLabs", 
    name: "Essential Nutrient Panel",
    price: 159,
    drawFee: 25,
    markers: ["Vitamin D 25-OH", "Vitamin B12", "Folate", "Iron", "Ferritin", "TIBC", "Magnesium", "Zinc"],
    url: "https://www.privatemdlabs.com/affiliate/nutrient-panel",
    description: "Complete assessment of essential vitamins and minerals"
  },
  
  // Individual Tests - Basic
  {
    id: "ulta-cbc",
    provider: "Ulta Lab Tests",
    name: "Complete Blood Count (CBC)",
    price: 12,
    drawFee: 25,
    markers: ["CBC"],
    url: "https://www.ultalabtests.com/partner/cbc",
    description: "Complete blood count with differential"
  },
  {
    id: "ulta-cmp",
    provider: "Ulta Lab Tests", 
    name: "Comprehensive Metabolic Panel (CMP)",
    price: 15,
    drawFee: 25,
    markers: ["CMP"],
    url: "https://www.ultalabtests.com/partner/cmp",
    description: "14 tests including glucose, electrolytes, kidney and liver function"
  },
  {
    id: "walkin-lipids",
    provider: "Walk-In Lab",
    name: "Lipid Panel",
    price: 19,
    drawFee: 30,
    markers: ["Lipid Panel"],
    url: "https://www.walkinlab.com/affiliate/lipids",
    description: "Total cholesterol, HDL, LDL, triglycerides"
  },
  {
    id: "ulta-a1c",
    provider: "Ulta Lab Tests",
    name: "Hemoglobin A1c",
    price: 14,
    drawFee: 25,
    markers: ["Hemoglobin A1c"],
    url: "https://www.ultalabtests.com/partner/a1c",
    description: "3-month average blood sugar control"
  },
  
  // Thyroid Individual
  {
    id: "privatemd-tsh",
    provider: "PrivateMDLabs",
    name: "TSH (Thyroid Stimulating Hormone)",
    price: 11,
    drawFee: 25,
    markers: ["TSH"],
    url: "https://www.privatemdlabs.com/affiliate/tsh",
    description: "Primary thyroid function screening test"
  },
  {
    id: "privatemd-ft4",
    provider: "PrivateMDLabs", 
    name: "Free T4",
    price: 16,
    drawFee: 25,
    markers: ["Free T4"],
    url: "https://www.privatemdlabs.com/affiliate/ft4",
    description: "Active thyroid hormone measurement"
  },
  {
    id: "walkin-ft3",
    provider: "Walk-In Lab",
    name: "Free T3",
    price: 22,
    drawFee: 30,
    markers: ["Free T3"],
    url: "https://www.walkinlab.com/affiliate/ft3",
    description: "Most active thyroid hormone"
  },
  
  // Vitamins Individual
  {
    id: "walkin-vitd",
    provider: "Walk-In Lab",
    name: "Vitamin D 25-OH",
    price: 29,
    drawFee: 30,
    markers: ["Vitamin D 25-OH"],
    url: "https://www.walkinlab.com/affiliate/vitd",
    description: "Vitamin D storage and status"
  },
  {
    id: "dlabs-b12",
    provider: "DiscountedLabs",
    name: "Vitamin B12",
    price: 18,
    drawFee: 20,
    markers: ["Vitamin B12"],
    url: "https://www.discountedlabs.com/affiliate/b12",
    description: "Essential for nerve function and energy"
  },
  {
    id: "ulta-folate",
    provider: "Ulta Lab Tests",
    name: "Folate",
    price: 21,
    drawFee: 25,
    markers: ["Folate"],
    url: "https://www.ultalabtests.com/partner/folate",
    description: "Important for DNA synthesis and cell division"
  },
  
  // Iron Studies
  {
    id: "dlabs-ferritin",
    provider: "DiscountedLabs",
    name: "Ferritin",
    price: 17,
    drawFee: 20,
    markers: ["Ferritin"],
    url: "https://www.discountedlabs.com/affiliate/ferritin",
    description: "Iron storage levels"
  },
  {
    id: "privatemd-iron-panel",
    provider: "PrivateMDLabs",
    name: "Iron Studies Panel",
    price: 49,
    drawFee: 25,
    markers: ["Iron", "Ferritin", "TIBC", "Transferrin Saturation"],
    url: "https://www.privatemdlabs.com/affiliate/iron-studies",
    description: "Complete iron status assessment"
  },
  
  // Inflammation
  {
    id: "dlabs-hscrp",
    provider: "DiscountedLabs",
    name: "hs-CRP (High Sensitivity)",
    price: 18,
    drawFee: 20,
    markers: ["hs-CRP"],
    url: "https://www.discountedlabs.com/affiliate/hscrp",
    description: "Cardiovascular inflammation marker"
  },
  
  // Hormones Individual
  {
    id: "dlabs-testosterone",
    provider: "DiscountedLabs",
    name: "Testosterone Total",
    price: 29,
    drawFee: 20,
    markers: ["Testosterone Total"],
    url: "https://www.discountedlabs.com/affiliate/testosterone",
    description: "Total testosterone levels"
  },
  {
    id: "walkin-testosterone-free",
    provider: "Walk-In Lab",
    name: "Testosterone Free",
    price: 39,
    drawFee: 30,
    markers: ["Testosterone Free"],
    url: "https://www.walkinlab.com/affiliate/testosterone-free",
    description: "Bioavailable testosterone"
  },
  {
    id: "walkin-estradiol",
    provider: "Walk-In Lab",
    name: "Estradiol Sensitive",
    price: 32,
    drawFee: 30,
    markers: ["Estradiol Sensitive"],
    url: "https://www.walkinlab.com/affiliate/estradiol",
    description: "Primary estrogen hormone (sensitive assay)"
  },
  
  // Specialty Tests
  {
    id: "privatemd-homocysteine",
    provider: "PrivateMDLabs",
    name: "Homocysteine",
    price: 49,
    drawFee: 25,
    markers: ["Homocysteine"],
    url: "https://www.privatemdlabs.com/affiliate/homocysteine",
    description: "Cardiovascular risk and B-vitamin status"
  },
  {
    id: "dlabs-lpa",
    provider: "DiscountedLabs",
    name: "Lipoprotein(a)",
    price: 59,
    drawFee: 20,
    markers: ["Lipoprotein(a)"],
    url: "https://www.discountedlabs.com/affiliate/lpa",
    description: "Genetic cardiovascular risk factor"
  },
  {
    id: "walkin-psa",
    provider: "Walk-In Lab",
    name: "PSA (Prostate Specific Antigen)",
    price: 25,
    drawFee: 30,
    markers: ["PSA"],
    url: "https://www.walkinlab.com/affiliate/psa",
    description: "Prostate health screening"
  }
];

export type OptimizeResult = {
  chosen: Panel[];
  total: number;
  totalWithDrawFees: number;
  covered: Set<Marker>;
  uncovered: Marker[];
  savings: number;
  individualCost: number;
};

function calculateIndividualCost(markers: Marker[]): number {
  let total = 0;
  const drawFees = new Set<string>();
  
  for (const marker of markers) {
    // Find cheapest individual test for this marker
    const availablePanels = panels.filter(p => 
      p.markers.includes(marker) && p.markers.length === 1
    );
    
    if (availablePanels.length > 0) {
      const cheapest = availablePanels.reduce((min, panel) => 
        panel.price < min.price ? panel : min
      );
      total += cheapest.price;
      drawFees.add(cheapest.provider);
    }
  }
  
  // Add unique draw fees (one per provider)
  for (const provider of drawFees) {
    const providerPanel = panels.find(p => p.provider === provider);
    if (providerPanel) total += providerPanel.drawFee;
  }
  
  return total;
}

export function optimizePanels(selected: Marker[]): OptimizeResult {
  const desired = new Set<Marker>(selected);
  const covered = new Set<Marker>();
  const chosen: Panel[] = [];
  const providerDrawFees = new Set<string>();

  // Calculate cost if buying individually
  const individualCost = calculateIndividualCost(selected);

  // Panels can only help if they cover at least one desired and uncovered marker
  const candidates = panels.slice();

  while (true) {
    const remaining = Array.from(desired).filter((m) => !covered.has(m));
    if (remaining.length === 0) break;

    let best: { panel: Panel; newCount: number; ratio: number } | null = null;

    for (const p of candidates) {
      const newMarkers = p.markers.filter((m) => desired.has(m) && !covered.has(m));
      if (newMarkers.length === 0) continue;
      
      // Calculate cost including draw fee if this provider isn't already chosen
      const costWithDrawFee = p.price + (providerDrawFees.has(p.provider) ? 0 : p.drawFee);
      const ratio = costWithDrawFee / newMarkers.length; // lower is better
      
      if (!best || ratio < best.ratio) {
        best = { panel: p, newCount: newMarkers.length, ratio };
      }
    }

    if (!best) break; // cannot cover more markers

    chosen.push(best.panel);
    providerDrawFees.add(best.panel.provider);
    best.panel.markers.forEach((m) => {
      if (desired.has(m)) covered.add(m);
    });

    // remove chosen panel from candidates to avoid picking it twice
    const idx = candidates.findIndex((c) => c.id === best!.panel.id);
    if (idx >= 0) candidates.splice(idx, 1);

    // loop until all covered or no progress
    const stillRemaining = Array.from(desired).filter((m) => !covered.has(m));
    if (stillRemaining.length === 0) break;
  }

  const panelTotal = chosen.reduce((sum, p) => sum + p.price, 0);
  const drawFeeTotal = Array.from(providerDrawFees).reduce((sum, provider) => {
    const panel = chosen.find(p => p.provider === provider);
    return sum + (panel?.drawFee || 0);
  }, 0);
  
  const totalWithDrawFees = panelTotal + drawFeeTotal;
  const uncovered = Array.from(desired).filter((m) => !covered.has(m));
  const savings = Math.max(0, individualCost - totalWithDrawFees);

  return { 
    chosen, 
    total: panelTotal, 
    totalWithDrawFees,
    covered, 
    uncovered, 
    savings,
    individualCost
  };
}