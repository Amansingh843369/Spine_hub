"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, 
  Activity, MapPin, Star, Users, Zap, CheckCircle2 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarePathways from './CarePathways';
import WhyChooseus from './WhyChooseus';
import Footer from './Footer';



// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Refs for animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // // Services Horizontal Scroll Trigger
      // gsap.to(".services-track", {
      //   x: () => -(document.querySelector('.services-track').scrollWidth - window.innerWidth + 100),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".services-section",
      //     start: "top top",
      //     end: () => "+=" + document.querySelector('.services-track').scrollWidth,
      //     scrub: 1,
      //     pin: true,
      //     anticipatePin: 1
      //   }
      // });

      // About Section Fade In
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });

    }, heroRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          
          <div className="flex items-center gap-4 group cursor-pointer">
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
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Home', 'About', 'Treatments', 'Technology', 'Contact'].map((item, index) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-bold tracking-wide transition-colors relative py-2 group ${
                  isScrolled 
                    ? (index === 0 ? "text-[#0071bd]" : "text-slate-600 hover:text-[#0a1e3f]")
                    : "text-white hover:text-[#c5973e]"
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-[#c5973e]" : "bg-white"
                } w-0 group-hover:w-full`}></span>
              </Link>
            ))}
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
            {['Home', 'About', 'Treatments', 'Technology', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[#0a1e3f] font-semibold text-lg border-b border-slate-100 pb-3 hover:text-[#0071bd]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
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
 








      
      {/* <section className="services-section relative h-screen bg-[#0a1e3f] overflow-hidden flex items-center">
        <div className="absolute top-10 left-10 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Specializations</h2>
          <div className="h-1 w-20 bg-[#c5973e]"></div>
        </div>
        
        <div className="services-track flex gap-8 px-10 pl-[20vw] items-center h-full w-max">
          {[
            { title: "Spine Care", desc: "Advanced treatment for disc herniation, sciatica, and chronic back pain.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" },
            { title: "Joint Replacement Rehab", desc: "Post-surgical recovery protocols for knee, hip, and shoulder joints.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
            { title: "Neuro Rehabilitation", desc: "Specialized care for stroke, Parkinson's, and nerve injuries.", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80" },
            { title: "Sports Injury", desc: "Get back in the game with our athlete-focused recovery programs.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" },
            { title: "Geriatric Care", desc: "Gentle yet effective therapy to improve mobility and quality of life.", img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80" }
          ].map((service, i) => (
            <div key={i} className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group shrink-0 border border-white/10">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f] via-[#0a1e3f]/50 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                <button className="mt-4 text-[#c5973e] font-bold flex items-center gap-2 group/btn">
                  Learn More <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}



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