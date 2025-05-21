
import { cn } from "@/lib/utils";
import React from "react";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  isCompact?: boolean;
};

const NavbarLink = ({ href, children, isMobile = false, isCompact = false }: NavbarLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "transition-all duration-200 hover:text-primary",
        isMobile ? "block w-full p-3" : "px-4 py-2",
        isCompact ? "text-sm" : "text-base"
      )}
    >
      {children}
    </a>
  );
};

export default NavbarLink;
