import { howItWorks } from '@/lib/data';

export function HowItWorksSection() {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How KilimoLedger Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A seamless journey from farm to port with verified compliance and automated escrow release
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {howItWorks.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="data-card h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
            
            {/* Dashed arrow between steps (desktop only) */}
            {idx < howItWorks.length - 1 && (
              <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-16 border-t-2 border-dashed border-primary/30" />
                <span className="text-primary/30">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Responsive vertical line for mobile */}
      <div className="md:hidden space-y-0">
        <div className="text-center">
          <div className="inline-block w-1 bg-dashed border-l-2 border-dashed border-primary/30 h-16" />
        </div>
      </div>
    </section>
  );
}
