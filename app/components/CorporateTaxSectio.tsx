import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaCertificate,
  FaClock,
  FaLanguage,
  FaSignal,
} from "react-icons/fa";
import dummy  from '../../public/Images/dummy1.png'
import Image from "next/image";
const CorporateTaxSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      if (scrollPosition > 120 && scrollPosition + windowHeight < documentHeight) {
        if (!scrolled) {
          setShow(true);
          setScrolled(true);
        }
      } else {
        if (scrolled || scrollPosition + windowHeight >= documentHeight) {
          setShow(false);
          setScrolled(false);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  return (
    <div className="bg-darkBlack text-lightWhite py-10">
      <div className="container p-3 rounded-lg mx-auto">
        {/* sticky card */}
        <div className=" relative container mx-auto hidden lg:block">
          <div
            className={` ${
              show ? "fixed top-[80px] right-12" : "absolute top-10 right-2"
            } `}
          >
            <CourseCard
              title="Advanced Negotiation"
              instructor="Abdullah Al Masud"
              price={1000}
              lectures={12}
              duration="2 hours 3 minutes"
              skillLevel="All levels"
              language="Bangla"
              certificate={true}
            />
          </div>
        </div>
        {/* sticky CARD END  */}
        <div className="max-w-2xl">
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-4">
            Corporate Tax Calculation
          </h2>

          {/* Content */}
          <p className="text-gray-300 leading-relaxed mb-6 text-justify">
            Contents of the training: Corporate Tax Rate at a glance, Minimum
            Tax on business income, Income considered as business income,
            General allowable deduction in case of business income, Special
            allowable deduction in case of business income, The deduction is not
            allowable in certain cases, Tax planning in case of corporate tax
            return, Documents required to submit a corporate tax return,
            Corporate Tax Return Preparation.
            <br />
            <br />
            Speaker: <span className="font-semibold">Imrul Kayas, FCA</span> -
            Chartered Accountant & Professional Trainer.
          </p>

          {/* Teacher Section */}
          <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
            <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
              {/* Placeholder for Image */}
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
              </Avatar.Root>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Teacher</p>
              <p className="text-lg font-bold">Imrul Kayas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTaxSection;
interface CourseCardProps {
  title: string;
  instructor: string;
  price: number;
  lectures: number;
  duration: string;
  skillLevel: string;
  language: string;
  certificate: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  price,
  lectures,
  duration,
  skillLevel,
  language,
  certificate,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-lg overflow-hidden">
      {/* Course Image */}
      <div className="relative">
      <Image src={dummy} alt={title} className="w-full h-56 object-cover" />
      </div>

      {/* Course Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-darkBlack">{title}</h2>
        <p className="text-sm text-gray-600">
          With <span className="font-semibold">{instructor}</span>
        </p>

        {/* Price & Add to Cart */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-red-600 text-2xl font-bold">
            ৳ {price.toLocaleString()}
          </span>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition">
            ADD TO CART
          </button>
        </div>

        {/* Course Features */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-darkBlack">
            Course Features
          </h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaBook /> Lectures: {lectures}
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Duration: {duration}
            </li>
            <li className="flex items-center gap-2">
              <FaSignal /> Skill level: {skillLevel}
            </li>
            <li className="flex items-center gap-2">
              <FaLanguage /> Language: {language}
            </li>
            <li className="flex items-center gap-2">
              <FaCertificate /> Certificate: {certificate ? "Yes" : "No"}
            </li>
          </ul>
        </div>

        {/* Social Share Icons */}
        <div className="mt-4 flex justify-center space-x-4 text-gray-500">
          <button className="hover:text-darkBlack">🌐</button>
          <button className="hover:text-darkBlack">❌</button>
          <button className="hover:text-darkBlack">🔗</button>
          <button className="hover:text-darkBlack">📌</button>
        </div>
      </div>
    </div>
  );
};
