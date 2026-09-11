import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const SalesFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Every sale"
      titleRest="into a simple, trackable workflow."
      subtitle="Create quotations, convert them into invoices, track payments, monitor sales performance, and keep your entire sales process organized in one place."
      heroImage="/learn-more.png"
      sectionTitleHighlight="Sales Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to manage your sales, from creating quotations to tracking payments and understanding your performance."
      subFeatures={[
        { title: "Quotations", description: "Create and manage professional quotations.", icon: "/Inventory-icon.png" },
        { title: "Invoices", description: "Generate invoices quickly from sales.", icon: "/Multibranch-icon.png" },
        { title: "Customer Management", description: "Keep customer and transaction records organized.", icon: "/Sales-icon.png" },
        { title: "Sales Orders", description: "Track orders from confirmation to fulfillment.", icon: "/Accounting-icon.png" },
        { title: "Payment Tracking", description: "Monitor paid, pending and outstanding amounts.", icon: "/hr-payroll.png" },
        { title: "Sales Reports", description: "Track revenue, sales trends and performance.", icon: "/FBR-POS.png" },
      ]}
      analyticsTitleHighlight="Advanced Sales Reporting"
      analyticsTitleRest="& Analytics"
      analyticsSubtitle="Turn your sales data into actionable insights with pre-built reports and easy-to-read dashboards."
      analyticsCheckpoints={[
        "Sales summary and revenue reports",
        "Invoice and payment reports",
        "Top customers and product performance",
        "Outstanding and overdue payments",
        "Custom date range and export options"
      ]}
      analyticsImages={["/learn-more1.png" ]}
    />
  );
};

export default SalesFeaturePage;