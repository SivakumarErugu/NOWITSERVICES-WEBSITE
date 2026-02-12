import React from "react";

const Policy = () => {
  const policySections = [
    {
      title: "General Terms & Agreement",
      text: "By accessing the NOWIT SERVICES website or using our software applications, you agree to be bound by these Terms and Conditions. Our services are designed to provide business solutions; unauthorized use or reproduction of our proprietary systems is strictly prohibited."
    },
    {
      title: "Scope of Services",
      text: "NOWIT SERVICES provides a suite of digital tools including cloud-based billing, invoicing, and business management software. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time to ensure the best performance and security for our clients."
    },
    {
      title: "Data Privacy & Collection",
      text: "We collect only the necessary information required to provide our services, such as business contact details and transaction records. We do not sell your personal or business data to third parties. All data processed through our apps is used solely for the functionality of the service."
    },
    {
      title: "Intellectual Property",
      text: "All content, logos, and software code on this website and within our applications are the exclusive property of NOWIT SERVICES Pvt Ltd. Users are granted a non-exclusive, non-transferable license to use the services for their intended business purposes."
    }
  ];

  return (
    <div className="
      mx-auto 
      w-full 
      max-w-4xl 
      border border-gray-300 
      bg-white
      p-6 sm:p-10
      shadow-sm
      rounded-sm
    ">
      {/* Header */}
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          NOWIT SERVICES PVT LTD
        </h2>
        <h3 className="text-sm sm:text-base font-semibold text-blue-700 uppercase tracking-wide">
          Privacy Policy & Terms of Service
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          At NOWIT SERVICES, we prioritize the trust and security of our clients. This document governs your relationship with our website and our flagship products, including the <strong>WON APPS</strong> ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          <p className="text-xs font-medium text-gray-700">
            <span className="text-gray-400">Entity:</span> NOWIT SERVICES Pvt Ltd
          </p>
          {/* <p className="text-xs font-medium text-gray-700">
            <span className="text-gray-400">App Focus:</span> WONPlus Bills (Web/Mobile)
          </p> */}
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Policy Content */}
      <ol className="list-decimal space-y-6 pl-4 sm:pl-5">
        {policySections.map((section, i) => (
          <li key={i} className="text-gray-800">
            <p className="font-bold text-sm sm:text-base mb-1">{section.title}</p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {section.text}
            </p>
          </li>
        ))}

        {/* Charges Section - kept unique styling */}
        <li>
          <p className="font-bold text-sm sm:text-base">Service Fees & Billing</p>
          <div className="mt-2 p-3 bg-gray-50 rounded border border-gray-100 text-xs sm:text-sm text-gray-600">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Transaction Fees:</strong> Standard 1% per processed transaction for premium modules.</li>
              <li><strong>Automated Billing:</strong> Service charges are auto-deducted via secured payment gateways.</li>
              <li><strong>Transparency:</strong> Any changes to the fee structure will be communicated 30 days in advance.</li>
            </ul>
          </div>
        </li>

        <li>
          <p className="font-bold text-sm sm:text-base">Security Standards</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            We employ 256-bit SSL encryption, enterprise-grade firewalls, and regular security audits to ensure your business data remains confidential and protected against unauthorized access.
          </p>
        </li>

        <li>
          <p className="font-bold text-sm sm:text-base">Refund & Cancellation</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Subscriptions or service fees for our free-tier digital products are non-refundable. For customized enterprise solutions, please refer to your specific Service Level Agreement (SLA).
          </p>
        </li>
      </ol>

      {/* Footer Note */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center italic">
          Last Updated: February 2026 • NOWIT SERVICES Pvt Ltd • Compliance Department
        </p>
      </div>
    </div>
  );
};

export default Policy;