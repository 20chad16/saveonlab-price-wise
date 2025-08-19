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
  | "Specialty Tests"
  | "Autoimmune"
  | "Food Sensitivities"
  | "Heavy Metals"
  | "Comprehensive Panels";

export type Marker = 
  // Basic Health - Panel Components
  | "CBC"
  | "CMP"
  | "Lipid Panel"
  | "Basic Metabolic Panel"
  | "Thyroid Panel"
  | "Urinalysis"
  | "Electrolyte Panel"
  
  // Lipid Panel Components
  | "Total Cholesterol"
  | "HDL Cholesterol"
  | "LDL Cholesterol"
  | "Triglycerides"
  | "Non-HDL Cholesterol"
  | "Total Cholesterol/HDL Ratio"
  | "LDL/HDL Ratio"
  
  // CBC Components
  | "White Blood Cell Count"
  | "Red Blood Cell Count"
  | "Hemoglobin"
  | "Hematocrit"
  | "Mean Corpuscular Volume"
  | "Mean Corpuscular Hemoglobin"
  | "Mean Corpuscular Hemoglobin Concentration"
  | "Red Cell Distribution Width"
  | "Platelet Count"
  | "Mean Platelet Volume"
  | "Neutrophils"
  | "Lymphocytes"
  | "Monocytes"
  | "Eosinophils"
  | "Basophils"
  
  // CMP Components
  | "Glucose"
  | "BUN"
  | "Creatinine"
  | "eGFR"
  | "BUN/Creatinine Ratio"
  | "Sodium"
  | "Potassium"
  | "Chloride"
  | "Carbon Dioxide"
  | "Calcium"
  | "Total Protein"
  | "Albumin"
  | "Globulin"
  | "A/G Ratio"
  | "Bilirubin Total"
  | "Alkaline Phosphatase"
  | "AST"
  | "ALT"
  
  // Basic Metabolic Panel Components
  | "BMP Glucose"
  | "BMP BUN"
  | "BMP Creatinine"
  | "BMP eGFR"
  | "BMP Sodium"
  | "BMP Potassium"
  | "BMP Chloride"
  | "BMP Carbon Dioxide"
  
  // Heart Health
  | "hs-CRP"
  | "Homocysteine"
  | "Lipoprotein(a)"
  | "Apolipoprotein B"
  | "LDL Particle Number"
  | "HDL Particle Number"
  | "Oxidized LDL"
  | "MPO (Myeloperoxidase)"
  | "PLAC Test"
  | "Cardiac Troponin"
  | "BNP"
  | "NT-proBNP"
  
  // Metabolic Health
  | "Hemoglobin A1c"
  | "Fasting Glucose"
  | "Insulin"
  | "C-Peptide"
  | "OGTT"
  | "Fructosamine"
  | "1,5-Anhydroglucitol"
  | "Adiponectin"
  | "Leptin"
  | "Ghrelin"
  
  // Hormones
  | "TSH"
  | "Free T4"
  | "Free T3"
  | "Reverse T3"
  | "TPO Antibodies"
  | "Thyroglobulin Antibodies"
  | "Testosterone Total"
  | "Testosterone Total (MS)"
  | "Testosterone Free"
  | "Testosterone Free (Equilibrium Dialysis)"
  | "Estradiol Sensitive"
  | "DHEA-S"
  | "Cortisol"
  | "Cortisol AM"
  | "Cortisol 4-Point"
  | "Growth Hormone"
  | "IGF-1"
  | "LH"
  | "FSH"
  | "Prolactin"
  | "SHBG"
  | "Progesterone"
  | "17-OH Progesterone"
  | "Androstenedione"
  | "Pregnenolone"
  | "Aldosterone"
  | "Renin"
  | "Parathyroid Hormone"
  | "Calcitonin"
  
  // Vitamins & Minerals
  | "Vitamin D 25-OH"
  | "Vitamin D 1,25-OH"
  | "Vitamin B12"
  | "Folate"
  | "Vitamin B1 (Thiamine)"
  | "Vitamin B2 (Riboflavin)"
  | "Vitamin B3 (Niacin)"
  | "Vitamin B5 (Pantothenic Acid)"
  | "Vitamin B6"
  | "Biotin"
  | "Vitamin C"
  | "Vitamin A"
  | "Vitamin E"
  | "Vitamin K"
  | "Iron"
  | "Ferritin"
  | "TIBC"
  | "Transferrin Saturation"
  | "Transferrin"
  | "Magnesium"
  | "Zinc"
  | "Copper"
  | "Selenium"
  | "Chromium"
  | "Manganese"
  | "Iodine"
  | "Calcium"
  | "Phosphorus"
  | "Potassium"
  | "Sodium"
  
  // Inflammation & Immunity
  | "ESR"
  | "ANA"
  | "RF"
  | "Anti-CCP"
  | "Complement C3"
  | "Complement C4"
  | "IgG"
  | "IgA"
  | "IgM"
  | "IgE Total"
  | "IL-6"
  | "TNF-Alpha"
  | "Fibrinogen"
  | "Sed Rate"
  
  // Liver & Kidney
  | "ALT"
  | "AST"
  | "Bilirubin"
  | "Bilirubin Direct"
  | "Alkaline Phosphatase"
  | "GGT"
  | "Albumin"
  | "Total Protein"
  | "Creatinine"
  | "BUN"
  | "eGFR"
  | "Microalbumin"
  | "Cystatin C"
  | "Uric Acid"
  
  // Blood Health
  | "PT/INR"
  | "PTT"
  | "D-Dimer"
  | "Fibrinogen"
  | "Factor V Leiden"
  | "Protein C"
  | "Protein S"
  | "Antithrombin III"
  | "Reticulocyte Count"
  | "Haptoglobin"
  | "LDH"
  
  // Cancer Markers
  | "PSA"
  | "CEA"
  | "CA 19-9"
  | "CA 125"
  | "AFP"
  | "CA 15-3"
  | "CA 27.29"
  | "Beta-hCG"
  | "HE4"
  | "Chromogranin A"
  | "NSE"
  
  // Autoimmune
  | "Anti-dsDNA"
  | "Anti-Sm"
  | "Anti-RNP"
  | "Anti-SSA/Ro"
  | "Anti-SSB/La"
  | "Anti-Scl-70"
  | "Anti-Centromere"
  | "Anti-Jo-1"
  | "ANCA"
  | "Anti-Mitochondrial"
  | "Anti-Smooth Muscle"
  | "Anti-LKM"
  | "Anti-TPO"
  | "Anti-Thyroglobulin"
  | "Celiac Panel"
  | "HLA-B27"
  
  // Food Sensitivities
  | "IgG Food Panel"
  | "IgE Food Panel"
  | "Gluten Sensitivity Panel"
  | "Histamine Intolerance"
  | "SIBO Breath Test"
  | "Lactulose Breath Test"
  
  // Heavy Metals
  | "Lead"
  | "Mercury"
  | "Cadmium"
  | "Arsenic"
  | "Aluminum"
  | "Heavy Metals Panel"
  
  // Specialty Tests
  | "Methylmalonic Acid"
  | "Omega-3 Index"
  | "CoQ10"
  | "HbA1c Estimated Average Glucose"
  | "TMAO"
  | "Zonulin"
  | "Calprotectin"
  | "Lactoferrin"
  | "Alpha-1 Antitrypsin"
  | "Tryptase"
  | "Histamine"
  | "DAO (Diamine Oxidase)"
  | "MTHFR"
  | "ApoE Genotype"
  | "Telomere Length"
  | "Anti-Mullerian Hormone"
  | "COMT";

export const markerCategories: Record<MarkerCategory, Marker[]> = {
  "Basic Health": [
    "CBC",
    "CMP", 
    "Lipid Panel",
    "Basic Metabolic Panel",
    "Thyroid Panel",
    "Urinalysis",
    "Electrolyte Panel"
  ],
  "Heart Health": [
    "hs-CRP",
    "Homocysteine", 
    "Lipoprotein(a)",
    "Apolipoprotein B",
    "LDL Particle Number",
    "HDL Particle Number",
    "Oxidized LDL",
    "MPO (Myeloperoxidase)",
    "PLAC Test",
    "Cardiac Troponin",
    "BNP",
    "NT-proBNP"
  ],
  "Metabolic Health": [
    "Hemoglobin A1c",
    "Fasting Glucose",
    "Insulin",
    "C-Peptide", 
    "OGTT",
    "Fructosamine",
    "1,5-Anhydroglucitol",
    "Adiponectin",
    "Leptin",
    "Ghrelin"
  ],
  "Hormones": [
    "TSH",
    "Free T4",
    "Free T3",
    "Reverse T3",
    "TPO Antibodies",
    "Thyroglobulin Antibodies",
    "Testosterone Total",
    "Testosterone Total (MS)",
    "Testosterone Free",
    "Testosterone Free (Equilibrium Dialysis)",
    "Estradiol Sensitive",
    "DHEA-S",
    "Cortisol",
    "Cortisol AM",
    "Cortisol 4-Point",
    "Growth Hormone",
    "IGF-1",
    "LH",
    "FSH",
    "Prolactin",
    "SHBG",
    "Progesterone",
    "17-OH Progesterone",
    "Androstenedione",
    "Pregnenolone",
    "Aldosterone",
    "Renin",
    "Parathyroid Hormone",
    "Calcitonin"
  ],
  "Vitamins & Minerals": [
    "Vitamin D 25-OH",
    "Vitamin D 1,25-OH",
    "Vitamin B12",
    "Folate",
    "Vitamin B1 (Thiamine)",
    "Vitamin B2 (Riboflavin)",
    "Vitamin B3 (Niacin)",
    "Vitamin B5 (Pantothenic Acid)",
    "Vitamin B6",
    "Biotin",
    "Vitamin C",
    "Vitamin A",
    "Vitamin E",
    "Vitamin K",
    "Iron",
    "Ferritin",
    "TIBC", 
    "Transferrin Saturation",
    "Transferrin",
    "Magnesium",
    "Zinc",
    "Copper",
    "Selenium",
    "Chromium",
    "Manganese",
    "Iodine",
    "Calcium",
    "Phosphorus",
    "Potassium",
    "Sodium"
  ],
  "Inflammation & Immunity": [
    "ESR",
    "ANA",
    "RF",
    "Anti-CCP",
    "Complement C3",
    "Complement C4",
    "IgG",
    "IgA",
    "IgM",
    "IgE Total",
    "IL-6",
    "TNF-Alpha",
    "Fibrinogen",
    "Sed Rate"
  ],
  "Liver & Kidney": [
    "ALT",
    "AST", 
    "Bilirubin",
    "Bilirubin Direct",
    "Alkaline Phosphatase",
    "GGT",
    "Albumin",
    "Total Protein",
    "Creatinine",
    "BUN",
    "eGFR",
    "Microalbumin",
    "Cystatin C",
    "Uric Acid"
  ],
  "Blood Health": [
    "PT/INR",
    "PTT",
    "D-Dimer",
    "Fibrinogen",
    "Factor V Leiden",
    "Protein C",
    "Protein S",
    "Antithrombin III",
    "Reticulocyte Count",
    "Haptoglobin",
    "LDH"
  ],
  "Cancer Markers": [
    "PSA",
    "CEA",
    "CA 19-9", 
    "CA 125",
    "AFP",
    "CA 15-3",
    "CA 27.29",
    "Beta-hCG",
    "HE4",
    "Chromogranin A",
    "NSE"
  ],
  "Autoimmune": [
    "Anti-dsDNA",
    "Anti-Sm",
    "Anti-RNP",
    "Anti-SSA/Ro",
    "Anti-SSB/La",
    "Anti-Scl-70",
    "Anti-Centromere",
    "Anti-Jo-1",
    "ANCA",
    "Anti-Mitochondrial",
    "Anti-Smooth Muscle",
    "Anti-LKM",
    "Anti-TPO",
    "Anti-Thyroglobulin",
    "Celiac Panel",
    "HLA-B27"
  ],
  "Food Sensitivities": [
    "IgG Food Panel",
    "IgE Food Panel",
    "Gluten Sensitivity Panel",
    "Histamine Intolerance",
    "SIBO Breath Test",
    "Lactulose Breath Test"
  ],
  "Heavy Metals": [
    "Lead",
    "Mercury",
    "Cadmium",
    "Arsenic",
    "Aluminum",
    "Heavy Metals Panel"
  ],
  "Comprehensive Panels": [
    "CBC",
    "CMP",
    "Lipid Panel",
    "Thyroid Panel",
    "Hemoglobin A1c",
    "Vitamin D 25-OH",
    "Vitamin B12",
    "Ferritin",
    "hs-CRP",
    "PSA"
  ],
  "Specialty Tests": [
    "Methylmalonic Acid",
    "Omega-3 Index",
    "CoQ10",
    "HbA1c Estimated Average Glucose",
    "TMAO",
    "Zonulin",
    "Calprotectin",
    "Lactoferrin",
    "Alpha-1 Antitrypsin",
    "Tryptase",
    "Histamine",
    "DAO (Diamine Oxidase)",
    "MTHFR",
    "ApoE Genotype",
    "Telomere Length"
  ]
};

export const markers: Marker[] = Object.values(markerCategories).flat();

export interface Panel {
  id: string;
  provider: string;
  seller?: string;
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
    markers: [
      // CBC components
      "CBC", "White Blood Cell Count", "Red Blood Cell Count", "Hemoglobin", "Hematocrit", "Mean Corpuscular Volume", "Mean Corpuscular Hemoglobin", "Mean Corpuscular Hemoglobin Concentration", "Red Cell Distribution Width", "Platelet Count", "Mean Platelet Volume", "Neutrophils", "Lymphocytes", "Monocytes", "Eosinophils", "Basophils",
      // CMP components  
      "CMP", "Glucose", "BUN", "Creatinine", "eGFR", "BUN/Creatinine Ratio", "Sodium", "Potassium", "Chloride", "Carbon Dioxide", "Calcium", "Total Protein", "Albumin", "Globulin", "A/G Ratio", "Bilirubin Total", "Alkaline Phosphatase", "AST", "ALT",
      // Lipid Panel components
      "Lipid Panel", "Total Cholesterol", "HDL Cholesterol", "LDL Cholesterol", "Triglycerides", "Non-HDL Cholesterol", "Total Cholesterol/HDL Ratio", "LDL/HDL Ratio",
      // Individual markers
      "TSH", "Free T4", "Vitamin D 25-OH", "Hemoglobin A1c"
    ],
    url: "https://www.ultalabtests.com/partner/complete-wellness",
    description: "Comprehensive health screening covering blood, metabolic, thyroid, and vitamin D status"
  },
  {
    id: "quest-executive-physical",
    provider: "Quest Diagnostics",
    name: "Executive Health Panel",
    price: 299,
    drawFee: 35,
    markers: ["CBC", "CMP", "Lipid Panel", "TSH", "Free T4", "Free T3", "Vitamin D 25-OH", "Vitamin B12", "Folate", "hs-CRP", "Hemoglobin A1c", "PSA", "Ferritin"],
    url: "https://www.questdirect.com/executive-health",
    description: "Comprehensive executive-level health assessment with advanced biomarkers"
  },
  {
    id: "labcorp-comprehensive-wellness",
    provider: "LabCorp",
    name: "Comprehensive Wellness Profile",
    price: 279,
    drawFee: 39,
    markers: ["CBC", "CMP", "Lipid Panel", "TSH", "Free T4", "Vitamin D 25-OH", "Vitamin B12", "Folate", "Iron", "Ferritin", "TIBC", "hs-CRP"],
    url: "https://www.labcorp.com/wellness-profile",
    description: "Complete health and wellness assessment including nutrient status"
  },

  // Women's Health
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
    id: "quest-womens-fertility",
    provider: "Quest Diagnostics",
    name: "Women's Fertility Panel",
    price: 159,
    drawFee: 35,
    markers: ["FSH", "LH", "Estradiol Sensitive", "Progesterone", "TSH", "Prolactin", "Anti-Mullerian Hormone"],
    url: "https://www.questdirect.com/womens-fertility",
    description: "Comprehensive fertility assessment for women"
  },
  {
    id: "labcorp-menopause-panel",
    provider: "LabCorp",
    name: "Menopause Panel",
    price: 129,
    drawFee: 39,
    markers: ["FSH", "LH", "Estradiol Sensitive", "TSH", "Free T4"],
    url: "https://www.labcorp.com/menopause-panel",
    description: "Hormone assessment for menopausal symptoms"
  },

  // Men's Health
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
  {
    id: "quest-mens-hormone-panel",
    provider: "Quest Diagnostics",
    name: "Men's Hormone Panel",
    price: 139,
    drawFee: 35,
    markers: ["Testosterone Total", "Testosterone Free", "SHBG", "LH", "FSH", "Estradiol Sensitive"],
    url: "https://www.questdirect.com/mens-hormone",
    description: "Complete male hormone assessment"
  },
  {
    id: "labcorp-male-vitality",
    provider: "LabCorp",
    name: "Male Vitality Panel",
    price: 169,
    drawFee: 39,
    markers: ["Testosterone Total", "Testosterone Free", "DHEA-S", "TSH", "Free T4", "Growth Hormone", "IGF-1"],
    url: "https://www.labcorp.com/male-vitality",
    description: "Comprehensive male hormone and vitality assessment"
  },
  
  // Heart Health Focused
  {
    id: "dlabs-cardiac-risk",
    provider: "DiscountedLabs",
    name: "Advanced Cardiac Risk Assessment",
    price: 129,
    drawFee: 20,
    markers: [
      "Lipid Panel", "Total Cholesterol", "HDL Cholesterol", "LDL Cholesterol", "Triglycerides", "Non-HDL Cholesterol", "Total Cholesterol/HDL Ratio", "LDL/HDL Ratio",
      "hs-CRP", "Homocysteine", "Lipoprotein(a)", "Apolipoprotein B"
    ],
    url: "https://www.discountedlabs.com/affiliate/cardiac-risk",
    description: "Advanced cardiovascular risk markers beyond standard cholesterol testing"
  },
  {
    id: "quest-cardiac-comprehensive",
    provider: "Quest Diagnostics",
    name: "Comprehensive Cardiac Panel",
    price: 189,
    drawFee: 35,
    markers: ["Lipid Panel", "hs-CRP", "Homocysteine", "Lipoprotein(a)", "Apolipoprotein B", "LDL Particle Number", "HDL Particle Number"],
    url: "https://www.questdirect.com/cardiac-comprehensive",
    description: "Complete cardiovascular risk assessment with advanced lipid analysis"
  },
  {
    id: "labcorp-heart-health-advanced",
    provider: "LabCorp",
    name: "Advanced Heart Health Panel",
    price: 219,
    drawFee: 39,
    markers: ["Lipid Panel", "hs-CRP", "Homocysteine", "Lipoprotein(a)", "Apolipoprotein B", "MPO (Myeloperoxidase)", "PLAC Test"],
    url: "https://www.labcorp.com/heart-health-advanced",
    description: "Comprehensive cardiovascular risk assessment with inflammation markers"
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
  {
    id: "quest-metabolic-syndrome",
    provider: "Quest Diagnostics",
    name: "Metabolic Syndrome Panel",
    price: 139,
    drawFee: 35,
    markers: ["Hemoglobin A1c", "Fasting Glucose", "Insulin", "Lipid Panel", "hs-CRP", "Uric Acid"],
    url: "https://www.questdirect.com/metabolic-syndrome",
    description: "Complete metabolic syndrome assessment"
  },
  {
    id: "labcorp-prediabetes-panel",
    provider: "LabCorp",
    name: "Pre-Diabetes Assessment",
    price: 99,
    drawFee: 39,
    markers: ["Hemoglobin A1c", "Fasting Glucose", "Insulin", "Fructosamine"],
    url: "https://www.labcorp.com/prediabetes",
    description: "Early diabetes risk assessment"
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
  {
    id: "quest-thyroid-comprehensive",
    provider: "Quest Diagnostics",
    name: "Comprehensive Thyroid Panel",
    price: 149,
    drawFee: 35,
    markers: ["TSH", "Free T4", "Free T3", "Reverse T3", "TPO Antibodies", "Thyroglobulin Antibodies"],
    url: "https://www.questdirect.com/thyroid-comprehensive",
    description: "Complete thyroid function and autoimmune assessment"
  },
  {
    id: "labcorp-thyroid-complete",
    provider: "LabCorp",
    name: "Complete Thyroid Function Panel",
    price: 139,
    drawFee: 39,
    markers: ["TSH", "Free T4", "Free T3", "Reverse T3", "TPO Antibodies", "Anti-Thyroglobulin"],
    url: "https://www.labcorp.com/thyroid-complete",
    description: "Comprehensive thyroid assessment including antibodies"
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
  {
    id: "quest-vitamin-comprehensive",
    provider: "Quest Diagnostics",
    name: "Comprehensive Vitamin Panel",
    price: 189,
    drawFee: 35,
    markers: ["Vitamin D 25-OH", "Vitamin B12", "Folate", "Vitamin B1 (Thiamine)", "Vitamin B6", "Vitamin C", "Vitamin A", "Vitamin E"],
    url: "https://www.questdirect.com/vitamin-comprehensive",
    description: "Complete vitamin status assessment"
  },
  {
    id: "labcorp-micronutrient-panel",
    provider: "LabCorp",
    name: "Micronutrient Panel",
    price: 229,
    drawFee: 39,
    markers: ["Vitamin D 25-OH", "Vitamin B12", "Folate", "Iron", "Ferritin", "Magnesium", "Zinc", "Copper", "Selenium"],
    url: "https://www.labcorp.com/micronutrient",
    description: "Comprehensive micronutrient and mineral assessment"
  },

  // Autoimmune Panels
  {
    id: "quest-autoimmune-comprehensive",
    provider: "Quest Diagnostics",
    name: "Comprehensive Autoimmune Panel",
    price: 249,
    drawFee: 35,
    markers: ["ANA", "Anti-dsDNA", "Anti-Sm", "Anti-RNP", "Anti-SSA/Ro", "Anti-SSB/La", "Anti-Scl-70", "Anti-Centromere"],
    url: "https://www.questdirect.com/autoimmune-comprehensive",
    description: "Complete autoimmune disease screening panel"
  },
  {
    id: "labcorp-rheumatoid-panel",
    provider: "LabCorp",
    name: "Rheumatoid Arthritis Panel",
    price: 89,
    drawFee: 39,
    markers: ["RF", "Anti-CCP", "ESR", "hs-CRP"],
    url: "https://www.labcorp.com/rheumatoid-panel",
    description: "Rheumatoid arthritis diagnostic panel"
  },
  {
    id: "privatemd-celiac-panel",
    provider: "PrivateMDLabs",
    name: "Celiac Disease Panel",
    price: 69,
    drawFee: 25,
    markers: ["Celiac Panel", "IgA", "IgG"],
    url: "https://www.privatemdlabs.com/celiac",
    description: "Complete celiac disease screening"
  },

  // Food Sensitivity & GI Health
  {
    id: "quest-food-sensitivity-comprehensive",
    provider: "Quest Diagnostics",
    name: "Comprehensive Food Sensitivity Panel",
    price: 179,
    drawFee: 35,
    markers: ["IgG Food Panel", "IgE Food Panel", "Celiac Panel"],
    url: "https://www.questdirect.com/food-sensitivity",
    description: "Complete food sensitivity and allergy assessment"
  },
  {
    id: "labcorp-gi-health-panel",
    provider: "LabCorp",
    name: "GI Health Panel",
    price: 149,
    drawFee: 39,
    markers: ["Calprotectin", "Lactoferrin", "Zonulin", "SIBO Breath Test"],
    url: "https://www.labcorp.com/gi-health",
    description: "Comprehensive gastrointestinal health assessment"
  },

  // Heavy Metals & Toxins
  {
    id: "quest-heavy-metals-comprehensive",
    provider: "Quest Diagnostics",
    name: "Heavy Metals Panel",
    price: 129,
    drawFee: 35,
    markers: ["Lead", "Mercury", "Cadmium", "Arsenic", "Aluminum"],
    url: "https://www.questdirect.com/heavy-metals",
    description: "Comprehensive heavy metal toxicity screening"
  },
  {
    id: "labcorp-environmental-toxins",
    provider: "LabCorp",
    name: "Environmental Toxin Panel",
    price: 159,
    drawFee: 39,
    markers: ["Heavy Metals Panel", "Lead", "Mercury", "Cadmium"],
    url: "https://www.labcorp.com/environmental-toxins",
    description: "Environmental toxin and heavy metal assessment"
  },

  // Cancer Screening
  {
    id: "quest-cancer-screening-men",
    provider: "Quest Diagnostics",
    name: "Men's Cancer Screening Panel",
    price: 119,
    drawFee: 35,
    markers: ["PSA", "CEA", "AFP", "CA 19-9"],
    url: "https://www.questdirect.com/cancer-screening-men",
    description: "Comprehensive cancer marker screening for men"
  },
  {
    id: "labcorp-cancer-screening-women",
    provider: "LabCorp",
    name: "Women's Cancer Screening Panel",
    price: 139,
    drawFee: 39,
    markers: ["CA 125", "CEA", "CA 15-3", "CA 27.29", "HE4"],
    url: "https://www.labcorp.com/cancer-screening-women",
    description: "Comprehensive cancer marker screening for women"
  },

  // Specialty & Advanced Testing
  {
    id: "quest-longevity-panel",
    provider: "Quest Diagnostics",
    name: "Longevity & Anti-Aging Panel",
    price: 299,
    drawFee: 35,
    markers: ["Telomere Length", "CoQ10", "Omega-3 Index", "TMAO", "IGF-1", "DHEA-S", "hs-CRP"],
    url: "https://www.questdirect.com/longevity",
    description: "Advanced biomarkers for longevity and anti-aging assessment"
  },
  {
    id: "labcorp-genetic-wellness",
    provider: "LabCorp",
    name: "Genetic Wellness Panel",
    price: 199,
    drawFee: 39,
    markers: ["MTHFR", "ApoE Genotype", "Factor V Leiden", "COMT"],
    url: "https://www.labcorp.com/genetic-wellness",
    description: "Genetic markers for personalized wellness planning"
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
    id: "quest-cbc",
    provider: "Quest Diagnostics",
    name: "Complete Blood Count (CBC)",
    price: 15,
    drawFee: 35,
    markers: ["CBC"],
    url: "https://www.questdirect.com/cbc",
    description: "Complete blood count with differential and platelets"
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
    id: "labcorp-cmp",
    provider: "LabCorp",
    name: "Comprehensive Metabolic Panel (CMP)",
    price: 18,
    drawFee: 39,
    markers: ["CMP"],
    url: "https://www.labcorp.com/cmp",
    description: "Complete metabolic panel with liver and kidney function"
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
    id: "quest-lipids",
    provider: "Quest Diagnostics",
    name: "Lipid Panel",
    price: 22,
    drawFee: 35,
    markers: ["Lipid Panel"],
    url: "https://www.questdirect.com/lipids",
    description: "Complete lipid profile including cholesterol ratios"
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
  {
    id: "labcorp-a1c",
    provider: "LabCorp",
    name: "Hemoglobin A1c",
    price: 16,
    drawFee: 39,
    markers: ["Hemoglobin A1c"],
    url: "https://www.labcorp.com/a1c",
    description: "Diabetes monitoring and diagnosis"
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
    id: "quest-tsh",
    provider: "Quest Diagnostics",
    name: "TSH (Thyroid Stimulating Hormone)",
    price: 13,
    drawFee: 35,
    markers: ["TSH"],
    url: "https://www.questdirect.com/tsh",
    description: "Thyroid stimulating hormone - primary thyroid screening"
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
    id: "labcorp-ft4",
    provider: "LabCorp",
    name: "Free T4",
    price: 18,
    drawFee: 39,
    markers: ["Free T4"],
    url: "https://www.labcorp.com/ft4",
    description: "Free thyroxine - active thyroid hormone"
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
  {
    id: "quest-ft3",
    provider: "Quest Diagnostics",
    name: "Free T3",
    price: 25,
    drawFee: 35,
    markers: ["Free T3"],
    url: "https://www.questdirect.com/ft3",
    description: "Free triiodothyronine - most active thyroid hormone"
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
    id: "quest-vitd",
    provider: "Quest Diagnostics",
    name: "Vitamin D 25-OH",
    price: 32,
    drawFee: 35,
    markers: ["Vitamin D 25-OH"],
    url: "https://www.questdirect.com/vitd",
    description: "25-hydroxyvitamin D - vitamin D status assessment"
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
    id: "labcorp-b12",
    provider: "LabCorp",
    name: "Vitamin B12",
    price: 21,
    drawFee: 39,
    markers: ["Vitamin B12"],
    url: "https://www.labcorp.com/b12",
    description: "Cobalamin - essential for neurological function"
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
  {
    id: "quest-folate",
    provider: "Quest Diagnostics",
    name: "Folate",
    price: 24,
    drawFee: 35,
    markers: ["Folate"],
    url: "https://www.questdirect.com/folate",
    description: "Folic acid - essential for cell division and DNA synthesis"
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
    id: "quest-ferritin",
    provider: "Quest Diagnostics",
    name: "Ferritin",
    price: 20,
    drawFee: 35,
    markers: ["Ferritin"],
    url: "https://www.questdirect.com/ferritin",
    description: "Iron storage protein - iron deficiency screening"
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
  {
    id: "labcorp-iron-comprehensive",
    provider: "LabCorp",
    name: "Comprehensive Iron Panel",
    price: 59,
    drawFee: 39,
    markers: ["Iron", "Ferritin", "TIBC", "Transferrin Saturation", "Transferrin"],
    url: "https://www.labcorp.com/iron-comprehensive",
    description: "Complete iron metabolism assessment"
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
  {
    id: "quest-hscrp",
    provider: "Quest Diagnostics",
    name: "hs-CRP (High Sensitivity)",
    price: 21,
    drawFee: 35,
    markers: ["hs-CRP"],
    url: "https://www.questdirect.com/hscrp",
    description: "High-sensitivity C-reactive protein for cardiac risk"
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
    id: "quest-testosterone",
    provider: "Quest Diagnostics",
    name: "Testosterone Total",
    price: 32,
    drawFee: 35,
    markers: ["Testosterone Total"],
    url: "https://www.questdirect.com/testosterone",
    description: "Total testosterone measurement"
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
    id: "labcorp-testosterone-free",
    provider: "LabCorp",
    name: "Testosterone Free",
    price: 42,
    drawFee: 39,
    markers: ["Testosterone Free"],
    url: "https://www.labcorp.com/testosterone-free",
    description: "Free testosterone - bioavailable hormone"
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
  {
    id: "quest-estradiol",
    provider: "Quest Diagnostics",
    name: "Estradiol Sensitive",
    price: 35,
    drawFee: 35,
    markers: ["Estradiol Sensitive"],
    url: "https://www.questdirect.com/estradiol",
    description: "Sensitive estradiol assay for low-level detection"
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
    id: "quest-homocysteine",
    provider: "Quest Diagnostics",
    name: "Homocysteine",
    price: 52,
    drawFee: 35,
    markers: ["Homocysteine"],
    url: "https://www.questdirect.com/homocysteine",
    description: "Amino acid linked to cardiovascular disease risk"
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
    id: "labcorp-lpa",
    provider: "LabCorp",
    name: "Lipoprotein(a)",
    price: 65,
    drawFee: 39,
    markers: ["Lipoprotein(a)"],
    url: "https://www.labcorp.com/lpa",
    description: "Inherited cardiovascular risk marker"
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
  },
  {
    id: "quest-psa",
    provider: "Quest Diagnostics",
    name: "PSA (Prostate Specific Antigen)",
    price: 28,
    drawFee: 35,
    markers: ["PSA"],
    url: "https://www.questdirect.com/psa",
    description: "Prostate cancer screening marker"
  },

  // Additional Specialty Tests
  {
    id: "quest-omega3-index",
    provider: "Quest Diagnostics",
    name: "Omega-3 Index",
    price: 89,
    drawFee: 35,
    markers: ["Omega-3 Index"],
    url: "https://www.questdirect.com/omega3",
    description: "Essential fatty acid status for cardiovascular health"
  },
  {
    id: "labcorp-coq10",
    provider: "LabCorp",
    name: "CoQ10 (Coenzyme Q10)",
    price: 95,
    drawFee: 39,
    markers: ["CoQ10"],
    url: "https://www.labcorp.com/coq10",
    description: "Antioxidant and cellular energy marker"
  },
  {
    id: "quest-tmao",
    provider: "Quest Diagnostics",
    name: "TMAO (Trimethylamine N-oxide)",
    price: 79,
    drawFee: 35,
    markers: ["TMAO"],
    url: "https://www.questdirect.com/tmao",
    description: "Gut microbiome and cardiovascular risk marker"
  }
];

export type OptimizeResult = {
  chosen: Panel[];
  total: number;
  totalWithDrawFees: number;
  covered: Set<Marker>;
  uncovered: Marker[];
  savings: number;
  marketComparison: number;
};

function calculateMarketComparison(selected: Marker[], panelsData?: Panel[]): number {
  const panelsToUse = panelsData || panels;
  const standardDrawFee = 35; // Average draw fee from our data
  let total = 0;
  
  for (const marker of selected) {
    // Find all panels that contain this marker
    const relevantPanels = panelsToUse.filter(p => p.markers.includes(marker));
    
    if (relevantPanels.length > 0) {
      // Use average price (or median) from actual market data, not the cheapest
      const prices = relevantPanels.map(p => p.price);
      prices.sort((a, b) => a - b);
      
      // Use median price as "typical market price"
      const medianPrice = prices.length % 2 === 0 
        ? (prices[prices.length / 2 - 1] + prices[prices.length / 2]) / 2
        : prices[Math.floor(prices.length / 2)];
      
      total += medianPrice;
    } else {
      // Fallback if no panels found for this marker
      total += 75; // reasonable estimate
    }
  }
  
  // Add draw fee
  total += standardDrawFee;
  
  return total;
}

export function optimizePanels(selected: Marker[], panelsData?: Panel[]): OptimizeResult {
  const panelsToUse = panelsData || panels;
  const desired = new Set<Marker>(selected);
  const covered = new Set<Marker>();
  const chosen: Panel[] = [];
  const providerDrawFees = new Set<string>();

  // Calculate market comparison cost
  const marketComparison = calculateMarketComparison(selected);

  // Panels can only help if they cover at least one desired and uncovered marker
  const candidates = panelsToUse.slice();

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
  const savings = Math.max(0, marketComparison - totalWithDrawFees);

  return { 
    chosen, 
    total: panelTotal, 
    totalWithDrawFees,
    covered, 
    uncovered, 
    savings,
    marketComparison
  };
}