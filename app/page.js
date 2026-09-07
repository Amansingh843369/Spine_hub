"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fraunces, Manrope } from "next/font/google";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Phone, MessageCircle, Menu, X, MapPin, ChevronDown, ChevronDown as ScrollChevron
} from "lucide-react";
import CarePathways from './CarePathways';
import WhyChooseus from './WhyChooseus';
import Footer from './Footer';
import ConditionDropdown from './ConditionDropdown';

 
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

// Simple count-up, triggered once when it scrolls into view.
function Counter({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }
    const startTime = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration, shouldReduceMotion]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const dropdownRef = useRef(null);
  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const trustItems = [
    "Experienced clinical leadership",
    "Personalized programmes",
    "Advanced rehabilitation technology",
    "Close to Borivali Station",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const handlePhotoMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = photoRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const scrollToNext = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.13, delayChildren: 0.15 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div
      className={`${fraunces.variable} ${manrope.variable} relative min-h-screen bg-white selection:bg-[#D6C299]/30 selection:text-[#0A0F1F]`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {/* Smooth scrolling site-wide, respecting reduced-motion preference */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }
      `}</style>

      {/* 1. STICKY NAVIGATION BAR — midnight navy, always on-brand */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#0A0F1F]/95 backdrop-blur-sm shadow-lg shadow-[#0A0F1F]/10 py-3"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3 z-50 shrink-0">
            <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#D6C299] rounded-md shrink-0">
              <span className="text-[#0A0F1F] text-xl italic" style={{ fontFamily: 'var(--font-display)' }}>
                A
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[16px] sm:text-lg font-medium tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Aditya Spine &amp; Joint
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#D6C299]">
                Rehabilitation Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[15px] font-medium relative py-1 transition-colors ${
                    isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D6C299]" />}
                </Link>
              );
            })}

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 text-[15px] font-medium py-1 transition-colors ${
                  dropdownOpen ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                Conditions we treat
                <ChevronDown size={15} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-0 pt-4 w-max transition-all duration-300 origin-top-left ${dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                <ConditionDropdown />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:7447755533"
              className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-[#D6C299] hover:bg-[#B89F72] text-[#0A0F1F] font-semibold text-sm transition-colors"
            >
              <Phone size={15} />
              +91 74477 55533
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#0A0F1F] border-t border-white/10 transition-all duration-300 ease-in-out overflow-y-auto ${
            mobileMenuOpen ? "max-h-[calc(100vh-72px)] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col px-6 py-8 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-lg py-3 border-b border-white/10 transition-colors ${
                    isActive ? "text-[#D6C299]" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/conditions"
              className="font-medium text-lg py-3 border-b border-white/10 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Conditions we treat
            </Link>
            <div className="pt-6">
              <a
                href="tel:7447755533"
                className="w-full flex items-center justify-center gap-2 bg-[#D6C299] text-[#0A0F1F] py-4 rounded-full font-semibold"
              >
                <Phone size={18} />
                Call +91 74477 55533
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO — the section that carries the most visual weight on the page */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A0F1F] pt-28 pb-20 md:pt-32">
        {/* Layered midnight-navy gradient, not a flat fill */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 15% 20%, #17203D 0%, #0A0F1F 45%, #05070F 100%)" }}
        />
        {/* Faint alignment-line texture, echoing spinal alignment rather than decorating for its own sake */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center w-full">

          {/* Left: copy, staggered in as one orchestrated sequence */}
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
              <span className="w-8 h-[1.5px] bg-[#D6C299]" />
              <p className="flex items-center gap-1.5 text-[#D6D2C4] text-sm font-medium">
                <MapPin size={14} className="text-[#D6C299]" />
                Borivali West, Mumbai
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.1rem] leading-[1.18] sm:text-[2.75rem] lg:text-[3.15rem] lg:leading-[1.15] text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Advanced Spine, Joint &amp;{" "}
              <span className="italic text-[#D6C299]">Neuro Rehabilitation</span>{" "}
              in Borivali West
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#C7C2B0] text-base md:text-[17px] max-w-lg mb-9 leading-relaxed">
              Move better, reduce pain and rebuild confidence with a structured
              rehabilitation programme designed around your diagnosis, movement
              limitations and personal goals.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-start gap-4 mb-10">
              <button className="px-7 py-3.5 bg-[#D6C299] hover:bg-[#B89F72] text-[#0A0F1F] font-semibold rounded-full transition-colors">
                Book an Assessment
              </button>

              <div>
                <div className="flex rounded-full border border-white/25 overflow-hidden">
                  <a
                    href="tel:7447755533"
                    className="flex items-center gap-2 pl-6 pr-5 py-3.5 text-white font-medium hover:bg-white/10 transition-colors border-r border-white/25"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href="https://wa.me/917447755533"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 pl-5 pr-6 py-3.5 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
                <p className="text-[#8C8775] text-xs mt-2 text-center">7447755533</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-3 gap-y-2 max-w-lg">
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-3 text-[#C4BFAF] text-[13px] sm:text-sm">
                  {i > 0 && <span className="text-[#D6C299]" aria-hidden="true">•</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: framed photo with gold orbit ring + a floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="relative hidden sm:block"
          >
            {/* Decorative rotating gold ring — motion tied to the "movement" theme */}
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute -top-10 -right-10 w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] opacity-40 pointer-events-none -z-0"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <circle cx="200" cy="200" r="180" fill="none" stroke="#D6C299" strokeWidth="1.5" strokeDasharray="2 14" strokeLinecap="round" />
            </motion.svg>

            <div
              ref={photoRef}
              onMouseMove={handlePhotoMove}
              onMouseLeave={resetTilt}
              style={{ perspective: 1000 }}
              className="relative z-10 max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <motion.div
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
              >
                {/* Replace with a real, licensed photo of your clinic/team */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/hero-clinic.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/60 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-7 left-4 lg:-left-8 bg-white rounded-xl px-6 py-5 max-w-[210px] border border-[#D6C299]/30 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.35)] z-20"
              >
                <p className="text-3xl text-[#0A0F1F]" style={{ fontFamily: 'var(--font-display)' }}>
                  100<span className="text-[#D6C299]">%</span>
                </p>
                <p className="text-[#6b6558] text-[13px] mt-1 leading-snug">
                  diagnosis-led, individually planned care
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue — clicking (or reaching) smooth-scrolls into the next section */}
        <motion.button
          onClick={scrollToNext}
          aria-label="Scroll to explore"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ScrollChevron size={26} />
        </motion.button>
      </section>

      {/* Placeholders for the rest of your components */}
      <div id="explore">
        <CarePathways />
      </div>
      <WhyChooseus />
      <Footer />
    </div>
  );
}