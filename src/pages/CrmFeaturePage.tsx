import React from 'react';
import { FeatureDetailPage } from '../FeatureDetailPage';

const WhatsAppFeaturePage: React.FC = () => {
  return (
    <FeatureDetailPage
      titleHighlight="Send updates automatically"
      titleRest="via WhatsApp notifications."
      subtitle="Keep your customers and team informed with automated WhatsApp messages for order confirmations, shipping alerts, payment reminders, and status updates."
      heroImage="/learn-more.png"
      sectionTitleHighlight="WhatsApp Module"
      sectionTitleRest="Offers"
      sectionSubtitle="Everything you need to automate communication and boost customer engagement instantly."
      subFeatures={[
        { title: "Order Confirmations", description: "Send instant receipts and order summaries upon checkout.", icon: "/whatsapp.png" },
        { title: "Shipping Trackers", description: "Notify customers with live tracking links and courier updates.", icon: "/Sales-icon.png" },
        { title: "Payment Reminders", description: "Automate invoice follow-ups and overdue payment notices.", icon: "/Accounting-icon.png" },
        { title: "Custom Templates", description: "Design branded message templates with dynamic variables.", icon: "/Inventory-icon.png" },
        { title: "Team Alerts", description: "Notify staff internally for low stock or high-value orders.", icon: "/hr-payroll.png" },
        { title: "Chat Logs", description: "Keep track of automated message delivery histories.", icon: "/Multibranch-icon.png" },
      ]}
      analyticsTitleHighlight="Messaging Performance"
      analyticsTitleRest="& Delivery"
      analyticsSubtitle="Monitor message throughput, delivery success rates, and customer response metrics."
      analyticsCheckpoints={[
        "Total message delivery and read status tracking",
        "Automated trigger execution logs",
        "Customer engagement and response summaries",
        "Template usage and performance metrics",
        "API quota and credit balance monitors"
      ]}
      analyticsImages={["/learn-more1.png"]}
    />
  );
};

export default WhatsAppFeaturePage;