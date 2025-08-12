export type Marker =
  | "CBC"
  | "CMP"
  | "Lipid Panel"
  | "Hemoglobin A1c"
  | "TSH"
  | "Free T4"
  | "Vitamin D 25-OH"
  | "Ferritin"
  | "hs-CRP"
  | "Testosterone Total"
  | "Estradiol Sensitive";

export interface Panel {
  id: string;
  provider: string;
  name: string;
  price: number; // USD
  markers: Marker[];
  url: string; // Affiliate or outbound URL
}

export const markers: Marker[] = [
  "CBC",
  "CMP",
  "Lipid Panel",
  "Hemoglobin A1c",
  "TSH",
  "Free T4",
  "Vitamin D 25-OH",
  "Ferritin",
  "hs-CRP",
  "Testosterone Total",
  "Estradiol Sensitive",
];

export const lastUpdatedISO = "2025-07-01T00:00:00.000Z";

export const panels: Panel[] = [
  // Value bundles
  {
    id: "ulta-basic-wellness",
    provider: "Ulta Lab Tests",
    name: "Basic Wellness Bundle (CBC + CMP + Lipids)",
    price: 49,
    markers: ["CBC", "CMP", "Lipid Panel"],
    url: "https://www.ultalabtests.com/partner",
  },
  {
    id: "walkin-hormone-women",
    provider: "Walk-In Lab",
    name: "Women's Hormone Essentials (Estradiol + TSH + Free T4)",
    price: 59,
    markers: ["Estradiol Sensitive", "TSH", "Free T4"],
    url: "https://www.walkinlab.com/affiliate",
  },
  {
    id: "privatemd-hormone-men",
    provider: "PrivateMDLabs",
    name: "Men's Hormone Check (Testosterone + Thyroid)",
    price: 58,
    markers: ["Testosterone Total", "TSH", "Free T4"],
    url: "https://www.privatemdlabs.com/affiliate",
  },
  {
    id: "dlabs-inflammation",
    provider: "DiscountedLabs",
    name: "Inflammation + Iron (hs-CRP + Ferritin)",
    price: 35,
    markers: ["hs-CRP", "Ferritin"],
    url: "https://www.discountedlabs.com/affiliate",
  },
  // Singles and common panels
  {
    id: "ulta-a1c",
    provider: "Ulta Lab Tests",
    name: "Hemoglobin A1c",
    price: 14,
    markers: ["Hemoglobin A1c"],
    url: "https://www.ultalabtests.com/partner/a1c",
  },
  {
    id: "ulta-cbc",
    provider: "Ulta Lab Tests",
    name: "CBC",
    price: 12,
    markers: ["CBC"],
    url: "https://www.ultalabtests.com/partner/cbc",
  },
  {
    id: "ulta-cmp",
    provider: "Ulta Lab Tests",
    name: "CMP",
    price: 15,
    markers: ["CMP"],
    url: "https://www.ultalabtests.com/partner/cmp",
  },
  {
    id: "walkin-lipids",
    provider: "Walk-In Lab",
    name: "Lipid Panel",
    price: 19,
    markers: ["Lipid Panel"],
    url: "https://www.walkinlab.com/affiliate/lipids",
  },
  {
    id: "privatemd-tsh",
    provider: "PrivateMDLabs",
    name: "TSH",
    price: 11,
    markers: ["TSH"],
    url: "https://www.privatemdlabs.com/affiliate/tsh",
  },
  {
    id: "privatemd-ft4",
    provider: "PrivateMDLabs",
    name: "Free T4",
    price: 16,
    markers: ["Free T4"],
    url: "https://www.privatemdlabs.com/affiliate/ft4",
  },
  {
    id: "walkin-vitd",
    provider: "Walk-In Lab",
    name: "Vitamin D 25-OH",
    price: 29,
    markers: ["Vitamin D 25-OH"],
    url: "https://www.walkinlab.com/affiliate/vitd",
  },
  {
    id: "dlabs-ferritin",
    provider: "DiscountedLabs",
    name: "Ferritin",
    price: 17,
    markers: ["Ferritin"],
    url: "https://www.discountedlabs.com/affiliate/ferritin",
  },
  {
    id: "dlabs-hscrp",
    provider: "DiscountedLabs",
    name: "hs-CRP",
    price: 18,
    markers: ["hs-CRP"],
    url: "https://www.discountedlabs.com/affiliate/hscrp",
  },
  {
    id: "dlabs-testosterone",
    provider: "DiscountedLabs",
    name: "Testosterone Total",
    price: 29,
    markers: ["Testosterone Total"],
    url: "https://www.discountedlabs.com/affiliate/testosterone",
  },
  {
    id: "walkin-estradiol",
    provider: "Walk-In Lab",
    name: "Estradiol Sensitive",
    price: 32,
    markers: ["Estradiol Sensitive"],
    url: "https://www.walkinlab.com/affiliate/estradiol",
  },
];

export type OptimizeResult = {
  chosen: Panel[];
  total: number;
  covered: Set<Marker>;
  uncovered: Marker[];
};

export function optimizePanels(selected: Marker[]): OptimizeResult {
  const desired = new Set<Marker>(selected);
  const covered = new Set<Marker>();
  const chosen: Panel[] = [];

  // Panels can only help if they cover at least one desired and uncovered marker
  const candidates = panels.slice();

  while (true) {
    const remaining = Array.from(desired).filter((m) => !covered.has(m));
    if (remaining.length === 0) break;

    let best: { panel: Panel; newCount: number; ratio: number } | null = null;

    for (const p of candidates) {
      const newMarkers = p.markers.filter((m) => desired.has(m) && !covered.has(m));
      if (newMarkers.length === 0) continue;
      const ratio = p.price / newMarkers.length; // lower is better
      if (!best || ratio < best.ratio) {
        best = { panel: p, newCount: newMarkers.length, ratio };
      }
    }

    if (!best) break; // cannot cover more markers

    chosen.push(best.panel);
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

  const total = chosen.reduce((sum, p) => sum + p.price, 0);
  const uncovered = Array.from(desired).filter((m) => !covered.has(m));

  return { chosen, total, covered, uncovered };
}
