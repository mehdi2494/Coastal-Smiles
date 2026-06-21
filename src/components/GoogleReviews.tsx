import { useState } from 'react';
import { testimonials } from '../data';
import { Star, ShieldCheck, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export default function GoogleReviews() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'implant' | 'sedation' | 'crowns'>('all');
  const [scrollIndex, setScrollIndex] = useState(0);

  // Maps classifications to filter testimonials
  const filteredReviews = testimonials.filter((t) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'implant') return t.treatment.toLowerCase().includes('implant');
    if (activeCategory === 'sedation') return t.text.toLowerCase().includes('sedation') || t.text.toLowerCase().includes('sleep');
    if (activeCategory === 'crowns') return t.treatment.toLowerCase().includes('crown') || t.treatment.toLowerCase().includes('veneer');
    return true;
  });

  const handleNext = () => {
    if (scrollIndex < filteredReviews.length - 1) {
      setScrollIndex(prev => prev + 1);
    } else {
      setScrollIndex(0); // circular loop
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(prev => prev - 1);
    } else {
      setScrollIndex(filteredReviews.length - 1);
    }
  };

  const currentReview = filteredReviews[scrollIndex] || testimonials[0];

  return (
    <div className="section-container relative z-10 w-full" id="google-evaluations">
      
      {/* Testimonials Segment Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-accent text-sm font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Verified Assessments</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight font-bold">
            Words From Our <br />
            <span className="italic font-normal text-secondary">Restored Patients</span>
          </h2>
        </div>

        {/* Live Google Aggregate Rating Card */}
        <div className="p-5 bg-cream border border-accent/25 rounded-2xl flex items-center gap-4 text-left shadow-md">
          <div className="bg-primary hover:bg-secondary text-accent font-display h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg border border-accent/20">
            G
          </div>
          <div>
            <div className="flex items-center gap-0.5 text-gold mb-1">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <span className="text-xs font-mono font-bold text-slate-800 ml-1.5">4.8 / 5.0</span>
            </div>
            <p className="text-xs text-slate-500 font-sans">
              Based on <strong>528+ Verified Reviews</strong> on Google Wilmington.
            </p>
          </div>
        </div>
      </div>

      {/* Classifiers Toggles */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {[
          { key: 'all', label: 'All Reviews' },
          { key: 'implant', label: 'Dental Implants' },
          { key: 'sedation', label: 'Sedation Sleep Care' },
          { key: 'crowns', label: 'Esthetic Crowns & Veneers' }
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key as any);
              setScrollIndex(0);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-display tracking-wider uppercase transition-all duration-300 border ${
              activeCategory === cat.key
                ? 'bg-secondary text-accent border-secondary shadow-md font-bold'
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-350'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Review Display (Apple-style immersive block card) */}
      <div className="relative">
        <div className="bg-medical rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden text-left min-h-[320px] flex flex-col justify-between">
          
          {/* Ambient graphic icon */}
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 text-secondary pointer-events-none">
            <Quote size={200} className="stroke-1" />
          </div>

          {/* Testimonial Star list */}
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="flex text-gold">
                {Array.from({ length: currentReview.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1">
                <ShieldCheck size={12} className="text-[#4F8A6A]" /> Google Verified Patient
              </span>
            </div>

            {/* Testimonial Core Text */}
            <p className="text-lg md:text-xl font-serif text-slate-800 leading-relaxed italic max-w-4xl">
              "{currentReview.text}"
            </p>
          </div>

          {/* Reviewer Profile */}
          <div className="flex items-center justify-between border-t border-slate-300 pt-8 mt-10 relative z-10 flex-wrap gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-secondary border border-accent/20 flex items-center justify-center font-display font-medium text-accent uppercase tracking-widest shadow-inner">
                {currentReview.name.substring(0, 2)}
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-secondary block">{currentReview.name}</h4>
                <p className="text-[11px] text-slate-500 font-sans mt-0.5 block">{currentReview.location} • <em>{currentReview.treatment}</em></p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-[10px] text-slate-400 font-mono block uppercase">{currentReview.date}</span>
              <div className="flex items-center gap-1.5 border-l border-slate-300 pl-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:border-slate-300 text-slate-400 hover:text-slate-700 transition"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:border-slate-300 text-slate-400 hover:text-slate-700 transition"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
