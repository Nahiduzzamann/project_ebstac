"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const caseStudies = [
  {
    title: "Driving trust and innovation in additive manufacturing with Shell",
    link: "#",
    image: "/Images/bg1.jpg",
  },
  {
    title: "Elevating operational excellence and employee well-being at BAE Systems",
    link: "#",
    image: "/Images/bg2.png",
  },
  {
    title: "Converting offshore wind power at sea and transmitting it to shore with TenneT",
    link: "#",
    image: "/Images/bg3.jpg",
  },
];

export default function CaseStudies() {
  const [bgImage, setBgImage] = useState(caseStudies[0].image);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-500">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 md:flex h-full w-full container mx-auto p-3">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center items-center p-6 text-white cursor-pointer transition-all duration-500 hover:bg-white/10"
            onMouseEnter={() => setBgImage(study.image)}
          >
            <h3 className="text-lg font-semibold text-center">{study.title}</h3>
            <Link
              href={study.link}
              className="mt-4 text-yellow font-medium hover:underline"
            >
              → View case study
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
