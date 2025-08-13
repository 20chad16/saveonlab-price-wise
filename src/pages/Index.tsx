import { useMemo, useState } from "react";
import { optimizePanels, lastUpdatedISO, type Marker } from "@/data/labData";
import { MarkerSelector } from "@/components/MarkerSelector";
import { ResultsPanel } from "@/components/ResultsPanel";
import { InfoSidebar } from "@/components/InfoSidebar";

const Index = () => {
  const [selected, setSelected] = useState<Marker[]>([]);
  const [optimized, setOptimized] = useState(() => optimizePanels([]));

  const toggleMarker = (m: Marker) => {
    setSelected((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const handleOptimize = () => {
    setOptimized(optimizePanels(selected));
  };

  const lastUpdated = useMemo(() => {
    try {
      return new Date(lastUpdatedISO).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return "Recently";
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Save Money on Lab Tests
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Compare prices across trusted lab providers and find the most cost-effective combination 
              of panels for your health markers. No account required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ 70+ Health Markers</span>
              <span>✓ CLIA-Certified Labs</span>
              <span>✓ Draw Fees Included</span>
              <span>✓ Instant Price Optimization</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Pricing data last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-8">
            <MarkerSelector 
              selected={selected}
              onToggle={toggleMarker}
              onOptimize={handleOptimize}
            />
            <ResultsPanel 
              selected={selected}
              optimized={optimized}
            />
          </div>

          <aside className="lg:col-span-1">
            <InfoSidebar />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;