export function AboutSection() {
  const pillars = [
    {
      icon: '🛰️',
      title: 'Geo-Verified Farms',
      desc: 'Every farm is satellite-confirmed and boundary-locked, eliminating fraud from the source.',
    },
    {
      icon: '📋',
      title: 'Regulatory Compliance',
      desc: 'Built-in EUDR, GlobalG.A.P, and buyer-specific templates updated automatically.',
    },
    {
      icon: '🔐',
      title: 'Smart Escrow',
      desc: 'Funds are held and released only when port delivery conditions are verified.',
    },
  ];

  return (
    <section id="about" className="w-full bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-3 text-center">
          About Us
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
        >
          Moving African Agriculture<br />Into the Global Economy
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image */}
          <div className="flex-1 relative w-full max-w-[480px] mx-auto">
            {/* Main image */}
            <div className="rounded-lg overflow-hidden border-2 border-green-700 shadow-lg" style={{ height: 420 }}>
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="Truck driver ready for transport"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-lg z-10">
              <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Active Routes</div>
              <div className="text-lg font-bold text-green-700" style={{ fontFamily: 'Georgia, serif' }}>
                340+ Trucks
              </div>
              <div className="text-xs text-gray-400">across East Africa</div>
            </div>

            {/* Decorative amber corner accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-lg z-0"
              style={{ background: '#D4852A', opacity: 0.15 }}
            />
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              <strong className="text-black">KilimoLedger</strong> is an agricultural export intelligence platform
              built for the realities of African farming. We bridge the gap between smallholder
              farmers and global commodity buyers — providing the infrastructure needed to
              verify, track, and finance produce from the moment it leaves the farm.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Our platform connects farmers, truck drivers, port agents, and international buyers
              on a single ledger. Every checkpoint is logged, every compliance document is verified,
              and every payment is held in smart escrow until goods are confirmed at the port of export.
              No middlemen. No delays. No disputes.
            </p>

            {/* Pillars */}
            <div className="space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 text-lg">
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm mb-1">{p.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded text-sm transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['2019', 'Founded in Nairobi'],
            ['7 Countries', 'Across East Africa'],
            ['12,400+', 'Farms on Platform'],
            ['$8.2M+', 'Escrow Settled'],
          ].map(([val, label]) => (
            <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-center">
              <div
                className="text-2xl font-bold text-green-700 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {val}
              </div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}