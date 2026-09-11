import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const MultiBranchFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Scale operations"
      titleRest="across multiple locations effortlessly."
      subtitle="Enforce branch-scoped security, manage centralized catalogs with local pricing, and assign tailored role templates for staff."
      heroImage="/learn-more.png"
      sectionTitleHighlight="Multi-Branch Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to oversee multiple store branches or regional offices under a single roof."
      subFeatures={[
        { title: "Branch-Scoped Security", description: "Restrict user access strictly to assigned branch data.", icon: "/Multibranch-icon.png" },
        { title: "Role Templates", description: "Apply standardized permission sets across locations.", icon: "/HR-icon.png" },
        { title: "Central Catalog Control", description: "Push global products while overriding local branch prices.", icon: "/Inventory-icon.png" },
        { title: "Inter-Branch Transfers", description: "Move stock between branches with automated tracking.", icon: "/Sales-icon.png" },
        { title: "Branch P&L Reports", description: "Evaluate profitability and performance per location.", icon: "/Accounting-icon.png" },
        { title: "Consolidated Views", description: "View overarching metrics across your entire enterprise.", icon: "/FBR-POS.png" },
      ]}
      analyticsTitleHighlight="Multi-Branch Performance"
      analyticsTitleRest="& Audits"
      analyticsSubtitle="Compare regional performance metrics and track inter-branch workflows in real-time."
      analyticsCheckpoints={[
        "Location-based revenue comparison graphs",
        "Inter-branch transfer audit histories",
        "Regional inventory balancing reports",
        "Branch-specific user activity logs",
        "Consolidated group financial reporting"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default MultiBranchFeaturePage;