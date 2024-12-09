"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}