"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, 
  Activity, MapPin, Star, Users, Zap, CheckCircle2, ChevronDown
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarePathways from './CarePathways';
import WhyChooseus from './WhyChooseus';
import Footer from './Footer';
import ConditionDropdown from './ConditionDropdown'; 

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const pathname = usePathname();
  
  // Refs for animations and click outside detection
  const heroRef = useRef(null);
  const dropdownRef = useRef(null); // Ref for the dropdown trigger area

  // Navigation Items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // GSAP Animations
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, heroRef);

    // Click Outside Handler to close dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#c5973e] selection:text-white bg-slate-50">
      
      {/* 1. NAVIGATION BAR */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-slate-200 py-3" 
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0a1e3f] text-white rounded-xl shadow-md transition-transform group-hover:scale-105">
              <Activity size={24} className="text-[#c5973e]" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-extrabold tracking-tight leading-tight transition-colors ${
                isScrolled ? "text-[#0a61ecf3]" : "text-white"
              }`}>
                ADITYA
              </span>
              <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                isScrolled ? "text-[#0071bd]" : "text-[#c5973e]"
              }`}>
               Spine & Joint Rehab LLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`text-sm font-bold tracking-wide transition-colors relative py-2 group ${
                    isScrolled 
                      ? (isActive ? "text-[#0071bd]" : "text-slate-600 hover:text-[#0a1e3f]")
                      : (isActive ? "text-[#c5973e]" : "text-white hover:text-[#c5973e]")
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-[#c5973e]" : "bg-white"
                  } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}

            {/* CONDITIONS DROPDOWN TRIGGER - CLICK BASED */}
            <div 
              ref={dropdownRef}
              className="relative"
            >
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors relative py-2 group ${
                  isScrolled 
                    ? (dropdownOpen ? "text-[#0071bd]" : "text-slate-600 hover:text-[#0a1e3f]")
                    : (dropdownOpen ? "text-[#c5973e]" : "text-white hover:text-[#c5973e]")
                }`}
              >
                Conditions We Treat
                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 bg-[#c5973e] ${dropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </button>

              {/* THE DROPDOWN COMPONENT - Only shows if dropdownOpen is true */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-4 w-max"> 
                   {/* pt-4 adds a little gap so mouse doesn't lose focus immediately if we wanted hover, but for click it's just spacing */}
                   <ConditionDropdown />
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:7447755533" className={`flex items-center gap-2 text-sm font-bold transition-colors ${
              isScrolled ? "text-[#0a1e3f]" : "text-white"
            }`}>
              <Phone size={16} className="text-[#c5973e]" />
              +91 74477 55533
            </a>
          </div>

          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#0a1e3f]" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}>
          <div className="flex flex-col px-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`font-semibold text-lg border-b border-slate-100 pb-3 transition-colors ${
                    isActive ? "text-[#0071bd]" : "text-[#0a1e3f] hover:text-[#0071bd]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
             <Link 
                href="/conditions"
                className="font-semibold text-lg border-b border-slate-100 pb-3 text-[#0a1e3f] hover:text-[#0071bd]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conditions We Treat
              </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section ref={heroRef} className="relative w-full h-screen min-h-[750px] flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0a1e3f]/95 via-[#0a1e3f]/85 to-[#0071bd]/70"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 flex flex-col items-center text-center hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c5973e] animate-ping"></span>
            <span className="text-white text-xs font-bold tracking-widest uppercase ml-2">
              Premium Healthcare Facility
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 drop-shadow-xl">
            Advanced Spine, Joint & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5973e] to-[#e8c678]">
              Neuro Rehabilitation
            </span>
          </h1>

          <div className="flex items-center gap-6 w-full justify-center mb-8 opacity-90">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-[#c5973e]"></div>
            <p className="flex items-center gap-2 text-white tracking-widest text-sm md:text-base font-bold uppercase">
              <MapPin size={18} className="text-[#c5973e]" />
              Borivali West, Mumbai
            </p>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-[#c5973e]"></div>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-blue-50 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-md font-light">
            Move better, reduce pain and rebuild confidence with a <strong className="font-semibold text-white">structured rehabilitation programme</strong> designed around your diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mb-16">
            <button className="group w-full sm:w-auto px-8 py-4 bg-[#0071bd] hover:bg-[#085a91] text-white text-lg font-bold rounded-xl shadow-lg shadow-[#0071bd]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              Book an Assessment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/917447755533"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#c5973e] hover:bg-[#c5973e]/10 text-white text-lg font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <MessageCircle size={20} className="text-[#c5973e]" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <CarePathways />
      <WhyChooseus/>
      <Footer />

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href="tel:7447755533" 
          className="w-14 h-14 bg-[#0071bd] hover:bg-[#085a91] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-white/20"
        >
          <Phone fill="currentColor" size={24} />
        </a>
        <a 
          href="https://wa.me/917447755533" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-white/20"
        >
          <MessageCircle fill="currentColor" size={28} />
        </a>
      </div>

    </div>
  );
}