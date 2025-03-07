import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import img from "../../public/Images/pic.png";
export default function HomeBanner() {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="Videos/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for shadow effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10  text-white p-3">
        {/* Upper Content */}
        <h1 className="text-2xl md:text-4xl font-bold pt-20 md:pt-32 text-center ">
          Welcome to Our App. Lets explore
        </h1>
        <p className="my-6 pt-4 text-lg md:text-xl max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          laborum id soluta et corporis! Corporis ullam nostrum blanditiis
          suscipit soluta tempora consequatur consequuntur asperiores earum
          incidunt
        </p>
        <div className="md:flex gap-6 space-y-4 md:space-y-0 ">
          <div className="flex items-center font-semibold gap-2 text-lg hover:underline transition-transform duration-300 cursor-pointer">
            <div>
              <BsArrowRight className="text-yellow" />
            </div>
            <p>Explore</p>
          </div>
          <div className="flex items-center font-semibold gap-2 text-lg hover:underline transition-transform duration-300 cursor-pointer">
            <div>
              <BsArrowRight className="text-yellow" />
            </div>
            <p>Learn More</p>
          </div>
          <div className="flex items-center font-semibold gap-2 text-lg hover:underline transition-transform duration-300 cursor-pointer">
            <div>
              <BsArrowRight className="text-yellow" />
            </div>
            <p>Contact Us</p>
          </div>
        </div>
        {/* Lower content */}
        <div className="flex items-center justify-between my-12">
          <div className="lg:max-w-lg max-w-sm ml-10 py-20">
            <h1 className="text-xl font-bold py-2">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex
              natus quaerat veniam suscipit ratione quas molestiae adipisci
              totam in?
            </p>
            <button
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
              className="mt-4 h-10 w-60 font-semibold flex justify-center items-center hover:bg-yellow bg-goldenYellow transition-color duration-300 cursor-pointer absolute z-40"
            >
              View Our Services
            </button>
          </div>
          <div
          className="hidden md:block"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 23% 0)" }}
          >
            <Image alt="bg" src={img} className="h-80 w-96"></Image>
          </div>
          <div
            style={{ clipPath: "polygon(100% 0, 84% 100%, 0 100%, 0 0)" }}
            className="h-72 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl max-w-[350px] w-full border-2 border-yellow absolute"
          >
            <div
              className="h-6 bg-goldenYellow w-52 flex justify-center items-center text-lightWhite font-semibold"
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
            >
              Company Update
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
