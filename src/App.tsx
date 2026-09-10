// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgilityTransformation from "./AgilityTransformation";
import RevFlowBuilder from "./RevFlowBuilder";
import { RevFlowHero } from "./RevFlowHero";
import ZipTransformation from "./ZipTransformation";
import FeaturesPage from "./FeaturesPage";
import Footer from "./Footer";
import RevFlowSimulator from "./RevFlowSimulator";
import SelfServeSteps from "./SelfServeSteps";
import FaqSection from "./FaqSection";
import TrustedBySection from "./TrustedBySection";
import SolutionsPage from "./SolutionsPage";

// Landing Page Wrapper Component containing all your main sections
function HomePage() {
  return (
    <div>
      <RevFlowHero />
      <RevFlowBuilder />  
      <AgilityTransformation /> 
      <ZipTransformation /> 
      <RevFlowSimulator />  
      <SelfServeSteps />
      <FaqSection />
      <TrustedBySection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Separate Features Page */}
        <Route path="/features" element={<FeaturesPage />} />

        {/* Separate Solutions Page opened when clicking 'Solutions' in the navbar */}
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;