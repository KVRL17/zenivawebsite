import { CalendarDays, Sprout, Heart } from 'lucide-react';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import photo from '../images/photo.avif';

const steps = [
  {
    step: '01',
    icon: <CalendarDays size={32} className="text-[#214D2D]" />,
    title: 'Enjoy Every Day',
    desc: 'Brew your Zeniva each morning or evening. Drop one pyramid bag into hot or cold water and let it steep for 3–5 minutes.',
    img: one,
  },
  {
    step: '02',
    icon: <Sprout size={32} className="text-[#214D2D]" />,
    title: 'Let The Botanicals Work',
    desc: 'Our 12 premium botanicals get to work from the inside, gently supporting your digestive system and reducing discomfort.',
    img: two,
  },
  {
    step: '03',
    icon: <Heart size={32} className="text-[#214D2D]" />,
    title: 'Support Your Wellbeing',
    desc: 'Feel the difference over time — reduced bloating, improved balance, and a greater sense of daily wellbeing.',
    img: 'https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(9,28,18,0.48),rgba(9,28,18,0.62),rgba(9,28,18,0.76))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_16%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">Your Ritual</span>
          <h2 className="mb-4 font-['Cormorant_Garamond'] text-4xl font-semibold text-white lg:text-5xl">
            Simple as 1, 2, 3
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 bg-[#C89B3C]" />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/80">
            Building a healthy habit has never been easier or more enjoyable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white font-['Cormorant_Garamond'] text-2xl font-bold text-[#214D2D] shadow-lg backdrop-blur-sm">
                  {s.step}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white transition-all duration-300 group-hover:bg-[#F4E3A3]">
                  <span className="text-white">{s.icon}</span>
                </div>
                <h3 className="mb-2 font-['Cormorant_Garamond'] text-xl font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{s.desc}</p>
              </div>

              {i < 2 && (
                <div className="absolute right-[-18px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#C89B3C] shadow-lg transition-transform duration-300 group-hover:scale-110 md:flex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <button className="rounded-full bg-[#214D2D] px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#214D2D]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C89B3C]">
            Start Your Journey — Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
