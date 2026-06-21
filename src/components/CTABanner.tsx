import { ShieldCheck, Truck, Lock, ShoppingBag } from 'lucide-react';

const trustItems = [
  { icon: <ShieldCheck size={22} />, title: '30-Day Guarantee', sub: 'Love it or your money back' },
  { icon: <Truck size={22} />, title: 'Tracked Delivery', sub: 'Know where your order is' },
  { icon: <Lock size={22} />, title: 'Secure Checkout', sub: '256-bit SSL encryption' },
];

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[#214D2D]" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#3D6A45] opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#1a3d22] opacity-60 blur-3xl" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-16 top-8 h-32 w-32 rounded-full border border-white" />
        <div className="absolute left-24 top-16 h-16 w-16 rounded-full border border-white" />
        <div className="absolute bottom-8 right-16 h-48 w-48 rounded-full border border-white" />
        <div className="absolute bottom-16 right-24 h-24 w-24 rounded-full border border-white" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="mb-4 block text-sm font-medium uppercase tracking-[0.35em] text-[#C89B3C] opacity-90">Your Daily Ritual Awaits</span>
        <h2 className="mb-5 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-white lg:text-5xl xl:text-6xl">
          Ready to feel lighter, more balanced,<br className="hidden lg:block" />
          <span className="italic text-[#C89B3C]">and more energised?</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg">
          Make Zeniva your daily ritual for lasting wellbeing. Join thousands of people who have transformed their routine with a healthier, calmer pace.
        </p>

        <button className="mb-12 inline-flex items-center gap-3 rounded-full bg-[#C89B3C] px-10 py-4 text-base font-medium text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b08830] hover:shadow-2xl">
          <ShoppingBag size={18} />
          Shop Now — Free UK Delivery
        </button>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/80">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">{item.title}</div>
                <div className="text-xs text-white/50">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
