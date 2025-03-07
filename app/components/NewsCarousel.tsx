"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img from "@/public/Images/pic.png";
import { TfiEmail } from "react-icons/tfi";

const newsItems = [
  {
    id: 1,
    title: "LRQA acquires Core Business Solutions (CBS)",
    description:
      "LRQA has acquired Core Business Solutions, Inc. (CBS), a US-based provider of advisory services and software for Quality...",
    image: "/",
  },
  {
    id: 2,
    title: "LRQA recognized for cybersecurity leadership in identity security",
    description:
      "LRQA is proud to announce that it has been recognized for its exceptional contributions to identity security as...",
    image: "/public/Images/pic.png",
  },
  {
    id: 3,
    title: "Three new brands join the Ungal Kural helpline...",
    description:
      "We are thrilled to announce that two US-based retailers and one German-based retailer have joined the Ungal Kural/Hamari...",
    image: "/public/Images/pic.png",
  },
  {
    id: 4,
    title: "Three new brands join the Ungal Kural helpline...",
    description:
      "We are thrilled to announce that two US-based retailers and one German-based retailer have joined the Ungal Kural/Hamari...",
    image: "/public/Images/pic.png",
  },
];

const NewsCarousel: React.FC = () => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
    <div className="relative bg-[#0A0A1A] py-16">
      <div className=" container mx-auto px-3">
        <h2 className="text-white text-4xl font-bold  mb-8">
          Latest news, insights and upcoming events
        </h2>

        <div className="relative py-6">
          <Slider ref={(s) => setSlider(s)} {...settings}>
            {newsItems.map((item) => (
              <div key={item.id} className="">
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                  <div className="">
                    <Image
                      src={img}
                      alt={item.title}
                      className="w-full h-[300px] object-cover transition-all duration-500 group-hover:brightness-75"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <button
            onClick={() => slider?.slickPrev()}
            className="absolute -bottom-16 transform -translate-y-1/2  text-white rounded-full h-10 w-10 hover:bg-yellow border-2 border-yellow transition-colors duration-300"
          >
            ←
          </button>

          <button
            onClick={() => slider?.slickNext()}
            className="absolute -bottom-16 left-12 transform -translate-y-1/2  text-white rounded-full h-10 w-10 hover:bg-yellow border-2 border-yellow transition-colors duration-300"
          >
            →
          </button>
        </div>
      </div>
      <section className=" text-white py-16 flex flex-col items-center">
        {/* Email Icon */}
        <div className="mb-2">
        <TfiEmail className="text-7xl text-goldenYellow" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="font-bold">Subscribe</span> to our newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-center my-1">
          Stay ahead with the latest news and insights that matter to your
          business.
        </p>

        {/* Sign Up Button */}
        <button
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
          }}
          className="mt-2 bg-goldenYellow text-lightWhite px-6 py-3 font-semibold text-lg duration-300 hover:bg-yellow transition-colors"
        >
          Sign up
        </button>
      </section>
    </div>
  );
};

export default NewsCarousel;