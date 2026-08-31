"use client";

import React from "react";
import { 
  Activity, 
  Bone, 
  BrainCircuit, 
  HeartPulse, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function CarePathways() {
  const pathways = [
    {
      id: 1,
      title: "Spine Rehabilitation",
      icon: <Activity className="w-8 h-8" />,
      desc: "Personalized care for back pain, neck pain, sciatica, slipped disc, stiffness, postural strain and degenerative spine conditions.",
      color: "bg-blue-50"
    },
    {
      id: 2,
      title: "Joint & Sports Rehab",
      icon: <Bone className="w-8 h-8" />,
      desc: "Programmes for knee, shoulder, hip and other joint problems, sports injuries and recovery after orthopaedic surgery.",
      color: "bg-slate-50"
    },
    {
      id: 3,
      title: "Neuro Rehabilitation",
      icon: <BrainCircuit className="w-8 h-8" />,
      desc: "Goal-based rehabilitation for stroke, paralysis, walking difficulty, balance problems and reduced strength or coordination.",
      color: "bg-blue-50"
    },
    {
      id: 4,
      title: "Integrative Pain Care",
      icon: <HeartPulse className="w-8 h-8" />,
      desc: "Physiotherapy, manual therapy, chiropractic, osteopathy and supportive naturopathy approaches used responsibly within an individualized plan.",
      color: "bg-slate-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071bd]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5973e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Introduction Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-[#0071bd] font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1e3f] mb-8 leading-tight">
            Recovery Begins with <span className="text-[#c5973e]">Understanding</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <strong className="text-[#0a1e3f]">Aditya Spine & Joint Rehab LLP</strong>, we assess your symptoms, posture, mobility, strength, balance, and functional limitations along with available MRI, X-ray or medical reports before planning care. 
            <br /><br />
            Your programme combines guided exercise, hands-on therapy, movement retraining and suitable rehabilitation technologies—selected according to clinical need, safety and progress.
          </p>
        </div>

        {/* 4 Main Care Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item) => (
            <div 
              key={item.id} 
              className={`group relative p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${item.color}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#0071bd] group-hover:bg-[#0071bd] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-4 group-hover:text-[#0071bd] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Hover Arrow Link */}
              <div className="flex items-center gap-2 text-[#c5973e] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight size={16} />
              </div>

              {/* Bottom Gold Line on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c5973e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-16 bg-[#0a1e3f] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Not sure which pathway is right for you?</h3>
            <p className="text-gray-300">Book a comprehensive assessment with our clinical team today.</p>
          </div>
          <button className="px-8 py-4 bg-[#c5973e] hover:bg-[#b08535] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#c5973e]/20 flex items-center gap-2 whitespace-nowrap">
            Book Assessment <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}