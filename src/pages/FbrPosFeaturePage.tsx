import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const FbrPosFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Automate compliant reporting"
      titleRest="directly with tax authorities."
      subtitle="Ensure lightning-fast point of sale checkouts while seamlessly syncing fiscal invoices directly to FBR's integration system."
      heroImage="/learn-more.png"
      sectionTitleHighlight="FBR POS Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to maintain regulatory compliance without slowing down customer checkout flows."
      subFeatures={[
        { title: "Direct FBR Sync", description: "Transmit invoice data instantly via API integration.", icon: "/FBR-POS.png" },
        { title: "Fiscal QR Codes", description: "Auto-generate required verification QR codes on receipts.", icon: "/fbr-invoice.png" },
        { title: "Offline Mode", description: "Continue billing offline with automatic sync upon reconnect.", icon: "/Sales-icon.png" },
        { title: "POS Terminal Management", description: "Register and control multiple hardware cash registers.", icon: "/Multibranch-icon.png" },
        { title: "Tax Rate Configuration", description: "Handle standard, reduced, and exempt sales tax slabs.", icon: "/Accounting-icon.png" },
        { title: "Daily Sales Verification", description: "Match submitted fiscal reports against local system logs.", icon: "/Inventory-icon.png" },
      ]}
      analyticsTitleHighlight="Compliance & Tax"
      analyticsTitleRest="Analytics"
      analyticsSubtitle="Monitor submission statuses, error logs, and total fiscalized sales volume seamlessly."
      analyticsCheckpoints={[
        "Real-time invoice submission status tracker",
        "Fiscalized vs un-fiscalized sales monitoring",
        "Detailed tax liability and deduction summaries",
        "Automatic error logging and retry mechanisms",
        "Custom export options for tax audits"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default FbrPosFeaturePage;