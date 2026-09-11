import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

const HrPayrollFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Automate salaries & payslips"
      titleRest="with total precision."
      subtitle="Eliminate payroll errors with automated tax deductions, allowance calculations, attendance integrations, and digital payslip distributions."
      heroImage="/learn-more.png"
      sectionTitleHighlight="HR & Payroll Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to handle complex compensation structures and run payday smoothly."
      subFeatures={[
        { title: "Salary Processing", description: "Bulk calculate net pay, bonuses, and deductions.", icon: "/hr-payroll.png" },
        { title: "Automated Payslips", description: "Generate and email digital PDF payslips to employees.", icon: "/HR-icon.png" },
        { title: "Tax & Provident Fund", description: "Deduct statutory taxes and contributions automatically.", icon: "/Accounting-icon.png" },
        { title: "Loan Management", description: "Track employee advance loans and automated salary deductions.", icon: "/Sales-icon.png" },
        { title: "Overtime Integration", description: "Factor clocked overtime hours directly into final paychecks.", icon: "/Inventory-icon.png" },
        { title: "Bank Disbursement", description: "Export bank transfer files for direct employee deposits.", icon: "/Multibranch-icon.png" },
      ]}
      analyticsTitleHighlight="Payroll Cost"
      analyticsTitleRest="& Tax Analytics"
      analyticsSubtitle="Review payroll expenses, department disbursements, and statutory contribution summaries."
      analyticsCheckpoints={[
        "Monthly payroll trend and variance reports",
        "Department-wise salary expense breakdowns",
        "Statutory deduction and tax filing summaries",
        "Loan repayment and advance tracking logs",
        "Auditable disbursement history records"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default HrPayrollFeaturePage;