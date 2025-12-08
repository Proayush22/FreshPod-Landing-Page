import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPod from "@/assets/hero-pod.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fresh/10 rounded-full blur-[120px] opacity-50" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fresh/10 border border-fresh/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-fresh animate-pulse" />
              <span className="text-sm text-fresh font-medium">Smart Food Safety</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Know When Your Meat
              <span className="text-gradient-fresh block mt-2">Is Fresh</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A smart pod that detects meat spoilage before it's too late. Get instant alerts on your phone and never waste food again.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="hero">
                Pre-Order Now
              </Button>
              <Button variant="heroOutline">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">90%+</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">3 Month</p>
                <p className="text-sm text-muted-foreground">Battery Life</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">50m</p>
                <p className="text-sm text-muted-foreground">Water Resistance</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right - Product Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <img 
                src={heroPod} 
                alt="FreshPod smart meat spoilage detector" 
                className="w-full max-w-md animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;