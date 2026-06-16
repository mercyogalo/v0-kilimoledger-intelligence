import Link from 'next/link';
import { BarChart3, Users, Truck } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { PartnersSection } from '@/components/landing/PartnersSection';
import { ProblemSolutionSection } from '@/components/landing/ProblemSolutionSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">

      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero — full-width carousel */}
      <HeroSection />

      {/* 9. About */}
      <AboutSection />

      {/* 3. Partners / Certifications trust strip */}
      <PartnersSection />

      {/* 4. Problem → Solution */}
      <ProblemSolutionSection />

      {/* 5. Features grid */}
      <FeaturesSection />

      {/* 6. How It Works steps */}
      <HowItWorksSection />

      {/* 7. Role selection cards */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
              Access Portals
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
            >
              One Platform,<br />Every Role Covered
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Each stakeholder in the supply chain gets a purpose-built portal with the
              tools and data they actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/dashboard/manager">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-700 hover:shadow-lg transition-all cursor-pointer group text-center">
                <div className="p-4 bg-green-50 rounded-xl inline-flex mb-5 group-hover:bg-green-100 transition-colors">
                  <BarChart3 className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Manager</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Oversee shipments, compliance documents, and escrow management across all routes.
                </p>
                <div className="inline-block px-6 py-2 bg-green-700 text-white rounded text-sm font-semibold group-hover:bg-green-800 transition-colors">
                  Enter Portal →
                </div>
              </div>
            </Link>

            <Link href="/dashboard/driver">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-700 hover:shadow-lg transition-all cursor-pointer group text-center">
                <div className="p-4 bg-green-50 rounded-xl inline-flex mb-5 group-hover:bg-green-100 transition-colors">
                  <Truck className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Driver</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Track checkpoints in real time, manage route documents, and log incidents on the go.
                </p>
                <div className="inline-block px-6 py-2 bg-green-700 text-white rounded text-sm font-semibold group-hover:bg-green-800 transition-colors">
                  Enter Portal →
                </div>
              </div>
            </Link>

            <Link href="/dashboard/analytics">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-700 hover:shadow-lg transition-all cursor-pointer group text-center">
                <div className="p-4 bg-green-50 rounded-xl inline-flex mb-5 group-hover:bg-green-100 transition-colors">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Admin</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  View system-wide analytics, route efficiency metrics, and manage all user accounts.
                </p>
                <div className="inline-block px-6 py-2 bg-green-700 text-white rounded text-sm font-semibold group-hover:bg-green-800 transition-colors">
                  Enter Portal →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <TestimonialsSection />

      

      {/* 10. CTA banner */}
      <CTASection />

      {/* 11. Footer */}
      <Footer />

    </div>
  );
}