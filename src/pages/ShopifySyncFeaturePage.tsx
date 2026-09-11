import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const ShopifySyncFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Sync products & orders"
      titleRest="seamlessly with Shopify."
      subtitle="Eliminate manual data entry by automatically synchronizing your Shopify webstore catalog, customer details, and incoming orders with RevFlow in real time."
      heroImage="/learn-more.png"
      sectionTitleHighlight="Shopify Sync"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to run your online and offline sales channels from a single unified system."
      subFeatures={[
        { title: "Catalog Sync", description: "Push product details, variants, and stock levels instantly.", icon: "/shopify.png" },
        { title: "Order Automation", description: "Import web orders directly into your fulfillment pipeline.", icon: "/Sales-icon.png" },
        { title: "Customer Mapping", description: "Sync buyer profiles and purchase history across platforms.", icon: "/Inventory-icon.png" },
        { title: "Inventory Reserves", description: "Prevent overselling with automatic stock level adjustments.", icon: "/Accounting-icon.png" },
        { title: "Payout Reconciliation", description: "Match gateway payouts and shipping fees effortlessly.", icon: "/hr-payroll.png" },
        { title: "Multi-Store Link", description: "Connect multiple Shopify storefronts to one inventory hub.", icon: "/Multibranch-icon.png" },
      ]}
      analyticsTitleHighlight="E-commerce Integration"
      analyticsTitleRest="Analytics"
      analyticsSubtitle="Track online sales performance alongside your physical stores with consolidated reporting."
      analyticsCheckpoints={[
        "Real-time e-commerce revenue tracking",
        "Sync error logs and auto-retry status monitors",
        "Top-selling online products and variant analysis",
        "Channel-wise sales comparison dashboards",
        "Unified inventory turnover reports"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default ShopifySyncFeaturePage;