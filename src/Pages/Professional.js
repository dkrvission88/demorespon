import React from "react";
import Slider from "react-slick";
import { FaBaseballBall, FaFilter } from "react-icons/fa";
import { FaPersonSwimming, FaVolleyball } from "react-icons/fa6";
import { MdOutlineSportsTennis } from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Professional = () => {
  const settingsb = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div class="flex justify-center ">
        <span className="font-medium text-[30px] text-white mt-[20px]">
          Training & Professioanls
        </span>
      </div>
      <div className="flex  items-center justify-center text-white ">
        <div className="flex  items-center justify-center text-white">
          <div className="flex gap-[20px]">
            <div className="flex flex-col items-center">
              <span className="mr-1 mt-[2px]">
                <FaBaseballBall />
              </span>
              <p>Cricket</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="mr-1 mt-[2px]">
                <FaVolleyball />
              </span>
              <p>Football</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="mr-1 mt-[2px]">
                <FaPersonSwimming />
              </span>
              <p>Swimming</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="mr-1 mt-[2px]">
                <MdOutlineSportsTennis />
              </span>
              <p>TennisBall</p>
            </div>
            <div className="flex flex-col items-center text-red-700 ">
              <span className="mr-1 mt-[2px] transform rotate-180 ">
                <GiShuttlecock />
              </span>
              <p>Badminton</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <hr className="flex-grow text-red-700 h-[2px] border border-black mr-[320px]  ml-[450px] " />
        <span className="text-red-500 mr-[100px] mb-[10px]">
          <FaFilter />
        </span>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="mt-[2px] ">
          <Slider {...settingsb}>
            {data0.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 rounded-t-xl bg-indigo-200 flex justify-center items-center ">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.review}</p>
                  <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
const data0 = [
  {
    name: "bony",
    img: "assets/image2.jpg",
    review: "Combines AI and h to get you .List. Easy Integration.",
  },
  {
    name: "bony",
    img: "assets/sports6.jpg",
    review: "Combines AI and h to get you .List. Easy Integration.",
  },
  {
    name: "bony",
    img: "assets/sports2.jpg",
    review: "Combines AI and h to get you .List. Easy Integration.",
  },
  {
    name: "bony",
    img: "assets/sports5.jpg",
    review:
      "Combines AI and humans for speed and accuracy. Plus expert consulting to get you started. Filter text submissions. Moderate images and video. Get your free trial today! Free Trial. Fast, Accurate & Reliable. Custom Block & Allow List. Easy Integration.",
  },
  {
    name: "bony",
    img: "assets/sports1 .jpg",
    review:
      "Combines AI and humans for speed and accuracy. Plus expert consulting to get you started. Filter text submissions. Moderate images and video. Get your free trial today! Free Trial. Fast, Accurate & Reliable. Custom Block & Allow List. Easy Integration.",
  },
];

export default Professional;
