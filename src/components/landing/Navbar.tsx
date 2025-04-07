"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APPCONSTANT } from "@/constant/App.constant";
import { useAuth } from "@/lib/auth";

interface LandingNavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export function LandingNavbar({
  activeSection,
  onNavClick,
}: LandingNavbarProps) {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#996515] flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-[#996515]">
                {APPCONSTANT.name}
              </h1>
              <p className="text-xs -mt-1 text-[#996515]/80">
                {APPCONSTANT.fullName}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#996515] bg-[#996515]/10"
                    : "text-gray-600 hover:text-[#996515] hover:bg-[#996515]/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link href="/login">
              <Button className="ml-4 bg-[#996515] hover:bg-[#996515]/90">
                {user ? "Dashboard" : "Masuk"}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#996515] hover:bg-[#996515]/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavClick(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-[#996515] bg-[#996515]/10"
                      : "text-gray-600 hover:text-[#996515] hover:bg-[#996515]/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Link href="/login" className="mt-2">
                <Button className="w-full bg-[#996515] hover:bg-[#996515]/90">
                  {user ? "Dashboard" : "Masuk"}
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
