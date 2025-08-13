
import { useMemo, useState } from "react";
import { optimizePanels, type Marker } from "@/data/labData";
import { useLabData } from "@/hooks/useLabData";
import { MarkerSelector } from "@/components/MarkerSelector";
import { ResultsPanel } from "@/components/ResultsPanel";
import { InfoSidebar } from "@/components/InfoSidebar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const { data: labData, loading, error, refreshData } = useLabData();
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
    if (!labData?.lastUpdatedISO) return "Recently";
    try {
      return new Date(labData.lastUpdatedISO).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return "Recently";
    }
  }, [labData?.lastUpdatedISO]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading lab data...</p>
        </div>
      </div>
    );
  }

  if (error || !labData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-destructive mb-4">Failed to load lab data</p>
          <Button onClick={refreshData} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

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
            <div className="mt-4 flex items-center justify-center gap-4">
              <p className="text-xs text-muted-foreground">
                Pricing data last updated: {lastUpdated}
              </p>
              <Button
                onClick={refreshData}
                variant="ghost"
                size="sm"
                className="text-xs h-6 px-2"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                Refresh
              </Button>
            </div>
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
      <Footer />
    </div>
  );
};

export default Index;
