import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const features = [
  { num: '01', title: 'Climate Risk AI', desc: 'Drought, rainfall and heat-risk signals translated into localised intelligence.' },
  { num: '02', title: 'Food & Agriculture AI', desc: 'Production, markets and food-system indicators linked to vulnerability.' },
  { num: '03', title: 'Water Intelligence', desc: 'Water stress and access signals used to prioritise high-risk areas.' },
  { num: '04', title: 'Nutrition Intelligence', desc: 'Population-level food and nutrition vulnerability monitoring.' },
  { num: '05', title: 'Livelihood Intelligence', desc: 'Household, livestock, climate and market pressure combined.' },
];

const loopSteps = [
  { num: '01', title: 'Predict', desc: 'Detect emerging risk.' },
  { num: '02', title: 'Prepare', desc: 'Prioritise alerts.' },
  { num: '03', title: 'Act', desc: 'Match interventions.' },
  { num: '04', title: 'Measure', desc: 'Track outcomes.' },
  { num: '05', title: 'Learn', desc: 'Improve decisions.' },
];

const impacts = [
  { title: 'Government', desc: 'Planning, preparedness, targeting and resource allocation.' },
  { title: 'NGOs & humanitarian actors', desc: 'Early action, programme targeting and monitoring.' },
  { title: 'Researchers', desc: 'Integrated datasets, model validation and evidence generation.' },
  { title: 'Communities', desc: 'Appropriate local alerts and actionable information.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue/10 via-cyan/5 to-transparent py-20 md:py-32">
        <div className="w-full max-w-[1180px] mx-auto px-[4%]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-bold tracking-wider text-blue mb-4">AFRICAN RESILIENCE INTELLIGENCE PLATFORM</div>
              <h1 className="font-bold mb-6">
                From <em className="text-blue font-normal">data</em> to action before crisis.
              </h1>
              <p className="text-lg text-muted max-w-[650px] mb-6">
                AI-enabled intelligence for climate risk, food systems, water security and livelihoods — helping institutions anticipate risk,
                target interventions and measure what works.
              </p>
              <div className="flex gap-4 flex-wrap mb-8">
                <Link href="/dashboard" className="btn btn-dark inline-flex items-center gap-2">
                  Explore the live demo <ChevronRight size={16} />
                </Link>
                <a href="#partners" className="btn inline-flex items-center gap-2">
                  Partner with us <ChevronRight size={16} />
                </a>
              </div>
              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-bold font-display">5</div>
                  <div className="text-xs text-muted">Intelligence engines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display">360°</div>
                  <div className="text-xs text-muted">Risk-to-action view</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display">1</div>
                  <div className="text-xs text-muted">Integrated layer</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-navy text-white rounded-2xl p-8 shadow-2xl">
                <small className="text-cyan tracking-wider">AFRI-RESILIENCE SCORE · DEMO</small>
                <div className="text-8xl font-bold font-display my-4">68</div>
                <div className="text-cyan mb-6">MODERATE RESILIENCE</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Climate</span>
                    <span className="font-bold">72</span>
                  </div>
                  <div className="h-1 bg-navy-2 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue to-cyan rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div className="space-y-3 text-sm mt-4">
                  <div className="flex justify-between">
                    <span>Food</span>
                    <span className="font-bold">61</span>
                  </div>
                  <div className="h-1 bg-navy-2 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue to-cyan rounded-full" style={{ width: '61%' }}></div>
                  </div>
                </div>
                <div className="space-y-3 text-sm mt-4">
                  <div className="flex justify-between">
                    <span>Water</span>
                    <span className="font-bold">58</span>
                  </div>
                  <div className="h-1 bg-navy-2 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue to-cyan rounded-full" style={{ width: '58%' }}></div>
                  </div>
                </div>
                <div className="space-y-3 text-sm mt-4">
                  <div className="flex justify-between">
                    <span>Livelihood</span>
                    <span className="font-bold">76</span>
                  </div>
                  <div className="h-1 bg-navy-2 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue to-cyan rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-navy text-blue py-4 text-center text-sm font-bold tracking-wider overflow-hidden">
        <div className="animate-pulse">CLIMATE INTELLIGENCE · FOOD SYSTEMS · WATER SECURITY · LIVELIHOODS · EARLY WARNING · IMPACT MEASUREMENT</div>
      </div>

      {/* Platform Section */}
      <section id="platform" className="section">
        <div className="w-full max-w-[1180px] mx-auto px-[4%]">
          <div className="text-sm font-bold tracking-wider text-blue mb-4">ONE PLATFORM · MULTIPLE SIGNALS</div>
          <h2>See the risk. Understand it. Act earlier.</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {features.map((f, i) => (
              <div key={i} className="border border-line rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-sm font-bold text-blue mb-4">{f.num}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-xs text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resilience Loop */}
      <section className="bg-navy text-white py-20 md:py-32">
        <div className="w-full max-w-[1180px] mx-auto px-[4%]">
          <div className="text-sm font-bold tracking-wider text-cyan mb-4">THE RESILIENCE LOOP</div>
          <h2 className="text-white mb-12">Predict → Prepare → Act → Measure → Learn</h2>
          <div className="grid md:grid-cols-5 gap-px bg-navy-2 rounded-lg overflow-hidden">
            {loopSteps.map((step, i) => (
              <div key={i} className="bg-navy-2 p-6">
                <div className="text-cyan font-bold text-sm mb-3">{step.num}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-blue">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section">
        <div className="w-full max-w-[1180px] mx-auto px-[4%]">
          <div className="text-sm font-bold tracking-wider text-blue mb-4">DESIGNED FOR IMPACT</div>
          <h2>Built for people making high-stakes decisions.</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {impacts.map((i, idx) => (
              <div key={idx} className="border border-line rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="font-bold mb-2">{i.title}</h3>
                <p className="text-xs text-muted">{i.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-4 bg-navy text-white rounded-2xl p-8 text-center">
            <div>
              <div className="text-4xl font-bold font-display">3</div>
              <small className="text-cyan tracking-wider">Proposed pilot counties*</small>
            </div>
            <div>
              <div className="text-4xl font-bold font-display">15–20</div>
              <small className="text-cyan tracking-wider">Target wards*</small>
            </div>
            <div>
              <div className="text-4xl font-bold font-display">10K+</div>
              <small className="text-cyan tracking-wider">Households*</small>
            </div>
            <div>
              <div className="text-4xl font-bold font-display">12</div>
              <small className="text-cyan tracking-wider">Months pilot*</small>
            </div>
          </div>
          <small className="block mt-4 text-muted">*Proposed targets subject to partner and field validation.</small>
        </div>
      </section>

      {/* CTA Section */}
      <section id="partners" className="bg-gradient-to-br from-navy to-blue py-20 md:py-32 text-white">
        <div className="w-full max-w-[1180px] mx-auto px-[4%] text-center">
          <div className="text-sm font-bold tracking-wider text-cyan mb-4">BUILD WITH US</div>
          <h2 className="text-white mb-4">Turn Africa's data into earlier, smarter action.</h2>
          <p className="text-lg text-blue mb-8 max-w-[600px] mx-auto">Seeking research, data, implementation, technology and funding partners for the Kenya pilot.</p>
          <a href="mailto:info@tanzinnovations.com?subject=AFRI-RESILIENCE%20Partnership" className="btn bg-white text-navy font-bold hover:bg-gray-100 inline-flex items-center gap-2">
            Start a partnership conversation <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg border-t border-line">
        <div className="w-full max-w-[1180px] mx-auto px-[4%] py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <b>AFRI-RESILIENCE AI</b>
              <p className="text-sm text-muted mt-2">From Data to Action Before Crisis.</p>
            </div>
            <div>
              <b>Tanz Innovations & Research</b>
              <p className="text-sm text-muted mt-2">Empowering Innovation Through Intelligent Research · Nairobi, Kenya</p>
            </div>
            <div>
              <a href="/dashboard" className="block text-sm text-muted hover:text-blue mb-2">
                Demo Dashboard
              </a>
              <a href="mailto:info@tanzinnovations.com" className="block text-sm text-muted hover:text-blue">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-line pt-4 text-xs text-muted text-center">
            © 2026 Tanz Innovations & Research · Demo values are illustrative and not validated operational results.
          </div>
        </div>
      </footer>
    </main>
  );
}
