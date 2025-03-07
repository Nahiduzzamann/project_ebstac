import React from "react";
import { FaShieldAlt, FaUserSecret, FaLock } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
     <div className="pt-36 md:pt-40 bg-lightWhite container mx-auto p-3 text-darkBlack">
      <div className="">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <FaShieldAlt className="text-[#F9BE08] text-6xl mx-auto" />
          <h1 className="text-3xl font-bold mt-4 text-[#F9BE08]">Privacy Policy</h1>
          <p className="text-darkBlack mt-2">
            Your privacy is important to us. This policy explains how we collect, use, and protect your data.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          
          {/* Data Collection */}
          <div className="bg-[#1A1A19] border border-[#DFDFD9] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <FaUserSecret className="text-[#F9BE08] text-2xl" />
              <h2 className="text-xl font-semibold text-[#EFD30B]">Information We Collect</h2>
            </div>
            <p className="text-white mt-2">
              We may collect personal information such as your name, email, and usage data to improve our services.
            </p>
          </div>

          {/* Data Usage */}
          <div className="bg-[#1A1A19] border border-[#DFDFD9] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <FaLock className="text-[#F9BE08] text-2xl" />
              <h2 className="text-xl font-semibold text-[#EFD30B]">How We Use Your Data</h2>
            </div>
            <p className="text-white mt-2">
              Your data is used to enhance your experience, provide better support, and improve security measures.
            </p>
          </div>

          {/* Security Measures */}
          <div className="bg-[#1A1A19] border border-[#DFDFD9] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-[#F9BE08] text-2xl" />
              <h2 className="text-xl font-semibold text-[#EFD30B]">Data Protection</h2>
            </div>
            <p className="text-white mt-2">
              We implement industry-standard security measures to protect your personal information.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-darkBlack">
            If you have any questions, feel free to contact us at 
            <span className="text-[#F9BE08]"> support@example.com</span>.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;
