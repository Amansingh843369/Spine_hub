'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  HeartHandshake, 
  Lock, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2,
  ChevronRight,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(null);

  const brandPromises = [
    'Patient Safety',
    'Ethical Care',
    'Structured Rehabilitation',
    'Measurable Outcomes'
  ];

  const coreValues = [
    {
      id: '01',
      title: 'Patient-First Decisions',
      desc: 'Every treatment choice is guided entirely by what is best for the individual patient.',
      icon: Users,
      tag: 'Ethical Ethos',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Safety Before Modality',
      desc: 'We prioritize patient wellbeing and clinical safety over any treatment tool or machine.',
      icon: ShieldCheck,
      tag: 'Clinical Safety',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Clear Explanation',
      desc: 'Transparent communication ensures patients thoroughly understand their recovery plan.',
      icon: MessageSquare,
      tag: 'Transparency',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '04',
      title: 'Respect & Privacy',
      desc: 'We maintain absolute confidentiality, personal dignity, and utmost respect for every individual.',
      icon: Lock,
      tag: 'Patient Rights',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '05',
      title: 'Teamwork & Continuity',
      desc: 'Seamless collaboration across clinical specialists guarantees smooth, uninterrupted care.',
      icon: HeartHandshake,
      tag: 'Collaboration',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '06',
      title: 'Outcome-Focused',
      desc: 'We evaluate success through real, measurable functional progress in your everyday life.',
      icon: TrendingUp,
      tag: 'Real Results',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
    }
  ];

  // Framer Motion Stagger Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <div className="bg-[#fcfdfd] min-h-screen text-slate-800 font-sans">
      
      {/* =========================================================================
          1. HERO BANNER
         ========================================================================= */}
      <section className="relative h-[380px] sm:h-[430px] w-full bg-[#0a1e3f] flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
        
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920')` 
          }}
        />

        {/* Decorative Curved Line SVG Overlay */}
        <div className="absolute right-0 bottom-0 top-0 w-full sm:w-1/2 pointer-events-none opacity-30 flex items-center justify-end">
          <svg className="w-full h-full max-w-[600px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 250 C 200 50, 350 350, 480 120" stroke="#ffffff" strokeWidth="2.5" fill="none" />
            <path d="M 120 280 C 280 100, 380 280, 500 80" stroke="#851616" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Hero Title & Breadcrumb */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-wide font-normal">
            About Us
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FLOATING WHITE CARD CONTAINER
         ========================================================================= */}
      <div className="relative -mt-12 sm:-mt-16 z-20 max-w-7xl mx-auto bg-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-xl px-6 sm:px-12 md:px-16 pt-12 sm:pt-16 pb-20">
        
        {/* Main Category Tag & Burgundy Headline */}
        <div className="max-w-4xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-[#851616] font-semibold text-xs sm:text-sm tracking-wider uppercase">
            <span>/</span>
            <span>About Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#851616] leading-[1.15] font-normal tracking-tight">
            We Care for Every Move You Make.
          </h2>
          
          <p className="text-slate-500 italic text-sm sm:text-base pt-2">
            "To find health should be the object of the doctor. Understand the patient before selecting the treatment."
          </p>
        </div>

        {/* =========================================================================
            3. SPLIT SECTION - STORY CONTENT + BRAND PROMISE
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base">
            <p className="text-slate-900 font-medium text-lg sm:text-xl leading-snug">
              Aditya Spine & Joint Rehab LLP is a specialized rehabilitation centre in Borivali West, Mumbai, created to provide structured, personalized care for spine, joint, neurological, and movement-related conditions.
            </p>
            
            <p>
              The centre brings together clinical assessment, experienced hands-on care, guided therapeutic exercise, and advanced rehabilitation technology in a spacious, patient-focused setting.
            </p>

            <p>
              Our approach is centered on individual needs: <strong className="text-slate-900 font-semibold">understand the patient before selecting the treatment.</strong> Every person’s pain, diagnosis, lifestyle, strength, mobility, and recovery goals are unique. We avoid one-size-fits-all programs and build care around the patient’s current ability and functional needs.
            </p>

            <p>
              Our purpose is not only short-term pain relief. We work to help patients improve movement, strength, balance, confidence, and participation in everyday life—whether the goal is walking comfortably, returning to work, climbing stairs, recovering after surgery, or regaining independence.
            </p>
          </div>

          {/* Right Visual & Brand Promise Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop" 
                alt="Aditya Spine & Joint Rehab Facility" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f]/85 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-serif text-lg">Spacious & Modern Rehabilitation Centre</span>
              </div>
            </div>

            {/* Brand Promise Section */}
            <div className="bg-[#0a1e3f] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-5 border-b border-white/15 pb-4">
                <Award size={24} className="text-[#851616] bg-white rounded-full p-1" />
                <h3 className="text-xl font-serif text-white">Brand Promise</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {brandPromises.map((promise, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                    <CheckCircle2 size={16} className="text-[#851616] shrink-0" />
                    <span>{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. MISSION & VISION
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-[#0a1e3f]/40 transition-all">
            <div className="p-3 bg-[#0a1e3f] text-white rounded-xl w-fit mb-4">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              To provide responsible, individualized, and goal-oriented rehabilitation that combines clinical skill, compassionate care, and appropriate technology.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-[#851616]/40 transition-all">
            <div className="p-3 bg-[#851616] text-white rounded-xl w-fit mb-4">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              To become a trusted destination in Mumbai for comprehensive spine, joint, and neuro rehabilitation, known for thoughtful assessment, transparent communication, and meaningful functional progress.
            </p>
          </div>

        </div>

        {/* =========================================================================
            5. FRAMER-MOTION ANIMATED CORE VALUES GRID
           ========================================================================= */}
        <div className="relative pt-6 pb-4">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#851616]/10 text-[#851616] text-xs font-bold uppercase tracking-widest border border-[#851616]/20 shadow-sm">
              <Sparkles size={13} className="text-[#851616]" />
              <span>Guiding Principles</span>
            </div>
            
            <h3 className="text-3xl sm:text-5xl font-serif text-[#0a1e3f] tracking-tight">
              Core Values
            </h3>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Fundamental principles driving our clinical care, treatment decisions, and patient relationships.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => {
              const IconComp = value.icon;
              const isHovered = activeValue === index;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                  className="relative rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#851616]/40 transition-all duration-500 overflow-hidden group flex flex-col justify-between min-h-[340px]"
                >
                  
                  {/* Hover Image Reveal */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-0 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${value.image})` }}
                  />

                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f] via-[#0a1e3f]/90 to-[#0a1e3f]/60 opacity-0 group-hover:opacity-95 transition-opacity duration-500" />

                  {/* Card Top Bar */}
                  <div className="relative z-10 p-7 flex items-center justify-between">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="p-3.5 rounded-2xl bg-[#0a1e3f]/5 text-[#0a1e3f] group-hover:bg-[#851616] group-hover:text-white transition-colors duration-500 shadow-sm"
                    >
                      <IconComp size={24} />
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-white/10 group-hover:text-white/80 transition-colors">
                        {value.tag}
                      </span>
                      <span className="font-serif text-2xl font-bold text-slate-300 group-hover:text-white/30 transition-colors">
                        {value.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-7 pt-0 space-y-3">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug">
                      {value.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>

                  {/* Bottom Bar Accent */}
                  <div className="relative z-10 px-7 py-4 border-t border-slate-100 group-hover:border-white/10 flex items-center justify-between text-xs font-semibold text-[#851616] group-hover:text-white transition-colors">
                    <span>Clinical Standard</span>
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowUpRight size={18} className="text-[#851616] group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>

                  {/* Bottom Beam Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#851616] to-[#0a1e3f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>

      {/* =========================================================================
          6. CALL TO ACTION STRIP
         ========================================================================= */}
     

    </div>
  );
}