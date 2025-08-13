import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Clock, AlertTriangle } from "lucide-react";

export function InfoSidebar() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">How We Calculate</h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Finds the optimal combination of panels to minimize your total cost including draw fees.
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Trusted Providers</h3>
        </div>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Ulta Lab Tests</Badge>
            <Badge variant="outline">Walk-In Lab</Badge>
            <Badge variant="outline">PrivateMDLabs</Badge>
            <Badge variant="outline">DiscountedLabs</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            CLIA-certified labs with national coverage.
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">What to Expect</h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Fasting required:</span>
            <span className="font-medium">Some tests</span>
          </div>
          <div className="flex justify-between">
            <span>Results ready:</span>
            <span className="font-medium">1-3 business days</span>
          </div>
          <div className="flex justify-between">
            <span>Total time:</span>
            <span className="font-medium">15-30 minutes</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-warning/20 bg-warning/5">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
          <h3 className="font-semibold text-foreground">Important Disclaimers</h3>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• For pricing comparison only - not medical advice</p>
          <p>• We may earn affiliate commissions</p>
          <p>• Prices may vary - confirm with providers</p>
        </div>
      </Card>
    </div>
  );
}