import { useState } from 'react';
import { ShieldCheck, Info, Sparkles, Activity, Layers } from 'lucide-react';

interface ImplantPart {
  id: string;
  name: string;
  description: string;
  materials: {
    name: string;
    description: string;
    durability: string;
    aestheticMetric: string;
    costImpact: string;
  }[];
}

export default function ImplantVisualizer() {
  const [selectedPart, setSelectedPart] = useState<'crown' | 'abutment' | 'screw' | 'bone'>('crown');
  const [selectedCrownMat, setSelectedCrownMat] = useState(0);
  const [selectedAbutmentMat, setSelectedAbutmentMat] = useState(0);

  const partsData: Record<string, ImplantPart> = {
    crown: {
      id: 'crown',
      name: 'Custom Prosthetic Crown',
      description: 'The visible portion of the restoration, milled from premium monolithic Zirconia or feldspathic porcelain, color-matched and textured to mirror surrounding teeth light refraction.',
      materials: [
        {
          name: 'Monolithic Translucent Zirconia',
          description: 'Diamond-strength crystalline ceramic. Virtually indestructible, highly biocompatible, with incredible natural light translucency.',
          durability: 'Lifetime Guarantee (100% Chip Resistant)',
          aestheticMetric: 'Premium High translucency (matches natural teeth)',
          costImpact: 'Standard Luxury Tier'
        },
        {
          name: 'Hand-Layered Feldspathic Porcelain',
          description: 'Artistically fused glass Ceramic. Unpaired individual light refraction and realistic tooth-depth translucency, individually glazed in laboratory.',
          durability: 'Extreme resilience (requires reasonable bite care)',
          aestheticMetric: 'Bespoke Masterpiece (Perfect cosmetic match)',
          costImpact: 'Collector Artisan Tier'
        }
      ]
    },
    abutment: {
      id: 'abutment',
      name: 'Precision Custom Abutment',
      description: 'The locking architectural connection key. It sits securely inside the implant screw shaft and projects through the gum tissue to establish the foundational seat for the ceramic crown.',
      materials: [
        {
          name: 'Gold-Nitride Titanium',
          description: 'A dark golden tint engineered to prevent standard grey metallic shadowing from displaying through thin luxury porcelain or delicate gumlines.',
          durability: 'Extreme load capacity, zero oxidation',
          aestheticMetric: 'Warm, realistic gingival tone support',
          costImpact: 'Highly recommended for anterior placements'
        },
        {
          name: 'Surgical Zirconia Connector',
          description: 'An metal-free, pure white connector designed for high-aesthetic anterior sectors, providing pristine reflection throughout the dental root neck.',
          durability: 'Excellent shear strength',
          aestheticMetric: 'Absolute zero metal glow',
          costImpact: 'Elite cosmetic option'
        }
      ]
    },
    screw: {
      id: 'screw',
      name: 'Bio-Compatible Osteophilic Screw',
      description: 'The physical root replacement. Utilizing medical-grade Grade 23 Eli Titanium, featuring biological thread channels coated in bioactive osteo-inductive materials that provoke osseointegration.',
      materials: [
        {
          name: 'Sandblasted, Acid-Etched Eli Titanium',
          description: 'Industry-best bone integration. Coated with bone mineral promoting factors to accelerate stable mechanical fusion.',
          durability: 'Engineered for over 100+ years of active loading',
          aestheticMetric: 'Invisible standard (seated deep within alveolar bone)',
          costImpact: 'Included in foundation pricing'
        }
      ]
    },
    bone: {
      id: 'bone',
      name: 'Alveolar Bone Mattress',
      description: 'The organic skeletal seat. Undergoes a 60-day biological cellular transformation during which jawbone osteocytes wrap directly into the micro-threads of the implant screw, locking it permanently.',
      materials: [
        {
          name: 'Regenerated Mineralized Bone Matrix',
          description: 'If existing bone is insufficient, Dr. Le performs micro bone grafting to reinforce density, delivering a bulletproof biological foundation.',
          durability: 'Vital organic structural integration',
          aestheticMetric: 'Creates lush gingival contours for natural tooth symmetry',
          costImpact: 'Evaluated individually via 3D CBCT imaging'
        }
      ]
    }
  };

  const getActiveMaterial = () => {
    const data = partsData[selectedPart];
    if (selectedPart === 'crown') return data.materials[selectedCrownMat];
    if (selectedPart === 'abutment') return data.materials[selectedAbutmentMat];
    return data.materials[0];
  };

  const activeMaterial = getActiveMaterial();

  return (
    <div className="section-container relative z-10 w-full" id="implant-technology-section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent text-sm font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Scientific Design</span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight mb-6">
          The Permanent Solution <br />
          <span className="italic font-normal text-secondary">For Missing Teeth</span>
        </h2>
        <p className="text-slate-600 text-lg font-sans">
          Implant dentistry is a highly sophisticated structural engineering process. Interact with our digital model to understand how Dr. Colin Le balances biomechanical physics and cellular biology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left half: Beautiful custom implant diagram */}
        <div className="lg:col-span-6 bg-cream rounded-3xl p-8 border border-accent/25 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.1),transparent_70%)]" />
          
          <div className="w-full max-w-[280px] relative z-10 h-auto">
            <svg viewBox="0 0 240 440" className="w-full h-auto drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Highlight background grids */}
              <defs>
                <pattern id="diagrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="20" x2="20" y2="0" stroke="rgba(201,168,106,0.06)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="240" height="440" fill="url(#diagrid)" rx="16" />

              {/* 1. CUSTOM PROSTHETIC CROWN (Top Component) */}
              <g 
                onClick={() => setSelectedPart('crown')}
                className="cursor-pointer group transition-all duration-300"
              >
                {/* Crown Glow (Conditional) */}
                <path
                  d="M120 20 Q170 20 185 64 L180 120 L60 120 L55 64 Q70 20 120 20 Z"
                  fill="none"
                  stroke={selectedPart === 'crown' ? '#C9A86A' : 'transparent'}
                  strokeWidth="4"
                  className="filter blur-[3px] transition-all duration-300"
                />
                <path
                  d="M120 20 Q170 20 185 64 L180 120 L60 120 L55 64 Q70 20 120 20 Z"
                  fill={selectedCrownMat === 0 ? "url(#zirconatone)" : "url(#porcelaintone)"}
                  stroke={selectedPart === 'crown' ? '#C9A86A' : 'rgba(15, 45, 70, 0.15)'}
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                {/* Crown reflection */}
                <path d="M75 45 Q120 32 155 45" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
                <path d="M85 32 Q120 24 145 32" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
                {/* Label Line */}
                <line x1="160" y1="70" x2="220" y2="70" stroke={selectedPart === 'crown' ? '#C9A86A' : '#94A3B8'} strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="160" cy="70" r="3.5" fill={selectedPart === 'crown' ? '#C9A86A' : '#94A3B8'} />
                <text x="210" y="55" fill={selectedPart === 'crown' ? '#C9A86A' : '#64748B'} className="text-[10px] font-display font-medium text-right" textAnchor="end">Part 01</text>
                <text x="210" y="68" fill={selectedPart === 'crown' ? '#071827' : '#64748B'} className="text-[11px] font-display font-bold text-right" textAnchor="end">Restoration Crown</text>
              </g>

              {/* 2. CUSTOM ABUTMENT (Middle Connector) */}
              <g 
                onClick={() => setSelectedPart('abutment')}
                className="cursor-pointer group transition-all duration-300"
              >
                <path
                  d="M65 120 L175 120 L160 152 L145 152 L140 180 L100 180 L95 152 L80 152 Z"
                  fill="none"
                  stroke={selectedPart === 'abutment' ? '#C9A86A' : 'transparent'}
                  strokeWidth="4"
                  className="filter blur-[3px] transition-all duration-300"
                />
                <path
                  d="M65 120 L175 120 L160 152 L145 152 L140 180 L100 180 L95 152 L80 152 Z"
                  fill={selectedAbutmentMat === 0 ? "url(#goldabutment)" : "url(#zirconiaabutment)"}
                  stroke={selectedPart === 'abutment' ? '#C9A86A' : 'rgba(15, 45, 70, 0.15)'}
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                {/* Horizontal interface line */}
                <line x1="85" y1="135" x2="155" y2="135" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                {/* Label Line */}
                <line x1="150" y1="150" x2="225" y2="150" stroke={selectedPart === 'abutment' ? '#C9A86A' : '#94A3B8'} strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="150" cy="150" r="3.5" fill={selectedPart === 'abutment' ? '#C9A86A' : '#94A3B8'} />
                <text x="210" y="135" fill={selectedPart === 'abutment' ? '#C9A86A' : '#64748B'} className="text-[10px] font-display font-medium text-right" textAnchor="end">Part 02</text>
                <text x="210" y="148" fill={selectedPart === 'abutment' ? '#071827' : '#64748B'} className="text-[11px] font-display font-bold text-right" textAnchor="end">Direct Abutment</text>
              </g>

              {/* 3. TITANIUM IMPLANT SCREW (Anchor) */}
              <g 
                onClick={() => setSelectedPart('screw')}
                className="cursor-pointer group transition-all duration-300"
              >
                <path
                  d="M100 180 L140 180 L135 210 L138 220 L133 235 L135 245 L130 260 L132 270 L128 290 L122 315 L118 315 L112 290 L108 270 L110 260 L105 245 L107 235 L102 220 L105 210 Z"
                  fill="none"
                  stroke={selectedPart === 'screw' ? '#C9A86A' : 'transparent'}
                  strokeWidth="4"
                  className="filter blur-[3px] transition-all duration-300"
                />
                {/* Main Screw Shaft */}
                <path
                  d="M100 180 L140 180 L135 210 L138 220 L133 235 L135 245 L130 260 L132 270 L128 290 L122 315 L118 315 L112 290 L108 270 L110 260 L105 245 L107 235 L102 220 L105 210 Z"
                  fill="url(#titaniumscrew)"
                  stroke={selectedPart === 'screw' ? '#C9A86A' : 'rgba(15, 45, 70, 0.15)'}
                  strokeWidth="1.5"
                  className="transition-all duration-500"
                />
                {/* Horizontal screw ridges */}
                <line x1="104" y1="200" x2="136" y2="200" stroke="#FFFFFF" opacity="0.35" strokeWidth="2" />
                <line x1="103" y1="225" x2="137" y2="225" stroke="#FFFFFF" opacity="0.35" strokeWidth="2" />
                <line x1="106" y1="250" x2="134" y2="250" stroke="#FFFFFF" opacity="0.35" strokeWidth="2" />
                <line x1="109" y1="275" x2="131" y2="275" stroke="#FFFFFF" opacity="0.35" strokeWidth="2" />
                <line x1="114" y1="298" x2="126" y2="298" stroke="#FFFFFF" opacity="0.35" strokeWidth="1.5" />
                
                {/* Label Line */}
                <line x1="88" y1="240" x2="20" y2="240" stroke={selectedPart === 'screw' ? '#C9A86A' : '#94A3B8'} strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="88" cy="240" r="3.5" fill={selectedPart === 'screw' ? '#C9A86A' : '#94A3B8'} />
                <text x="30" y="225" fill={selectedPart === 'screw' ? '#C9A86A' : '#64748B'} className="text-[10px] font-display font-medium text-left">Part 03</text>
                <text x="30" y="238" fill={selectedPart === 'screw' ? '#071827' : '#64748B'} className="text-[11px] font-display font-bold text-left">Titanium Post</text>
              </g>

              {/* 4. ALVEOLAR BONE MATRIX (Ambient bottom environment) */}
              <g 
                onClick={() => setSelectedPart('bone')}
                className="cursor-pointer group transition-all duration-300"
              >
                {/* Background bone shape */}
                <path
                  d="M10 200 L50 185 Q 120 180 190 185 L230 200 L230 420 L10 420 Z"
                  fill="url(#bonetone)"
                  stroke={selectedPart === 'bone' ? '#C9A86A' : 'transparent'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                  opacity="0.3"
                />
                
                {/* Bone osteocytic networks (Decorative lines representing high density) */}
                <path d="M22 280 Q 40 310 32 350 M200 290 Q220 340 195 385 M45 380 C 80 410, 150 410, 185 390" stroke="rgba(201,168,106,0.15)" strokeWidth="1" />

                <line x1="45" y1="340" x2="15" y2="340" stroke={selectedPart === 'bone' ? '#C9A86A' : '#94A3B8'} strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="45" cy="340" r="3.5" fill={selectedPart === 'bone' ? '#C9A86A' : '#94A3B8'} />
                <text x="50" y="325" fill={selectedPart === 'bone' ? '#C9A86A' : '#64748B'} className="text-[10px] font-display font-medium text-left">Bone Seat</text>
                <text x="50" y="338" fill={selectedPart === 'bone' ? '#071827' : '#64748B'} className="text-[11px] font-display font-bold text-left">Alveolar Bone</text>
              </g>

              {/* Gradient defs */}
              <defs>
                <linearGradient id="zirconatone" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#FAF7F2" />
                  <stop offset="100%" stopColor="#F1ECD8" />
                </linearGradient>
                <linearGradient id="porcelaintone" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#FAF7EB" />
                  <stop offset="85%" stopColor="#EFEBCE" />
                  <stop offset="100%" stopColor="#DCCEAB" />
                </linearGradient>
                <linearGradient id="goldabutment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EEDEA5" />
                  <stop offset="50%" stopColor="#D4BA79" />
                  <stop offset="100%" stopColor="#AE9351" />
                </linearGradient>
                <linearGradient id="zirconiaabutment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="80%" stopColor="#EDEDE8" />
                  <stop offset="100%" stopColor="#D9D9D4" />
                </linearGradient>
                <linearGradient id="titaniumscrew" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B3BCC4" />
                  <stop offset="40%" stopColor="#87919B" />
                  <stop offset="60%" stopColor="#6C7680" />
                  <stop offset="100%" stopColor="#515A63" />
                </linearGradient>
                <linearGradient id="bonetone" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EADBB2" />
                  <stop offset="50%" stopColor="#E2CA94" />
                  <stop offset="100%" stopColor="#BEAB83" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-[10px] font-display text-slate-400 mt-6 tracking-widest uppercase">Click diagram segments to inspect biomechanics</span>
        </div>

        {/* Right half: Dynamic Clinical control card */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-primary text-accent border border-accent/20 rounded font-display text-xs font-bold uppercase tracking-wider">
                Interactive Specifier
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Activity size={12} className="text-secondary animate-pulse" /> CBCT-Simulation Active
              </span>
            </div>

            {/* Part selection header */}
            <div>
              <div className="flex border-b border-slate-200">
                {(['crown', 'abutment', 'screw', 'bone'] as const).map((partKey) => (
                  <button
                    key={partKey}
                    onClick={() => setSelectedPart(partKey)}
                    className={`pb-3 pr-4 text-xs font-display font-semibold uppercase tracking-wider relative transition-all duration-300 ${
                      selectedPart === partKey ? 'text-accent' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {partKey === 'screw' ? 'Titanium Post' : partKey === 'bone' ? 'Jawbone Seat' : partKey}
                    {selectedPart === partKey && (
                      <span className="absolute bottom-[-1px] left-0 right-4 h-[2px] bg-accent" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Component descriptive content */}
            <div>
              <h3 className="text-2xl font-serif text-[#071827] mb-2 font-bold">{partsData[selectedPart].name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">{partsData[selectedPart].description}</p>
            </div>

            {/* Customiser / Toggles if available */}
            {selectedPart === 'crown' && (
              <div className="p-4 bg-medical border border-slate-200 rounded-2xl">
                <span className="text-[10px] font-display tracking-widest uppercase text-slate-500 font-bold block mb-3">Crown Material Curation</span>
                <div className="grid grid-cols-2 gap-3">
                  {partsData.crown.materials.map((mat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCrownMat(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedCrownMat === idx
                          ? 'border-accent bg-[rgba(201,168,106,0.15)] ring-1 ring-accent'
                          : 'border-slate-300 hover:border-slate-400 bg-white'
                      }`}
                    >
                      <span className="font-display font-bold text-xs text-secondary block">{mat.name.split(' ')[1] || mat.name}</span>
                      <span className="font-serif italic text-[11px] text-[#A28854]">{mat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedPart === 'abutment' && (
              <div className="p-4 bg-medical border border-slate-200 rounded-2xl">
                <span className="text-[10px] font-display tracking-widest uppercase text-slate-500 font-bold block mb-3">Abutment Material Selection</span>
                <div className="grid grid-cols-2 gap-3">
                  {partsData.abutment.materials.map((mat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAbutmentMat(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedAbutmentMat === idx
                          ? 'border-accent bg-[rgba(201,168,106,0.15)] ring-1 ring-accent'
                          : 'border-slate-300 hover:border-slate-400 bg-white'
                      }`}
                    >
                      <span className="font-display font-medium text-xs text-primary block">{mat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed structural analysis parameters */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg text-secondary border border-slate-200">
                  <Layers size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-[#071827] uppercase tracking-wider">Clinical Specifications</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">{activeMaterial.description}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg text-secondary border border-slate-200">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-[#071827] uppercase tracking-wider">Durability Guarantee</h4>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">{activeMaterial.durability}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg text-secondary border border-slate-200">
                  <Sparkles size={16} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-[#071827] uppercase tracking-wider">Aesthetic Refraction Coefficient</h4>
                  <p className="text-xs text-[#957B43] font-serif italic mt-0.5">{activeMaterial.aestheticMetric}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 mt-8">
            <Info size={20} className="text-[#4F8A6A] shrink-0" />
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Dr. Colin Le uses surgical 3D computer navigation based on individual <strong>CBCT bone mapping</strong>. This guarantees placement of implant roots with sub-millimeter precision, leading to high aesthetic outcomes and stable lifespan profiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
