import { howItWorks } from '@/lib/data';

export function HowItWorksSection() {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">How KilimoLedger Works</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A seamless journey from farm to port with verified compliance and automated escrow release
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {howItWorks.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:border-green-700 hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-green-700 flex items-center justify-center">
                  <span className="text-lg font-bold text-green-700">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            </div>

            {/* Dashed arrow between steps (desktop only) */}
            {idx < howItWorks.length - 1 && (
              <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 items-center">
                <div className="w-16 border-t-2 border-dashed border-green-300" />
                <span className="text-green-300 -ml-1">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Responsive vertical line for mobile */}
      <div className="md:hidden">
        <div className="text-center">
          <div className="inline-block w-0.5 border-l-2 border-dashed border-green-300 h-16" />
        </div>
      </div>
    </section>
  );
}