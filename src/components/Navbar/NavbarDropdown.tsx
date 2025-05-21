
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

type NavbarDropdownProps = {
  item: NavItem;
  isMobile?: boolean;
  isCompact?: boolean;
};

const NavbarDropdown = ({ item, isMobile = false, isCompact = false }: NavbarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" onMouseLeave={() => !isMobile && setIsOpen(false)}>
      <motion.button
        onClick={toggleDropdown}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        className={cn(
          "flex items-center justify-between transition-all duration-200",
          isMobile ? "w-full text-left p-3" : "px-4 py-2",
          isCompact ? "text-sm" : "text-base",
          "text-white hover:text-blue-300 font-medium focus:outline-none"
        )}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {item.label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            size={isMobile ? 20 : isCompact ? 14 : 16}
            className="ml-1"
          />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              isMobile
                ? "mt-1 w-full"
                : "absolute left-0 min-w-[200px] shadow-lg rounded-md",
              isCompact && !isMobile ? "bg-blue-700/90 dark:bg-blue-800/90 backdrop-blur-md" : "bg-blue-700 dark:bg-blue-800"
            )}
          >
            <div className={cn(
              "py-2",
              !isMobile && "border border-blue-600 dark:border-blue-700 rounded-md"
            )}>
              {item.dropdown?.map((subItem, idx) => (
                <motion.a
                  key={idx}
                  href={subItem.href}
                  className={cn(
                    "block transition-colors duration-200 text-white hover:bg-blue-600 dark:hover:bg-blue-700",
                    isMobile ? "p-3" : "px-4 py-2",
                    isCompact ? "text-sm" : "text-base"
                  )}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {subItem.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarDropdown;
