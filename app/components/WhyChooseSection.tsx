import Image from "next/image";
import React from "react";
import logo from "../../public/Images/logo.png";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
export default function WhyChooseSection() {
  return (
    <div className=" py-16 px-6 lg:flex justify-between items-center container p-3 mx-auto">
      {/* Left Side (Trustpilot Section) */}
      <div className="flex flex-col items-center pb-10 md:pb-0">
        <Image src={logo} alt="Logo" className="cursor-pointer w-20 md:w-32" />
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="w-6 h-6 text-yellow"></FaStar>
          ))}
        </div>
        <p className="mt-2 text-gray-800 font-medium">
          TrustScore <span className="font-bold">4.8</span> |{" "}
          <span className="font-bold">293</span> reviews
        </p>
      </div>

      {/* Right Side (Text Section) */}
      <div className="max-w-lg">
        <h2 className="text-2xl font-bold text-gray-900">
          Why choose <span className="text-black">LRQA?</span>
        </h2>
        <p className="mt-3 text-gray-700 text-lg leading-relaxed">
          Our connected portfolio of assurance solutions, combined with our
          data-driven decision making and on-the-ground expertise, means we are
          uniquely positioned to help you navigate risk and shape a more
          sustainable and secure future for your business, your people, your
          stakeholders, and the planet.
        </p>

        {/* Links Section */}
        <div className="mt-4 space-y-2">
          {[
            "Find out more about LRQA",
            "What our clients say about us",
            "Hear from our experts",
          ].map((text, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center text-goldenYellow hover:text-yellow font-medium transition-all duration-300 hover:underline"
            >
              ➜ <span className="ml-2">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
