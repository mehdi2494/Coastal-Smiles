import { Service, CaseStudy, Testimonial, FAQItem, LocationDetail } from './types';

export const services: Service[] = [
  {
    id: 'implants',
    category: 'implant',
    title: 'Dental Implants',
    shortDesc: 'Permanent, medical-grade tooth replacement restoring 100% bite strength and natural dental aesthetics.',
    longDesc: 'Dental implants represent the pinnacle of modern teeth replacement. Engineered from bio-compatible titanium and topped with custom-milled zirconia restorations, our implants fuse directly with your natural jawbone to prevent bone loss, reclaim absolute chewing power, and deliver a pristine, natural smile.',
    benefits: [
      'Stops jawbone shrinkage and preserves natural facial structure',
      'No slipping, moving, or adhesives - functions exactly like a natural tooth',
      'Engineered to last a lifetime with Dr. Colin Le’s guided 3D placement',
      'Protects adjacent teeth from shifting or drilling requirements'
    ],
    duration: '1 - 2 hours per placement',
    image: 'dentistry_implants'
  },
  {
    id: 'same-day-crowns',
    category: 'cosmetic',
    title: 'Same-Day Crowns',
    shortDesc: 'Prismatic, metal-free ceramic crowns designed, milled, and bonded in a single luxury visit.',
    longDesc: 'Utilizing our advanced German-engineered CEREC® technology, we eliminate temporary crowns and double appointments. Dr. Le takes an ultra-accurate 3D digital scan of your tooth, designs your crown with microscopic precision, and mills a durable monolithic block of custom-matched ceramic while you relax, bonding it permanently the same day.',
    benefits: [
      'No messy, bad-tasting physical impressions or molds',
      'No awkward temporary crowns that break or fall out',
      'Completed in a single, comfortable 90-minute visit',
      '100% metal-free, premium bio-compatible ceramic material'
    ],
    duration: '90 minutes total',
    image: 'cerec_crowns'
  },
  {
    id: 'cosmetic',
    category: 'cosmetic',
    title: 'Cosmetic Dentistry',
    shortDesc: 'Sophisticated smile analysis and curation to balance symmetry, shade, and overall smile proportions.',
    longDesc: 'Every smile is a personal signature. Dr. Colin Le combines a meticulous engineering background with cosmetic artistry to perform comprehensive Smile Designs, mapping your facial midline, gum profile, and tooth proportions to craft a brighter, highly harmonious, and confidence-igniting aesthetic.',
    benefits: [
      'Customized shading and micro-texture to blend beautifully with your skin tone',
      'Digital Smile Simulation prior to starting any treatment',
      'Corrects crowding, spacing, rotations, and worn tooth edges',
      'Utilizes non-invasive preparative techniques to preserve tooth structure'
    ],
    duration: 'Varies based on design',
    image: 'cosmetic_smile'
  },
  {
    id: 'veneers',
    category: 'cosmetic',
    title: 'Porcelain Veneers',
    shortDesc: 'Micro-thin, glass-ceramic shells hand-layered for the ultimate Hollywood or premium natural smile.',
    longDesc: 'For patients seeking total visual perfection, our hand-crafted porcelain veneers are microscopically bonded to the front of your teeth. These premium, stain-resistant porcelain restorations offer unparalleled translucency, correcting severe discoloration, tooth gaps, chips, and alignment anomalies permanently.',
    benefits: [
      'Unmatched light translucency and realistic tooth depth',
      'Highly resistant to coffee, tea, and red wine staining',
      'Conservative preparation preserves maximum natural enamel',
      'A custom-sculpted smile designed to match your speech and movement'
    ],
    duration: '2 appointments over 10 days',
    image: 'porcelain_veneers'
  },
  {
    id: 'six-month-smiles',
    category: 'cosmetic',
    title: 'Six Month Smiles®',
    shortDesc: 'Discreet, tooth-colored clear braces focused on rapidly aligning your primary visual smile.',
    longDesc: 'If you want straight teeth before your next life event, Six Month Smiles is an elegant alternative to long-term traditional orthodontic treatment. Using clear brackets and ultra-fine tooth-colored wires, the system concentrates specifically on the front teeth that show when you smile, gently guiding them to perfect alignment.',
    benefits: [
      'Pragmatic alignment completed in an average of just 6 months',
      'Transparent brackets and wires offer superior aesthetic discretion',
      'Lower force is safer and far more comfortable than full iron braces',
      'Significantly less expensive than comprehensive multi-year alignments'
    ],
    duration: '4 to 9 months treatment',
    image: 'six_month_smiles'
  },
  {
    id: 'family',
    category: 'general',
    title: 'Family Dentistry',
    shortDesc: 'Elite preventive, pediatric, and adult dental care crafted for multi-generational Wilmington families.',
    longDesc: 'We provide exceptionally gentle, highly communicative clinical environment designed for your entire household. From pediatric first visits and deep medical cleanings to advanced sealant applications and age-appropriate bone monitoring, Dr. Le’s approach ensures positive, stress-free clinical care.',
    benefits: [
      'Generous scheduling to keep your family’s appointments on the same day',
      'Highly reassuring pediatric pacing that reduces patient anxiety for life',
      'State-of-the-art diagnostic screening for early cavity catching',
      'Custom mouthguards, biological sealants, and holistic oral health mapping'
    ],
    duration: '45 - 60 minutes cleaning',
    image: 'family_care'
  },
  {
    id: 'emergency',
    category: 'emergency',
    title: 'Emergency Dentistry',
    shortDesc: 'Same-day emergency pain relief, tooth re-implantation, and priority physical triage.',
    longDesc: 'Dental emergencies require immediate expert relief. Whether you have suffered a traumatic blow, a broken tooth, a lost crown, or an agonizing toothache, our office keeps dedicated emergency slots open daily. Dr. Colin Le provides swift visual diagnostics, instantaneous localized pain-blocking, and immediate surgical repair.',
    benefits: [
      'Priority scheduling: Call for guaranteed same-day assessment',
      'Emergency root canals, extractions, and trauma splinting in-house',
      'Advanced sedation available to eliminate distress immediately',
      'Direct, direct-access lines for severe swelling or post-operative questions'
    ],
    duration: 'Immediate priority',
    image: 'emergency_dentistry'
  },
  {
    id: 'sedation',
    category: 'general',
    title: 'Sedation Dentistry',
    shortDesc: 'Absolute calm and peaceful sleep. Overcome deep anxiety with tailored medical sedation.',
    longDesc: 'High dental anxiety is a medical reality, and our clinic treats it with extreme dignity. We offer standard laughing gas (Nitrous Oxide), oral conscious sedation, and in-depth intravenous (IV) sedation. Sleep peacefully through complex implant placements or multi-tooth corrections, waking up with minimal memory of the procedure.',
    benefits: [
      'Completely eliminates dental phobia, gag reflex, and procedural stress',
      'Ideal for combining multiple treatments (implants + crowns) into one long session',
      'Monitored using hospital-grade vital trackers for safety',
      'Wake up feeling absolutely relaxed with fully blocked nerve pathways'
    ],
    duration: 'Active throughout procedure',
    image: 'sedation_care'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    title: 'Full Arch Restoration',
    procedure: 'All-on-4 Implant Restoration (Zirconia Arch)',
    beforeImage: 'before_arch',
    afterImage: 'after_arch',
    beforeNotes: 'Terminal dentition due to progressive bone decay. Severe chewing instability, bone loss in both arches, and constant local pain.',
    afterNotes: 'Polished custom-milled monolithic Zirconia arches. Direct bone integration, perfect aesthetic facial height, fully restored eating confidence.',
    timeline: '3 Months Total Recovery',
    patientStory: '"I avoided family dinners for four years. The day Dr. Colin Le placed my permanent arches, my life restarted. I can eat steaks, laugh freely, and my confidence is at an all-time high. The sedation was a dream."',
    patientName: 'Richard M.',
    patientAge: 58
  },
  {
    id: 'case-02',
    title: 'Single Front Tooth Implant',
    procedure: '3D-Guided Single Implant & Hand-Layered Zirconia Crown',
    beforeImage: 'before_front',
    afterImage: 'after_front',
    beforeNotes: 'Traumatic fracture of front right central incisor (Tooth #8). Unsighted root canal failure and severe dark metal margins.',
    afterNotes: 'Perfect tooth integration. Root replaced with premium titanium, topped with custom shade-matched porcelain crown reflecting natural light.',
    timeline: '1 Day Extraction & Temporary, 2 Months Final Crown',
    patientStory: '"When I chipped my front tooth in a biking accident, I was devastated. Dr. Le saw me the same hour, placed a temporary immediately, and built a permanent implant that matches my real teeth so well even my family can’t tell."',
    patientName: 'Sarah K.',
    patientAge: 29
  },
  {
    id: 'case-03',
    title: 'Luxury Cosmetic Veneer Makeover',
    procedure: '10 Hand-Crafted Feldspathic Porcelain Veneers',
    beforeImage: 'before_veneers',
    afterImage: 'after_veneers',
    beforeNotes: 'Worn, uneven, slightly yellow enamel, spacing gaps between bicuspids, and minor midline asymmetry.',
    afterNotes: 'Symmetrical, natural bright smile with optimal midline alignment, micro-layer translucency, and full support for the upper lip.',
    timeline: '2 Visits / 8 Days Prep to Finish',
    patientStory: '"As a real estate executive, my smile is my handshake. Dr. Le’s digital design preview showed me exactly how I would look before we even touched my teeth. The result is better than any filter, extremely natural and classy."',
    patientName: 'Elena V.',
    patientAge: 42
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Robert T.',
    location: 'Wilmington, NC',
    treatment: 'Full Arch Dental Implants',
    rating: 5,
    date: '2 weeks ago',
    text: 'Dr. Colin Le represents the highest standard of dental surgery. His engineering background is visible in his meticulous workspace and incredibly precise work. My implants feel bulletproof, and the college road facility feels more like a wellness retreat than a clinic.',
    isGoogleVerified: true,
    avatarSeed: 'robert'
  },
  {
    id: 't-2',
    name: 'Linda H.',
    location: 'Leland, NC',
    treatment: 'Cosmetic Veneers & CEREC Crown',
    rating: 5,
    date: '3 weeks ago',
    text: 'I was terrifed of dental cleanings, let alone veneers. Dr. Le’s sedation protocol and calm voice transformed my perspective. I actually fell asleep during my procedures and woke up with a beautiful, natural set of veneers. Phenomenal care.',
    isGoogleVerified: true,
    avatarSeed: 'linda'
  },
  {
    id: 't-3',
    name: 'Marcus D.',
    location: 'Carolina Beach, NC',
    treatment: 'Emergency Root Canal & Dental Implants',
    rating: 5,
    date: '1 month ago',
    text: 'Coastal Smiles stands head and shoulders above any other dentist in North Carolina. Broke a tooth playing surfing at Carolina Beach; they got me in 40 minutes, took diagnostic 3D scans, and placed an implant effortlessly. Best treatment ever.',
    isGoogleVerified: true,
    avatarSeed: 'marcus'
  },
  {
    id: 't-4',
    name: 'Catherine S.',
    location: 'Porter’s Neck, NC',
    treatment: 'Family Checkups & Crowns',
    rating: 5,
    date: '2 months ago',
    text: 'Wonderful, warm environment for my children. Dr. Colin was so attentive and patient with my six-year-old. My crown was milled and applied in under 90 minutes. I will never visit another dental practice.',
    isGoogleVerified: true,
    avatarSeed: 'catherine'
  }
];

export const locations: LocationDetail[] = [
  {
    id: 'monkey-junction',
    name: 'Monkey Junction Clinic',
    address: '6419 Carolina Beach Rd Ste E',
    suite: 'Suite E',
    cityStateZip: 'Wilmington, NC 28412',
    phone: '(910) 796-8305',
    hours: {
      'Monday - Thursday': '8:00 AM - 5:00 PM',
      'Friday': '8:00 AM - 1:00 PM',
      'Saturday & Sunday': 'Closed (Emergency Line Active)'
    },
    coordinates: { lat: 34.148, lng: -77.896 },
    amenities: ['Private VIP consultation chambers', 'Microscope surgical suites', 'CEREC rapid-mill laboratories', 'Noise-canceling headphone suites', 'Aromatic essential oils sensory selection']
  },
  {
    id: 'college-road',
    name: 'College Road Center',
    address: '311 S College Rd Ste 120',
    suite: 'Suite 120',
    cityStateZip: 'Wilmington, NC 28403',
    phone: '(910) 796-8305',
    hours: {
      'Monday - Thursday': '8:00 AM - 5:00 PM',
      'Friday': '8:00 AM - 1:00 PM',
      'Saturday & Sunday': 'Closed (Emergency Line Active)'
    },
    coordinates: { lat: 34.225, lng: -77.882 },
    amenities: ['3D digital workflow studio', 'Zirconia premium milling systems', 'IV conscious sedation suites', 'Heated zero-gravity leather chairs', 'Organic hot tea & warm lavender towels']
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'implants',
    question: 'How much do dental implants cost, and what are the payment options?',
    answer: 'While individual costs depend on bone density and customized aesthetic demands, single implant restorations typically range from $3,000 to $4,500, inclusive of the titanium post, abutment, and final hand-layered CEREC crown. For life-changing full-arch solutions (All-on-4), costs reflect premium bespoke zirconia craftsmanship. We offer 0% APR financing options through premium partners CareCredit, LendingClub, and Sunbit, making these lifelong restorations incredibly accessible in low monthly plans.'
  },
  {
    id: 'faq-2',
    category: 'implants',
    question: 'Do you offer full-arch (All-on-4) dental implant reconstructions in-house?',
    answer: 'Absolutely. Coastal Smiles is famous for single-visit, in-house full-restorations. Under the care of Dr. Colin Le and our anesthesiology partners, we extract failing teeth, deploy stable medical-grade anchoring implants, and attach a beautiful fully-functional transitional arch in one single surgical session. Your final ultra-premium milled monolithic oxide zirconia arch is fitted within 10–12 weeks of bone healing.'
  },
  {
    id: 'faq-3',
    category: 'procedure',
    question: 'Is dental implant surgery painful or distressing?',
    answer: 'Our patients are continually shocked by how comfortable their healing is. By utilizing micro-guided 3D computer surgical placement, we minimize soft tissue incisions, leading to a fractional recovery timeline. During the procedure, the combined usage of advanced local sensory blocks and our premium conscious or IV sedation pathways means you will experience absolute warmth, safety, and literally zero pain, commonly waking up with no recollection of the surgical steps.'
  },
  {
    id: 'faq-4',
    category: 'financing',
    question: 'What insurance carriers and financing networks do you accept?',
    answer: 'We accept and coordinate extensively with most major dental indemnity and PPO networks (including Delta Dental, Blue Cross Blue Shield, Cigna, MetLife, Guardian, and Humana). To simplify administration, our in-house financial concierge manages all claim filings and insurance optimization directly. For balances outside insurance, our 12-to-60 month financing systems provide immediate, digital approvals to ensure financial transparency.'
  },
  {
    id: 'faq-5',
    category: 'consultation',
    question: 'What occurs during the initial visual and 3D digital implant consultation?',
    answer: 'Our primary goal is diagnostic excellence. You will meet privately with Dr. Colin Le inside a VIP consultation chamber. We capture a high-resolution 3D Cone Beam Computed Tomography (CBCT) scan of your skull and scan your jaws digitally. Dr. Le then compiles a interactive 3D virtual simulation showing your exact bone volume, implant placing avenues, and an interactive digital smile design mockup of your final crown. You will receive a transparent, fully-costed clinical blueprint details sheets with zero hidden fees.'
  }
];
