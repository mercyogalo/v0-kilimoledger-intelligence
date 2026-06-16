export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Before KilimoLedger, I waited three months for payment after every harvest. Now the escrow clears in two days. My family can actually plan ahead.',
      name: 'Amara Osei',
      role: 'Cocoa Farmer, Ghana',
      avatar: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/577/original/Screenshot_2024-10-06_193655.png?1728232848',
      stat: '2 days',
      statLabel: 'payment turnaround',
    },
    {
      quote:
        'Our EU buyers were threatening to drop us over EUDR documentation. KilimoLedger auto-generates the certificates. We haven\'t lost a single contract since.',
      name: 'Fatuma Njoroge',
      role: 'Export Manager, Mombasa',
      avatar: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/577/original/Screenshot_2024-10-06_193655.png?1728232848',
      stat: '100%',
      statLabel: 'EUDR compliance rate',
    },
    {
      quote:
        'The real-time tracking means I know exactly where every truck is and the cold-chain temperature at any moment. No more surprises at the port.',
      name: 'David Kimani',
      role: 'Logistics Director, Nairobi',
      avatar: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/577/original/Screenshot_2024-10-06_193655.png?1728232848',
      stat: '0',
      statLabel: 'cold-chain failures this year',
    },
    {
      quote:
        'As a financier, the verified ledger data is exactly what we need to underwrite crop advance facilities with confidence. Game changer for agri-finance.',
      name: 'Sophie van der Berg',
      role: 'Trade Finance, Amsterdam',
      avatar: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/577/original/Screenshot_2024-10-06_193655.png?1728232848',
      stat: '$4.1M',
      statLabel: 'financed via platform',
    },
  ];

  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-3">
            Testimonials
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
          >
            Trusted Across the<br />Entire Supply Chain
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-green-700 transition-all"
            >
              {/* Quote mark */}
              <div className="text-green-400 text-4xl font-serif leading-none mb-4">"</div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-green-400 font-bold text-lg"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {t.stat}
                  </div>
                  <div className="text-white/40 text-xs">{t.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}