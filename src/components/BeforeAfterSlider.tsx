import React, { useState, useRef, useEffect } from 'react';
import { caseStudies } from '../data';
import { ArrowLeftRight, Calendar, Bookmark, Star, Quote, ChevronRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = caseStudies[activeCaseIdx];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handlePointerUp);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handlePointerUp);
  };

  // Teeth vector renderers for high fidelity visual feedback without reliance on broken links
  const renderTeethSVG = (isAfter: boolean, id: string) => {
    if (id === 'case-01') {
      // Full Arch All-on-4
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Gradient */}
          <rect width="400" height="240" fill={isAfter ? "#0F2D46" : "#071827"} className="transition-all duration-500" />
          <path d="M50 120 C 120 70, 280 70, 350 120" stroke={isAfter ? "rgba(201, 168, 106, 0.2)" : "rgba(216, 178, 110, 0.05)"} strokeWidth="8" strokeDasharray="5 5" />
          
          {/* Gum Line */}
          <path d="M60 110 Q 120 75 200 75 T 340 110" fill="none" stroke={isAfter ? "#EAA9A9" : "#C47D83"} strokeWidth="18" strokeLinecap="round" />
          
          {/* Teeth Group */}
          <g>
            {/* Crown teeth arcs */}
            {Array.from({ length: 8 }).map((_, i) => {
              const xPos = 85 + i * 32;
              const yOffset = -Math.pow(i - 3.5, 2) * 1.8 + 10;
              const toothHeight = 32 + (i === 3 || i === 4 ? 6 : 0);
              
              if (!isAfter && (i === 1 || i === 5 || i === 6)) {
                // Decay/Gap in before picture
                return (
                  <g key={i} className="opacity-70">
                    <rect x={xPos + 4} y={110 - yOffset} width="22" height="12" rx="3" fill="#807A65" stroke="#4F493B" strokeWidth="1" />
                    <circle cx={xPos + 10} cy={116 - yOffset} r="2" fill="#3D382A" />
                  </g>
                );
              }
              
              return (
                <path
                  key={i}
                  d={`M${xPos} ${100 - yOffset} Q${xPos+13} ${92 - yOffset} ${xPos+26} ${100 - yOffset} L${xPos+24} ${100 + toothHeight - yOffset} Q${xPos+13} ${104 + toothHeight - yOffset} ${xPos+2} ${100 + toothHeight - yOffset} Z`}
                  fill={isAfter ? "url(#afterTeethGlow)" : "url(#beforeTeethStain)"}
                  stroke={isAfter ? "rgba(201,168,106,0.3)" : "#A69985"}
                  strokeWidth={isAfter ? "1.5" : "1"}
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* All on 4 titanium indicators in AFTER section */}
          {isAfter && (
            <g opacity="0.8">
              <circle cx="101" cy="70" r="4" fill="#C9A86A" />
              <line x1="101" y1="70" x2="101" y2="88" stroke="#C9A86A" strokeWidth="2" />
              <circle cx="165" cy="62" r="4" fill="#C9A86A" />
              <line x1="165" y1="62" x2="165" y2="80" stroke="#C9A86A" strokeWidth="2" />
              <circle cx="235" cy="62" r="4" fill="#C9A86A" />
              <line x1="235" y1="62" x2="235" y2="80" stroke="#C9A86A" strokeWidth="2" />
              <circle cx="299" cy="70" r="4" fill="#C9A86A" />
              <line x1="299" y1="70" x2="299" y2="88" stroke="#C9A86A" strokeWidth="2" />
            </g>
          )}

          {/* Gradients */}
          <defs>
            <linearGradient id="beforeTeethStain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DFD8C0" />
              <stop offset="50%" stopColor="#E2DAA5" />
              <stop offset="100%" stopColor="#C4B889" />
            </linearGradient>
            <linearGradient id="afterTeethGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#F9F8F3" />
              <stop offset="85%" stopColor="#F4EFE0" />
              <stop offset="100%" stopColor="#EADBBD" />
            </linearGradient>
          </defs>
        </svg>
      );
    } else if (id === 'case-02') {
      // Single Front Tooth Restoration
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill={isAfter ? "#0F2D46" : "#071827"} className="transition-all duration-500" />
          
          <g transform="translate(40, 20)">
            {/* Gums */}
            <path d="M40 100 Q 160 65 280 100" fill="none" stroke={isAfter ? "#EAA9A9" : "#C47D83"} strokeWidth="20" strokeLinecap="round" />
            
            {/* Surrounding healthy teeth (Left & Right) */}
            <path d="M60 90 Q75 80 90 90 L88 135 Q75 140 62 135 Z" fill="#F4EFE0" stroke="#DDD2B8" strokeWidth="1" />
            <path d="M92 90 Q110 80 128 90 L124 140 Q110 144 96 140 Z" fill="#F4EFE0" stroke="#DDD2B8" strokeWidth="1" />
            
            {/* Core Target Tooth #8 (Incissor) */}
            {!isAfter ? (
              // Broken tooth
              <path d="M130 90 Q148 78 166 90 L160 115 L144 105 L132 110 Z" fill="#B1A893" stroke="#877F6C" strokeWidth="1" />
            ) : (
              // Impeccable custom hand-layered zirconia crown
              <g>
                <path d="M130 90 Q148 80 166 90 L163 145 Q148 148 133 145 Z" fill="url(#zirconatranslucent)" stroke="#C9A86A" strokeWidth="1.5" />
                {/* Custom light reflection line for high-end look */}
                <path d="M136 100 L138 132" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
              </g>
            )}

            {/* Adjacent Tooth #9 (Other Central Incissor) */}
            <path d="M168 90 Q186 80 204 90 L201 145 Q186 148 171 145 Z" fill="#F4EFE0" stroke="#DDD2B8" strokeWidth="1" />
            <path d="M206 90 Q224 80 242 90 L238 140 Q224 144 210 140 Z" fill="#F4EFE0" stroke="#DDD2B8" strokeWidth="1" />
            <path d="M244 90 Q259 80 274 90 L270 135 Q259 140 246 135 Z" fill="#F4EFE0" stroke="#DDD2B8" strokeWidth="1" />
          </g>

          <defs>
            <linearGradient id="zirconatranslucent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FAFAF8" />
              <stop offset="75%" stopColor="#EDE6D1" />
              <stop offset="100%" stopColor="#DFD2AA" />
            </linearGradient>
          </defs>
        </svg>
      );
    } else {
      // Veneers Whitening & mid-line spacing
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill={isAfter ? "#0F2D46" : "#071827"} className="transition-all duration-500" />
          
          <g transform="translate(20, 20)">
            <path d="M40 100 Q 180 65 320 100" fill="none" stroke={isAfter ? "#EAA9A9" : "#C47D83"} strokeWidth="18" />
            
            {Array.from({ length: 6 }).map((_, i) => {
              const xPos = 65 + i * 44;
              const yOffset = -Math.pow(i - 2.5, 2) * 2.5 + 8;
              
              if (!isAfter) {
                // Crooked, slightly stained pre-veneer teeth with visible spaces
                return (
                  <path
                    key={i}
                    d={`M${xPos + (i === 2 ? -2 : i === 3 ? 4 : 0)} ${90 - yOffset} Q${xPos+20} ${80 - yOffset} ${xPos+38} ${90 - yOffset} L${xPos+35} ${128 - yOffset} Q${xPos+20} ${132 - yOffset} ${xPos+3} ${128 - yOffset} Z`}
                    fill="#DDD2AE"
                    stroke="#A39675"
                    strokeWidth="1"
                    transform={`rotate(${i === 1 ? '1.5' : i === 4 ? '-2' : '0'}, ${xPos+20}, 110)`}
                  />
                );
              }

              // After: Impeccable symmetrical white ceramic veneers, zero spacing gap
              return (
                <path
                  key={i}
                  d={`M${xPos} ${90 - yOffset} Q${xPos+21} ${80 - yOffset} ${xPos+42} ${90 - yOffset} L${xPos+40} ${136 - yOffset} Q${xPos+21} ${140 - yOffset} ${xPos+2} ${136 - yOffset} Z`}
                  fill="url(#veneerGlow)"
                  stroke="#D8B26E"
                  strokeWidth="1.2"
                />
              );
            })}
          </g>

          <defs>
            <linearGradient id="veneerGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FAF9F4" />
              <stop offset="85%" stopColor="#F5ECE0" />
              <stop offset="100%" stopColor="#EADBBD" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  };

  return (
    <div className="section-container relative z-10 w-full" id="before-after-section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent text-sm font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Clinician Case Studies</span>
        <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight mb-6">
          Transformations That <br />
          <span className="italic font-normal text-gold">Change Lives</span>
        </h2>
        <p className="text-slate-300 text-lg font-sans">
          Meticulous structural engineering meets bespoke visual symmetry. Swipe to inspect the detailed clinical outcomes achieved in-house by Dr. Colin Le.
        </p>
      </div>

      {/* Case Navigator buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {caseStudies.map((cs, idx) => (
          <button
            key={cs.id}
            onClick={() => {
              setActiveCaseIdx(idx);
              setSliderPosition(50);
            }}
            className={`px-6 py-3 rounded-full text-xs font-display tracking-widest uppercase transition-all duration-300 border ${
              activeCaseIdx === idx
                ? 'bg-accent text-primary border-accent shadow-lg shadow-accent/20 font-bold'
                : 'bg-transparent text-slate-300 border-white/10 hover:border-accent/40'
            }`}
          >
            {cs.title}
          </button>
        ))}
      </div>

      {/* Main Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Visual Interactive Slider */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            ref={containerRef}
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border border-accent/20 cursor-ew-resize select-none bg-primary"
            onPointerDown={handlePointerDown}
          >
            {/* BEFORE Render (Background layer) */}
            <div className="absolute inset-0 w-full h-full">
              {renderTeethSVG(false, activeCase.id)}
              {/* Overlay label BEFORE */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-primary/80 backdrop-blur-md rounded border border-white/10 select-none">
                <span className="text-xs font-display font-medium text-slate-400 uppercase tracking-widest">Pre-Treatment State</span>
              </div>
            </div>

            {/* AFTER Render (Sliding overlay layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Ensure child dimensions match container for accurate visual clipping */}
              <div
                className="absolute inset-0"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%', height: '100%' }}
              >
                {renderTeethSVG(true, activeCase.id)}
                {/* Overlay label AFTER */}
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-secondary/80 backdrop-blur-md rounded border border-accent/30 select-none">
                  <span className="text-xs font-display font-bold text-accent uppercase tracking-widest">Bespoke Restructured</span>
                </div>
              </div>
            </div>

            {/* Slider bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-accent/80 cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Glowing vertical rule */}
              <div className="absolute inset-0 bg-gold/50 shadow-[0_0_15px_rgba(216,178,110,0.8)] filter blur-[1px]" />
              <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center shadow-2xl border border-gold/40 hover:scale-110 transition-transform duration-300 pointer-events-auto shrink-0 z-20">
                <ArrowLeftRight size={14} className="stroke-[2.5]" />
              </div>
            </div>
          </div>
          
          <p className="text-xs font-display tracking-widest text-[#C9A86A]/60 mt-4 uppercase flex items-center gap-2">
            <span>← Slide left/right to compare details →</span>
          </p>
        </div>

        {/* Right column: Dynamic Editorial Case Data Card */}
        <div className="lg:col-span-5 text-left">
          <div className="glass-panel rounded-3xl p-8 border border-accent/25 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Quote size={120} className="text-accent" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-[10px] font-display font-bold uppercase tracking-widest">
                {activeCase.procedure}
              </div>
            </div>

            <h3 className="text-2xl font-serif text-cream mb-4 font-semibold">{activeCase.title} Summary</h3>

            {/* Testimonial Block */}
            <blockquote className="border-l-2 border-accent pl-5 my-6">
              <p className="text-slate-200 italic font-serif leading-relaxed text-base">
                {activeCase.patientStory}
              </p>
              <footer className="mt-3 text-xs font-display text-accent tracking-widest uppercase font-medium">
                — {activeCase.patientName}, Age {activeCase.patientAge}
              </footer>
            </blockquote>

            {/* Clinical comparison details grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/10 text-xs">
              <div>
                <span className="text-[#C9A86A] font-display uppercase tracking-wider block mb-1 font-bold">Diagnostic Findings</span>
                <p className="text-slate-400 font-sans leading-relaxed">
                  {activeCase.beforeNotes}
                </p>
              </div>
              <div>
                <span className="text-emerald-400 font-display uppercase tracking-wider block mb-1 font-bold">Clinical Resolution</span>
                <p className="text-slate-400 font-sans leading-relaxed">
                  {activeCase.afterNotes}
                </p>
              </div>
            </div>

            {/* Footer markers */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-accent" />
                <span className="font-display tracking-wide uppercase">Treatment duration: <strong>{activeCase.timeline}</strong></span>
              </div>
              <div className="flex items-center gap-1 text-gold">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <span className="text-slate-300 ml-1 font-display">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
