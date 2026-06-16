export function ProblemSolutionSection() {
  const problems = [
    { icon: '❌', text: 'Paperwork lost between farm and port' },
    { icon: '❌', text: 'Payments delayed 60–90 days after export' },
    { icon: '❌', text: 'No proof of EUDR compliance for EU buyers' },
    { icon: '❌', text: 'Middlemen taking 20–35% of farmer revenue' },
    { icon: '❌', text: 'Cold-chain breaks with zero visibility' },
  ];

  const solutions = [
    { icon: '✅', text: 'Immutable digital ledger from plot to port' },
    { icon: '✅', text: 'Escrow releases within 48 hours of port confirmation' },
    { icon: '✅', text: 'Auto-generated EUDR certificates on every shipment' },
    { icon: '✅', text: 'Direct buyer connections — zero middlemen' },
    { icon: '✅', text: 'IoT sensors stream real-time cold-chain data' },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
            The Problem & Solution
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-black"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
          >
            African Exports Are Broken.<br />
            <span className="text-green-700">We Fixed It.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Before */}
          <div className="rounded-xl border-2 border-red-100 bg-red-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm">😤</div>
              <h3 className="font-bold text-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                Before KilimoLedger
              </h3>
            </div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{p.icon}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">🚀</div>
              <h3 className="font-bold text-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                After KilimoLedger
              </h3>
            </div>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{s.icon}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center stat */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-black text-white rounded-xl px-10 py-6">
            <div
              className="text-4xl font-bold text-green-400 mb-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              3.4×
            </div>
            <div className="text-sm text-white/70">
              average increase in net farmer income after 12 months on KilimoLedger
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}