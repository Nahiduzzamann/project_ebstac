"use client";
import Link from "next/link";
import { useState } from "react";
import { BsAward } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { GoGlobe } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoLeafOutline } from "react-icons/io5";
import { MdOutlineSecurityUpdateWarning } from "react-icons/md";

// Define Type for Accordion Data
type AccordionItemProps = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

export default function AssuranceSection() {
  return (
    <div className="container mx-auto py-12 px-3 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side (Text & Button) */}
      <div className="max-w-lg mb-6 md:mb-0">
        <h2 className="text-3xl font-light text-black">
          Navigate a{" "}
          <span className="text-black font-bold">new era of risk</span>
        </h2>
        <p className="mt-3 text-darkBlack text-md">
          The era of Assurance 4.0 is here. Businesses face a rapidly changing
          world, with a heightened focus on ESG considerations, supply chain
          complexity, and evolving cybersecurity threats.
        </p>
        <p className="mt-3 text-darkBlack text-md">
          These trends have combined with traditional risks—creating a complex
          landscape. To solve business challenges, companies must address key
          risks proactively and holistically.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
            className="mt-6 duration-300 bg-goldenYellow text-lightWhite font-bold px-12 py-3 rounded-md hover:bg-yellow transition"
          >
            Learn more about Assurance 4.0
          </button>
        </div>
      </div>

      {/* Right Side (Accordion) */}
      <div className="max-w-md w-full mt-8 md:mt-0">
        {accordionData.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

// Accordion Item Component
function AccordionItem({ title, content, icon }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className={`w-full flex items-center justify-between py-4 text-lg font-bold transition-colors duration-300 ${
          isOpen ? "text-yellow" : "text-black"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`flex items-center space-x-3 ${isOpen ? "underline" : ""}`}
        >
          {icon}
          <span>{title}</span>
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 pb-2 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-gray-600">{content}</p>
        <Link href="" className="text-yellow underline ">
          How we can help you?
        </Link>
      </div>
    </div>
  );
}

// Accordion Data
const accordionData: AccordionItemProps[] = [
  {
    title: "Assure assets and management systems",
    content:
      "Ensuring compliance and optimal performance for your business assets.",
    icon: <CiCircleCheck className="text-4xl" />,
  },
  {
    title: "Achieve product integrity",
    content:
      "Maintaining high standards of quality and trust in your products.",
    icon: <BsAward className="text-4xl" />,
  },
  {
    title: "Source responsibly",
    content: "Implementing sustainable sourcing strategies.",
    icon: <GoGlobe className="text-4xl" />,
  },
  {
    title: "Navigate the energy transition",
    content: "Adopting greener technologies and reducing carbon footprint.",
    icon: <IoLeafOutline className="text-4xl" />,
  },
  {
    title: "Strengthen cybersecurity maturity",
    content: "Enhancing security frameworks against evolving cyber threats.",
    icon: <MdOutlineSecurityUpdateWarning className="text-4xl" />,
  },
];
