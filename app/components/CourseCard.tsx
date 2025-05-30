"use client";
import { useState } from "react";
import { useCardContext } from "../providers/CardContextProvider";
import Image from "next/image";
import { CardData } from "../types";
import Link from "next/link";

interface CourseCardProps {
  card: CardData;
}

const CourseCard: React.FC<CourseCardProps> = ({ card }) => {
  const { addToCart } = useCardContext();
  const [hover, setHover] = useState(false);

  return (
   <Link href={`${hover ?'': '../pages/Course-Details'}`} >
    <div className="border border-goldenYellow shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div
          className="relative w-full h-48 overflow-hidden   transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={card.image}
            alt={card.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 border-[6px] border-black"
          />
          {hover && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2  bg-yellow  px-3 py-2 text-lightWhite  hover:bg-goldenYellow transition uppercase cursor-pointer font-semibold text-[10px] md:text-sm"
              onClick={() => addToCart(card)}
            >
              Add to Cart
            </div>
          )}
        </div>
        <h3 className="text-lg py-2 font-semibold text-darkBlack    text-center">
          {card.title}
        </h3>
      </div>
      <div className="my-3 mx-4">
        <div className=" flex">
          <div className="h-[2px] bg-lightGray  w-full"></div>
          <div className="h-[2px] bg-yellow  w-24"></div>
          <div className="h-[2px] bg-lightGray  w-full"></div>
        </div>
        <div className="my-2 gap-2 flex justify-end items-center">
          {card.oldPrice && (
            <p className="text-lightGray   font-semibold font-sans text-lg lg:text-xl line-through">
              ৳{card.oldPrice}
            </p>
          )}
          <p className="text-red-600 font-semibold font-sans text-xl lg:text-2xl  ">
            <span className="">৳</span>
            {card.newPrice}
          </p>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default CourseCard;
