'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const images = [
  {
    src: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/180/525/original/A_tractor_on_the_field_waters_the_plants_with_pesticides__royalty_free_stock_image.jpg?1781550016',
    alt: 'Tractor in agricultural field',
  },
  {
    src: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/180/526/original/How_Speed_Limiters_Help_Companies_Meet_Insurance___Safety_Audits.jpg?1781550461',
    alt: 'Logistics and compliance audit',
  },
  {
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    alt: 'Truck driver ready for transport',
  },
   {
    src: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/180/528/original/download_%2835%29.jpg?1781604463',
    alt: 'Truck driver ready for transport',
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  return (
    <section className="w-full relative overflow-hidden" style={{ height: '90vh', minHeight: 560 }}>

      {/* Full-width background image */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.2))' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-xs font-semibold text-white uppercase tracking-wide">
              Farm-to-Port Compliance Platform
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
          >
            Verified Compliance,{' '}
            <span className="text-green-400">Instant Settlement.</span>
          </h1>

          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
            KilimoLedger connects African smallholder farmers to global commodity
            markets — with tamper-proof compliance records and automated escrow
            that pays at the port.
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <Link href="/dashboard/manager">
              <button className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded text-sm transition-colors">
                Request a Demo
              </button>
            </Link>
            <button className="border-2 border-white/60 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded text-sm transition-colors">
              See How It Works
            </button>
          </div>

          {/* Mini stats */}
          <div className="flex gap-8 pt-6 border-t border-white/20">
            {[
              ['12K+', 'Farms onboarded'],
              ['$8.2M', 'Escrow processed'],
              ['94%', 'Compliance rate'],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {val}
                </div>
                <div className="text-xs text-white/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute z-20 top-8 right-8 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md">
        <div className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">Compliance</div>
        <div className="text-xs font-bold text-green-700 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-700 inline-block" />
          EUDR Verified
        </div>
      </div>

      <div className="absolute z-20 bottom-20 right-8 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md">
        <div className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">Escrow</div>
        <div className="text-xs font-bold" style={{ color: '#D4852A' }}>
          $18,400 Released ✓
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white text-xl transition-colors backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white text-xl transition-colors backdrop-blur-sm"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="rounded-full transition-all"
            style={{
              width: idx === current ? 24 : 8,
              height: 8,
              background: idx === current ? '#fff' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>

    </section>
  );
}