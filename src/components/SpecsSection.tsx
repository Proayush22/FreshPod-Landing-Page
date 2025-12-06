import { Cpu, Radio, Battery, Shield } from "lucide-react";

const specs = [
  {
    category: "Sensor",
    icon: Cpu,
    items: [
      { label: "Type", value: "Metal Oxide (MOX)" },
      { label: "Detection", value: "VOCs, Amines, Sulfur" },
      { label: "AI-Trained", value: "Fresh vs. Rotten" },
      { label: "Sampling", value: "Every 30-60 min" },
    ],
  },
  {
    category: "Connectivity",
    icon: Radio,
    items: [
      { label: "Protocol", value: "Bluetooth Low Energy" },
      { label: "Range", value: "10m (through walls)" },
      { label: "Compatibility", value: "iOS & Android" },
      { label: "Hub Support", value: "Optional" },
    ],
  },
  {
    category: "Power",
    icon: Battery,
    items: [
      { label: "Battery Type", value: "Li-SOCl2 (Cold-rated)" },
      { label: "Life Span", value: "Up to 6 months" },
      { label: "Charging", value: "Wireless (Qi)" },
      { label: "Indicator", value: "Low battery alert" },
    ],
  },
  {
    category: "Build",
    icon: Shield,
    items: [
      { label: "Material", value: "Food-grade PP" },
      { label: "Rating", value: "IP67 Waterproof" },
      { label: "Dimensions", value: "Ø45mm × 60mm" },
      { label: "Weight", value: "42g" },
    ],
  },
];

const SpecsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient-fresh">Specifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade technology in a compact, food-safe package
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec) => (
            <div
              key={spec.category}
              className="p-6 rounded-2xl bg-card border border-border hover:border-fresh/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-fresh/10 border border-fresh/20 flex items-center justify-center">
                  <spec.icon className="w-5 h-5 text-fresh" />
                </div>
                <h3 className="text-lg font-semibold">{spec.category}</h3>
              </div>
              
              <div className="space-y-3">
                {spec.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
