import { useState, useEffect } from 'react';
import { 
  Phone, Sparkles, MapPin, Star, ShieldCheck, HeartPulse, 
  Cpu, Award, Calendar, Check, ChevronsRight, ArrowRight,
  Calculator, MessageSquare, Info, ShieldAlert, Instagram, 
  Facebook, Linkedin, Menu, X, ArrowUpRight, HelpCircle, Eye
} from 'lucide-react';

import BeforeAfterSlider from './components/BeforeAfterSlider';
import ImplantVisualizer from './components/ImplantVisualizer';
import SmileDesigner from './components/SmileDesigner';
import GoogleReviews from './components/GoogleReviews';
import BookingForm from './components/BookingForm';

import { services, locations, faqs } from './data';

export default function App() {
  // Booking Form State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<string | null>(null);

  // Exit Intent Modal State
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [hasTriggeredExit, setHasTriggeredExit] = useState(false);

  // Active States
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeMapId, setActiveMapId] = useState<'monkey-junction' | 'college-road'>('monkey-junction');
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  // Cinematic Hero Scenes State
  const [heroScene, setHeroScene] = useState(0);
  const heroScenes = [
    {
      title: "Restore Your Smile.",
      emphasis: "Reclaim Your Confidence.",
      desc: "Permanent, natural-looking dental implants planned and placed in-house under elite sedation care by Dr. Colin Le, DDS.",
      background: "bg-[#071827]",
      highlight: "Clinical Guided Surgery Suite"
    },
    {
      title: "Metal-Free Ceramics.",
      emphasis: "Designed Same-Day.",
      desc: " जर्मन technology mills a durable monolithic Zirconia crown while you wait. Completed in under 90 minutes. No temporary crowns.",
      background: "bg-[#0F2D46]",
      highlight: "CEREC® Direct-Mill Labs"
    },
    {
      title: "Bespoke Artistry.",
      emphasis: "Porcelain Veneers.",
      desc: "Micro-thin, hand-finished glass shells placed to curate the ultimate luxury facial symmetry. Map your smile digitally today.",
      background: "bg-[#1C2C3C]",
      highlight: "Digital Smile Makeover Studio"
    }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interval for Hero scenes
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroScene(prev => (prev + 1) % heroScenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Exit Intent tracking
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 40 && !hasTriggeredExit) {
        setIsExitIntentOpen(true);
        setHasTriggeredExit(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggeredExit]);

  const triggerBookingPrefill = (prefill: string) => {
    setBookingPrefill(prefill);
    setIsBookingOpen(true);
  };

  const selectedMapLoc = locations.find(l => l.id === activeMapId) || locations[0];

  return (
    <div className="bg-white text-[#111111] font-sans antialiased selection:bg-accent selection:text-primary">
      
      {/* INSURANCE & FINANCING STICKY TOP BANNER */}
      <div className="bg-primary text-slate-300 text-[11px] font-display tracking-widest uppercase py-2.5 px-4 text-center border-b border-accent/25 relative z-50 flex items-center justify-center gap-1.5 flex-wrap gap-y-1">
        <span className="text-accent font-bold">★ Coastal Smiles Advantage:</span>
        <span>Most Major PPO Insurances Optimized</span>
        <span className="text-white/30">•</span>
        <span>0% APR In-House Financing Plans Approved Instantly</span>
      </div>

      {/* TOP PREMIUM HEADER NAVIGATION */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'top-0 py-4 bg-primary/95 backdrop-blur-md border-b border-accent/20 shadow-lg' 
          : 'top-9 py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Clinical Brand Logo */}
          <a href="#homepage" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-accent/30 group-hover:border-accent transition-all bg-primary">
              <span className="text-accent font-serif font-bold text-xs tracking-widest">CS</span>
              <div className="absolute inset-0.5 rounded-full border border-dashed border-accent/10 group-hover:rotate-180 transition-transform duration-1000" />
            </div>
            <div>
              <span className="font-serif text-white tracking-wider block text-sm font-semibold group-hover:text-gold transition-colors">
                COASTAL SMILES
              </span>
              <span className="text-[9px] font-display text-slate-400 tracking-[0.2em] block uppercase">
                Family & Implant Dentistry
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-display tracking-widest uppercase font-medium text-slate-300">
            <a href="#services-section" className="hover:text-accent transition-colors">Services</a>
            <a href="#implant-technology-section" className="hover:text-accent transition-colors">Dental Implants</a>
            <a href="#before-after-section" className="hover:text-accent transition-colors">Case Studies</a>
            <a href="#digital-smile-builder" className="hover:text-accent transition-colors">Smile Planner</a>
            <a href="#doctor-editorial" className="hover:text-accent transition-colors">Dr. Colin Le</a>
            <a href="#locations-split" className="hover:text-accent transition-colors">Locations</a>
          </div>

          {/* Consultation triggers */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:9107968305" 
              className="text-slate-300 text-xs font-mono flex items-center gap-2 hover:text-white transition-colors border-r border-white/10 pr-4"
            >
              <Phone size={13} className="text-accent" /> (910) 796-8305
            </a>
            <button
              onClick={() => {
                setBookingPrefill(null);
                setIsBookingOpen(true);
              }}
              className="px-5 py-2.5 bg-accent hover:bg-gold text-primary font-display font-bold text-[10px] tracking-widest uppercase rounded transition-all cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <button
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {activeMobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE COLLAPSIBLE DRAWER */}
      {activeMobileMenu && (
        <div className="fixed inset-0 z-45 bg-primary pt-24 px-8 text-left space-y-6 flex flex-col justify-between pb-12">
          <div className="space-y-6 flex flex-col text-lg font-serif">
            <a 
              href="#services-section" 
              onClick={() => setActiveMobileMenu(false)}
              className="text-white hover:text-accent border-b border-white/5 pb-2"
            >
              Services Selection
            </a>
            <a 
              href="#implant-technology-section" 
              onClick={() => setActiveMobileMenu(false)}
              className="text-white hover:text-accent border-b border-white/5 pb-2"
            >
              Implant Biomechanics
            </a>
            <a 
              href="#before-after-section" 
              onClick={() => setActiveMobileMenu(false)}
              className="text-white hover:text-accent border-b border-white/5 pb-2"
            >
              Transformations
            </a>
            <a 
              href="#digital-smile-builder" 
              onClick={() => setActiveMobileMenu(false)}
              className="text-white hover:text-accent border-b border-white/5 pb-2"
            >
              Aesthetic Planner
            </a>
            <a 
              href="#doctor-editorial" 
              onClick={() => setActiveMobileMenu(false)}
              className="text-white hover:text-accent border-b border-white/5 pb-2"
            >
              Our Founder, Dr. Le
            </a>
            <a 
              href="#locations-split" 
              onClick={() => setActiveMobileMenu(false)}
              className="text-white hover:text-accent border-b border-white/5 pb-2"
            >
              Clinic Coordinates
            </a>
          </div>

          <div className="space-y-4">
            <a 
              href="tel:9107968305" 
              className="w-full py-4 border border-accent/20 rounded-xl text-center text-slate-300 font-mono text-sm block"
            >
              Call (910) 796-8305
            </a>
            <button
              onClick={() => {
                setActiveMobileMenu(false);
                setBookingPrefill(null);
                setIsBookingOpen(true);
              }}
              className="w-full bg-accent text-primary font-display font-bold text-xs tracking-widest uppercase py-4 rounded-xl block cursor-pointer"
            >
              Book Free CBCT Consultation
            </button>
          </div>
        </div>
      )}

      {/* FULL-SCREEN LUXURY HERO WITH SCENE INTERVALS */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="homepage">
        {/* Dynamic background canvas styling */}
        <div className={`absolute inset-0 transition-all duration-1000 ${heroScenes[heroScene].background} transform scale-105 glow-ambient`} />
        
        {/* Luxury medical geometry vectors for background atmosphere */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="120" y1="0" x2="120" y2="900" stroke="#C9A86A" strokeWidth="0.5" />
            <line x1="1320" y1="0" x2="1320" y2="900" stroke="#C9A86A" strokeWidth="0.5" />
            <circle cx="720" cy="450" r="300" stroke="#C9A86A" strokeWidth="0.5" />
            <circle cx="720" cy="450" r="500" stroke="#C9A86A" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        {/* Ambient top glowing lighting mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-transparent to-black/60 z-10" />

        {/* Hero content container */}
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center space-y-8 pt-12">
          
          {/* Dynamic Scene Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-display font-medium text-slate-300 tracking-[0.2em] uppercase">
              {heroScenes[heroScene].highlight}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-none">
            {heroScenes[heroScene].title} <br />
            <span className="italic font-normal text-gold block mt-2 sm:mt-4">
              {heroScenes[heroScene].emphasis}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed transition-opacity duration-500">
            {heroScenes[heroScene].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setBookingPrefill('Dental Implants (Single)');
                setIsBookingOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4.5 bg-accent hover:bg-gold text-primary font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-luxury shadow-lg shadow-accent/15 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Priority Consultation</span>
              <ArrowRight size={14} />
            </button>
            <a
              href="tel:9107968305"
              className="w-full sm:w-auto px-8 py-4.5 border border-white/20 hover:border-accent text-white font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-luxury flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              <Phone size={13} className="text-accent" /> Call Now: (910) 796-8305
            </a>
          </div>

          {/* Under-hero trust validation indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12 border-t border-white/10 text-xs">
            <div className="text-center">
              <span className="block text-gold font-bold text-base font-serif">★★★★★ 4.8</span>
              <span className="block text-slate-400 font-display uppercase tracking-widest text-[9px] mt-0.5">528 Google Reviews</span>
            </div>
            <div className="text-center">
              <span className="block text-white font-bold text-base font-serif">ADA & NCDS</span>
              <span className="block text-slate-400 font-display uppercase tracking-widest text-[9px] mt-0.5">Board Endorsed</span>
            </div>
            <div className="text-center">
              <span className="block text-white font-bold text-base font-serif">99% Placed</span>
              <span className="block text-slate-400 font-display uppercase tracking-widest text-[9px] mt-0.5">Completely In-House</span>
            </div>
            <div className="text-center">
              <span className="block text-white font-bold text-base font-serif">0% APR Financing</span>
              <span className="block text-slate-400 font-display uppercase tracking-widest text-[9px] mt-0.5">CareCredit & LendingClub</span>
            </div>
          </div>

        </div>

        {/* Custom luxury screen selector markers */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {heroScenes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroScene(idx)}
              className={`h-1.5 rounded transition-all duration-500 cursor-pointer ${
                heroScene === idx ? 'w-10 bg-accent' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* FLOATING TRUST BAR (Sticky luxury glass card scrolling trigger) */}
      <div className="sticky top-[78px] z-30 w-full px-6 pointer-events-none hidden lg:block h-0 overflow-visible">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="pointer-events-auto shadow-2xl glass-panel text-white p-3.5 px-6 rounded-2xl border border-accent/25 flex items-center gap-6 text-xs transform translate-y-4">
            <div className="flex items-center gap-1">
              <Star size={13} fill="#D8B26E" className="text-gold" />
              <span className="font-display font-medium text-slate-200"><strong>4.8 Stars</strong> (528 Reviews)</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-1">
              <HeartPulse size={13} className="text-accent" />
              <span className="font-display font-medium text-slate-200">99% Procedures In-House</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-1.5 text-accent font-display font-bold uppercase tracking-wider">
              <MapPin size={12} /> Double Wilmington Suites
            </div>
          </div>
        </div>
      </div>

      {/* WHY PATIENTS CHOOSE US: COGNITIVE BENTO GRID */}
      <section className="py-24 md:py-32 bg-cream text-[#071827] relative overflow-hidden" id="why-choose-us">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 text-left md:text-center">
            <span className="text-[#C9A86A] text-xs font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Distinction of Care</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight font-bold">
              Why Discerning Families <br />
              <span className="italic font-normal text-secondary">Choose Dr. Colin Le</span>
            </h2>
            <p className="text-slate-600 text-lg font-sans mt-4">
              We operate at the interface of cosmetic mastery, medical-grade biophysics, and Aman Resorts-style hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Absolute Luxury */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-2xl group-hover:scale-150 transition-transform" />
              <div className="p-3 bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071827] mb-3">Ultra-Luxury Experience</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Say goodbye to clinical sterility. Enjoy warm lavender towels, noise-canceling headsets, VIP private suites, and organic warm teas structured around your arrival.
              </p>
            </div>

            {/* Bento Card 2: 3D Tech */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-2xl group-hover:scale-150 transition-transform" />
              <div className="p-3 bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Cpu size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071827] mb-3">Advanced 3D Technology</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Employing modern computed CBCT bone imaging and optical intraoral scanning to model your implant placement mathematically before any incision is performed.
              </p>
            </div>

            {/* Bento Card 3: Inhouse Implants */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-2xl group-hover:scale-150 transition-transform" />
              <div className="p-3 bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071827] mb-3">Implant Placements In-House</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Never cross city centers between referral clinics. Dr. Colin Le conducts 100% of extraction, bone scaffolding, post-guided anchoring, and crown glazing entirely in-office.
              </p>
            </div>

            {/* Bento Card 4: Sedation Sleep */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-2xl group-hover:scale-150 transition-transform" />
              <div className="p-3 bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071827] mb-3">Premium Sedation Calm</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Perfect for extreme phobia profiles. Benefit from light conscious solutions, laughing block systems, or deep IV twilight sedation supervised directly by certified anesthesiologists.
              </p>
            </div>

            {/* Bento Card 5: Monolithic CEREC */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-2xl group-hover:scale-150 transition-transform" />
              <div className="p-3 bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Calculator size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071827] mb-3">German CEREC Crowns</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Ditch temporary crowns. Our in-house micro-milling machinery routes monolithic zirconia blocks to submicron margins while you relax, completing restorations in 90 minutes.
              </p>
            </div>

            {/* Bento Card 6: Double Centers */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-2xl group-hover:scale-150 transition-transform" />
              <div className="p-3 bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071827] mb-3">Two Wilmington Locations</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Convenient and highly accessible portals at Monkey Junction (Carolina Beach Rd) and College Road. Fully digitized workflow synchronization across both sites.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SELECTOR SECTION (Bento reveal grids) */}
      <section className="py-24 md:py-32 bg-[#071827] text-white relative overflow-hidden" id="services-section">
        {/* Glow orb */}
        <div className="absolute top-1/2 right-[-100px] w-96 h-96 bg-accent/10 rounded-full filter blur-[150px] opacity-60" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-2xl mb-20 text-left">
            <span className="text-accent text-xs font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Specialized Care List</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight font-bold">
              Bespoke Clinical Treatments <br />
              <span className="italic font-normal text-gold text-2xl md:text-3xl block mt-2">Engineered for Lifelong Performance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div 
                key={srv.id} 
                className="rounded-3xl glass-panel border border-[#C9A86A]/20 p-8 flex flex-col justify-between hover:border-accent transition-all duration-500 min-h-[400px] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <span className="font-mono text-xs text-gold/60">CS-{srv.id.substring(0,3).toUpperCase()}</span>
                    <span className="text-[10px] font-display text-slate-400 tracking-wider uppercase">{srv.duration}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white font-bold mb-3">{srv.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">{srv.shortDesc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="space-y-2 mb-6">
                    {srv.benefits.slice(0, 2).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check size={12} className="text-accent shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => triggerBookingPrefill(srv.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-display text-gold font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer group"
                  >
                    <span>Configure Treatment</span>
                    <ChevronsRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DENTAL IMPLANT SPEC SECTION (Interactive model integration) */}
      <section className="py-24 md:py-32 bg-white text-[#071827]">
        <div className="max-w-7xl mx-auto px-6">
          <ImplantVisualizer />
        </div>
      </section>

      {/* PROCESS STEPS HORIZONTAL TIMELINE */}
      <section className="py-24 bg-[#071827] text-white overflow-hidden relative border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-accent text-xs font-display tracking-[0.25em] uppercase block mb-3 font-semibold font-bold">The Patient Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight font-bold">
              The Path To Your <br />
              <span className="italic font-normal text-gold">Permanent Restoration</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Visual connector bar on desktop */}
            <div className="hidden md:block absolute top-[50px] x-4 left-6 right-6 h-[1px] bg-accent/20 z-0" />

            {[
              { step: '01', title: 'Consultation & 3D Imaging', desc: 'Surgical CBCT diagnostic mapping, high-resolution bone profiling, digital smile simulation, custom cost blueprint.' },
              { step: '02', title: 'Guided Implant Placement', desc: 'Sub-millimeter precise placing of the biological titanium root under comfort blocks or supervised sleep sedation.' },
              { step: '03', title: 'Cellular Fusion (Healing)', desc: 'Osseointegration: alveolar bone cellular grids grow secure ties into the screw threads over 60–90 days.' },
              { step: '04', title: 'Artisan Final Restoration', desc: 'Precision milling and custom glazing of the ceramic crown, bonded micro-securely for permanent bite symmetry.' }
            ].map((node, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left text-sm space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-accent font-display font-medium flex items-center justify-center border border-accent/30 shadow-lg text-sm shrink-0">
                  {node.step}
                </div>
                <h3 className="font-serif text-white text-lg font-bold">{node.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER SLIDER MODULE */}
      <section className="py-24 md:py-32 bg-[#071827] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* DYNAMIC INTERACTIVE SMILE DESIGNER & FINANCE CALCULATOR */}
      <section className="py-24 md:py-32 bg-[#0F2D46] relative border-t border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto px-6">
          <SmileDesigner onBookNow={triggerBookingPrefill} />
        </div>
      </section>

      {/* CLINIC TECH HIGHLIGHTS PANEL (German engineering focus) */}
      <section className="py-24 bg-cream text-secondary relative overflow-hidden" id="technology-advancements">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[#C9A86A] text-xs font-display tracking-[0.25em] uppercase block font-semibold">German Medical Engineering</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight font-bold">
                Clinical Precision, <br />
                <span className="italic font-normal text-secondary">Zero Compromise</span>
              </h2>
              <p className="text-slate-600 text-sm font-sans leading-relaxed">
                In modern implant prosthodontics, a faction of a millimeter specifies the difference between biological failure and a lifetime restoration. Dr. Colin Le binds an engineering technical framework into diagnostic clinical procedures.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <Check size={14} className="text-accent shrink-0 mt-1" />
                  <div>
                    <span className="font-display font-bold text-xs text-secondary block">CBCT 3D Radiography</span>
                    <span className="text-xs text-slate-500 font-sans block">Surgical planning modeling jaw densities, nerve tracks, and visual sinus cavities.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={14} className="text-accent shrink-0 mt-1" />
                  <div>
                    <span className="font-display font-bold text-xs text-secondary block">CEREC® Same-Day Labs</span>
                    <span className="text-xs text-slate-500 font-sans block">Dynamic optical scanners mapping individual crowns to margins as thin as 15 microns.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <span className="text-xs font-mono text-[#D8B26E] font-medium block mb-2">Diagnostic 01</span>
                <h4 className="text-xl font-serif text-[#071827] font-semibold mb-2">Cone Beam Tomography</h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">Our advanced CBCT scanners emit up to 90% less radiation while compiling microscopic volumetric slices of your skeleton.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <span className="text-xs font-mono text-[#D8B26E] font-medium block mb-2">Laboratories 02</span>
                <h4 className="text-xl font-serif text-[#071827] font-semibold mb-2">Zirconia Sintering Mill</h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">Solid diamond-milled monolithic restorations baked at high temperatures to eliminate potential ceramic cleavage lines.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DOCTOR CLINICAL BIOGRAPHY SECTION (Aesthetic magazine layout) */}
      <section className="py-24 md:py-32 bg-white text-secondary relative border-t border-slate-100" id="doctor-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Dr Portrait illustration Column using elegant vector and badges */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-3 scale-102" />
              <div className="bg-[#071827] text-white aspect-[3/4] rounded-3xl p-8 border border-accent/30 relative overflow-hidden flex flex-col justify-between shadow-2xl">
                
                {/* Visual vectors of Dr office */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="100" y2="80" stroke="white" strokeWidth="0.5" />
                    <line x1="100" y1="20" x2="0" y2="80" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-display text-slate-400 tracking-widest uppercase">Chief Clinical Officer</span>
                    <h3 className="text-3xl font-serif font-bold text-accent mt-1">Dr. Colin Le</h3>
                    <span className="text-xs text-slate-300 font-display">DDS, Indiana Univ. School of Dentistry</span>
                  </div>
                  <Award size={24} className="text-gold" />
                </div>

                <div className="space-y-4 text-xs text-slate-300 font-sans relative z-10">
                  <p className="italic leading-relaxed border-l-2 border-accent pl-4 font-serif">
                    "My architectural philosophy remains simple: mimic nature perfectly, place with uncompromising structural precision, and provide a comfortable, anxiety-free experience."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4 text-[11px]">
                    <div className="bg-white/5 border border-white/10 rounded p-2.5">
                      <span className="block text-gold font-bold">15+ Years</span>
                      <span className="block text-[9px] text-slate-400 font-display uppercase tracking-wider">Clinical Experience</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded p-2.5">
                      <span className="block text-gold font-bold">Thousands</span>
                      <span className="block text-[9px] text-slate-400 font-display uppercase tracking-wider">Smiles Restored</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  <span>ADA MEMBER #44198</span>
                  <span>NC DENTAL SOCIETY</span>
                </div>
              </div>
            </div>

            {/* Editorial Bio Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#C9A86A] text-xs font-display tracking-[0.25em] uppercase block font-semibold">Founding Practitioner</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight font-bold">
                The Conjunction Of <br />
                <span className="italic font-normal text-secondary">Science & Symmetrical Art</span>
              </h2>

              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                Dr. Colin Le, DDS, is highly regarded as one of Wilmington’s foremost experts in digital guided implantology and conscious oral sedation. A native educator with a strong background in engineering science, Dr. Le received his doctorate degree from the prestigious <strong>Indiana University School of Dentistry</strong>, graduating with the acclaimed **Academy of Operative Dentistry Award** for clinical excellence.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xs text-[#071827] uppercase tracking-wider">Accolades & Accreditations</h4>
                  <ul className="text-xs text-slate-500 font-sans space-y-1">
                    <li>• Academy of Operative Dentistry Elite Award</li>
                    <li>• American Dental Association (ADA) Active Member</li>
                    <li>• North Carolina Dental Society Accredited</li>
                    <li>• Dental Organization for Conscious Sedation Member</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xs text-[#071827] uppercase tracking-wider">Clinical Philosophy</h4>
                  <ul className="text-xs text-slate-500 font-sans space-y-1">
                    <li>• Guided Computerized Placement Targetry</li>
                    <li>• Zero-Pain Intra-Nerve Blocking</li>
                    <li>• Highly Translucent Monolithic Ceramic Chemistry</li>
                    <li>• Generous and Compassionate Patient Pacing</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setBookingPrefill('General Consultation with Dr. Colin Le');
                    setIsBookingOpen(true);
                  }}
                  className="px-6 py-3.5 bg-[#071827] hover:bg-secondary text-white font-display font-bold text-[11px] tracking-widest uppercase rounded-lg transition-luxury"
                >
                  Request Private Consultation with Dr. Le
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL SEGMENT */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <GoogleReviews />
        </div>
      </section>

      {/* SPLIT COORDS & LOCATIONS SUITES */}
      <section className="py-24 bg-white text-secondary relative overflow-hidden border-t border-slate-100" id="locations-split">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C9A86A] text-xs font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Wilmington Centers</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight font-bold">
              Two Modern Suites <br />
              <span className="italic font-normal text-secondary">In Wilmington, NC</span>
            </h2>
          </div>

          {/* Location details card panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Location selector sidebar (Left Column) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveMapId(loc.id as any)}
                    className={`w-full p-6 text-left rounded-2xl border transition-all duration-300 ${
                      activeMapId === loc.id
                        ? 'border-accent bg-[rgba(201,168,106,0.1)] ring-1 ring-accent'
                        : 'border-slate-200 bg-white hover:border-slate-350'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-bold text-[#071827]">{loc.name}</span>
                      <span className="text-[10px] font-mono text-gold block font-semibold uppercase">{loc.id === 'college-road' ? 'Center Point' : 'Coastal Zone'}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-sans">{loc.address}</p>
                    <p className="text-xs font-semibold text-secondary font-display mt-2">Call Office: {loc.phone}</p>
                  </button>
                ))}
              </div>

              {/* Working hours of active center */}
              <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200 text-left">
                <span className="text-[10px] font-display uppercase tracking-widest text-slate-500 block mb-3 font-bold">Specialist Office Hours</span>
                <div className="space-y-2 text-xs font-sans text-slate-600">
                  {Object.entries(selectedMapLoc.hours).map(([day, hrs], idx) => (
                    <div key={idx} className="flex justify-between border-b border-slate-200/50 pb-1">
                      <span>{day}:</span>
                      <span className="font-medium text-secondary">{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom high-fidelity Illustrated clinical map component (Right Column) */}
            <div className="lg:col-span-7 bg-[#071827] rounded-3xl p-8 border border-accent/20 relative shadow-xl overflow-hidden flex flex-col justify-between text-white min-h-[450px]">
              
              {/* Background abstract layout of Wilmington coastal streets (Vector design) */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Streets */}
                  <line x1="20" y1="0" x2="20" y2="300" stroke="white" strokeWidth="4" />
                  <line x1="180" y1="0" x2="180" y2="300" stroke="white" strokeWidth="6" />
                  <line x1="320" y1="0" x2="320" y2="300" stroke="white" strokeWidth="3" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="white" strokeWidth="5" />
                  <line x1="0" y1="220" x2="400" y2="220" stroke="white" strokeWidth="2" />
                  {/* Coastal ocean contours */}
                  <path d="M 360 0 Q 380 150 350 300" stroke="#C9A86A" strokeWidth="8" strokeDasharray="3 3"/>
                  <text x="375" y="150" fill="#C9A86A" transform="rotate(90, 375, 150)" className="text-[10px]" letterSpacing="5">ATLANTIC</text>
                </svg>
              </div>

              {/* Pin Indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-accent/30 rounded-full animate-ping" />
                  <div className="w-8 h-8 rounded-full bg-accent text-primary font-display font-medium border border-gold/40 flex items-center justify-center relative z-10">
                    <MapPin size={14} className="stroke-[2.5]" />
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-secondary/90 border border-accent/20 rounded-md backdrop-blur-md mt-2 shadow-lg">
                  <span className="text-[9px] font-display font-bold tracking-widest text-accent uppercase block">{selectedMapLoc.name.split(' ')[0]}</span>
                </div>
              </div>

              {/* Top bar metrics */}
              <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-4">
                <div className="flex items-center gap-1.5 text-gold">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-display uppercase tracking-widest">Wilmington Clinical Hub</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Coords: {selectedMapLoc.coordinates.lat}° N, {selectedMapLoc.coordinates.lng}° W</span>
              </div>

              {/* Bottom details box */}
              <div className="relative z-10 glass-panel border border-accent/30 p-5 rounded-2xl space-y-4">
                <div>
                  <h4 className="text-lg font-serif text-white font-bold">{selectedMapLoc.name}</h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{selectedMapLoc.address} • Suite details: {selectedMapLoc.suite}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-white/5 text-xs text-slate-300 font-sans">
                  <div>
                    <span className="text-gold font-display text-[9px] uppercase tracking-wider block mb-1">Key Specialties Available</span>
                    <span className="block">• Guided Implant Navigation Suite</span>
                    <span className="block">• Full-Arch Restorations</span>
                  </div>
                  <div>
                    <span className="text-gold font-display text-[9px] uppercase tracking-wider block mb-1">VIP Luxuries Seating</span>
                    <span className="block">• Conscious Sleep Anesthesia suite</span>
                    <span className="block">• Heated zero-gravity chair matrices</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 bg-accent text-primary font-display font-bold text-[10px] tracking-widest uppercase text-center py-3 rounded-lg hover:bg-gold transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Fetch Direct GPS Path</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={`tel:${selectedMapLoc.phone.replace(/[^0-9]/g, '')}`}
                    className="flex-1 border border-white/20 hover:border-accent text-white font-display font-bold text-[10px] tracking-widest uppercase text-center py-3 rounded-lg transition"
                  >
                    Direct Office Desk
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQs ACCORDION (Elegant transformations) */}
      <section className="py-24 md:py-32 bg-cream text-secondary relative overflow-hidden" id="clinic-faqs">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C9A86A] text-xs font-display tracking-[0.25em] uppercase block mb-3 font-semibold">Clear Explanations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#071827] leading-tight font-bold">
              Frequently Discussed <br />
              <span className="italic font-normal text-secondary">Clinical Topics</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm text-left"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 flex items-center justify-between font-serif text-lg font-bold text-[#071827] hover:text-accent transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className={`p-1.5 rounded-full bg-slate-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <HelpCircle size={16} className="text-slate-400" />
                    </div>
                  </button>

                  <div className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-slate-150 p-6 bg-slate-50' : 'max-h-0'
                  } overflow-hidden`}>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CHRONOLOGICAL LUXURY CTA */}
      <section className="py-32 bg-[#071827] text-white relative overflow-hidden border-t border-accent/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.15),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <span className="text-accent text-xs font-display tracking-[0.25em] uppercase block font-semibold">Priority Booking Allocation</span>
          
          <h2 className="text-4xl sm:text-6xl font-serif leading-tight">
            Your Premium New Smile <br />
            <span className="italic font-normal text-gold">Starts Here</span>
          </h2>

          <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Whether replacing a single decayed tooth or exploring a life-changing All-on-4 zirconia reconstruction, Dr. Colin Le and his elite Wilmington clinical concierges will curate a custom restorative pathway with pristine accuracy and full clinical sedation blocks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setBookingPrefill(null);
                setIsBookingOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4.5 bg-accent hover:bg-gold text-primary font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-luxury shadow-lg shadow-accent/20 cursor-pointer"
            >
              Secure Free CBCT Scan Consultation
            </button>
            <a
              href="tel:9107968305"
              className="w-full sm:w-auto px-8 py-4.5 border border-white/20 hover:border-accent text-white font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-luxury bg-white/5"
            >
              Call Specialist Suite: (910) 796-8305
            </a>
          </div>

          <div className="pt-8 text-xs text-slate-400 font-sans flex items-center justify-center gap-1">
            <ShieldCheck size={14} className="text-accent" /> Active HIPAA Medical Registry Safeguard Protects Your Submissions.
          </div>
        </div>
      </section>

      {/* LUXURY EDITORIAL MINIMAL FOOTER */}
      <footer className="bg-primary text-slate-400 text-xs py-16 border-t border-white/10 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16 mb-12">
          
          {/* Logo & Info column */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center bg-primary">
                <span className="text-accent font-serif font-bold text-[10px]">CS</span>
              </div>
              <span className="font-serif text-white tracking-widest font-semibold">COASTAL SMILES FAMILY DENTISTRY</span>
            </div>
            
            <p className="text-slate-400 font-sans leading-relaxed text-[11px]">
              Providing state-of-the-art guided dental implantology, monolithic CAD/CAM zirconia ceramics, and deep conscious anesthesiology blocks inside premium healthcare boutique suites in Wilmington, North Carolina.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="hover:text-accent transition"><Facebook size={16} /></a>
              <a href="#" className="hover:text-accent transition"><Instagram size={16} /></a>
              <a href="#" className="hover:text-accent transition"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Locations lists column */}
          <div className="md:col-span-5 space-y-4 text-xs font-sans">
            <h4 className="font-display font-bold text-white text-[10px] uppercase tracking-widest text-accent mb-2">Our Wilmington clinical coordinate hubs</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] text-slate-400 leading-relaxed">
              <div>
                <span className="block font-bold text-slate-200">Suite 1: Monkey Junction</span>
                <span className="block mt-1">6419 Carolina Beach Rd Ste E</span>
                <span className="block">Wilmington, NC 28412</span>
                <a href="tel:9107968305" className="block text-accent font-medium mt-1">Direct: (910) 796-8305</a>
              </div>
              <div>
                <span className="block font-bold text-slate-200">Suite 2: College Road</span>
                <span className="block mt-1">311 S College Rd Ste 120</span>
                <span className="block">Wilmington, NC 28403</span>
                <a href="tel:9107968305" className="block text-accent font-medium mt-1">Direct: (910) 796-8305</a>
              </div>
            </div>
          </div>

          {/* Quick links list */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-[10px] uppercase tracking-widest text-accent mb-2">Patient Resource Portals</h4>
            <div className="flex flex-col space-y-2 text-[11px] font-sans">
              <a href="#services-section" className="hover:text-white transition">Implants Specialty Select</a>
              <a href="#before-after-section" className="hover:text-white transition">Interactive Case Records</a>
              <a href="#digital-smile-builder" className="hover:text-white transition">Monthly Curation Estimators</a>
              <a href="#faq-section" className="hover:text-white transition">Financial CareCredit Guides</a>
              <a href="#doctor-editorial" className="hover:text-white transition">Dr Colin Le Accolades</a>
            </div>
          </div>

        </div>

        {/* Bottom fine-print */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 font-sans gap-4">
          <p>© 2026 Coastal Smiles Family Dentistry • Dr Colin Le, DDS. All Rights Reserved. Crafted to medical-grade trust specifications.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Accessibility Statement</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition">HIPAA Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FLOATING CONVERSION STICKY TRIGGER FOR SEAMLESS ACCESS */}
      <div className="fixed bottom-6 right-6 z-30 pointer-events-none">
        <button
          onClick={() => {
            setBookingPrefill(null);
            setIsBookingOpen(true);
          }}
          className="pointer-events-auto shadow-2xl bg-accent hover:bg-gold text-primary font-display font-bold text-xs tracking-widest uppercase h-12 px-6 rounded-full flex items-center gap-2 group transition-luxury scale-100 hover:scale-105 cursor-pointer"
        >
          <Calendar size={14} className="group-hover:rotate-12 transition-transform text-primary stroke-[2.5]" />
          <span>Book Consultation</span>
        </button>
      </div>

      {/* REGISTRY BOOKING DIALOG CONTAINER */}
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        prefilledIssue={bookingPrefill} 
      />

      {/* HIGHLY COMPASSIONATE EXIT INTENT SPECIAL BENEFIT OVERLAY */}
      {isExitIntentOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md text-left">
          <div className="max-w-md w-full bg-cream border border-accent rounded-3xl overflow-hidden p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setIsExitIntentOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-250 text-slate-400 hover:text-slate-700 transition"
            >
              <X size={16} />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-md">
              <Sparkles size={12} className="text-accent" />
              <span className="text-[9px] font-display font-bold text-[#A28854] uppercase tracking-widest">Exclusively For New Visitors</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif text-[#071827] font-bold leading-tight">
                Get Your Complimentary <br />
                <span className="italic font-normal text-gold">3D Diagnostic Package</span>
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Before choosing any treatment, precise diagnostics are necessary. Book your initial consultation today and receive a complete <strong>3D CBCT Bone Volume Scan (normally $450)</strong> at zero cost.
              </p>
            </div>

            <div className="p-4 bg-[#071827] text-white rounded-2xl flex items-center justify-between text-xs font-display">
              <div>
                <span className="block text-[8px] text-slate-400 uppercase tracking-widest">Initial Consultation</span>
                <span className="block font-serif text-gold font-bold text-sm">Included Free Today</span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] text-slate-400 uppercase tracking-widest">Digital 3D CBCT Scan</span>
                <span className="block font-mono text-emerald-400 font-bold text-sm">$0.00 <span className="line-through text-slate-500 font-sans text-xs">$450</span></span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsExitIntentOpen(false);
                  setBookingPrefill('Complimentary 3D CBCT Diagnostics Consultation');
                  setIsBookingOpen(true);
                }}
                className="flex-1 bg-accent hover:bg-gold text-primary font-display font-bold text-[10px] tracking-widest uppercase text-center py-3.5 rounded-xl transition cursor-pointer"
              >
                Claim Package & Book
              </button>
              <button
                onClick={() => setIsExitIntentOpen(false)}
                className="px-4 py-3.5 border border-slate-300 rounded-xl text-[10px] font-display uppercase text-slate-500 hover:text-slate-800 transition text-center"
              >
                Declining Offer
              </button>
            </div>

            <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-2 border-t border-slate-150">
              <ShieldCheck size={12} className="text-accent" /> Offer valid for direct online scheduling today.
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
