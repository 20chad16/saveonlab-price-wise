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
    <Card className="p-4 md:p-6">
      <div className="space-y-4 md:space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">Choose Your Lab Tests</h2>
          <p className="text-muted-foreground mt-2">
            Select health markers and we'll find the best pricing.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for specific tests..."
            className="w-full pl-10 pr-4 py-3 md:py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-base md:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="categories" className="text-sm">By Category</TabsTrigger>
            <TabsTrigger value="all" className="text-sm">All Tests ({allMarkers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="mt-4 md:mt-6">
            <div className="space-y-3 md:space-y-4">
              {filteredCategories.map(([category, markers]) => (
                <div key={category} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between p-4 md:p-4 text-left hover:bg-accent rounded-lg transition-colors min-h-[60px]"
                  >
                    <div>
                      <h3 className="font-medium text-foreground text-base md:text-base">{category}</h3>
                      <p className="text-sm text-muted-foreground">
                        {markers.length} test{markers.length !== 1 ? 's' : ''} available
                      </p>
                    </div>
                    {expandedCategories.has(category) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  
                  {expandedCategories.has(category) && (
                    <div className="px-4 pb-4 md:px-4 md:pb-4">
                      <div className="grid grid-cols-1 gap-3">
                        {markers.map((marker) => (
                          <label
                            key={marker}
                            className="flex items-start gap-3 p-3 md:p-3 border border-border rounded-md hover:bg-accent cursor-pointer transition-colors min-h-[52px]"
                          >
                            <input
                              type="checkbox"
                              className="mt-1 h-5 w-5 md:h-4 md:w-4 md:mt-0.5 text-primary focus:ring-primary border-border rounded shrink-0"
                              checked={selected.includes(marker)}
                              onChange={() => onToggle(marker)}
                              aria-label={`Select ${marker}`}
                            />
                            <span className="text-sm md:text-sm font-medium text-foreground leading-tight">
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

          <TabsContent value="all" className="mt-4 md:mt-6">
            <div className="grid grid-cols-1 gap-3">
              {filteredAllMarkers.map((marker) => (
                <label
                  key={marker}
                  className="flex items-start gap-3 p-3 md:p-3 border border-border rounded-md hover:bg-accent cursor-pointer transition-colors min-h-[52px]"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 md:h-4 md:w-4 md:mt-0.5 text-primary focus:ring-primary border-border rounded shrink-0"
                    checked={selected.includes(marker)}
                    onChange={() => onToggle(marker)}
                    aria-label={`Select ${marker}`}
                  />
                  <span className="text-sm md:text-sm font-medium text-foreground leading-tight">
                    {marker}
                  </span>
                </label>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Selected Summary and Action */}
        <div className="flex flex-col gap-4 pt-4 border-t border-border md:flex-row md:items-center">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <Button 
              onClick={onOptimize} 
              size="lg" 
              className="shadow-sm h-12 text-base font-medium px-6"
              disabled={selected.length === 0}
            >
              Find Best Prices
              {selected.length > 0 && (
                <span className="ml-2 bg-primary-foreground/20 px-2 py-0.5 rounded-full text-xs">
                  {selected.length}
                </span>
              )}
            </Button>
            {selected.length > 0 && (
              <div className="text-center sm:text-left">
                <Badge variant="secondary" className="text-sm px-3 py-1.5">
                  {selected.length} test{selected.length !== 1 ? 's' : ''} selected
                </Badge>
              </div>
            )}
          </div>
          
          {selected.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selected.slice(0, 3).map((marker) => (
                <Badge key={marker} variant="outline" className="text-xs flex items-center gap-1 pr-1">
                  <span className="truncate max-w-[120px]">{marker}</span>
                  <button
                    onClick={() => onRemove(marker)}
                    className="ml-1 hover:bg-destructive/20 rounded-full p-0.5 transition-colors shrink-0"
                    aria-label={`Remove ${marker}`}
                  >
                    <X className="h-2.5 w-2.5" />
                  </button>
                </Badge>
              ))}
              {selected.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{selected.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}