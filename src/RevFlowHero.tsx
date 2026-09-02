// import React from 'react';
// import './RevFlowHero.css';

// interface FeatureItem {
//   id: string;
//   label: string;
//   dotCx: number;
//   dotCy: number;
//   pillStyle: React.CSSProperties;
// }

// const features: FeatureItem[] = [
//   {
//     id: 'shopify',
//     label: 'Shopify Sync',
//     dotCx: 25,
//     dotCy: 392, // Sits precisely on the lower-left curve
//     pillStyle: { top: '74%', left: '0%' },
//   },
//   {
//     id: 'pay',
//     label: 'Pay-Per-Use',
//     dotCx: 60,
//     dotCy: 270, // Sits precisely on the rising curve
//     pillStyle: { top: '46%', left: '8%' },
//   },
//   {
//     id: 'branch',
//     label: 'Multi-Branch',
//     dotCx: 220,
//     dotCy: 160, // Sits precisely on the top apex
//     pillStyle: { top: '22%', left: '32%' },
//   },
//   {
//     id: 'modular',
//     label: 'Modular ERP',
//     dotCx: 408,
//     dotCy: 190, // Sits precisely on the descending curve
//     pillStyle: { top: '30%', left: '56%' },
//   },
//   {
//     id: 'fbr',
//     label: 'FBR Compliant',
//     dotCx: 475,
//     dotCy: 312, // Sits precisely on the lower-right curve
//     pillStyle: { top: '54%', right: '2%' },
//   },
// ];

// export const RevFlowHero: React.FC = () => {
//   return (
//     <section className="revflow-hero-section">
//       <div className="hero-page-wrapper">
        
//         {/* Navigation Header */}
//         <nav className="revflow-navbar">
//           <div className="nav-logo-wrapper">
//             <img src="/logo.png" alt="RevFlow Logo" className="logo-image" />
//           </div>
//           <div className="nav-links">
//             <a href="#home" className="nav-link active">Home</a>
//             <a href="#features" className="nav-link">Features</a>
//             <a href="#solutions" className="nav-link">Solutions</a>
//             <a href="#pricing" className="nav-link">Pricing</a>
//             <a href="#compliance" className="nav-link">FBR Compliance Hub</a>
//           </div>
//           <button className="cta-button">
//             <span>Get Started</span>
//             <span className="cta-icon-circle">↗</span>
//           </button>
//         </nav>

//         {/* Main Hero Content Grid */}
//         <div className="hero-container">
          
//           {/* Left Column: Text & CTA */}
//           <div className="hero-text-content">
//             <h1 className="hero-title">
//               Built to <span className="highlight-scale">Scale</span>. Not to Overpay.
//             </h1>
//             <p className="hero-subtitle">
//               Pick the modules your business actually needs, automate FBR compliance, and manage multiple branches from one workspace.
//             </p>
//             <button className="cta-button main-cta">
//               <span>Build Your ERP</span>
//               <span className="cta-icon-circle">↗</span>
//             </button>
//           </div>

//           {/* Right Column: Visual Composition Group */}
//           <div className="hero-visual-container">
//             <div className="mockup-wrapper">
              
//               {/* Perfectly Aligned Circular Arc Path with Smooth Line Drawing & Dot Animations */}
//               <svg className="curve-svg" viewBox="0 0 560 450" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path 
//                   className="animated-path"
//                   d="M 25 425 A 240 240 0 0 1 525 385" 
//                   stroke="#2B7A9E" 
//                   strokeWidth="3.5" 
//                   strokeLinecap="round"
//                 />
//                 {features.map((item) => (
//                   <circle 
//                     key={item.id} 
//                     className="node-dot"
//                     cx={item.dotCx} 
//                     cy={item.dotCy} 
//                     r="5.5" 
//                     fill="#2B7A9E" 
//                   />
//                 ))}
//               </svg>

//               {/* Feature Pills with Staggered Fade-in & Floating Animation */}
//               {features.map((item) => (
//                 <div 
//                   key={item.id} 
//                   className="glass-pill" 
//                   style={item.pillStyle}
//                 >
//                   {item.label}
//                 </div>
//               ))}

//               {/* Device Mockup Image */}
//               <img src="/mockup.png" alt="RevFlow Dashboard Mockup" className="mockup-img" />
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default RevFlowHero;


import React from 'react';
import './RevFlowHero.css';

interface FeatureItem {
  id: string;
  label: string;
  dotCx: number;
  dotCy: number;
  pillStyle: React.CSSProperties;
}

const features: FeatureItem[] = [
  {
    id: 'shopify',
    label: 'Shopify Sync',
    dotCx: 25,
    dotCy: 392,
    pillStyle: { top: '74%', left: '0%' },
  },
  {
    id: 'pay',
    label: 'Pay-Per-Use',
    dotCx: 60,
    dotCy: 270,
    pillStyle: { top: '46%', left: '8%' },
  },
  {
    id: 'branch',
    label: 'Multi-Branch',
    dotCx: 220,
    dotCy: 160,
    pillStyle: { top: '22%', left: '32%' },
  },
  {
    id: 'modular',
    label: 'Modular ERP',
    dotCx: 408,
    dotCy: 190,
    pillStyle: { top: '30%', left: '56%' },
  },
  {
    id: 'fbr',
    label: 'FBR Compliant',
    dotCx: 475,
    dotCy: 312,
    pillStyle: { top: '54%', right: '2%' },
  },
];

export const RevFlowHero: React.FC = () => {
  return (
    <section className="revflow-hero-section">
      <div className="hero-page-wrapper">
        
        {/* Navigation Header */}
        <nav className="revflow-navbar">
          <div className="nav-logo-wrapper">
            <img src="/logo.png" alt="RevFlow Logo" className="logo-image" />
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#compliance" className="nav-link">FBR Compliance Hub</a>
          </div>
          <button className="cta-button">
            <span>Get Started</span>
            <span className="cta-icon-circle">↗</span>
          </button>
        </nav>

        {/* Main Hero Content Grid */}
        <div className="hero-container">
          
          {/* Left Column: Text & CTA */}
          <div className="hero-text-content">
            <h1 className="hero-title">
              Built to <span className="highlight-scale">Scale</span>. Not to Overpay.
            </h1>
            <p className="hero-subtitle">
              Pick the modules your business actually needs, automate FBR compliance, and manage multiple branches from one workspace.
            </p>
            <button className="cta-button main-cta">
              <span>Build Your ERP</span>
              <span className="cta-icon-circle">↗</span>
            </button>
          </div>

          {/* Right Column: Visual Composition Group */}
          <div className="hero-visual-container">
            <div className="mockup-wrapper">
              
              {/* Dotted Arc Path with Line Drawing & Dot Animations */}
              <svg className="curve-svg" viewBox="0 0 560 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  className="animated-path"
                  d="M 25 425 A 240 240 0 0 1 525 385" 
                  stroke="#2B7A9E" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
                {features.map((item) => (
                  <circle 
                    key={item.id} 
                    className="node-dot"
                    cx={item.dotCx} 
                    cy={item.dotCy} 
                    r="5.5" 
                    fill="#2B7A9E" 
                  />
                ))}
              </svg>

              {/* Feature Pills with Staggered Fade-in & Floating Animation */}
              {features.map((item) => (
                <div 
                  key={item.id} 
                  className="glass-pill" 
                  style={item.pillStyle}
                >
                  {item.label}
                </div>
              ))}

              {/* Device Mockup Image */}
              <img src="/mockup.png" alt="RevFlow Dashboard Mockup" className="mockup-img" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RevFlowHero;