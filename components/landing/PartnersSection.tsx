export function PartnersSection() {
  const certifications = [
    { label: 'EUDR Compliant', sub: 'EU Deforestation Regulation' },
    { label: 'GlobalG.A.P', sub: 'Good Agricultural Practice' },
    { label: 'ISO 27001', sub: 'Information Security' },
    { label: 'Fairtrade', sub: 'Certified Integration' },
    { label: 'Rainforest Alliance', sub: 'Sustainability Standard' },
    { label: 'UNCTAD', sub: 'Trade & Development Partner' },
  ];

  return (
    <section className="w-full bg-white border-y border-gray-100 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Trusted Standards & Partner Certifications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center border border-gray-200 rounded-xl py-5 px-3 hover:border-green-700 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-3">
                <span className="text-green-700 font-bold text-xs">✓</span>
              </div>
              <div className="font-semibold text-black text-xs mb-1">{c.label}</div>
              <div className="text-gray-400 text-[10px] leading-tight">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}