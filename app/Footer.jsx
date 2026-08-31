'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Activity,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Award,
  ChevronRight,
  CalendarCheck,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function MedicalFooter() {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative bg-[#061224] font-sans text-slate-300">
      
      {/* Subtle Medical Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8"
      >
        {/* --- Pre-Footer CTA Banner --- */}
        <motion.div 
          variants={itemVariants}
          className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-[#003882] to-[#0071bd] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          {/* Subtle overlay shape */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-20" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              <ShieldCheck size={14} />
              Trusted Care
            </div>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Live a <span className="text-[#f3e5ab]">Pain-Free Life?</span>
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              Schedule your comprehensive spinal evaluation today. Advanced non-surgical treatments customized for your recovery journey.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <motion.a
              href="tel:+917447755533"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c5973e] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#b58532]"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </motion.button>
          </div>
        </motion.div>

        {/* --- Main Footer Grid --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12">

          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a61ecf3] text-white shadow-md transition-transform group-hover:scale-105">
                <Activity size={24} />
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-tight text-white">
                  ADITYA
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#c5973e]">
                  Spine & Joint Rehab LLP
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Pioneering advanced, non-invasive spine and joint care through global treatment standards, precision osteopathy, and personalized rehabilitation protocols.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-md bg-slate-800/50 px-2.5 py-1.5 text-xs font-medium text-slate-300">
                <Award size={14} className="text-[#c5973e]" /> Specialists
              </span>
              <span className="flex items-center gap-1.5 rounded-md bg-slate-800/50 px-2.5 py-1.5 text-xs font-medium text-slate-300">
                <HeartPulse size={14} className="text-[#c5973e]" /> Non-Surgical
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-[#0071bd] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Specialties */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0071bd]" />
              Our Specialties
            </h4>
            <ul className="space-y-3">
              {specialties.map((item) => (
                <li key={item.name}>
                  <Link href="#" className="group flex items-center justify-between text-sm text-slate-400 transition-colors hover:text-white">
                    <span className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-[#0071bd]" />
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c5973e]">
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
            <h4 className="mb-6 font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0071bd]" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#0071bd] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Card */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0071bd]" />
              Get In Touch
            </h4>
            <div className="space-y-5 rounded-xl bg-slate-800/50 p-5 border border-slate-700/50">
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0071bd] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-slate-300">
                  3rd Floor, Sushila Mayekar Shopping Centre, LT Road, Borivali (W), Mumbai – 400092
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#0071bd] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 text-slate-300">
                  <a href="tel:+917447755533" className="block hover:text-white transition-colors">+91 74477 55533</a>
                  <a href="tel:+919090293232" className="block hover:text-white transition-colors">+91 90902 93232</a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a href="mailto:adityaspinerehab@gmail.com" className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-800 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-[#0071bd] hover:text-white">
                  <Mail size={14} /> Email
                </a>
                <a href="https://www.adityaspinerehab.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-800 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-[#0071bd] hover:text-white">
                  <Globe size={14} /> Website
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-400">Aditya Spine & Joint Rehab LLP</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="#" className="transition-colors hover:text-[#c5973e]">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-[#c5973e]">Terms of Service</Link>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}