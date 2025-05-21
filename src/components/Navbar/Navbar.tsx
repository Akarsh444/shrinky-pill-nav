
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NavbarDropdown from "./NavbarDropdown";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation data structure
  const navItems = [
    { 
      label: "Products", 
      href: "#", 
      dropdown: [
        { label: "Feature One", href: "#feature-one" },
        { label: "Feature Two", href: "#feature-two" },
        { label: "Feature Three", href: "#feature-three" },
      ] 
    },
    { 
      label: "Services", 
      href: "#", 
      dropdown: [
        { label: "Service One", href: "#service-one" },
        { label: "Service Two", href: "#service-two" },
        { label: "Service Three", href: "#service-three" },
      ] 
    },
    { label: "About", href: "#about" },
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
          className="fixed top-4 right-4 z-50 bg-primary p-2 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={toggleNavbarVisibility}
        >
          <Menu className="text-primary-foreground" />
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
              ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md max-w-fit rounded-full px-6" 
              : "bg-white dark:bg-gray-900 container"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-primary">MyLogo</a>
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
                  >
                    {item.label}
                  </NavbarLink>
                )
              ))}
              
              <button 
                onClick={toggleNavbarVisibility}
                className="ml-4 p-2 text-gray-500 hover:text-primary transition-colors"
                aria-label="Hide navbar"
              >
                <X size={18} />
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-500 hover:text-primary transition-colors"
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
                      >
                        {item.label}
                      </NavbarLink>
                    )}
                  </div>
                ))}
                <button 
                  onClick={toggleNavbarVisibility}
                  className="flex items-center justify-center w-full p-2 text-gray-500 hover:text-primary transition-colors"
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
