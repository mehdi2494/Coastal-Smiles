import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, User, Mail, Phone, ArrowLeft, ArrowRight, CheckCircle2, Ticket, X, ShieldCheck } from 'lucide-react';
import { locations } from '../data';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledIssue?: string | null;
}

export default function BookingForm({ isOpen, onClose, prefilledIssue }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: 'college-road',
    service: prefilledIssue || 'implants',
    sedation: 'oral',
    date: '',
    timeSlot: '09:00 AM',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    notes: ''
  });

  const [isScanning, setIsScanning] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Handle prefill updates when modal opens
  useEffect(() => {
    if (prefilledIssue) {
      setFormData(prev => ({ ...prev, service: prefilledIssue }));
    }
  }, [prefilledIssue]);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Step 2 to Step 3: Trigger premium resource search animation
      setStep(3);
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        const randRef = 'CS-' + Math.floor(100000 + Math.random() * 900000);
        setBookingRef(randRef);
        setStep(4);
      }, 2500);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const resetForm = () => {
    setStep(1);
    setIsScanning(false);
    setBookingRef('');
    setFormData({
      location: 'college-road',
      service: 'implants',
      sedation: 'oral',
      date: '',
      timeSlot: '09:00 AM',
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      notes: ''
    });
    onClose();
  };

  const servicesList = [
    { value: 'Dental Implants (Single)', label: 'Dental Implants (Single)' },
    { value: 'Full Arch Restoration (All-on-4)', label: 'Full Arch Restoration (All-on-4)' },
    { value: 'Porcelain Veneers (Complete)', label: 'Porcelain Veneers (Complete)' },
    { value: 'Same-Day CEREC Crowns', label: 'Same-Day CEREC Crowns' },
    { value: 'Emergency Dentistry Consultation', label: 'Emergency Pain Triage' },
    { value: 'Family Dental Cleaning & Exam', label: 'Family Dentistry' }
  ];

  const timesList = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-md animate-fade-in text-left">
      <div 
        className="w-full max-w-2xl bg-cream border border-accent/30 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Absolute header bar */}
        <div className="flex items-center justify-between border-b border-accent/20 px-6 py-4 bg-primary text-white">
          <div className="flex items-center gap-2 text-gold">
            <Sparkles size={16} />
            <span className="font-display font-bold text-xs tracking-widest uppercase">Coastal Smiles Private Suite</span>
          </div>
          <button 
            onClick={resetForm}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {step < 4 && (
          <div className="bg-secondary/15 border-b border-accent/10 px-8 py-3 flex items-center justify-between text-xs font-display">
            <span className={step === 1 ? 'text-accent font-bold' : 'text-slate-400'}>01. Aesthetic Selectors</span>
            <span>→</span>
            <span className={step === 2 ? 'text-accent font-bold' : 'text-slate-400'}>02. Patient Profile</span>
            <span>→</span>
            <span className={step === 3 ? 'text-accent font-bold animate-pulse' : 'text-slate-400'}>03. Resource Allocation</span>
          </div>
        )}

        {/* Form Body Scroll Box */}
        <div className="p-8 overflow-y-auto max-h-[70vh]">
          
          {/* STEP 1: SELECT PROCEDURES AND DATE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#071827] font-bold mb-1">Aesthetic & Treatment Curations</h3>
                <p className="text-xs text-slate-500 font-sans">Select clinic parameters to pre-approve dental records with Dr. Colin Le.</p>
              </div>

              {/* Location Select (Custom buttons mimicking clean glass UI) */}
              <div className="space-y-3">
                <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Preferred Wilmington Center</label>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => handleInputChange('location', loc.id)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 ${
                        formData.location === loc.id
                          ? 'border-accent bg-[rgba(201,168,106,0.1)] shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs font-display font-bold text-secondary">{loc.name.split(' ')[0]} Road</span>
                      <span className="text-[10px] text-slate-500 font-sans mt-1 line-clamp-1">{loc.address}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection input mapping */}
              <div className="space-y-2">
                <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Dental Specialty Topic</label>
                <select
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className="w-full bg-white border border-slate-300 px-4 py-3 rounded-xl text-xs font-sans text-secondary focus:outline-none focus:border-accent"
                >
                  {servicesList.map((srv) => (
                    <option key={srv.value} value={srv.value}>{srv.label}</option>
                  ))}
                </select>
              </div>

              {/* Comfort Care selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Procedural Comfort Block</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'none', label: 'Standard Local' },
                    { value: 'oral', label: 'Conscious Sleep' },
                    { value: 'iv', label: 'Premium IV' }
                  ].map((sdt) => (
                    <button
                      key={sdt.value}
                      type="button"
                      onClick={() => handleInputChange('sedation', sdt.value)}
                      className={`p-3 rounded-lg border text-center text-xs font-display transition-all ${
                        formData.sedation === sdt.value
                          ? 'border-accent bg-[rgba(201,168,106,0.1)] text-[#071827] font-bold'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-500'
                      }`}
                    >
                      {sdt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Preferred Calendar Date</label>
                  <div className="relative">
                    <Calendar size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white border border-slate-300 pl-10 pr-4 py-3 rounded-xl text-xs font-sans focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Specialist Placement Window</label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {timesList.map((ts) => (
                      <button
                        key={ts}
                        type="button"
                        onClick={() => handleInputChange('timeSlot', ts)}
                        className={`py-2 rounded text-[10px] font-mono text-center border transition-all ${
                          formData.timeSlot === ts
                            ? 'border-accent bg-accent/20 text-secondary font-bold'
                            : 'border-slate-200 bg-white hover:border-slate-300 text-slate-500'
                        }`}
                      >
                        {ts.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: PATIENT DETAILS */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#071827] font-bold mb-1">Verify Patient Security Record</h3>
                <p className="text-xs text-slate-500 font-sans">We safeguard your confidential healthcare information to HIPAA standards.</p>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Full Human Name</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      className="w-full bg-white border border-slate-300 pl-10 pr-4 py-3 rounded-xl text-xs font-sans focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Contact Email</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        placeholder="e.g. eleanor@vance-realty.com"
                        value={formData.patientEmail}
                        onChange={(e) => handleInputChange('patientEmail', e.target.value)}
                        className="w-full bg-white border border-slate-300 pl-10 pr-4 py-3 rounded-xl text-xs font-sans focus:outline-none focus:border-accent"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Primary Phone Line</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="(910) 000-0000"
                        value={formData.patientPhone}
                        onChange={(e) => handleInputChange('patientPhone', e.target.value)}
                        className="w-full bg-white border border-slate-300 pl-10 pr-4 py-3 rounded-xl text-xs font-sans focus:outline-none focus:border-accent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-[10px] font-display font-medium uppercase tracking-widest text-[#957B43] block">Pre-diagnostic Clinical Notes (Optional)</label>
                  <textarea
                    placeholder="Describe any particular anxieties, missing crowns, or biological targets Dr. Le should inspect."
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full bg-white border border-slate-300 p-4 rounded-xl text-xs font-sans focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Quick insurance checklist banner */}
              <div className="p-4 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-between text-xs">
                <span className="text-secondary font-display font-bold">Bringing Dental Insurance?</span>
                <span className="text-slate-500 font-sans">We optimize BCBS, Delta, Metlife, Cigna in-office.</span>
              </div>
            </div>
          )}

          {/* STEP 3: HIGH TECH SCANNING ANIMATION */}
          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full border-2 border-accent border-t-white animate-spin flex items-center justify-center bg-primary text-gold">
                <Sparkles size={24} className="animate-pulse" />
              </div>
              <div className="space-y-2 max-w-sm">
                <h4 className="text-lg font-serif text-[#071827] font-bold">Scanning Wilmington Registry</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Allocating private surgical suites and verifying diagnostic bone scanner resources for your selected date at {locations.find(l => l.id === formData.location)?.name}...
                </p>
              </div>
              <div className="w-64 bg-slate-200 h-1 rounded-full overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 bg-accent animate-[cinematic-pulse_2.5s_infinite]" style={{ width: '40%' }} />
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS TICKET SCREEN */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="flex justify-center">
                <div className="p-4 bg-emerald-50 text-success-sage border border-emerald-200 rounded-full">
                  <CheckCircle2 size={40} className="stroke-[2.5]" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-secondary font-bold">Clinical Placement Allocated</h3>
                <p className="text-sm text-slate-500 font-sans">Your appointment request has been successfully registered with Dr. Colin Le’s chief concierge.</p>
              </div>

              {/* Elegant patient appointment pass / ticket */}
              <div className="max-w-md mx-auto bg-primary text-white rounded-3xl p-6 border border-accent/30 relative shadow-xl overflow-hidden">
                {/* Horizontal dividing cutouts for movie ticket aesthetics */}
                <div className="absolute top-1/2 left-[-10px] w-5 h-5 bg-cream rounded-full border-r border-accent/20 transform -translate-y-1/2" />
                <div className="absolute top-1/2 right-[-10px] w-5 h-5 bg-cream rounded-full border-l border-accent/20 transform -translate-y-1/2" />

                <div className="text-left space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5">
                      <Ticket size={14} className="text-accent" />
                      <span className="text-[10px] font-display tracking-widest text-slate-400 uppercase font-bold">Dental Placement Pass</span>
                    </div>
                    <span className="text-xs font-mono text-gold font-bold">{bookingRef}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-display uppercase tracking-wider block">Patient Name</span>
                      <span className="text-cream font-medium font-sans">{formData.patientName || 'Private Diagnostic Record'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-display uppercase tracking-wider block">Clinic Center</span>
                      <span className="text-cream font-medium font-sans">{formData.location === 'monkey-junction' ? 'Monkey Junction' : 'College Road'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-display uppercase tracking-wider block">Appointment Window</span>
                      <span className="text-cream font-sans font-medium">{formData.date || 'To Be Confirmed'} at {formData.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-display uppercase tracking-wider block">Aesthetic Case</span>
                      <span className="text-gold font-semibold font-display italic text-[11px] truncate block">{formData.service}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-accent" /> HIPAA Secured</span>
                    <span>Direct Concierge: {locations[0].phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-secondary text-white hover:bg-primary font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-all cursor-pointer"
                >
                  Return to Main Portal
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal controls footer */}
        {step < 3 && (
          <div className="border-t border-accent/15 px-8 py-4 bg-slate-50 flex items-center justify-between">
            {step === 1 ? (
              <span className="text-[10px] text-slate-400 font-sans">Suite Allocated under HIPAA Medical Privacy regulations.</span>
            ) : (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1 text-xs font-display font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} /> Back
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={step === 2 && (!formData.patientName || !formData.patientEmail || !formData.patientPhone)}
              className="px-6 py-3 bg-primary hover:bg-secondary text-white font-display font-bold text-xs tracking-widest uppercase rounded-lg transition-luxury flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>{step === 1 ? 'Configure Profile' : 'Lock Private Suite'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
