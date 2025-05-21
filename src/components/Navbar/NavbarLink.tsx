
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  isCompact?: boolean;
  className?: string;
};

const NavbarLink = ({ href, children, isMobile = false, isCompact = false, className }: NavbarLinkProps) => {
  return (
    <motion.a
      href={href}
      className={cn(
        "transition-all duration-200 font-medium",
        isMobile ? "block w-full p-3" : "px-4 py-2",
        isCompact ? "text-sm" : "text-base",
        "hover:text-blue-300 hover:underline",
        className
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

export default NavbarLink;
