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
            Our algorithm finds the optimal combination of lab panels and individual tests to minimize your total cost.
          </p>
          <p>
            We factor in lab draw fees (typically $20-30 per provider) and use advanced optimization to ensure you get the best value.
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
            All featured labs are CLIA-certified with national networks of patient service centers.
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
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <strong>Affiliate Links:</strong> We may earn commissions from purchases at no extra cost to you.
          </p>
          <p>
            <strong>Medical Advice:</strong> This tool provides pricing information only. Consult healthcare providers for medical decisions.
          </p>
          <p>
            <strong>Accuracy:</strong> Prices are updated regularly but may vary. Confirm final pricing with providers.
          </p>
        </div>
      </Card>
    </div>
  );
}