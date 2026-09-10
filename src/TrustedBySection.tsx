import React from 'react';
import './TrustedBySection.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Farhan Ahmed',
    role: 'Operations Director',
    company: 'Logistics Enterprise',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    text: 'RevFlow completely transformed our regulatory tracking. Compliance workflows that used to take days are now fully automated and error-free.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ayesha Malik',
    role: 'Supply Chain Head',
    company: 'Retail Distribution Ltd',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    text: 'The automated reporting and real-time inventory compliance checks have saved our team countless hours every single month. Incredible platform!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Usman Siddiqui',
    role: 'Chief Financial Officer',
    company: 'Consumer Goods Corp',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    text: 'Scaling across multiple regions in Pakistan required stringent audits. RevFlow gave us the exact multi-tier control and visibility we needed.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Zainab Khan',
    role: 'Retail Store Owner',
    company: 'National Retail Chain',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    text: 'Seamless integration with our existing POS systems. It automated our entire compliance pipeline and gave us total peace of mind.',
    rating: 5,
  },
];

export const TrustedBySection: React.FC = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-wrapper">
        
        {/* Header */}
        <div className="trusted-header">
          <h2 className="trusted-title">
            Trusted by <span className="script-highlight">Businesses</span> Across <span className="script-highlight">Pakistan.</span>
          </h2>
          <p className="trusted-subtitle">
            See how growing retail stores, distributors, and enterprises rely<br />
            on RevFlow to automate compliance and scale effortlessly.
          </p>
        </div>

        {/* Seamless Infinite Logo Marquee Banner */}
        <div className="logos-marquee-container">
          <div className="logos-track">
            <img src="/logomarque.png" alt="Trusted Businesses Marquee" className="marquee-banner-img" />
            <img src="/logomarque.png" alt="Trusted Businesses Marquee" className="marquee-banner-img" />
            <img src="/logomarque.png" alt="Trusted Businesses Marquee" className="marquee-banner-img" />
            <img src="/logomarque.png" alt="Trusted Businesses Marquee" className="marquee-banner-img" />
          </div>
        </div>

        {/* 4 Cards Sequential Rising Marquee Viewport */}
        <div className="cards-marquee-viewport">
          <div className="cards-marquee-track">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="avatar-wrapper">
                  <img src={item.avatar} alt={item.name} className="reviewer-avatar" />
                </div>

                <h4 className="reviewer-name">{item.name}</h4>
                <span className="reviewer-role">{item.role} — <span className="reviewer-company">{item.company}</span></span>

                <p className="reviewer-text">{item.text}</p>

                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBySection;