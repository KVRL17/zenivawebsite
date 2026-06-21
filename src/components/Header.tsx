import { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock, Menu, X, ShoppingBag } from 'lucide-react';

const trustItems = [
  { icon: <ShieldCheck size={14} />, text: 'UK Stock' },
  { icon: <Truck size={14} />, text: 'Tracked Delivery' },
  { icon: <Lock size={14} />, text: 'Secure Checkout' },
];

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Shop', href: '#shop' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="main-header" className="sticky top-0 z-50 border-b border-[#214D2D]/5 bg-[#FAF7F0]/90 backdrop-blur-xl transition-all duration-300">
      <div className="bg-[#214D2D] text-white text-xs py-2">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 sm:gap-6">
          {trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 opacity-90">
              {item.icon}
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#" className="group flex flex-shrink-0 items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#214D2D] via-[#3D6A45] to-[#C89B3C] shadow-lg shadow-[#214D2D]/15 transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_30%)]" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative text-white" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3c1.8 3 4.3 5.3 4.3 8.8 0 3.1-2.3 5.7-5.3 5.7S5.9 14.9 5.9 11.8C5.9 8.4 8.4 6 12 3z" />
              <path d="M12 3c.9 2.7 2.4 4.9 4.4 6.9" />
              <path d="M12 3c-1.3 3-3.2 5.3-5.1 7.3" />
              <path d="M9.4 15.7c1.5 1.1 3.7 1.1 5.2 0" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-['Cormorant_Garamond'] text-3xl font-semibold tracking-[0.18em] text-[#214D2D] sm:text-[2rem]">Zeniva</span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.6em] text-[#214D2D]/55">  Wellness</span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 rounded-full border border-[#214D2D]/8 bg-white/65 px-6 py-3 shadow-sm md:flex backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#1A1A1A] transition-colors duration-200 tracking-wide hover:text-[#214D2D] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full bg-[#214D2D] px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#214D2D]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3D6A45]">
            <ShoppingBag size={15} />
            Shop Now
          </button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-xl p-2 text-[#214D2D] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`border-t border-gray-100 bg-white/95 backdrop-blur-xl md:hidden ${menuOpen ? 'open' : ''}`}>
        <div className="flex flex-col gap-3 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#214D2D]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary mt-2 w-full text-center">Shop Now</button>
        </div>
      </div>
    </header>
  );
}
