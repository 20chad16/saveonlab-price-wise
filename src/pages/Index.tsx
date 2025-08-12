import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { markers as allMarkers, optimizePanels, lastUpdatedISO, type Marker } from "@/data/labData";

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

  const total = optimized.total;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Save On Lab Tests — Compare Prices & Build Panels
          </h1>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            Select the markers you need and we’ll assemble the cheapest combination of panels from trusted providers. No account required.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Prices last updated: {lastUpdated}</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-3">
        <section className="md:col-span-2 space-y-6">
          <article className="rounded-lg border bg-card p-4 md:p-6">
            <h2 className="text-xl font-semibold">Choose your markers</h2>
            <p className="text-sm text-muted-foreground mt-1">
              We’ll find the most cost-effective way to order them as panels or singles.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allMarkers.map((m) => (
                <label
                  key={m}
                  className="flex items-center gap-3 rounded-md border p-3 hover:bg-accent cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selected.includes(m)}
                    onChange={() => toggleMarker(m)}
                    aria-label={`Select ${m}`}
                  />
                  <span className="text-sm">{m}</span>
                </label>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button onClick={handleOptimize} aria-label="Find cheapest options">
                Find cheapest options
              </Button>
              {selected.length > 0 && (
                <span className="text-sm text-muted-foreground">
                  Selected: {selected.length}
                </span>
              )}
            </div>
          </article>

          <article className="rounded-lg border bg-card p-4 md:p-6">
            <h2 className="text-xl font-semibold">Cheapest combination</h2>
            {selected.length === 0 ? (
              <p className="mt-2 text-muted-foreground text-sm">
                Select markers above to see optimized results.
              </p>
            ) : (
              <div className="mt-4 space-y-4">
                {optimized.chosen.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    We couldn’t find panels that cover your selection. Try different markers.
                  </p>
                )}
                {optimized.chosen.map((p) => (
                  <div key={p.id} className="rounded-md border p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-medium">{p.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Provider: {p.provider}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Covers: {p.markers.join(", ")}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold">${p.price.toFixed(2)}</span>
                        <a
                          href={`${p.url}?utm_source=saveonlabtests&utm_medium=affiliate&utm_campaign=optimizer&panel=${encodeURIComponent(p.name)}&markers=${encodeURIComponent(selected.join(","))}`}
                          target="_blank"
                          rel="nofollow sponsored noopener"
                        >
                          <Button variant="secondary">Order on {p.provider}</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {optimized.chosen.length > 0 && (
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-base font-medium">Estimated total</span>
                    <span className="text-xl font-semibold">${total.toFixed(2)}</span>
                  </div>
                )}
                {optimized.uncovered.length > 0 && (
                  <p className="text-xs text-destructive mt-2">
                    Not fully covered: {optimized.uncovered.join(", ")}
                  </p>
                )}
              </div>
            )}
          </article>
        </section>

        <aside className="space-y-4">
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <h2 className="text-base font-semibold">How it works</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We compare prices across providers and use a greedy set cover approach to combine bundles and single tests so you pay as little as possible for all selected markers.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <h2 className="text-base font-semibold">Disclosure</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Some links are affiliate links. If you purchase, we may earn a commission at no extra cost to you. This site does not provide medical advice.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Index;
