
import { useMemo, useState, useEffect } from "react";
import { optimizePanels, type Marker } from "@/data/labData";
import { useLabData } from "@/hooks/useLabData";
import { MarkerSelector } from "@/components/MarkerSelector";
import { ResultsPanel } from "@/components/ResultsPanel";
import { InfoSidebar } from "@/components/InfoSidebar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { DevDataExporter } from "@/utils/dataExporter";

const Index = () => {
  const { data: labData, loading, error, refreshData } = useLabData();
  const [selected, setSelected] = useState<Marker[]>([]);
  const [optimized, setOptimized] = useState(() => optimizePanels([], labData?.panels));

  // Extract available markers from panels data
  const availableMarkers = useMemo(() => {
    if (!labData?.panels) return [];
    const markersSet = new Set<Marker>();
    labData.panels.forEach(panel => {
      panel.markers.forEach(marker => markersSet.add(marker));
    });
    return Array.from(markersSet);
  }, [labData?.panels]);

  const toggleMarker = (m: Marker) => {
    setSelected((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const removeMarker = (marker: Marker) => {
    setSelected(prev => prev.filter(m => m !== marker));
  };

  const handleOptimize = () => {
    console.log('🔧 OPTIMIZE: Using panels data from:', labData?.panels ? 'GitHub' : 'fallback');
    console.log('🔧 OPTIMIZE: First panel in data:', labData?.panels?.[0]);
    setOptimized(optimizePanels(selected, labData?.panels));
  };

  // Re-optimize when data changes or selection changes
  useEffect(() => {
    if (selected.length > 0 && labData?.panels) {
      console.log('🔄 AUTO-OPTIMIZE: Data or selection changed, re-optimizing...');
      setOptimized(optimizePanels(selected, labData.panels));
    }
  }, [selected, labData?.panels]);

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
      <header className="border-b bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 sticky top-0 z-40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 md:mb-4">
              Save Money on Lab Tests
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed px-2">
              Find the most cost-effective lab panels for your health markers.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              <span className="bg-muted/50 px-2 py-1 rounded-full">✓ 270+ Tests</span>
              <span className="bg-muted/50 px-2 py-1 rounded-full">✓ Trusted Labs</span>
              <span className="bg-muted/50 px-2 py-1 rounded-full">✓ Instant Optimization</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-xs text-muted-foreground">
              <p>
                Pricing data last updated: {lastUpdated}
              </p>
              <Button
                onClick={refreshData}
                variant="ghost"
                size="sm"
                className="text-xs h-7 px-3 hover:bg-muted/80"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-4 md:py-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-4 md:space-y-8">
            <MarkerSelector 
              selected={selected}
              onToggle={toggleMarker}
              onRemove={removeMarker}
              onOptimize={handleOptimize}
              availableMarkers={availableMarkers}
            />
            <ResultsPanel 
              selected={selected}
              optimized={optimized}
            />
          </div>

          <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:h-fit">
            <InfoSidebar />
          </aside>
        </div>
      </main>
      <Footer />
      <DevDataExporter />
    </div>
  );
};

export default Index;
