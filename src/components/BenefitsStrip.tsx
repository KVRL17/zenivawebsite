import { Wind, Heart, Coffee, Package, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: <Wind size={28} className="text-[#214D2D]" />,
    title: 'Helps reduce bloating',
    desc: 'Gentle botanicals that soothe and settle',
  },
  {
    icon: <Heart size={28} className="text-[#214D2D]" />,
    title: 'Supports digestive health',
    desc: 'Nourish your gut naturally every day',
  },
  {
    icon: <Coffee size={28} className="text-[#214D2D]" />,
    title: 'Hot or iced',
    desc: 'Enjoy your way, any time of day',
  },
  {
    icon: <Package size={28} className="text-[#214D2D]" />,
    title: '28 pyramid tea bags',
    desc: 'A full month of daily wellness support',
  },
  {
    icon: <Leaf size={28} className="text-[#214D2D]" />,
    title: 'Vegan & Gluten Free',
    desc: 'Clean, inclusive, plant-powered wellness',
  },
];

export default function BenefitsStrip() {
  return (
    <section id="benefits" className="relative py-16 bg-[#F7F5EC] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url()'}} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EC]/85 via-[#F7F5EC]/90 to-[#F7F5EC]/95" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="gold-line mx-auto mb-4" />
          <p className="text-[#214D2D] text-xl sm:text-2xl md:text-3xl font-['Cormorant_Garamond'] tracking-wide">
            Why Choose Zeniva
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal group flex flex-col items-center text-center rounded-2xl border border-[#E4E8DE] bg-[#214D2D] p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#2A5A39] hover:shadow-lg"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9B7] transition-colors duration-300 group-hover:bg-[#C89B3C]">
                {b.icon}
              </div>
              <h3 className="mb-1 font-['Cormorant_Garamond'] text-lg font-semibold leading-tight text-white">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
