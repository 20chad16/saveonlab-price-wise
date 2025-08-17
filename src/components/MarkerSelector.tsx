import { useState } from "react";
import { Marker, MarkerCategory, markerCategories } from "@/data/labData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronDown, ChevronUp, X } from "lucide-react";

interface MarkerSelectorProps {
  selected: Marker[];
  onToggle: (marker: Marker) => void;
  onRemove: (marker: Marker) => void;
  onOptimize: () => void;
  availableMarkers?: Marker[];
}

export function MarkerSelector({ selected, onToggle, onRemove, onOptimize, availableMarkers }: MarkerSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<MarkerCategory>>(
    new Set(["Basic Health", "Heart Health", "Metabolic Health"])
  );

  const toggleCategory = (category: MarkerCategory) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  // Use only markers that are available in panels data
  const availableMarkersSet = new Set(availableMarkers || Object.values(markerCategories).flat());

  const filteredCategories = Object.entries(markerCategories).map(([category, markers]) => {
    const filteredMarkers = markers
      .filter(marker => availableMarkersSet.has(marker))
      .filter(marker => marker.toLowerCase().includes(searchTerm.toLowerCase()));
    return [category as MarkerCategory, filteredMarkers] as const;
  }).filter(([, markers]) => markers.length > 0);

  const allMarkers = Array.from(availableMarkersSet);
  const filteredAllMarkers = allMarkers.filter(marker =>
    marker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Choose Your Lab Tests</h2>
          <p className="text-muted-foreground mt-2">
            Select health markers and we'll find the best pricing.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for specific tests..."
            className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="all">All Tests ({allMarkers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="mt-6">
            <div className="space-y-4">
              {filteredCategories.map(([category, markers]) => (
                <div key={category} className="border border-border rounded-lg">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-accent rounded-lg transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-foreground">{category}</h3>
                      <p className="text-sm text-muted-foreground">
                        {markers.length} test{markers.length !== 1 ? 's' : ''} available
                      </p>
                    </div>
                    {expandedCategories.has(category) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {expandedCategories.has(category) && (
                    <div className="px-4 pb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {markers.map((marker) => (
                          <label
                            key={marker}
                            className="flex items-start gap-3 p-3 border border-border rounded-md hover:bg-accent cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              className="mt-0.5 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                              checked={selected.includes(marker)}
                              onChange={() => onToggle(marker)}
                              aria-label={`Select ${marker}`}
                            />
                            <span className="text-sm font-medium text-foreground leading-tight">
                              {marker}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredAllMarkers.map((marker) => (
                <label
                  key={marker}
                  className="flex items-start gap-3 p-3 border border-border rounded-md hover:bg-accent cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                    checked={selected.includes(marker)}
                    onChange={() => onToggle(marker)}
                    aria-label={`Select ${marker}`}
                  />
                  <span className="text-sm font-medium text-foreground leading-tight">
                    {marker}
                  </span>
                </label>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Selected Summary and Action */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Button onClick={onOptimize} size="lg" className="shadow-sm">
              Find Best Prices
            </Button>
            {selected.length > 0 && (
              <Badge variant="secondary" className="text-base px-3 py-1">
                {selected.length} test{selected.length !== 1 ? 's' : ''} selected
              </Badge>
            )}
          </div>
          
          {selected.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selected.slice(0, 5).map((marker) => (
                <Badge key={marker} variant="outline" className="text-xs flex items-center gap-1">
                  {marker}
                  <button
                    onClick={() => onRemove(marker)}
                    className="ml-1 hover:bg-destructive/20 rounded-full p-0.5 transition-colors"
                    aria-label={`Remove ${marker}`}
                  >
                    <X className="h-2.5 w-2.5" />
                  </button>
                </Badge>
              ))}
              {selected.length > 5 && (
                <Badge variant="outline" className="text-xs">
                  +{selected.length - 5} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}