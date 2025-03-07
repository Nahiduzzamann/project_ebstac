import React from "react";
import ArticleCard from "./ArticleCard";
import img from "@/public/Images/pic.png";
import img1 from "@/public/Images/img1.png";
import img2 from "@/public/Images/img2.png";
import img3 from "@/public/Images/img3.png";
import img4 from "@/public/Images/img4.png";
import img5 from "@/public/Images/img5.png";
export default function WhereWeCanHelpSection() {
  return (
    <div className="bg-[#0A0A1A] md:py-16">
      <div className="container mx-auto p-3">
        <div className="flex justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-white py-4 md:py-6">
            Where we can help
          </h1>
          <button
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
            className="mt-4 h-10 w-60 hidden font-semibold md:flex justify-center items-center hover:bg-lightWhite bg-white transition-color text-yellow duration-300 cursor-pointer"
          >
            View All Services
          </button>
        </div>
        <div className="md:grid grid-cols-3 ">
          <ArticleCard
          color="text-white"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates...The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img}
            href="/"
          />
          <ArticleCard
           color="text-white"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img1}
            href="/"
          />
          <ArticleCard
            color="text-white"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img2}
            href="/"
          />
          <ArticleCard
            color="text-white"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates...The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img3}
            href="/"
          />
          <ArticleCard
            color="text-white"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img4}
            href="/"
          />
          <ArticleCard
            color="text-white"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img5}
            href="/"
          />
        </div>

        <div className="flex justify-center">
          <button
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
            className="mt-4 h-10 w-60 md:hidden font-semibold flex justify-center items-center hover:bg-lightWhite bg-white transition-color text-yellow duration-300 cursor-pointer"
          >
            View All Services
          </button>
        </div>
      </div>
      {/* search section  */}
      <div className=" text-white md:pt-20 pt-10">
        {/* Search Input Section */}
        <div className="flex items-center gap-3 px-3 border-b border-white pb-2 relative max-w-4xl  mx-auto">
          <span className="text-white text-2xl">🔍</span>
          <input
            type="text"
            placeholder="Find what you're looking for"
            className="bg-transparent outline-none text-lg w-full placeholder-white"
          />
          <button
            className="absolute right-0 bg-teal-400 hover:bg-teal-600 transition-colors duration-300 px-5 py-2 font-semibold text-white"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          >
            Search
          </button>
        </div>
        <div className=" w-full mx-auto">
          {/* Scrollable Category List */}
          <div className="mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700">
            <div className="flex gap-4 w-max py-6 md:ml-12 ml-3">
              {[
                "Consumer Goods and Retail",
                "Financial and Professional Services",
                "Energy and Renewables",
                "Transportation and Mobility",
                "Technology",
                "Energy and Renewables",
                "Transportation and Mobility",
                "Technology",
              ].map((category, index) => (
                <button
                  key={index}
                  className="border-2 border-white rounded-full px-5 py-2 whitespace-nowrap transition-all hover:bg-white hover:text-black"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
