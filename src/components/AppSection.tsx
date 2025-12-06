import { Smartphone, Bell, ShoppingCart, Package, BarChart3 } from "lucide-react";
import appHome from "@/assets/app-home.png";
import appPantry from "@/assets/app-pantry.png";
import appDetail from "@/assets/app-detail.png";
import appContainers from "@/assets/app-containers.png";
import appGrocery from "@/assets/app-grocery.png";

const appScreens = [
  {
    image: appHome,
    title: "Smart Dashboard",
    description: "Get a complete overview of your food inventory at a glance",
  },
  {
    image: appPantry,
    title: "Pantry Tracking",
    description: "Track expiration dates and filter by category",
  },
  {
    image: appDetail,
    title: "Item Details",
    description: "Monitor spoilage timeline and manage quantities",
  },
  {
    image: appContainers,
    title: "Container Sync",
    description: "Real-time updates from your FreshPod sensors",
  },
  {
    image: appGrocery,
    title: "Grocery List",
    description: "Smart suggestions based on what's running low",
  },
];

const features = [
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified before food spoils",
  },
  {
    icon: BarChart3,
    title: "Freshness Analytics",
    description: "Track patterns and reduce waste",
  },
  {
    icon: ShoppingCart,
    title: "Auto Grocery Lists",
    description: "Never forget what you need",
  },
  {
    icon: Package,
    title: "Multi-Container",
    description: "Monitor all your FreshPods",
  },
];

const AppSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-fresh/10 border border-fresh/20 rounded-full px-4 py-2 mb-6">
            <Smartphone className="w-4 h-4 text-fresh" />
            <span className="text-fresh text-sm font-medium">Companion App</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Control at Your <span className="text-fresh">Fingertips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The FreshPod app seamlessly syncs with your device, giving you complete 
            control over your food inventory from anywhere.
          </p>
        </div>

        {/* App Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/50 border border-border/50 rounded-2xl p-4 text-center hover:border-fresh/30 transition-colors"
            >
              <div className="w-10 h-10 bg-fresh/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-5 h-5 text-fresh" />
              </div>
              <h3 className="text-foreground font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-muted-foreground text-xs">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Phone Mockups Carousel */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 overflow-x-auto pb-8 px-4 scrollbar-hide snap-x snap-mandatory">
            {appScreens.map((screen, index) => (
              <div 
                key={index}
                className="flex-shrink-0 snap-center group"
              >
                {/* Phone Frame */}
                <div className="relative bg-card border-4 border-border/80 rounded-[2.5rem] p-2 shadow-2xl shadow-black/50 hover:border-fresh/30 transition-all duration-300 hover:shadow-fresh/10">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-border/80 rounded-full z-20" />
                  
                  {/* Screen */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-black">
                    <img 
                      src={screen.image} 
                      alt={screen.title}
                      className="w-64 h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Label */}
                <div className="mt-6 text-center max-w-64">
                  <h3 className="text-foreground font-semibold mb-1">{screen.title}</h3>
                  <p className="text-muted-foreground text-sm">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Coming soon to iOS and Android</p>
          <div className="flex justify-center gap-4">
            <div className="bg-card border border-border/50 rounded-xl px-6 py-3 flex items-center gap-3 opacity-60">
              <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path xmlns="http://www.w3.org/2000/svg" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2M10.43,21.87v-2A1.76,1.76,0,0,0,9.35,18.3,6.83,6.83,0,1,1,18.83,12C18.83,16.43,15.39,20.61,10.43,21.87Z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground">Works with</p>
                <p className="text-foreground font-semibold text-sm">Amazon Alexa</p>
              </div>
              
            </div>            
            <div className="bg-card border border-border/50 rounded-xl px-6 py-3 flex items-center gap-3 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                <path fill="#fafafa" d="M22.586,4.414L5.879,21.121C5.316,21.684,5,22.447,5,23.243V41c0,1.105,0.895,2,2,2h34 c1.105,0,2-0.895,2-2V23.243c0-0.796-0.316-1.559-0.879-2.121L25.414,4.414C24.633,3.633,23.367,3.633,22.586,4.414z"></path><path fill="#43a047" d="M12 35H36V43H12z"></path><path fill="#fbc02d" d="M13,24v19H7c-1.1,0-2-0.9-2-2V24H13z"></path><path fill="#1e88e5" d="M42.12,21.12L29.59,8.59l-5.55,5.55L35,25.1V43h6c1.1,0,2-0.9,2-2V23.24 C43,22.45,42.68,21.68,42.12,21.12z"></path><path fill="#e64a19" d="M29.59,8.59L5,33.18v-9.94c0-0.79,0.32-1.56,0.88-2.12L22.59,4.41c0.78-0.78,2.04-0.78,2.82,0 L29.59,8.59z"></path>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground">Works with</p>
                <p className="text-foreground font-semibold text-sm">Google Home</p>
              </div>
            </div>      
            <div className="bg-card border border-border/50 rounded-xl px-6 py-3 flex items-center gap-3 opacity-60">
              <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground">Works with</p>
                <p className="text-foreground font-semibold text-sm">Apple Home</p>
              </div>
            </div>    
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppSection;
