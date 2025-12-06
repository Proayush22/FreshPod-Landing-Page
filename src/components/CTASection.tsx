import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fresh/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-secondary border border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Waste Food <span className="text-gradient-fresh">Again</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join the waitlist to be among the first to experience FreshPod. 
            Early supporters get exclusive pricing and priority shipping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" className="group">
              Join Waitlist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Expected shipping: Q4 2026 • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
