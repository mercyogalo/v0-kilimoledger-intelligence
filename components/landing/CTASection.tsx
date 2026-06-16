import Link from 'next/link';

export function CTASection() {
  return (
    <section className="w-full bg-green-700 py-24 relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: '#fff' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10"
        style={{ background: '#fff' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs font-semibold tracking-widest uppercase text-green-200 mb-4">
          Get Started Today
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
        >
          Ready to Bring Your Farm<br />Into the Global Market?
        </h2>
        <p className="text-white/75 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Join thousands of farmers, exporters, and buyers already using KilimoLedger
          to simplify compliance, eliminate delays, and accelerate payment.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/dashboard/manager">
            <button className="bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-4 rounded text-sm transition-colors">
              Start Free Trial
            </button>
          </Link>
          <button className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded text-sm transition-colors">
            Talk to Sales
          </button>
        </div>

        <p className="text-white/40 text-xs mt-6">
          No credit card required · Setup in under 10 minutes · Cancel anytime
        </p>
      </div>
    </section>
  );
}