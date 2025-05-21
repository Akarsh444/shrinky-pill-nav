
import { cn } from "@/lib/utils";
import React from "react";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  isCompact?: boolean;
  className?: string;
};

const NavbarLink = ({ href, children, isMobile = false, isCompact = false, className }: NavbarLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "transition-all duration-200 font-medium",
        isMobile ? "block w-full p-3" : "px-4 py-2",
        isCompact ? "text-sm" : "text-base",
        "hover:text-primary-foreground hover:underline",
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavbarLink;
