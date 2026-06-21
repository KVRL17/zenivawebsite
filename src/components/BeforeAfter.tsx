import { TrendingDown, Scale, Flame } from 'lucide-react';
import b from '../images/a.png';
import a from '../images/b.png';
import heros from '../images/herbalheros.jpeg';

const features = [
  { icon: <TrendingDown size={20} className="text-white" />, text: 'Reduces bloating', sub: 'Gentle, daily relief' },
  { icon: <Scale size={20} className="text-white" />, text: 'Supports weight management', sub: 'Natural metabolic support' },
  { icon: <Flame size={20} className="text-white" />, text: 'Supports digestive health', sub: 'Nourish your gut flora' },
];

export default function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-[#EEF5EE] py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heros})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-6xl rounded-[32px] bg-[#F5F9F5]/90 p-4 shadow-xl ring-1 ring-[#DCE9DD] backdrop-blur-sm lg:p-5">
          <div className="grid items-stretch gap-4 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#F5F9F5] p-6 lg:p-8">
              <div className="mb-8">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">Real Results</span>
                <h2 className="mb-4 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-[#214D2D] lg:text-5xl">
                  Less bloating.<br />
                  <span className="italic">More confidence.</span>
                </h2>
                <p className="max-w-md text-base leading-relaxed text-gray-600">
                  Our botanical blend works gently with your body to reduce discomfort and restore your natural balance from the inside out.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 rounded-2xl border border-[#2F6A45] bg-[#214D2D] p-4 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-[#214D2D] hover:via-[#2D5E3E] hover:to-[#C89B3C] hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white/15">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{f.text}</div>
                      <div className="text-xs text-white/80">{f.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-[#EEF5EE]">
              <div className="grid h-full grid-cols-2">
                <div className="group relative overflow-hidden">
                  <img
                    src={b}
                    alt="Before - feeling uncomfortable"
                    className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Before</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden">
                  <img
                    src={a}
                    alt="After - feeling confident"
                    className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#214D2D]/75 via-[#214D2D]/20 to-transparent p-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">After</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 left-1/2 z-10 w-0.5 -translate-x-1/2 bg-white/90">
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                  <div className="ml-0.5 h-0 w-0 border-y-4 border-y-transparent border-r-4 border-r-[#214D2D]" />
                  <div className="mr-0.5 h-0 w-0 border-y-4 border-y-transparent border-l-4 border-l-[#214D2D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}