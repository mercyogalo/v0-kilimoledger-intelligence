export function FeaturesSection() {
  const features = [
    {
      icon: '🛰️',
      title: 'Geo-Verified Farm Plots',
      desc: 'Satellite-confirmed boundaries updated each season. Fraud-resistant and legally defensible in any jurisdiction.',
    },
    {
      icon: '📋',
      title: 'Regulatory Compliance',
      desc: 'Pre-built EUDR, GlobalG.A.P, and buyer-specific templates — updated automatically as regulations change.',
    },
    {
      icon: '🔐',
      title: 'Smart Escrow Vault',
      desc: 'Funds held securely on-chain and released only when verified delivery conditions are met at the port.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      desc: 'Live dashboards for exporters, aggregators, and financiers to track shipments and compliance scores.',
    },
    {
      icon: '🚛',
      title: 'Driver & Checkpoint Tracking',
      desc: 'IoT-enabled checkpoint logging at every waypoint. Every driver action is timestamped and immutable.',
    },
    {
      icon: '🌱',
      title: 'Carbon Credit Logging',
      desc: 'Optional carbon tracking integrated into the same ledger — no double entry, no extra software.',
    },
    {
      icon: '🤝',
      title: 'Buyer API Integration',
      desc: 'Direct connections to commodity traders and processors for seamless, verified data handoff.',
    },
    {
      icon: '📱',
      title: 'Offline-First Mobile App',
      desc: 'Farmers and drivers log data even without internet. Syncs automatically when connectivity returns.',
    },
    {
      icon: '🏦',
      title: 'Trade Finance Ready',
      desc: 'Verified ledger data accepted by partner banks for invoice financing and crop advance facilities.',
    },
  ];

  return (
    <section id="features" className="w-full bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
            Platform Features
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
          >
            Every Tool You Need,<br />Built Into One Ledger
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From satellite farm registration to port-side escrow release — KilimoLedger
            covers the entire export journey in a single verified platform.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-700 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-2xl mb-4 group-hover:bg-green-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-semibold text-black mb-2 text-sm">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}