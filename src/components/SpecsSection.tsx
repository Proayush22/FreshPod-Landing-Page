import { Cpu, Radio, Battery, Shield } from "lucide-react";
import { motion } from "framer-motion";
import techRender from "@/assets/tech-render.png";

const specs = [
  {
    category: "Sensor",
    icon: Cpu,
    items: [
      { label: "Type", value: "Metal Oxide (MOX)" },
      { label: "Detection", value: "VOCs, Amines, Sulfur" },
      { label: "AI-Trained", value: "Fresh vs. Rotten" },
      { label: "Sampling", value: "Every 5+ hours" },
    ],
  },
  {
    category: "Connectivity",
    icon: Radio,
    items: [
      { label: "Protocol", value: "BLE + Smart Home" },
      { label: "Range", value: "Anywhere (via hub)" },
      { label: "Compatibility", value: "iOS & Android" },
      { label: "Hub Support", value: "HomePod, Nest, Echo" },
    ],
  },
  {
    category: "Power",
    icon: Battery,
    items: [
      { label: "Battery Type", value: "Li-SOCl2 (Cold-rated)" },
      { label: "Life Span", value: "Up to 3 months" },
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
      { label: "Dimensions", value: "42×38×18mm" },
      { label: "Weight", value: "42g" },
    ],
  },
];

const SpecsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient-fresh">Specifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade technology in a compact, food-safe package
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technical Render */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src={techRender} 
              alt="FreshPod internal components diagram" 
              className="w-full max-w-lg rounded-2xl"
            />
          </motion.div>

          {/* Specs Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.category}
                className="p-6 rounded-2xl bg-card border border-border hover:border-fresh/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
