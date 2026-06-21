import { useState } from 'react';
import nettleleaf from '../images/Nettle Leaf.webp';
import peppermint from '../images/Peppermint Leaves.webp';
import chamomile from '../images/chamomile.webp';
import lemongrass from '../images/lemongrass.webp';
import hibiscus from '../images/hibiscus.webp';
import fennel from '../images/fennel.webp';
import rose from '../images/rose.webp';
import lemonVerbena from '../images/lemonVerbena.webp';
import ginseng from '../images/ginseng.webp';
import ginger from '../images/Ginger Root.webp';
import lavender from '../images/lavender.jpeg';

const ingredients = [
  { name: 'Sencha Green Tea', img: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400', benefit: 'Rich in antioxidants' },
  { name: 'Nettle Leaf', img: nettleleaf, benefit: 'Anti-inflammatory' },
  { name: 'Peppermint Leaves', img: peppermint, benefit: 'Metabolism support' },
  { name: 'Chamomile Flowers', img: chamomile, benefit: 'Gentle detox' },
  { name: 'Lemongrass', img: lemongrass, benefit: 'Immune support' },
  { name: 'Hibiscus Petals', img: hibiscus, benefit: 'Natural energy' },
  { name: 'Fennel Seeds', img: fennel, benefit: 'Calming & digestive' },
  { name: 'Rose Petals', img: rose, benefit: 'Liver support' },
  { name: 'Lemon Verbena', img: lemonVerbena, benefit: 'Energy & focus' },
  { name: 'Ginseng', img: ginseng, benefit: 'Adaptogenic support' },
  { name: 'Ginger Root', img: ginger, benefit: 'Natural sweetener' },
  { name: 'Lavender Flowers', img: lavender, benefit: 'Concentrated benefits' },
];

export default function Ingredients() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="ingredients" className="relative overflow-hidden bg-[#F7F3E8] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,60,0.08),transparent_18%)]" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.38em] text-[#C89B3C]">Our Formula</span>
          <h2 className="mb-4 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#214D2D] lg:text-5xl">
            Inside Our Botanical Blend
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 bg-[#C89B3C]" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
            A carefully curated blend of premium botanicals designed to support a balanced, energized lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {ingredients.map((ing, i) => (
            <article
              key={i}
              className="reveal group relative flex cursor-pointer flex-col items-center rounded-[26px] border border-[#E8DEC1] bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${i * 55}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute inset-x-5 top-3 h-10 rounded-full bg-[#C89B3C]/8 blur-2xl" />
              <div className="relative mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[#EFE5BE] bg-[#FFFDF7] p-1.5 shadow-md transition-all duration-500 group-hover:shadow-lg sm:h-28 sm:w-28">
                <img
                  src={ing.img}
                  alt={ing.name}
                  className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#214D2D]/15 via-transparent to-transparent" />
                <div
                  className={`absolute inset-x-2 bottom-2 rounded-full bg-white/92 px-2 py-1 text-center text-[9px] font-semibold leading-tight text-[#214D2D] shadow-md transition-all duration-300 ${hovered === i ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                >
                  {ing.benefit}
                </div>
              </div>
              <span className="text-center text-sm font-semibold leading-snug text-[#214D2D] transition-colors duration-300">{ing.name}</span>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { num: '12', label: 'Premium Botanicals' },
            { num: '100%', label: 'Natural Ingredients' },
            { num: '0', label: 'Artificial Additives' },
            { num: '28', label: 'Tea Bags Per Box' },
          ].map((stat, i) => (
            <div
              key={i}
              className="reveal rounded-3xl border border-[#ECE2C2] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#214D2D] lg:text-4xl">{stat.num}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#7A8C75]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}