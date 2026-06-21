import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Can I drink this every day?',
    a: 'Yes! Zeniva is designed as a daily wellness ritual. We recommend one cup per day, either in the morning to start your day or in the evening to wind down. Consistent daily use delivers the best results over time.',
  },
  {
    q: 'What is the best time to drink it?',
    a: 'Many customers enjoy Zeniva in the morning before breakfast to kickstart their metabolism, or in the afternoon as a healthy alternative to coffee. Some prefer it in the evening for its calming properties. Find the time that works best for your lifestyle.',
  },
  {
    q: 'How long before I feel benefits?',
    a: 'Most customers begin to notice a difference within 1–2 weeks of daily use. Significant results — such as reduced bloating and improved digestive comfort — are typically experienced after 3–4 weeks of consistent daily use.',
  },
  {
    q: 'Can I drink it hot or iced?',
    a: 'Absolutely! Zeniva is delicious both hot and iced. For hot tea, steep for 3–5 minutes in freshly boiled water. For iced tea, brew as normal, allow to cool, then pour over ice. Both methods deliver the full botanical benefits.',
  },
  {
    q: 'Does it contain caffeine?',
    a: 'Zeniva contains a small amount of natural caffeine from green tea and yerba mate. The caffeine level is significantly lower than a standard cup of coffee, making it suitable for most people throughout the day. If you are sensitive to caffeine, we recommend enjoying it in the morning.',
  },
  {
    q: 'Does it help with bloating?',
    a: 'Yes — reducing bloating is one of the primary benefits our customers experience. Our blend includes several botanicals specifically chosen for their ability to support healthy digestion and reduce the discomfort associated with bloating.',
  },
  {
    q: 'Does it support digestion?',
    a: 'Digestive support is central to our formula. Ingredients such as dandelion leaf, milk thistle, and lemongrass work together to support healthy gut function, aid digestion, and promote a balanced digestive environment.',
  },
  {
    q: 'Can I take it with supplements?',
    a: 'Zeniva is made from natural botanicals and is generally compatible with most supplements. However, if you are taking prescribed medications or have a specific health condition, we recommend consulting your healthcare provider before adding any new supplement to your routine.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(9,28,18,0.72),rgba(9,28,18,0.84),rgba(9,28,18,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,60,0.08),transparent_18%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 block text-sm font-medium uppercase tracking-[0.35em] text-[#C89B3C]">Questions</span>
          <h2 className="mb-4 font-['Cormorant_Garamond'] text-4xl font-semibold text-white lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-[#C89B3C]" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`faq-item overflow-hidden rounded-2xl border bg-[#F9F7EE] ${
                  isOpen ? 'border-[#C89B3C]/50 shadow-sm' : 'border-white/10'
                }`}
              >
                <button
                  type="button"
                  className="group flex w-full items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`pr-4 text-sm font-medium transition-colors ${isOpen ? 'text-[#214D2D]' : 'text-[#1A1A1A] group-hover:text-[#214D2D]'}`}>
                    {faq.q}
                  </span>
                  <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-[#C89B3C] text-white' : 'bg-[#214D2D] text-white'
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden px-5 transition-all duration-300 ${
                    isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="border-t border-gray-200 pt-4 text-sm leading-relaxed text-gray-700">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
