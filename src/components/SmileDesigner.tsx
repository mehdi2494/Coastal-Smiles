import { useState } from 'react';
import { DollarSign, ShieldAlert, Sparkles, Sliders, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SmileDesigner({ onBookNow }: { onBookNow: (prefillIssue?: string) => void }) {
  const [activeConcern, setActiveConcern] = useState<'gap' | 'discolor' | 'full'>('gap');
  const [selectedSedation, setSelectedSedation] = useState<'laughing' | 'oral' | 'iv'>('oral');
  const [selectedMaterial, setSelectedMaterial] = useState<'porcelain' | 'zirconia'>('zirconia');
  
  // Financial calculators state
  const [downpayment, setDownpayment] = useState(500);
  const [termMonths, setTermMonths] = useState(24);

  // Budgets based on selected premium parameters
  const getBaseCost = () => {
    let price = 0;
    if (activeConcern === 'gap') price = 3800; // Single implant standard
    if (activeConcern === 'discolor') price = 11500; // Veneers series standard
    if (activeConcern === 'full') price = 19500; // Full arch premium

    // Material additions
    if (selectedMaterial === 'porcelain' && activeConcern === 'gap') price += 400; // hand-layered upcost
    if (selectedMaterial === 'porcelain' && activeConcern === 'discolor') price += 1200;

    // Sedation addition
    if (selectedSedation === 'iv') price += 800;
    if (selectedSedation === 'oral') price += 200;

    return price;
  };

  const totalCost = getBaseCost();
  const balanceToFinance = Math.max(0, totalCost - downpayment);
  
  // APR is 0% for terms 12-24, 4.9% for longer luxury terms
  const apr = termMonths <= 24 ? 0 : 4.9;
  const monthlyRate = (apr / 100) / 12;

  const calculateMonthlyPayment = () => {
    if (balanceToFinance <= 0) return 0;
    if (apr === 0) {
      return balanceToFinance / termMonths;
    }
    return (
      (balanceToFinance * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1)
    );
  };

  const monthlyPayment = calculateMonthlyPayment();

  const getAestheticGrade = () => {
    if (selectedMaterial === 'porcelain') return 'Premium Translucent (Artisan Custom Glass)';
    return 'Ultra-Durable Monolithic (Polished Crystalline Suture)';
  };

  return (
    <div className="section-container relative z-10 w-full" id="digital-smile-builder">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent text-sm font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Interactive Planner</span>
        <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight mb-6">
          Curate Your <br />
          <span className="italic font-normal text-gold">Custom Smile Profile</span>
        </h2>
        <p className="text-slate-300 text-lg font-sans">
          Estimate clinical timelines, structural materials, procedural comfort packages, and private financing options dynamically before scheduling with Dr. Colin Le.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Clinical Customization Board */}
        <div className="lg:col-span-7 bg-secondary/40 backdrop-blur-md rounded-3xl p-8 border border-accent/20 flex flex-col justify-between text-left">
          <div className="space-y-8">
            
            {/* Step 1: Select Dental Concern */}
            <div>
              <label className="text-[10px] font-display font-medium tracking-[0.2em] uppercase text-accent block mb-4">
                01. Identify Primary Aesthetic Target
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setActiveConcern('gap');
                    setDownpayment(500);
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                    activeConcern === 'gap'
                      ? 'border-accent bg-accent/10 shadow-lg'
                      : 'border-white/10 hover:border-white/20 bg-primary/20'
                  }`}
                >
                  <span className="text-cream font-serif font-semibold block text-base mb-1">Single Gap</span>
                  <span className="text-slate-400 text-xs font-sans leading-relaxed block">
                    Tooth replacement, titanium root anchor, computer-guided placement.
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveConcern('discolor');
                    setDownpayment(1500);
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                    activeConcern === 'discolor'
                      ? 'border-accent bg-accent/10 shadow-lg'
                      : 'border-white/10 hover:border-white/20 bg-primary/20'
                  }`}
                >
                  <span className="text-cream font-serif font-semibold block text-base mb-1">Porcelain Veneers</span>
                  <span className="text-slate-400 text-xs font-sans leading-relaxed block">
                    Complete smile restoration, cosmetic symmetry & optimal alignment.
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveConcern('full');
                    setDownpayment(2500);
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                    activeConcern === 'full'
                      ? 'border-accent bg-accent/10 shadow-lg'
                      : 'border-white/10 hover:border-white/20 bg-primary/20'
                  }`}
                >
                  <span className="text-cream font-serif font-semibold block text-base mb-1">Full Arch (All-on-4)</span>
                  <span className="text-slate-400 text-xs font-sans leading-relaxed block">
                    Comprehensive smile rehabilitation, durable custom zirconia arches.
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Select Restorative Material */}
            <div>
              <label className="text-[10px] font-display font-medium tracking-[0.2em] uppercase text-accent block mb-4">
                02. Crown Ceramic Chemistry
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedMaterial('zirconia')}
                  className={`p-4 rounded-xl border text-left flex items-start justify-between transition-all duration-300 ${
                    selectedMaterial === 'zirconia'
                      ? 'border-accent bg-accent/5'
                      : 'border-white/10 hover:border-white/25 bg-transparent'
                  }`}
                >
                  <div>
                    <span className="text-white font-display font-bold text-xs uppercase tracking-wider block">Milled Monolithic Zirconia</span>
                    <span className="text-slate-400 font-sans text-xs mt-1 block">Maximum physical resilience. Ideal for structural back biting zones.</span>
                  </div>
                  {selectedMaterial === 'zirconia' && <CheckCircle2 size={16} className="text-accent shrink-0 ml-2" />}
                </button>
                <button
                  onClick={() => setSelectedMaterial('porcelain')}
                  className={`p-4 rounded-xl border text-left flex items-start justify-between transition-all duration-300 ${
                    selectedMaterial === 'porcelain'
                      ? 'border-accent bg-accent/5'
                      : 'border-white/10 hover:border-white/25 bg-transparent'
                  }`}
                >
                  <div>
                    <span className="text-white font-display font-bold text-xs uppercase tracking-wider block">Hand-Layered Feldspathic Porcelain</span>
                    <span className="text-slate-400 font-sans text-xs mt-1 block">Ultimate realistic enamel glow. Refracts light beautifully for front-facing smiles.</span>
                  </div>
                  {selectedMaterial === 'porcelain' && <CheckCircle2 size={16} className="text-accent shrink-0 ml-2" />}
                </button>
              </div>
            </div>

            {/* Step 3: Pain Management Packaging */}
            <div>
              <label className="text-[10px] font-display font-medium tracking-[0.2em] uppercase text-accent block mb-4">
                03. Patient Comfort & Sedation Pathway
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {(['laughing', 'oral', 'iv'] as const).map((type) => {
                  const titles = { laughing: 'Nitrous Gas Calm', oral: 'Oral Conscious Sleep', iv: 'Hospital-Grade IV Sleep' };
                  const descs = { laughing: 'Gentle, euphoric gas. Clear headed in seconds.', oral: 'Advanced medical tablet. Deep, zero stress calm.', iv: 'Intravenous anesthesiologist-supervised pure sleep.' };
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedSedation(type)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedSedation === type
                          ? 'border-accent bg-accent/5'
                          : 'border-white/15 hover:border-white/25'
                      }`}
                    >
                      <span className="text-white font-display font-semibold text-xs block mb-1">{titles[type]}</span>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{descs[type]}</p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="mt-8 p-4 bg-primary/40 border border-white/5 rounded-2xl text-xs text-slate-400 font-sans flex items-start gap-3">
            <ShieldAlert size={16} className="text-accent shrink-0" />
            <p>
              Costs are estimations representing total laboratory fees, digital CBCT scanning, and surgical work. Your verified clinician treatment document will detail final dental procedures before any transaction occurs.
            </p>
          </div>
        </div>

        {/* Right Side: Luxury Financial Curation Panel */}
        <div className="lg:col-span-5 bg-primary/80 border border-accent/25 rounded-3xl p-8 flex flex-col justify-between text-left shadow-2xl relative overflow-hidden">
          {/* Subtle gold glowing orb in the top corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full filter blur-[50px] opacity-70 pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-display tracking-widest uppercase text-slate-400 font-semibold">Curation Summary</span>
              <span className="text-xs text-emerald-400 font-mono font-medium flex items-center gap-1">
                ★ Guaranteed CareCredit Partner
              </span>
            </div>

            {/* Calculations summaries */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-sans">Procedure Category:</span>
                <span className="text-white font-serif font-medium">
                  {activeConcern === 'gap' ? 'Single Tooth Replacement' : activeConcern === 'discolor' ? 'Micro-thin Ceramic Veneers' : 'Instant All-On-4 Arch Restoration'}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-sans">Restoration Glass:</span>
                <span className="text-white font-sans text-xs font-medium text-right max-w-[200px] line-clamp-1">
                  {getAestheticGrade()}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-sans">Estimated Clinical Path:</span>
                <span className="text-[#C9A86A] font-display font-medium uppercase tracking-[0.05em] text-xs">
                  {activeConcern === 'gap' ? '3D Computer Navigation, Guided' : activeConcern === 'discolor' ? 'Custom Digital Smile Design, Prep' : 'Hospital-superv. IV implant Placement'}
                </span>
              </div>
              <div className="flex justify-between items-end text-sm pt-4 border-t border-white/15">
                <span className="text-slate-300 font-display text-xs font-medium uppercase tracking-widest">Total Clinical Investment:</span>
                <span className="text-2xl font-serif font-bold text-gold">
                  ${totalCost.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Down-payment / Finance Sliders */}
            <div className="space-y-6 pt-6 border-t border-white/20">
              {/* Slider 1: Down-Payment */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-display">
                  <span className="text-slate-400 uppercase tracking-wide">Initial down deposit payment:</span>
                  <span className="text-accent font-mono font-bold">${downpayment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={downpayment}
                  onChange={(e) => setDownpayment(Number(e.target.value))}
                  className="w-full accent-accent h-[4px] bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-sans">
                  <span>$0 Downpayment Options</span>
                  <span>$5,000 Custom Limit</span>
                </div>
              </div>

              {/* Slider 2: Terms in Months */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-display">
                  <span className="text-slate-400 uppercase tracking-wide">Loan Repayment Window:</span>
                  <span className="text-accent font-mono font-bold">{termMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="12"
                  value={termMonths}
                  onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-full accent-accent h-[4px] bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-sans">
                  <span>12 Months (0% APR)</span>
                  <span>60 Months (4.9% APR)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment breakdown projection */}
          <div className="mt-8 pt-6 border-t border-[#C9A86A]/20 bg-accent/5 rounded-2xl p-6 border border-[#C9A86A]/10">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[10px] font-display uppercase tracking-widest text-slate-400 block mb-1">Your Low Monthly Payment</span>
                <span className="text-3xl font-serif font-bold text-white">${Math.round(monthlyPayment)}<span className="text-xs font-sans text-slate-400">/mo</span></span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-display uppercase tracking-widest text-[#4F8A6A] font-bold block bg-emerald-950/40 border border-[#4F8A6A]/30 px-2 py-0.5 rounded">
                  {apr === 0 ? '0% APR Interest Free!' : '4.9% Luxury APR'}
                </span>
                <span className="text-[10px] text-slate-500 font-sans block mt-1">Pre-approving zero impact report</span>
              </div>
            </div>

            <button
              onClick={() => {
                const prefillMap: Record<string, string> = {
                  gap: 'Dental Implants (Single)',
                  discolor: 'Porcelain Veneers (Complete)',
                  full: 'Full Arch Restoration (All-on-4)'
                };
                onBookNow(prefillMap[activeConcern]);
              }}
              className="w-full bg-accent text-primary font-display font-bold text-xs tracking-widest uppercase hover:bg-gold py-4 px-6 rounded-xl mt-6 transition-luxury flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Verify Credit & Book Priority Seat</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}
