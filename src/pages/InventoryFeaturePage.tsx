import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const InventoryFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Complete inventory"
      titleRest="visibility across all locations."
      subtitle="Manage catalogs, track stock movements in real-time, set automated reorder alerts, and optimize your inventory levels effortlessly."
      heroImage="/learn-more.png"
      sectionTitleHighlight="Inventory Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to control stock, handle multi-warehouse tracking, and minimize stockouts."
      subFeatures={[
        { title: "Catalog Management", description: "Organize products with variants, barcodes, and pricing.", icon: "/Inventory-icon.png" },
        { title: "Stock In/Out", description: "Record goods receipts, shipments, and internal transfers.", icon: "/Multibranch-icon.png" },
        { title: "Reorder Alerts", description: "Get notified automatically when stock hits low thresholds.", icon: "/Sales-icon.png" },
        { title: "Warehouse Tracking", description: "Monitor inventory distribution across multiple locations.", icon: "/Accounting-icon.png" },
        { title: "Batch & Serial", description: "Track items by lot numbers, serials, and expiry dates.", icon: "/hr-payroll.png" },
        { title: "Inventory Valuations", description: "Calculate asset value using FIFO, LIFO, or average cost.", icon: "/FBR-POS.png" },
      ]}
      analyticsTitleHighlight="Advanced Inventory"
      analyticsTitleRest="Analytics & Audits"
      analyticsSubtitle="Gain complete control over stock turnover and valuation with comprehensive reports."
      analyticsCheckpoints={[
        "Real-time stock movement tracking",
        "Low stock and dead stock identification",
        "Warehouse-wise valuation breakdowns",
        "Stock adjustment and audit logs",
        "Customizable export and reporting options"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default InventoryFeaturePage;