'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Activity,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Clock,
  HeartPulse,
  Award,
  ChevronRight,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function RoyalGoldFooter() {
  const socialIcons = [
    { Icon: FaFacebookF, label: 'Facebook', href: '#' },
    { Icon: FaInstagram, label: 'Instagram', href: '#' },
    { Icon: FaYoutube, label: 'YouTube', href: '#' },
    { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
    { Icon: FaWhatsapp, label: 'WhatsApp', href: '#' },
  ];

  const specialties = [
    { name: 'Spine & Disc Care', badge: 'Popular' },
    { name: 'Neck, Back & Sciatica Pain', badge: null },
    { name: 'Joint & Sports Injury', badge: null },
    { name: 'Chiropractic & Osteopathy', badge: 'Advanced' },
    { name: 'Ozone (O₃) Therapy', badge: 'Special' },
    { name: 'Regenerative Therapy', badge: null },
    { name: 'Neurological Rehabilitation', badge: null },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services & Therapies', href: '#' },
    { name: 'Meet Doctor', href: '#' },
    { name: 'Patient Testimonials', href: '#' },
    { name: 'Book Appointment', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-[#020610] font-sans text-slate-300 selection:bg-[#d4af37] selection:text-[#020610]">
      
      {/* --- Ambient Background Effects --- */}
      {/* Top Gold Line */}
      <div className="pointer-events-none absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
      
      {/* Deep Blue Glow Left */}
      <div className="pointer-events-none absolute -left-64 top-0 h-[600px] w-[600px] rounded-full bg-[#003882]/10 blur-[120px]" />
      
      {/* Royal Gold Glow Right */}
      <div className="pointer-events-none absolute -right-64 bottom-0 h-[600px] w-[600px] rounded-full bg-[#d4af37]/5 blur-[120px]" />

      {/* Subtle Grid Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Main Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-8"
      >

        {/* --- Pre-Footer CTA Banner --- */}
        <motion.div 
          variants={itemVariants}
          className="group relative mb-20 overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-[#0a192f] via-[#0f2545] to-[#0a192f] p-8 shadow-2xl md:p-12"
        >
          {/* Animated Shine Effect on Hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          
          {/* Internal Glow */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d4af37]/5 blur-[80px] transition-all duration-700 group-hover:bg-[#d4af37]/10" />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f3e5ab] backdrop-blur-sm">
                <Sparkles size={12} className="text-[#d4af37]" />
                Premium Spine Care
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Ready to Live a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">Pain-Free Life?</span>
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                Schedule your comprehensive spinal evaluation today. Advanced non-surgical treatments customized for your recovery journey.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
              <motion.a
                href="tel:+917447755533"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-[#d4af37]/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10"
              >
                <Phone size={18} className="text-[#d4af37] transition-transform group-hover:-rotate-12" />
                <span>Call +91 74477 55533</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212,175,55,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b8860b] px-8 py-4 text-sm font-extrabold text-[#020610] shadow-lg transition-all"
              >
                <span className="relative z-10">Book Appointment</span>
                <ArrowUpRight size={18} className="relative z-10" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- Main Footer Grid --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16">

          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="space-y-8 lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 via-[#0a2347] to-[#020610] text-[#d4af37] shadow-lg shadow-[#d4af37]/5 backdrop-blur-xl"
              >
                <Activity size={28} />
              </motion.div>
              <div>
                <span className="block text-2xl font-black tracking-wide text-white group-hover:text-[#f3e5ab] transition-colors">
                  ADITYA SPINE
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]/80">
                  & Joint Rehab LLP
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Pioneering advanced, non-invasive spine and joint care through global treatment standards, precision osteopathy, and personalized rehabilitation protocols.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-[#d4af37]/10 bg-[#0a192f]/50 px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm">
                <Award size={14} className="text-[#d4af37]" />
                Certified Specialists
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[#d4af37]/10 bg-[#0a192f]/50 px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm">
                <HeartPulse size={14} className="text-[#d4af37]" />
                Non-Surgical Care
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#0a192f]/50 text-[#d4af37] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#020610] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Specialties */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
              Our Specialties
            </h4>

            <ul className="space-y-3">
              {specialties.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className="group flex items-center justify-between text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-[#d4af37]/50 transition-transform group-hover:translate-x-1 group-hover:text-[#d4af37]" />
                      <span>{item.name}</span>
                    </span>
                    {item.badge && (
                      <span className="rounded border border-[#d4af37]/20 bg-[#d4af37]/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#f3e5ab]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
              Navigation
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#f3e5ab]"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Card */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
              Get In Touch
            </h4>

            <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-gradient-to-b from-[#0a192f]/80 to-[#020610]/90 p-6 backdrop-blur-xl shadow-xl">
              {/* Decorative Corner */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#d4af37]/5 blur-2xl" />

              <div className="space-y-5 relative z-10">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    <MapPin size={18} />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    3rd Floor, Sushila Mayekar Shopping Centre, LT Road, Borivali (W), Mumbai – 400092
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    <Phone size={18} />
                  </div>
                  <div className="text-xs space-y-1.5 text-slate-300">
                    <a href="tel:+917447755533" className="block font-medium transition-colors hover:text-[#f3e5ab]">+91 74477 55533</a>
                    <a href="tel:+919090293232" className="block font-medium transition-colors hover:text-[#f3e5ab]">+91 90902 93232</a>
                  </div>
                </div>

                {/* Email & Web Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a href="mailto:adityaspinerehab@gmail.com" className="flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 text-xs font-medium text-slate-300 transition-all hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] border border-white/5 hover:border-[#d4af37]/30">
                    <Mail size={14} /> Email Us
                  </a>
                  <a href="https://www.adityaspinerehab.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 text-xs font-medium text-slate-300 transition-all hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] border border-white/5 hover:border-[#d4af37]/30">
                    <Globe size={14} /> Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-xs text-slate-500 md:flex-row">
          <p className="text-center md:text-left">
            &copy; 2026 <span className="text-[#f3e5ab] font-semibold">Aditya Spine &amp; Joint Rehab LLP</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6 font-medium">
            <Link href="#" className="transition-colors hover:text-[#d4af37]">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-[#d4af37]">Terms of Service</Link>
            <Link href="#" className="transition-colors hover:text-[#d4af37]">Sitemap</Link>
          </div>
        </div>
      </motion.div>

      {/* Royal Gold Ticker Strip */}
      <div className="border-t border-[#d4af37]/10 bg-[#020610] px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]/70">
          <span className="flex items-center gap-2">
            <ShieldCheck size={12} /> Advanced Non-Surgical Spine Care
          </span>
          <span className="hidden md:inline text-white/10">•</span>
          <span className="flex items-center gap-2">
            <Clock size={12} /> Mon - Sat: 9:00 AM - 8:00 PM
          </span>
          <span className="hidden md:inline text-white/10">•</span>
          <span className="flex items-center gap-2">
            <Sparkles size={12} /> Excellence In Joint Rehabilitation
          </span>
        </div>
      </div>
    </footer>
  );
}


