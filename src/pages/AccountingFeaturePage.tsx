import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const AccountingFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Complete financial clarity"
      titleRest="with automated bookkeeping."
      subtitle="Manage your Chart of Accounts, handle automated journal entries, track expenses, and generate profit & loss statements instantly."
      heroImage="/learn-more.png"
      sectionTitleHighlight="Accounting Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to keep your books balanced, compliant, and ready for audits."
      subFeatures={[
        { title: "Chart of Accounts", description: "Fully customizable ledger hierarchy for your business.", icon: "/Accounting-icon.png" },
        { title: "Automated Entries", description: "Auto-post journal entries from sales, purchases, and payroll.", icon: "/Inventory-icon.png" },
        { title: "Profit & Loss (P&L)", description: "Generate real-time financial statements and balance sheets.", icon: "/Sales-icon.png" },
        { title: "Expense Management", description: "Categorize business spending and vendor bills.", icon: "/hr-payroll.png" },
        { title: "Bank Reconciliation", description: "Match bank feeds with recorded transactions quickly.", icon: "/Multibranch-icon.png" },
        { title: "Tax Computations", description: "Calculate applicable taxes accurately per transaction.", icon: "/FBR-POS.png" },
      ]}
      analyticsTitleHighlight="Advanced Financial"
      analyticsTitleRest="Reporting"
      analyticsSubtitle="Turn transaction data into deep financial health insights with executive dashboards."
      analyticsCheckpoints={[
        "Real-time Balance Sheet and P&L summaries",
        "Cash flow forecasting and trend analysis",
        "Aged receivables and payables tracking",
        "Expense breakdown by category or branch",
        "Exportable statements for tax filing and audits"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default AccountingFeaturePage;