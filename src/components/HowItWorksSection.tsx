const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Place the Pod",
      description: "Simply place FreshPod next to your meat in the fridge. The compact design fits anywhere.",
      status: "fresh" as const,
    },
    {
      number: "02",
      title: "Continuous Monitoring",
      description: "The sensor wakes every few hours to analyze VOC levels and detect early signs of spoilage. The app updates everytime the sensor wakes.",
      status: "fresh" as const,
    },
    {
      number: "03",
      title: "Get Notified",
      description: "Yellow LED and phone notification when meat should be consumed soon. Red when it's spoiled.",
      status: "caution" as const,
    },
  ];

  const statusColors = {
    fresh: "bg-fresh",
    caution: "bg-caution",
    spoiled: "bg-spoiled",
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient-fresh">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple setup, intelligent monitoring, peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-fresh/30 to-transparent" />
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="text-center">
                {/* Number badge */}
                <div className="relative inline-flex mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${statusColors[step.status]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  {/* Pulse ring */}
                  <div className={`absolute inset-0 rounded-2xl ${statusColors[step.status]} opacity-30 animate-ping`} style={{ animationDuration: '2s' }} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LED Status indicator visualization */}
        <div className="mt-20 p-8 rounded-3xl bg-card border border-border">
          <h3 className="text-xl font-semibold text-center mb-8">LED Status Indicators</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-fresh glow-fresh animate-pulse-glow" />
              <div>
                <p className="font-medium">Green</p>
                <p className="text-sm text-muted-foreground">Fresh & Safe</p>
              </div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-caution glow-caution animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              <div>
                <p className="font-medium">Yellow</p>
                <p className="text-sm text-muted-foreground">Consume Soon</p>
              </div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-spoiled glow-spoiled animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div>
                <p className="font-medium">Red</p>
                <p className="text-sm text-muted-foreground">Spoiled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
