"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  AlertTriangle, CheckCircle2, Activity, ArrowRight, 
  Target, Phone, MessageCircle, ShieldCheck, Clock,
  MapPin, Star
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- DATA CONFIGURATION ---
const conditionData = {
  "lower-back-pain": {
    title: "Lower Back Pain",
    subtitle: "Restore Mobility & Eliminate Chronic Discomfort",
    category: "Spine Health",
    heroImage: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { label: "Success Rate", value: "94%" },
      { label: "Avg Recovery", value: "6 Weeks" },
      { label: "Patients Treated", value: "2000+" }
    ],
    description: "Lower back pain is more than just an ache; it’s a disruption to your life. At Aditya Spine & Joint Rehab, we don't just treat the symptom—we decode the biomechanical failure causing your pain.",
    symptoms: [
      "Persistent dull ache in lumbar region",
      "Sharp stabbing pain during movement",
      "Morning stiffness lasting >30 mins",
      "Radiating discomfort to glutes or thighs"
    ],
    redFlags: [
      "Loss of bladder/bowel control (Cauda Equina)",
      "Progressive leg weakness",
      "Night pain that prevents sleep",
      "History of cancer with new back pain"
    ],
    approach: "We utilize a hybrid model of Manual Therapy to reduce acute pain and Functional Movement Screening to correct the root postural imbalance.",
    treatments: [
      { name: "McKenzie Method (MDT)", desc: "Centralizing radiating pain through specific movements." },
      { name: "Core Stabilization", desc: "Deep abdominal strengthening to support the spine." },
      { name: "Neural Mobilization", desc: "Gliding exercises for irritated nerves." },
      { name: "Ergonomic Correction", desc: "Workstation setup to prevent recurrence." }
    ]
  },
  "default": {
    title: "Specialized Rehabilitation",
    subtitle: "Evidence-Based Recovery Protocols",
    category: "General Care",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { label: "Expertise", value: "10+ Yrs" },
      { label: "Care Type", value: "Personalized" },
      { label: "Technology", value: "Advanced" }
    ],
    description: "Our comprehensive rehabilitation programs are designed to restore function, reduce pain, and improve your quality of life through scientifically proven methods.",
    symptoms: ["Chronic Pain", "Limited Range of Motion", "Muscle Weakness", "Post-Surgical Stiffness"],
    redFlags: ["Severe Swelling", "Unexplained Fever", "Sudden Loss of Function"],
    approach: "A holistic assessment covering physical, functional, and lifestyle factors to create a bespoke recovery roadmap.",
    treatments: [
      { name: "Manual Therapy", desc: "Hands-on techniques to mobilize joints and soft tissues." },
      { name: "Therapeutic Exercise", desc: "Targeted strengthening and flexibility routines." },
      { name: "Modalities", desc: "Ultrasound, TENS, and Laser therapy for pain management." },
      { name: "Patient Education", desc: "Empowering you with knowledge about your condition." }
    ]
  }
};

export default function ConditionPage() {
  const params = useParams();
  const slug = params.slug;
  const data = conditionData[slug] || conditionData["default"];
  
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text-elem", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Stats Counter Animation
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.7)"
      });

      // Content Sections Fade Up
      gsap.utils.toArray(".section-reveal").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  return (
    <div ref={pageRef} className="bg-slate-50 min-h-screen font-sans text-slate-800 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Feel */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-110"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3f] via-[#0a1e3f]/80 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8">
            <div className="hero-text-elem inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c5973e]"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">{data.category}</span>
            </div>
            
            <h1 className="hero-text-elem text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
              {data.title}
            </h1>
            
            <p className="hero-text-elem text-xl text-blue-100 font-light max-w-lg leading-relaxed">
              {data.subtitle}
            </p>

            <div className="hero-text-elem flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 bg-[#c5973e] hover:bg-[#b08535] text-white font-bold rounded-xl shadow-lg shadow-[#c5973e]/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                Start Recovery <ArrowRight size={20} />
              </Link>
              <a href="tel:7447755533" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {data.stats.map((stat, i) => (
              <div key={i} className={`stat-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl ${i === 0 ? 'col-span-2' : ''}`}>
                <div className="text-3xl font-bold text-[#c5973e] mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        
        {/* INTRO & SYMPTOMS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 section-reveal">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl font-bold text-[#0a1e3f]">Understanding the Condition</h2>
            <p className="text-lg text-slate-600 leading-loose">
              {data.description}
            </p>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-6 flex items-center gap-3">
                <Activity className="text-[#0071bd]" /> Key Symptoms to Watch
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.symptoms.map((sym, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 size={20} className="text-[#c5973e] mt-1 shrink-0" />
                    <span className="text-slate-700 font-medium">{sym}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0a1e3f] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0071bd] rounded-full blur-[60px] opacity-20 -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#c5973e]">
                <AlertTriangle /> Red Flags
              </h3>
              <p className="text-blue-100 text-sm mb-6 italic">Immediate medical attention required if:</p>
              <ul className="space-y-4">
                {data.redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium border-b border-white/10 pb-3 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-[0_0_10px_red]"></span>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* TREATMENT APPROACH */}
        <div className="mb-24 section-reveal">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0071bd] font-bold tracking-widest uppercase text-sm">Our Protocol</span>
            <h2 className="text-4xl font-bold text-[#0a1e3f] mt-2">How We Treat You</h2>
            <p className="text-slate-600 mt-4">{data.approach}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.treatments.map((t, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0071bd] mb-6 group-hover:bg-[#0071bd] group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#0a1e3f] mb-3">{t.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="section-reveal relative bg-[#0071bd] rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Live Pain-Free?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Book your comprehensive assessment at our Borivali West clinic today. Let's build your personalized recovery plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-10 py-5 bg-white text-[#0071bd] font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors text-lg">
                Book Appointment
              </Link>
              <a href="https://wa.me/917447755533" className="px-10 py-5 bg-[#0a1e3f] text-white font-bold rounded-xl shadow-lg hover:bg-[#0f2b55] transition-colors text-lg flex items-center gap-2">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}