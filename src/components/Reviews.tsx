import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    rating: 5,
    text: 'I\'ve been drinking Zeniva for three weeks now and the difference is incredible. My bloating has reduced so much and I feel so much lighter throughout the day. Would 100% recommend!',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    verified: true,
  },
  {
    name: 'Claire T.',
    location: 'Manchester, UK',
    rating: 5,
    text: 'As someone going through menopause, I was struggling with energy and bloating. This tea has genuinely helped with both. The taste is lovely too — like a proper luxury treat every morning.',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    verified: true,
  },
  {
    name: 'Emma R.',
    location: 'Edinburgh, UK',
    rating: 5,
    text: 'The quality of the ingredients really shows. I love knowing exactly what\'s going into my body. The pyramid bags make the perfect brew every time. My new daily ritual!',
    img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
    verified: true,
  },
  {
    name: 'Diane W.',
    location: 'Bristol, UK',
    rating: 5,
    text: 'I was skeptical at first but after two weeks I noticed real changes. Less bloating, better digestion, and I feel calmer in the evenings. The packaging is gorgeous too — perfect gift!',
    img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100',
    verified: true,
  },
];

const trustStats = [
  { num: '4.9', label: 'Average Rating' },
  { num: '2,400+', label: 'Happy Customers' },
  { num: '28', label: 'Pyramid Tea Bags' },
  { num: '100%', label: 'Natural Botanicals' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="text-[#C89B3C] text-sm font-medium tracking-widest uppercase block mb-3">Testimonials</span>
          <h2 className="font-['Cormorant_Garamond'] text-[#214D2D] text-4xl lg:text-5xl font-semibold mb-4">
            Why Customers Love Us
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B3C] mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#C89B3C] text-[#C89B3C]" />
              ))}
            </div>
            <span className="text-[#214D2D] font-semibold">4.9 out of 5</span>
            <span className="text-gray-400 text-sm">· 2,400+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="reveal bg-[#FAF7F0] rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#C89B3C] text-[#C89B3C]" />
                  ))}
                </div>
                <Quote size={18} className="text-[#C89B3C]/40" />
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-5 line-clamp-4">{r.text}</p>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#EEF4EF]"
                  loading="lazy"
                />
                <div>
                  <div className="font-medium text-[#1A1A1A] text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.location}</div>
                </div>
                {r.verified && (
                  <div className="ml-auto">
                    <span className="text-[10px] bg-[#EEF4EF] text-[#214D2D] px-2 py-0.5 rounded-full font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {trustStats.map((s, i) => (
            <div key={i} className="text-center py-6 rounded-2xl bg-[#214D2D] text-white">
              <div className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-semibold text-[#C89B3C]">{s.num}</div>
              <div className="text-white/70 text-xs mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
