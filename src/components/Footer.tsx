const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/*
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-fresh flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FP</span>
            </div>
            <span className="font-semibold text-lg">FreshPod</span>
          </div>
          */}

          <p className="text-sm text-muted-foreground">
            Created by <a href="https://cloudcores.org" target="_blank" className="link-fancy link-fancy-light">CloudCores</a>

          </p>

          
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Meet Our Team
            </a>
            <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Join Us
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2025 FreshPod. All rights reserved. 
          </p>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
