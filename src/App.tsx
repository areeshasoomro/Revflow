// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgilityTransformation from "./AgilityTransformation";
import RevFlowBuilder from "./RevFlowBuilder";
import { RevFlowHero } from "./RevFlowHero";
import ZipTransformation from "./ZipTransformation";
import FeaturesPage from "./FeaturesPage";

// Landing Page Wrapper Component containing all your main sections
function HomePage() {
  return (
    <div>
      <RevFlowHero />
      <RevFlowBuilder />  
      <AgilityTransformation /> 
      <ZipTransformation /> 
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Separate Features Page opened when clicking 'Features' in the navbar */}
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;