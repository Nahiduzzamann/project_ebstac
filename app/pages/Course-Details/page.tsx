"use client";
import CorporateTaxSection from "@/app/components/CorporateTaxSectio";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillEye,
  AiFillLock,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { FaBook, FaCertificate, FaClock, FaLanguage, FaSignal } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import dummy  from '../../../public/Images/dummy1.png'
import Image from "next/image";
const items = [
  {
    value: "info",
    icon: <BiDownArrow />,
    title: "Product Info",
  },
];
const lectures = [
  { title: "Lecture 1.1 Introduction", duration: "1 minute", isUnlocked: true },
  { title: "Lecture 1.2 Overview", duration: "1 minute", isUnlocked: true },
  {
    title: "Lecture 1.3 Course Materials",
    duration: "5 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.4 Corporate Tax at a glance",
    duration: "5 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.5 Minimum Tax on Business Income",
    duration: "6 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.6 Income Considered as Business Income",
    duration: "20 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.7 Allowable Deductions",
    duration: "19 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.8 Non Allowable Deductions",
    duration: "12 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.9 Documents Required to Submit Corporate Tax Return",
    duration: "2 minutes",
    isUnlocked: false,
  },
  {
    title: "Lecture 1.10 Tax Planning in case of Corporate Tax Return",
    duration: "11 minutes",
    isUnlocked: false,
  },
  {
    title:
      "Lecture 1.11 Practical Example on how to Compute Income from Business",
    duration: "18 minutes",
    isUnlocked: false,
  },
];
const CorporateTaxCalculation = () => {
  return (
    <div className="pt-36 md:pt-40 bg-lightWhite">
      <CorporateTaxSection></CorporateTaxSection>
      <div className="container mx-auto p-3 bg-lightWhite space-y-4 ">
         {/* sticky card */}
         <div className=" relative container mx-auto block lg:hidden">
        <div className={` max-w-2xl `}>
        <CourseCard 
        // image=''
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
        <div className="text-darkBlack border rounded-md p-2 max-w-2xl">
          <Stack className="">
            <Heading size="md" className="uppercase font-semibold">
              Curriculum
            </Heading>
            <AccordionRoot collapsible defaultValue={["info"]}>
              {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <div className="border-t-2 p-2">
                    <AccordionItemTrigger className="bg-yellow p-1 shadow">
                      <BiDownArrow fontSize="lg" color="fg.subtle">
                        {item.icon}
                      </BiDownArrow>
                      {item.title}
                    </AccordionItemTrigger>
                  </div>
                  <AccordionItemContent>
                    <div className=" p-2  rounded-lg">
                      <div className="space-y-3">
                        {lectures.map((lecture, index) => (
                          <LectureItem key={index} {...lecture} />
                        ))}
                      </div>
                    </div>
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Stack>
        </div>
        {/* overview */}
        <div>
          <Overview />
        </div>
        <div className=" border rounded-md p-2 max-w-2xl ">
          <RatingReview />
        </div>
        
      </div>
     
    </div>
  );
};

export default CorporateTaxCalculation;

interface LectureItemProps {
  title: string;
  duration: string;
  isUnlocked: boolean;
}

const LectureItem: React.FC<LectureItemProps> = ({
  title,
  duration,
  isUnlocked,
}) => {
  return (
    <Link
      href=""
      className="flex items-center justify-between px-4 py-3 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-200"
    >
      <div className="flex items-center gap-3">
        <FiFileText className="text-blue-500 text-lg" />
        <span className="font-medium text-gray-800">{title}</span>
      </div>

      <div className="flex justify-between items-center min-w-24">
        <span className="text-sm text-gray-600">{duration}</span>
        {isUnlocked ? (
          <AiFillEye className="text-green-500 text-lg" />
        ) : (
          <AiFillLock className="text-gray-400 text-lg" />
        )}
      </div>
    </Link>
  );
};

const Overview = () => {
  return (
    <div className="max-w-2xl shadow-md border rounded-lg p-2">
      {/* Title */}
      <h2 className="text-xl font-bold text-darkBlack border-b pb-2 mb-4">
        OVERVIEW
      </h2>

      {/* Content */}
      <div className="text-gray-800 text-sm space-y-4">
        <p className="font-medium">Contents of the training:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Corporate Tax Rate at a glance</li>
          <li>Minimum Tax on business income</li>
          <li>Income considered as business income</li>
          <li>General allowable deduction in case of business income</li>
          <li>Special allowable deduction in case of business income</li>
          <li>The deduction is not allowable in certain cases</li>
          <li>Tax planning in case of corporate tax return</li>
          <li>Documents required to submit a corporate tax return</li>
          <li>Corporate Tax Return Preparation</li>
        </ol>

        {/* Speaker Info */}
        <div>
          <p className="font-medium">Speaker:</p>
          <p className="font-semibold">Imrul Kayas, FCA</p>
          <p className="text-gray-600 text-sm">
            Chartered Accountant & Professional Trainer
          </p>
        </div>
      </div>
    </div>
  );
};

const RatingReview: React.FC = () => {
  const [ratings, setRatings] = useState<number[]>([]);

  const handleRating = (value: number) => {
    setRatings([...ratings, value]);
  };

  const averageRating =
    ratings.length > 0
      ? ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
      : 0;

  const ratingCount = (stars: number) =>
    ratings.filter((r) => r === stars).length;

  const ratingPercentage = (stars: number) =>
    ratings.length > 0 ? (ratingCount(stars) / ratings.length) * 100 : 0;

  return (
    <div className="">
      {/* Title */}
      <h2 className="text-2xl font-bold text-darkBlack border-b pb-2 mb-4">
        REVIEWS
      </h2>

      {/* Main Review Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Average Rating */}
        <div className="text-darkBlack">
          <p className="mb-2">Average Rating</p>
          <div className="flex flex-col items-center bg-lightWhite p-6 rounded-lg shadow-md border">
            <span className="text-6xl font-bold ">
              {averageRating.toFixed(1)}
            </span>
            <div className="flex text-yellow-500 text-2xl mt-2 text-goldenYellow">
              {[...Array(5)].map((_, i) =>
                i < Math.round(averageRating) ? (
                  <AiFillStar key={i} />
                ) : (
                  <AiOutlineStar key={i} />
                )
              )}
            </div>
            <p className="text-gray-500 text-sm mt-2">
              {ratings.length} rating{ratings.length !== 1 && "s"}
            </p>
          </div>
        </div>

        {/* Detailed Ratings */}
        <div className="text-darkBlack">
          <p className="mb-2">Detailed Rating</p>
          <div className="space-y-2 p-2 rounded-lg shadow-md border">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center">
                <span className="w-6  font-semibold">{star}</span>
                <div className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden mx-2">
                  <div
                    className="h-full bg-yellow-500 transition-all duration-300"
                    style={{ width: `${ratingPercentage(star)}%` }}
                  ></div>
                </div>
                <span className="w-10 text-darkBlack text-sm font-medium">
                  {ratingPercentage(star).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rate this product */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-darkBlack">
          Rate this product:
        </h3>
        <div className="flex justify-center mt-2 space-x-2 text-yellow-500 text-3xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => handleRating(star)}>
              <AiFillStar className="text-goldenYellow" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
interface CourseCardProps {
  image?: string;
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
        <p className="text-sm text-gray-600">With <span className="font-semibold">{instructor}</span></p>

        {/* Price & Add to Cart */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-red-600 text-2xl font-bold">৳ {price.toLocaleString()}</span>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition">
            ADD TO CART
          </button>
        </div>

        {/* Course Features */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-darkBlack">Course Features</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><FaBook /> Lectures: {lectures}</li>
            <li className="flex items-center gap-2"><FaClock /> Duration: {duration}</li>
            <li className="flex items-center gap-2"><FaSignal /> Skill level: {skillLevel}</li>
            <li className="flex items-center gap-2"><FaLanguage /> Language: {language}</li>
            <li className="flex items-center gap-2"><FaCertificate /> Certificate: {certificate ? "Yes" : "No"}</li>
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