import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = ['Home', 'Benefits', 'Ingredients', 'Reviews', 'Shop'];
const customerCare = ['FAQ', 'Shipping', 'Returns', 'Track Order', 'Contact Us'];
const attributes = ['Vegan', 'Gluten Free', 'Dairy Free', 'Soya Free'];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#214D2D]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-white">Zeniva</span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-400">
              Premium herbal wellness tea crafted from 12 carefully selected botanicals. Supporting your daily wellbeing, naturally.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, label: 'Facebook' },
                { icon: <Instagram size={16} />, label: 'Instagram' },
                { icon: <Twitter size={16} />, label: 'Pinterest' },
                { icon: <Youtube size={16} />, label: 'YouTube' },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 hover:bg-[#214D2D]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-['Cormorant_Garamond'] text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#C89B3C]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-['Cormorant_Garamond'] text-base font-semibold text-white">Customer Care</h4>
            <ul className="space-y-2.5">
              {customerCare.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#C89B3C]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-['Cormorant_Garamond'] text-base font-semibold text-white">Product Details</h4>
            <div className="mb-5 flex flex-wrap gap-2">
              {attributes.map((attr) => (
                <span key={attr} className="rounded-full border border-[#3D6A45] px-3 py-1.5 text-xs text-[#90C49A]">
                  {attr}
                </span>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#C89B3C]">Food Supplement</div>
              <p className="text-[11px] leading-relaxed text-gray-500">
                Not intended to diagnose, treat, cure, or prevent any disease. Always consult a healthcare professional before use.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-gray-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Zeniva. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gray-300">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-gray-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
