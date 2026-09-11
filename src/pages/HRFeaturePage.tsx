import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

export const HRFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Streamline your workforce"
      titleRest="from hire to retirement."
      subtitle="Maintain employee records, streamline leave approvals, handle automated payroll calculations, and keep your team engaged."
      heroImage="/learn-more.png"
      sectionTitleHighlight="HR Management"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to manage your personnel, attendance, and compliance requirements in one dashboard."
      subFeatures={[
        { title: "Employee Records", description: "Centralize profiles, documents, and contact details.", icon: "/HR-icon.png" },
        { title: "Leave Approvals", description: "Configure leave types, policies, and multi-tier workflows.", icon: "/Multibranch-icon.png" },
        { title: "Automated Payroll", description: "Generate salaries, allowances, and deductions seamlessly.", icon: "/hr-payroll.png" },
        { title: "Attendance Tracking", description: "Monitor shifts, check-ins, and overtime logs.", icon: "/Sales-icon.png" },
        { title: "Performance Reviews", description: "Set goals, track KPIs, and conduct team evaluations.", icon: "/Accounting-icon.png" },
        { title: "Document Vault", description: "Securely store contracts, policies, and tax documents.", icon: "/FBR-POS.png" },
      ]}
      analyticsTitleHighlight="HR & Payroll"
      analyticsTitleRest="Insights"
      analyticsSubtitle="Monitor headcounts, labor costs, and attendance trends with robust reporting tools."
      analyticsCheckpoints={[
        "Department-wise headcount summaries",
        "Payroll cost projections and historical reports",
        "Leave utilization and absenteeism analytics",
        "Overtime and shift allowance distributions",
        "Statutory compliance reporting"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default HRFeaturePage;