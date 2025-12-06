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
            <div className="bg-card border border-border/50 rounded-xl px-6 py-3 flex items-center gap-4">
              {/* Alexa Brand Icon (Cyan Blue) */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.97 8.3C9.52 8.3 6.79 9.2 4.87 10.75L3.82 9.25C6.07 7.45 9.22 6.45 11.97 6.45C14.57 6.45 17.37 7.45 19.17 9.15L18.02 10.7C16.47 9.3 14.12 8.45 11.97 8.3ZM3.67 13.75C5.32 12.4 8.02 11.5 10.67 11.5C12.77 11.5 14.92 12.1 16.47 13.2L15.32 14.75C14.12 13.9 12.47 13.45 10.67 13.45C8.62 13.45 6.52 14.15 5.27 15.2L3.67 13.75ZM7.37 16.8C8.72 15.85 10.32 15.35 11.97 15.35C13.22 15.35 14.47 15.65 15.57 16.25L14.47 17.8C13.72 17.4 12.87 17.2 11.97 17.2C10.82 17.2 9.72 17.55 8.77 18.2L7.37 16.8Z" fill="#00CAFF"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase font-medium text-muted-foreground leading-tight">Works with</p>
                <p className="text-foreground font-bold text-lg leading-tight">amazon alexa</p>
              </div>
            </div>           
            <div className="bg-card border border-border/50 rounded-xl px-6 py-3 flex items-center gap-4">
              {/* Google Home Brand Icon (Multi-color) */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.4L1.2 12H3.6V21.6H9.6V15.6H14.4V21.6H20.4V12H22.8L12 2.4Z" fill="none" stroke="none"/>
                <path d="M12 4.84375L4.8 11.2438V20.4H8.4V14.4H15.6V20.4H19.2V11.2438L12 4.84375Z" fill="currentColor" className="text-foreground opacity-20"/>
                {/* The four Google Colors */}
                <path d="M12 2.4L1.2 12H3.6V21.6H9.6V15.6H14.4V21.6H20.4V12H22.8L12 2.4ZM8.4 20.4H4.8V11.2438L12 4.84375L19.2 11.2438V20.4H15.6V14.4H8.4V20.4Z" fill="none"/>
                <path d="M 12 2.4 L 1.2 12 H 3.6 V 21.6 H 9.6 V 15.6 H 12 V 2.4 Z" fill="#4285F4"/>
                <path d="M 22.8 12 L 12 2.4 V 15.6 H 14.4 V 21.6 H 20.4 V 12 H 22.8 Z" fill="#34A853"/>
                <path d="M 15.6 21.6 H 14.4 V 15.6 H 9.6 V 21.6 H 8.4 V 14.4 H 15.6 V 21.6 Z" fill="#FBBC05"/>
                <path d="M 12 4.84375 L 4.8 11.24375 V 14.4 H 8.4 V 20.4 H 9.6 V 15.6 H 14.4 V 21.6 H 15.6 V 14.4 H 19.2 V 11.24375 L 12 4.84375 Z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase font-medium text-muted-foreground leading-tight">Works with</p>
                <p className="text-foreground font-bold text-lg leading-tight">Google Home</p>
              </div>
            </div>
            <div className="bg-card border border-border/50 rounded-xl px-6 py-3 flex items-center gap-3 opacity-60">
              <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground">Works with</p>
                <p className="text-foreground font-semibold text-sm">Apple HomePod</p>
              </div>
            </div>    
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppSection;
