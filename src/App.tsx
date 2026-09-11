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
import SolutionDetailPage from "./SolutionDetailPage";

import SalesFeaturePage from './pages/SalesFeaturePage';
import InventoryFeaturePage from "./pages/InventoryFeaturePage";
import HRFeaturePage from "./pages/HRFeaturePage";
import MultiBranchFeaturePage from "./pages/MultiBranchFeaturePage";
import AccountingFeaturePage from "./pages/AccountingFeaturePage";
import FbrPosFeaturePage from "./pages/FbrPosFeaturePage";
import HrPayrollFeaturePage from "./pages/HrPayrollFeaturePage";
import ShopifySyncFeaturePage from "./pages/ShopifySyncFeaturePage";
import WhatsAppFeaturePage from "./pages/WhatsAppFeaturePage";
import FbrInvoicingFeaturePage from "./pages/FbrInvoicingFeaturePage";
import CrmFeaturePage from "./pages/CrmFeaturePage";
import { PricingPage } from "./PricingPage";
import { FBRCompliancePage } from "./FbrCompliancePage";



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
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/compliance" element={<FBRCompliancePage />} />
        
        {/* Solutions Routes */}
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route 
          path="/solutions/retail-pos" 
          element={
            <SolutionDetailPage 
              titleHighlight="Retail & POS" 
              titleRest="Enterprise Suite" 
              subtitle="Seamlessly bridge front-counter speed with rigorous back-office financial accuracy."
              heroImage="/Retail-sol.png" 
              overviewDescription="RevFlow's Retail & POS architecture is engineered from the ground up for high-velocity retail environments where speed and tax compliance cannot be compromised. By unifying rapid barcode scanning, instant offline resilience, and automated sales ledger entries into a single seamless interface, cashiers can process transactions in seconds while store managers maintain absolute, real-time visibility across inventory levels, multi-branch stock transfers, and daily register reconciliations."
              sectionTitleHighlight="Core Operational" 
              sectionTitleRest="Pillars"
              subFeatures={[
                { title: "Lightning-Fast Counter Checkouts & Scanning", description: "Designed with a high-contrast, touch-optimized POS layout that cuts checkout times by up to 40%. Supports omni-directional hardware barcode scanners, rapid SKU lookups, and instant customer loyalty profile tagging without breaking transaction flow.", icon: "speed" },
                { title: "Out-of-the-Box FBR POS Tax Compliance", description: "Automatically integrates local regulatory requirements by generating real-time FBR-verified invoices, digital QR code stamping, and direct transmission logs to government fiscal servers, completely eliminating manual tax filing errors.", icon: "shield" },
                { title: "Real-Time Inventory & Multi-Branch Sync", description: "Every completed sale instantly updates centralized stock quantities across all connected warehouses and retail branches. If stock runs low on a popular item, automated reorder triggers or inter-branch transfer requests are generated instantly.", icon: "inventory" }
              ]}
            />
          } 
        />
        <Route 
          path="/solutions/wholesale-distribution" 
          element={
            <SolutionDetailPage 
              titleHighlight="Wholesale &" 
              titleRest="Distribution Hub" 
              subtitle="Optimize bulk inventory tracking, automated warehouse transfers, and tiered client pricing structures."
              heroImage="/wholesale-sol.png"
              overviewDescription="RevFlow's Wholesale & Distribution hub is engineered to handle large-scale supply chain operations with absolute precision. By combining multi-warehouse stock visibility, automated dispatch notes, and customizable B2B client pricing tiers, your team can accelerate order fulfillment and eliminate discrepancies across your entire distribution network."
              sectionTitleHighlight="Wholesale Control" 
              sectionTitleRest="Modules"
              subFeatures={[
                { title: "Bulk Warehouse & Batch Tracking", description: "Manage large inventories across multiple regional warehouses with automated reorder levels, serial number tracking, and batch-level expiration monitoring.", icon: "inventory" },
                { title: "Custom Client Pricing Tiers", description: "Assign tiered pricing structures, volume-based discounts, and custom credit limits to wholesale buyers instantly upon checkout or account selection.", icon: "shield" },
                { title: "Automated Dispatch & Invoicing", description: "Streamline dispatch notes, packing slips, and automated tax invoices into a single synchronized workflow that connects directly to your financial general ledger.", icon: "speed" }
              ]}
            />
          } 
        />
        <Route 
          path="/solutions/light-manufacturing" 
          element={
            <SolutionDetailPage 
              titleHighlight="Light" 
              titleRest="Manufacturing Suite" 
              subtitle="Track raw materials, monitor assembly workflows, and reconcile general ledger costs seamlessly."
              heroImage="/lightmanu-sol.png"
              overviewDescription="RevFlow's Light Manufacturing suite provides end-to-end visibility into your assembly and production lifecycle. From raw material intake to finished goods inventory valuation, our platform eliminates manual bottlenecks and keeps your shop floor running at maximum efficiency."
              sectionTitleHighlight="Production &" 
              sectionTitleRest="Assembly Pillars"
              subFeatures={[
                { title: "Bill of Materials (BOM) Tracking", description: "Accurately track raw material consumption, component costs, and wastage percentages for every manufactured batch in real time.", icon: "inventory" },
                { title: "Resource & Equipment Allocation", description: "Schedule workstation utilization, monitor labor hours, and oversee machinery capacity to prevent bottlenecks on the assembly floor.", icon: "speed" },
                { title: "General Ledger Cost Reconciliation", description: "Automatically calculate production overheads, update inventory valuation ledgers, and reconcile finished goods costs the moment assembly is completed.", icon: "shield" }
              ]}
            />
          } 
        />

        {/* Feature Routes */}
        <Route path="/features/sales" element={<SalesFeaturePage />} />
        <Route path="/features/inventory" element={<InventoryFeaturePage />} />
        <Route path="/features/hr-management" element={<HRFeaturePage />} />
        <Route path="/features/multi-branch" element={<MultiBranchFeaturePage />} />
        <Route path="/features/accounting" element={<AccountingFeaturePage />} />
        <Route path="/features/fbr-pos" element={<FbrPosFeaturePage />} />
        <Route path="/features/hr-payroll" element={<HrPayrollFeaturePage />} />
        <Route path="/features/shopify-sync" element={<ShopifySyncFeaturePage />} />
        <Route path="/features/whatsapp" element={<WhatsAppFeaturePage />} />
        <Route path="/features/fbr-invoicing" element={<FbrInvoicingFeaturePage />} />
        <Route path="/features/crm" element={<CrmFeaturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;