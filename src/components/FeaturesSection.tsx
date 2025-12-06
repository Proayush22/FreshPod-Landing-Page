import { Wind, Smartphone, Zap, Droplets } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "VOC Detection",
    description: "Advanced metal oxide sensors detect volatile organic compounds released by decomposing meat, including amines and sulfur compounds.",
    color: "fresh" as const,
  },
  {
    icon: Smartphone,
    title: "Smart Notifications",
    description: "Receive instant alerts on your phone via Bluetooth Low Energy when your meat is nearing spoilage or has gone bad.",
    color: "caution" as const,
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Intelligent sampling every 30-60 minutes conserves battery. Cold-weather optimized lithium batteries last up to 6 months.",
    color: "fresh" as const,
  },
  {
    icon: Droplets,
    title: "Food-Safe & Waterproof",
    description: "IP67 rated with food-grade polypropylene casing. Wireless charging keeps the pod completely sealed.",
    color: "fresh" as const,
  },
];

const colorClasses = {
  fresh: {
    bg: "bg-fresh/10",
    border: "border-fresh/20",
    icon: "text-fresh",
    glow: "group-hover:shadow-[0_0_30px_hsl(142_72%_45%_/_0.2)]",
  },
  caution: {
    bg: "bg-caution/10",
    border: "border-caution/20",
    icon: "text-caution",
    glow: "group-hover:shadow-[0_0_30px_hsl(45_93%_47%_/_0.2)]",
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precision <span className="text-gradient-fresh">Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced sensors and AI-trained algorithms to keep your food safe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={feature.title}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-fresh/30 transition-all duration-500 ${colors.glow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
