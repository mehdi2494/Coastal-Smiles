export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  duration: string;
  image: string;
  category: 'implant' | 'cosmetic' | 'general' | 'emergency';
}

export interface CaseStudy {
  id: string;
  title: string;
  procedure: string;
  beforeImage: string;
  afterImage: string;
  beforeNotes: string;
  afterNotes: string;
  timeline: string;
  patientStory: string;
  patientName: string;
  patientAge: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  text: string;
  isGoogleVerified: boolean;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LocationDetail {
  id: string;
  name: string;
  address: string;
  suite: string;
  cityStateZip: string;
  phone: string;
  hours: { [key: string]: string };
  coordinates: { lat: number; lng: number };
  amenities: string[];
}

export interface SmileDesignState {
  currentConcern: string;
  restorationType: 'single' | 'multiple' | 'full';
  sedationSelection: 'none' | 'laughing' | 'oral' | 'iv';
  materialSelection: 'porcelain' | 'zirconia' | 'titanium';
  downpayment: number;
  months: number;
}
