import { useEffect, useState } from 'react';
import { ShoppingBag, FlaskConical, Star, ArrowDown } from 'lucide-react';
import heros from '../images/herbalherosone.jpg';
import hero2 from '../images/herostwos.png';

function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setScene(1), 120),
      window.setTimeout(() => setScene(2), 300),
      window.setTimeout(() => setScene(3), 450),
      window.setTimeout(() => setFadeOut(true), 1200),
      window.setTimeout(onComplete, 1700),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease',
        background:
          'linear-gradient(180deg, #f7f7f1 0%, #f5f7ef 48%, #f3f6ec 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(89,130,91,0.08),transparent_18%),radial-gradient(circle_at_top,rgba(200,155,60,0.08),transparent_18%)]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C89B3C]/8" />
      <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C89B3C]/5" />

      {scene >= 1 && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(81,140,98,0.18),rgba(81,140,98,0.04)_58%,transparent_72%)]" />
          <div
            className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C89B3C]/15"
            style={{ animation: 'pulseRing 5s ease-in-out infinite' }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,183,74,0.22),rgba(125,183,74,0.07)_60%,transparent_76%)]"
            style={{ animation: 'spinSlow 12s linear infinite' }}
          />
        </div>
      )}

      {scene >= 2 && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute block h-1 w-1 rounded-full bg-[#A9D08E]"
              style={{
                left: `${(i * 9) % 100}%`,
                top: `${(i * 13) % 100}%`,
                opacity: 0.15 + ((i % 4) * 0.12),
                animation: `particleDrift ${3.5 + (i % 3)}s ease-in-out ${i * 0.06}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {scene >= 2 && (
        <div className="absolute left-1/2 top-1/2 z-20 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.12),transparent_65%)]" />
      )}

      {scene >= 3 && (
        <div className="absolute left-1/2 top-1/2 z-30 flex w-[420px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div
            className="relative mx-auto w-full max-w-[360px]"
            style={{
              transform: scene >= 3 ? 'scale(1) translateZ(0)' : 'scale(0.88)',
              transition: 'transform 0.9s cubic-bezier(0.22,1,0.36,1)',
              animation: 'cameraPush 3.2s ease-in-out infinite alternate',
            }}
          >
            <div className="absolute inset-x-10 inset-y-8 rounded-[32px] bg-[#C89B3C]/8 blur-3xl" />
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65),transparent_64%)]" />
            <img
              src={hero2}
              alt="Zeniva"
              className="relative z-10 w-full object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 top-[72%] z-40 flex flex-col items-center justify-center text-center">
        <div
          className="mx-auto max-w-3xl px-6"
          style={{
            opacity: scene >= 3 ? 1 : 0.78,
            transform: scene >= 3 ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-semibold tracking-[0.18em] text-[#1f3a21] sm:text-6xl">
            ZENIVA
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.48em] text-[#214D2D]/80">
            A Blend of Nature for Mind, Body & Soul
          </p>
        </div>
      </div>

      {scene >= 3 && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute block h-2.5 w-2.5 rounded-full bg-[#C89B3C]/18"
              style={{
                left: `${18 + (i * 6) % 64}%`,
                top: `${18 + (i * 7) % 64}%`,
                animation: `floatSpark ${4.5 + (i % 3)}s ease-in-out ${i * 0.12}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes pulseRing {
          0%, 100% { transform: translate(-50%, -50%) scale(0.94); opacity: 0.52; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.9; }
        }
        @keyframes spinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes particleDrift {
          0%, 100% { transform: translateY(0) scale(0.9); opacity: 0.18; }
          50% { transform: translateY(-14px) scale(1.1); opacity: 0.46; }
        }
        @keyframes floatSpark {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 0.5; }
        }
        @keyframes cameraPush {
          0% { transform: scale(0.96) translateY(0px); }
          100% { transform: scale(1.02) translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

function ProductPanel({ visible }: { visible: boolean }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1s ease 0.6s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.6s',
      }}
    >
      <div className="relative z-10 w-full max-w-[1050px]">
        <div
          className="relative h-[790px] w-full overflow-hidden bg-transparent"
          style={{ animation: 'imageDance 5.2s ease-in-out infinite' }}
        >
          <img
            src={hero2}
            alt="Zeniva wellness ritual"
            className="relative z-10 h-full w-full object-contain object-center scale-[1.08]"
            loading="eager"
          />
        </div>
      </div>

      <style>{`
        @keyframes imageDance {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-14px) scale(1.03); }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHeroVisible(true), 280);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      {showIntro && <OpeningAnimation onComplete={() => setShowIntro(false)} />}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#08170F]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heros})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,8,0.92)_0%,rgba(3,12,8,0.78)_42%,rgba(3,12,8,0.45)_70%,rgba(3,12,8,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,185,77,0.12),transparent_14%),radial-gradient(circle_at_bottom_right,rgba(255,124,92,0.08),transparent_18%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F2B94D]/5 blur-3xl" />
        <div className="absolute left-16 top-1/4 h-24 w-24 rounded-full border border-white/5" />
        <div className="absolute bottom-24 right-20 h-40 w-40 rounded-full border border-white/5" />

        <div className="relative mx-auto grid min-h-[92vh] w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.98fr_1.02fr] lg:gap-8 lg:py-0">
          <div
            className="relative z-10 max-w-2xl"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s',
            }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#F2B94D]" />
              Premium Botanical Wellness
            </div>

            <h1 className="mb-5 font-['Cormorant_Garamond'] font-semibold leading-[0.93] text-white">
              <span className="block text-5xl sm:text-6xl lg:text-[58px] xl:text-[68px]">Feel lighter.</span>
              <span className="block text-5xl sm:text-6xl lg:text-[58px] xl:text-[68px]">More balanced.</span>
              <span className="mt-1 block text-5xl italic text-[#F2B94D] sm:text-6xl lg:text-[58px] xl:text-[68px]">Naturally Zeniva.</span>
            </h1>

            <div className="mb-6 h-0.5 w-16 bg-[#F2B94D]" />
            <p className="mb-9 max-w-[520px] text-base leading-[1.8] text-white/75 lg:text-[17px]">
              A beautifully blended wellness ritual with 12 premium botanicals to support digestion, ease bloating, and restore your natural daily balance.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              <button className="group flex items-center gap-2.5 rounded-full bg-[#F2B94D] px-8 py-[14px] text-sm font-semibold text-[#0c1f12] shadow-lg shadow-[#F2B94D]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E1A93A]">
                <ShoppingBag size={15} />
                Shop Now
              </button>
              <button className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/6 px-8 py-[14px] text-sm font-semibold text-white transition-all duration-300 hover:border-white/35 hover:bg-white/10">
                <FlaskConical size={15} />
                See Ingredients
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#F2B94D] text-[#F2B94D]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">4.9</span>
              <span className="text-sm text-white/35">|</span>
              <span className="text-sm text-white/65">2,400+ happy customers</span>
            </div>
          </div>

          <div className="relative flex h-[480px] items-center justify-center lg:h-[620px] lg:justify-center">
            <ProductPanel visible={heroVisible} />
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 opacity-40">
          <ArrowDown size={13} className="animate-bounce text-white" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">Scroll</span>
        </div>
      </section>
    </>
  );
}