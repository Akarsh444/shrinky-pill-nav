
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import NavbarDropdown from "./NavbarDropdown";
import NavbarLink from "./NavbarLink";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation data structure for an NGO website
  const navItems = [
    { label: "Home", href: "#" },
    { 
      label: "About Us", 
      href: "#", 
      dropdown: [
        { label: "Our Mission", href: "#our-mission" },
        { label: "Our Team", href: "#our-team" },
        { label: "Our History", href: "#our-history" },
      ] 
    },
    { 
      label: "Programs", 
      href: "#", 
      dropdown: [
        { label: "Education", href: "#education" },
        { label: "Healthcare", href: "#healthcare" },
        { label: "Community Development", href: "#community" },
      ] 
    },
    { 
      label: "Get Involved", 
      href: "#", 
      dropdown: [
        { label: "Volunteer", href: "#volunteer" },
        { label: "Partner With Us", href: "#partner" },
        { label: "Fundraise", href: "#fundraise" },
      ] 
    },
    { label: "Contact", href: "#contact" },
  ];

  // Track scroll position to transform navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNavbarVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {/* Navbar placeholder when hidden */}
      {isHidden && (
        <div 
          className="fixed top-4 right-4 z-50 bg-teal-500 p-2 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={toggleNavbarVisibility}
        >
          <Menu className="text-white" />
        </div>
      )}
      
      <header 
        className={cn(
          "fixed w-full transition-all duration-300 z-40",
          isHidden ? "transform -translate-y-full" : "transform translate-y-0",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div 
          className={cn(
            "mx-auto transition-all duration-300",
            isScrolled 
              ? "bg-slate-800/80 backdrop-blur-md shadow-md max-w-fit rounded-full px-6" 
              : "bg-slate-800 container"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-white flex items-center">
                <span className="mr-2 font-serif">NGO</span>
                <span className="text-sm font-light">Empowering Communities</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <NavbarDropdown 
                    key={index} 
                    item={item} 
                    isCompact={isScrolled}
                  />
                ) : (
                  <NavbarLink 
                    key={index} 
                    href={item.href} 
                    isCompact={isScrolled}
                    className="text-white"
                  >
                    {item.label}
                  </NavbarLink>
                )
              ))}
              
              {/* Donate Button */}
              <Button 
                variant="secondary"
                className="ml-4 bg-teal-500 hover:bg-teal-400 text-white font-bold"
                size={isScrolled ? "sm" : "default"}
              >
                <Heart className="mr-1 h-4 w-4" /> Donate
              </Button>
              
              <button 
                onClick={toggleNavbarVisibility}
                className="ml-4 p-2 text-white hover:text-gray-200 transition-colors"
                aria-label="Hide navbar"
              >
                <X size={18} />
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button 
                variant="secondary"
                className="mr-4 bg-teal-500 hover:bg-teal-400 text-white font-bold"
                size="sm"
              >
                <Heart className="mr-1 h-4 w-4" /> Donate
              </Button>
              
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:text-gray-200 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 px-2">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <div key={index} className="w-full">
                    {item.dropdown ? (
                      <NavbarDropdown 
                        item={item} 
                        isMobile={true} 
                        isCompact={isScrolled}
                      />
                    ) : (
                      <NavbarLink 
                        href={item.href} 
                        isMobile={true}
                        isCompact={isScrolled}
                        className="text-white"
                      >
                        {item.label}
                      </NavbarLink>
                    )}
                  </div>
                ))}
                <button 
                  onClick={toggleNavbarVisibility}
                  className="flex items-center justify-center w-full p-2 text-white hover:text-gray-200 transition-colors"
                >
                  Hide Navbar <X size={18} className="ml-2" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Spacer element to prevent content from being hidden under the navbar */}
      <div className={cn(
        "transition-all duration-300",
        isScrolled ? "h-16" : "h-24"
      )} />
    </>
  );
};

export default Navbar;
