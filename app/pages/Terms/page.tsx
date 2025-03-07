import React from "react";
import { FaShieldAlt, FaFileContract, FaGavel, FaUserLock } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="pt-36 md:pt-40 bg-lightWhite container mx-auto p-3">
 <div className=" text-darkBlack min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#F9BE08]">Terms & Conditions</h1>
        <p className="mt-4 text-darkBlack text-lg">
          Please read these terms and conditions carefully before using our website.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="max-w-4xl mx-auto mt-10 space-y-8">
        {/* Section 1 */}
        <div className="flex items-start gap-4">
          <FaShieldAlt className="text-[#EFD30B] text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold text-[#F9BE08]">1. Acceptance of Terms</h2>
            <p className="mt-2 text-darkBlack">
              By accessing our website, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-start gap-4">
          <FaFileContract className="text-[#EFD30B] text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold text-[#F9BE08]">2. User Responsibilities</h2>
            <p className="mt-2 text-darkBlack">
              Users must ensure that they use the platform ethically and legally. Any misuse may lead to account termination.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-start gap-4">
          <FaGavel className="text-[#EFD30B] text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold text-[#F9BE08]">3. Governing Law</h2>
            <p className="mt-2 text-darkBlack">
              These terms are governed by applicable laws, and any disputes shall be resolved in the appropriate legal jurisdiction.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex items-start gap-4">
          <FaUserLock className="text-[#EFD30B] text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold text-[#F9BE08]">4. Privacy Policy</h2>
            <p className="mt-2 text-darkBlack">
              We respect your privacy and handle personal data as outlined in our Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-darkBlack">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
    </div>
   
  );
};

export default Terms;
