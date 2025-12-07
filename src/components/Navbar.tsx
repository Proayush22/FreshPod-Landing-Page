import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">

          {isHomePage ? (
            <>
              <Link to="#top" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-fresh flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">FP</span>
                </div>
                <span className="font-semibold text-lg">FreshPod</span>
              </Link>

            </>
          ): (
            <>
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-fresh flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FP</span>
              </div>
              <span className="font-semibold text-lg">FreshPod</span>
            </Link>

            </>
          )}
          
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
                <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Specs
                </a>
                <a href="#app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our App
                </a>
                            <Link 
              to="/team" 
              className={`text-sm transition-colors ${location.pathname === "/team" ? "text-fresh font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              About Us
            </Link>

              </>
            ) : (
              <>
                          <Link 
              to="/team" 
              className={`text-sm transition-colors ${location.pathname === "/team" ? "text-fresh font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              About Us
            </Link>

                <Link to="/team#us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
                <Link to="/team#evolution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Evolution
                </Link>
                <Link to="/team#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </>
            )}
            {/*
            <Link 
              to="/team" 
              className={`text-sm transition-colors ${location.pathname === "/team" ? "text-fresh font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              About Us
            </Link>
            */}
          </div>
                      
          <Link to={isHomePage ? "/#cta" : "/#cta"}>
            <Button variant="default" size="sm">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
