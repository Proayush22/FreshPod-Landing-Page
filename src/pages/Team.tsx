import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Rocket, Award, Users, Lightbulb, Target, TrendingUp } from "lucide-react";
import evolutionV1 from "@/assets/evolution-v1.png";
import evolutionV2 from "@/assets/evolution-v2.png";
import evolutionV3 from "@/assets/evolution-v3.png";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former food scientist at Stanford. Passionate about reducing food waste through technology.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sarah Miller",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer specializing in IoT and sensor technology. Built smart home devices used by millions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Head of Hardware",
    bio: "15 years in consumer electronics. Previously led hardware teams at Nest and Apple.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Product",
    bio: "Product design veteran focused on creating intuitive user experiences for smart home devices.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

const evolutionSteps = [
  {
    year: "2023",
    title: "Concept & Research",
    description: "Initial prototype using basic gas sensors. Bulky design focused on proving the core detection technology.",
    image: evolutionV1,
  },
  {
    year: "2024",
    title: "Miniaturization",
    description: "Reduced size by 70%. Integrated BLE connectivity and improved sensor accuracy with AI training.",
    image: evolutionV2,
  },
  {
    year: "2025",
    title: "Production Ready",
    description: "Final sleek design with wireless charging, IP67 rating, and smart home hub integration.",
    image: evolutionV3,
  },
];

const milestones = [
  {
    date: "Jan 2023",
    title: "The Idea is Born",
    description: "Founders Alex and Sarah meet at FoodTech Summit and discover their shared vision for smart food safety.",
    icon: Lightbulb,
    side: "left" as const,
  },
  {
    date: "Apr 2023",
    title: "First Prototype",
    description: "Built the first working prototype using off-the-shelf MOX sensors and Arduino boards.",
    icon: Rocket,
    side: "right" as const,
  },
  {
    date: "Aug 2023",
    title: "Y Combinator Acceptance",
    description: "Accepted into YC W23 batch, validating our mission to reduce food waste through technology.",
    icon: Award,
    side: "left" as const,
  },
  {
    date: "Dec 2023",
    title: "Seed Funding Raised",
    description: "$2.5M seed round led by Founders Fund with participation from climate-focused VCs.",
    icon: TrendingUp,
    side: "right" as const,
  },
  {
    date: "Mar 2024",
    title: "Team Expansion",
    description: "Grew from 4 to 12 team members, bringing on hardware experts from Apple and Nest.",
    icon: Users,
    side: "left" as const,
  },
  {
    date: "Sep 2024",
    title: "AI Accuracy Milestone",
    description: "Achieved 95% detection accuracy through proprietary AI training on 10,000+ samples.",
    icon: Target,
    side: "right" as const,
  },
  {
    date: "Q4 2026",
    title: "Consumer Launch",
    description: "FreshPod ships to customers worldwide. Pre-orders now open with exclusive early-bird pricing.",
    icon: Rocket,
    side: "left" as const,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-fresh/5 to-background" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet the <span className="text-gradient-fresh">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of engineers, designers, and food scientists 
              on a mission to eliminate food waste through smart technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient-fresh">FreshPod</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FreshPod was born from a simple frustration: throwing away meat that looked fine 
                  but had gone bad, and worrying about meat that was probably still safe to eat.
                </p>
                <p>
                  In 2023, our founders Alex and Sarah met at a food technology conference and 
                  discovered they shared the same vision—using sensor technology to solve the 
                  age-old problem of food spoilage detection.
                </p>
                <p>
                  Today, we're a team of 12 based in San Francisco, working to bring smart food 
                  safety to every kitchen. Our mission is to reduce the 40% of food that gets 
                  wasted in American households while keeping families safe from foodborne illness.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-fresh/10 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-fresh">12</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-fresh">$2.5M</p>
                    <p className="text-sm text-muted-foreground">Seed Funding</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-fresh">5</p>
                    <p className="text-sm text-muted-foreground">Patents Filed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-fresh">2026</p>
                    <p className="text-sm text-muted-foreground">Launch Year</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Milestones Timeline */}
      <section className="py-24 px-6 bg-gradient-to-b from-card/50 to-background overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-fresh">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones on our path to revolutionizing food safety
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fresh/50 via-fresh/30 to-transparent hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  className={`relative md:flex items-center ${
                    milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } md:mb-12`}
                  initial={{ opacity: 0, x: milestone.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${
                    milestone.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}>
                    <div className={`bg-card border border-border rounded-2xl p-6 hover:border-fresh/30 transition-colors ${
                      milestone.side === "left" ? "md:ml-auto" : "md:mr-auto"
                    } max-w-md`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        milestone.side === "left" ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <span className="px-3 py-1 bg-fresh/10 border border-fresh/20 rounded-full text-fresh text-xs font-medium">
                          {milestone.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-fresh items-center justify-center z-10">
                    <milestone.icon className="w-5 h-5 text-fresh" />
                  </div>

                  {/* Mobile icon */}
                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-fresh/10 border border-fresh/30 flex items-center justify-center">
                      <milestone.icon className="w-4 h-4 text-fresh" />
                    </div>
                    <span className="px-3 py-1 bg-fresh/10 border border-fresh/20 rounded-full text-fresh text-xs font-medium">
                      {milestone.date}
                    </span>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-fresh">Leadership</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry veterans united by a shared passion for innovation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-fresh/30 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-border group-hover:border-fresh/50 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-fresh/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-fresh text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-muted-foreground hover:text-fresh transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-fresh transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Evolution */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product <span className="text-gradient-fresh">Evolution</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to production—watch how FreshPod evolved
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {evolutionSteps.map((step, index) => (
              <motion.div
                key={step.year}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Connection line */}
                {index < evolutionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-[calc(50%+4rem)] right-0 h-px bg-gradient-to-r from-fresh/50 to-transparent" />
                )}
                
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-fresh/30 transition-colors">
                  {/* Evolution image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-fresh/5 to-card overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={`FreshPod ${step.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-fresh/10 border border-fresh/20 rounded-full text-fresh text-sm font-medium">
                        {step.year}
                      </span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;