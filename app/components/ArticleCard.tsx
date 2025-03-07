"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  type?: string;
  title: string;
  description: string;
  linkText: string;
  imgSrc: string | StaticImageData;
  href: string;
  color:string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  type,
  title,
  description,
  linkText,
  imgSrc,
  href,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative cursor-pointer group overflow-hidden shadow-lg w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full md:h-48 h-96">
        <Image
          src={imgSrc}
          alt="Article"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute bg-black  group-hover:bg transition-all duration-300"></div>
      </div>

      <div
        className={`absolute left-0 top-0 w-full md:h-48 h-96 bg-slate-600 bg-opacity-80 text-white p-3 flex flex-col justify-center text-center
          transform transition-all duration-500 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
      />

      <div className="md:p-5">
        {type && (
          <div
            className={`absolute top-0 left-0 px-3 py-1 text-lg font-semibold text-white
            ${
              type === "Article"
                ? "bg-yellow"
                : type === "Webinar"
                ? "bg-teal-400"
                : type === "Training"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            {type}
          </div>
        )}

        <div className="absolute z-30 top-52 md:top-32 left-3">
          <p className="text-white text-lg font-semibold line-clamp-1">{title}</p>
          <div className="flex flex-col justify-between h-32 md:hidden">
            <p className="text-sm text-lightWhite mt-2 line-clamp-5">
              {description}
            </p>

            <Link
              href={href}
              className="mt-3 inline-flex items-center font-semibold transition-all duration-300 group"
            >
              <span className="w-[20px] text-yellow transition-transform duration-300 group-hover:translate-x-1">
                ➜
              </span>
              <span
                className={`text-lightWhite ml-1 ${
                  isHovered ? "underline" : ""
                }`}
              >
                {linkText}
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex flex-col justify-between h-32 hidden">
          <p className={` ${color} text-sm  mt-2 line-clamp-5`}>{description}</p>

          <Link
            href={href}
            className="mt-3 inline-flex items-center font-semibold transition-all duration-300 group"
          >
            <span className="w-[20px] text-yellow transition-transform duration-300 group-hover:translate-x-1">
              ➜
            </span>
            <span className={`${color} ml-1 ${isHovered ? "underline" : ""}`}>
              {linkText}
            </span>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 md:bottom-auto md:top-[152px] right-0 w-10 h-10 bg-yellow clip-triangle 
       opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      ></div>
    </div>
  );
};

export default ArticleCard;
