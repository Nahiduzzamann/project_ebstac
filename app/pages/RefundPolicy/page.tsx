import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <div className="pt-36 md:pt-40 container mx-auto bg-[#F9F8F4] text-[#1A1A19] flex justify-center p-3">
      <div className=" bg-white shadow-lg rounded-lg p-6 md:p-10">
        {/* Header Section */}
        <div className="flex items-center gap-4 border-b-2 border-[#DFDFD9] pb-4 mb-6">
          <FaRegMoneyBillAlt className="text-[#F9BE08] text-4xl" />
          <h1 className="text-3xl font-bold text-[#1A1A19]">Refund Policy</h1>
        </div>

        {/* Content Section */}
        <section className="space-y-6 text-gray-700">
          <p>
            Our refund policy is designed to ensure customer satisfaction while maintaining fairness for all parties. If you are not satisfied with your purchase, you may be eligible for a refund under the following conditions.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1A19]">Eligibility for Refund</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Refunds are only available within 14 days of purchase.</li>
            <li>The service or product must not have been fully utilized.</li>
            <li>Refunds will not be processed if there is a violation of our terms of service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#1A1A19]">Processing Time</h2>
          <p>
            Once your refund request is received, we will review it and notify you within 5-7 business days. If approved, the amount will be refunded to your original payment method within 10 business days.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1A19]">Non-Refundable Items</h2>
          <p>
            Some items and services are non-refundable, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital downloads and software licenses.</li>
            <li>Customized or personalized products.</li>
            <li>Completed services that have already been delivered.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#1A1A19]">Contact Us</h2>
          <p>
            If you have any questions or need assistance regarding refunds, please contact our support team at:
            <br />
            <span className="text-[#EFD30B] font-semibold">support@example.com</span>
          </p>
        </section>

        {/* Footer Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#DFDFD9]">© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
