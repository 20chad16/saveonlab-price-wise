import { Marker, OptimizeResult, Panel } from "@/data/labData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, TrendingDown, DollarSign, AlertCircle } from "lucide-react";

interface ResultsPanelProps {
  selected: Marker[];
  optimized: OptimizeResult;
}

export function ResultsPanel({ selected, optimized }: ResultsPanelProps) {
  if (selected.length === 0) {
    return (
      <Card className="p-8 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <DollarSign className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Ready to Save on Lab Tests?</h3>
          <p className="text-muted-foreground">
            Select tests above to see optimized pricing.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cost Summary */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary">${optimized.totalWithDrawFees.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Optimized Total</div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-muted-foreground line-through">
              ${optimized.individualCost.toFixed(2)}
            </div>
            <div className="text-sm text-muted-foreground">If Bought Separately</div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2">
              <TrendingDown className="h-4 w-4 text-success" />
              <span className="text-lg font-semibold text-success">
                ${optimized.savings.toFixed(2)} saved
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              {optimized.individualCost > 0 ? 
                Math.round((optimized.savings / optimized.individualCost) * 100) : 0}% savings
            </div>
          </div>
        </div>
      </Card>

      {/* Panel Recommendations */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Recommended Lab Panels</h2>
        
        {optimized.chosen.length === 0 ? (
          <div className="text-center py-8">
            <AlertCircle className="h-12 w-12 text-warning mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No Panels Found</h3>
            <p className="text-muted-foreground">
              No panels found for these markers. Try different tests.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {optimized.chosen.map((panel, index) => (
              <PanelCard key={panel.id} panel={panel} index={index} selected={selected} />
            ))}
            
            {optimized.uncovered.length > 0 && (
              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Tests Not Covered</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      These tests need separate orders:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {optimized.uncovered.map((marker) => (
                        <Badge key={marker} variant="outline" className="text-xs border-warning text-warning">
                          {marker}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}

function PanelCard({ panel, index, selected }: { panel: Panel; index: number; selected: Marker[] }) {
  const relevantMarkers = panel.markers.filter(marker => selected.includes(marker));
  const additionalMarkers = panel.markers.filter(marker => !selected.includes(marker));
  
  // Extract seller from URL
  const seller = panel.url?.includes('ultalabtests.com') ? 'Ulta Lab Tests' : 
                panel.url?.includes('questdirect.com') ? 'Quest Direct' : 
                'Lab Provider';
  
  return (
    <div className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="default" className="text-xs px-2 py-1">
                Panel {index + 1}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Lab: {panel.provider}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Seller: {seller}
              </Badge>
            </div>
            <h3 className="font-semibold text-foreground text-lg">{panel.name}</h3>
            {panel.description && (
              <p className="text-sm text-muted-foreground mt-1">{panel.description}</p>
            )}
          </div>
          
          <div className="text-right">
            <div className="text-xl font-bold text-foreground">${panel.price}</div>
            <div className="text-xs text-muted-foreground">
              + ${panel.drawFee} draw fee
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Panel Total: ${(panel.price + panel.drawFee).toFixed(2)}
            </div>
          </div>
        </div>

        <Separator />
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Tests You Selected ({relevantMarkers.length})</h4>
            <div className="flex flex-wrap gap-1.5">
              {relevantMarkers.map((marker) => (
                <Badge key={marker} variant="default" className="text-xs">
                  {marker}
                </Badge>
              ))}
            </div>
          </div>
          
          {additionalMarkers.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Bonus Tests Included ({additionalMarkers.length})
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {additionalMarkers.map((marker) => (
                  <Badge key={marker} variant="outline" className="text-xs">
                    {marker}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <a
            href={`${panel.url}?utm_source=saveonlabtests&utm_medium=affiliate&utm_campaign=optimizer&panel=${encodeURIComponent(panel.name)}&markers=${encodeURIComponent(selected.join(","))}`}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex"
          >
            <Button className="gap-2">
              Order from {seller}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}