import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

const FbrInvoicingFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Create compliant e-invoices"
      titleRest="for strict tax regulations."
      subtitle="Generate government-compliant electronic invoices, attach required digital signatures, and submit records instantly to the FBR invoice management portal."
      heroImage="/learn-more.png"
      sectionTitleHighlight="FBR Invoicing"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to stay fully compliant with electronic invoicing mandates without extra hassle."
      subFeatures={[
        { title: "Digital E-Invoicing", description: "Create structured invoices adhering to FBR schema rules.", icon: "/fbr-invoice.png" },
        { title: "Instant Validation", description: "Pre-check invoice fields to eliminate rejection errors.", icon: "/Sales-icon.png" },
        { title: "QR & Barcode Links", description: "Embed official verification codes on every issued bill.", icon: "/FBR-POS.png" },
        { title: "Credit/Debit Notes", description: "Process compliant returns, adjustments, and cancellations.", icon: "/Accounting-icon.png" },
        { title: "Customer Verification", description: "Validate buyer NTN and STRN numbers automatically.", icon: "/Inventory-icon.png" },
        { title: "Audit Trail", description: "Maintain immutable submission logs for official reviews.", icon: "/Multibranch-icon.png" },
      ]}
      analyticsTitleHighlight="E-Invoice Compliance"
      analyticsTitleRest="Dashboard"
      analyticsSubtitle="Monitor e-invoice clearance statuses, filing history, and tax reporting metrics in real-time."
      analyticsCheckpoints={[
        "Real-time e-invoice clearance status trackers",
        "Rejection error logs with quick-fix guides",
        "Total taxable vs exempt sales summaries",
        "Monthly tax submission reporting files",
        "Archived verification history logs"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default FbrInvoicingFeaturePage;