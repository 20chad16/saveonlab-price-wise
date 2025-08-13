import { ExternalLink, Shield, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Lab Test Optimizer</h3>
            <p className="text-sm text-muted-foreground">
              Find the most cost-effective lab panels by comparing prices across multiple providers. 
              Save money on essential health markers.
            </p>
          </div>

          {/* Important Disclosures */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Important Notice
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• This tool provides pricing comparison only</p>
              <p>• Not medical advice - consult your physician</p>
              <p>• Prices may vary and change without notice</p>
              <p>• We may earn affiliate commissions</p>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Medical Disclaimer
            </h3>
            <p className="text-sm text-muted-foreground">
              This website is for informational purposes only and does not constitute medical advice. 
              Always consult with a qualified healthcare provider before ordering lab tests or making 
              health decisions.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Lab Test Optimizer. Price data last updated: {new Date().toLocaleDateString()}
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Contact
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Additional Legal Text */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Affiliate Disclosure:</strong> We may receive compensation when you purchase lab tests through our affiliate links. 
            This does not affect our recommendations or pricing calculations. Prices are provided by third-party lab companies and 
            may be subject to change. Lab draw fees vary by location and provider. Results processing times vary by test and provider.
          </p>
        </div>
      </div>
    </footer>
  );
}