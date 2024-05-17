import React from 'react'
import { FaBaseballBall } from 'react-icons/fa'
import { FaFilter, FaPersonSwimming, FaVolleyball } from 'react-icons/fa6'
import { GiShuttlecock } from 'react-icons/gi'
import { MdOutlineSportsTennis } from 'react-icons/md'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div class="flex justify-center ">
        <span className="font-medium text-[30px] text-white">Venues near me</span>
      </div>
      <div className="flex  items-center justify-center text-white ">
        <div className="flex  items-center justify-center text-white">
          <div className="flex gap-[20px]">
            <div className="flex flex-col items-center">
              <span className='mr-1 mt-[2px]'><FaBaseballBall /></span>
              <p>Cricket</p>
            </div>
            <div className="flex flex-col items-center">
              <span className='mr-1 mt-[2px]'><FaVolleyball /></span>
              <p>Football</p>
            </div>
            <div className="flex flex-col items-center">
              <span className='mr-1 mt-[2px]'><FaPersonSwimming /></span>
              <p>Swimming</p>
            </div>
            <div className="flex flex-col items-center">
              <span className='mr-1 mt-[2px]'><MdOutlineSportsTennis /></span>
              <p>TennisBall</p>
            </div>
            <div className="flex flex-col items-center text-red-700 ">
              <span className='mr-1 mt-[2px] transform rotate-180 '><GiShuttlecock /></span>
              <p>Badminton</p>
            </div>

          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <hr className='flex-grow text-red-700 h-[2px] border border-black mr-[320px]  ml-[450px] ' />
        <span className='text-red-500 mr-[100px] mb-[10px]'><FaFilter /></span>
      </div>

      {/* 1st slider */}


      <div className='w-3/4 mx-auto overflow-hidden'>
        <div className='mt-2 '>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className='bg-white h-[450px] text-black rounded-xl'>
                <div className='h-56 rounded-t-xl bg-white flex justify-center items-center '>
                  <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p>{d.review}</p>
                  <button className='bg-red-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      )
      {/* circle slider  */}

      <div className="flex justify-end ">

        <div className=' flex text-[20px] mr-[100px] mt-[20px] '>
          <span className='text-red mr-1 mt-[2px]'><FaFilter /></span>
        </div>
      </div>

      <div class="flex justify-center">
        <span className="font-medium text-[30px] text-white">Sports Event & Offer</span>
      </div>
      <div className="flex gap-[20px] items-center justify-center text-black ">


        <span className='text-[20px] font-[400] text-red-500 '>Offer</span>
        <span className='text-[20px] font-[400] text-white '>Events</span>
      </div>



      <div className='w-3/4 mx-auto'>
        <div className='mt-2'>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className='relative bg-white h-[250px] text-black rounded-xl'>
                <button className='absolute top-2 left-2 bg-red-500 text-white text-lg px-6 ml-[80px] mt-[180px] rounded-xl text-nowrap'>Book Now</button>
                <div className='h-56 rounded-t-xl bg-indigo-400 flex justify-center items-center'>
                  <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>




      {/* <div className="flex gap-[40px] items-center justify-center mt-[20px]">
      <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
        <img
          className="w-full"
          src="assets/slider5.jpg"
          alt="Card image cap"
        />
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-red-500 font-semibold text-[15px] px-[4px] py-[1px] rounded-xl">
          Buy Now
        </button>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
        <img
          className="w-full"
          src="assets/slider5.jpg"
          alt="Card image cap"
        />
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-red-500 font-semibold text-[15px] px-[4px] py-[1px] rounded-xl">
          Buy Now
        </button>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
        <img
          className="w-full"
          src="assets/slider5.jpg"
          alt="Card image cap"
        />
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-red-500 font-semibold text-[15px] px-[4px] py-[1px] rounded-xl">
          Buy Now
        </button>
      </div>
      </div> */}

      <div class="flex justify-center ">
        <span className="font-medium text-[30px] text-white">Training By Professionals
        </span>
      </div>
      <div className="flex  items-center justify-center text-white ">
        <div className="flex gap-[20px] mt-[20px]">
          <div className="flex flex-col items-center">
            <span className='mr-1 mt-[2px]'><FaBaseballBall /></span>
            <p>Cricket</p>
          </div>
          <div className="flex flex-col items-center">
            <span className='mr-1 mt-[2px]'><FaVolleyball /></span>
            <p>Football</p>
          </div>
          <div className="flex flex-col items-center">
            <span className='mr-1 mt-[2px]'><FaPersonSwimming /></span>
            <p>Swimming</p>
          </div>
          <div className="flex flex-col items-center">
            <span className='mr-1 mt-[2px]'><MdOutlineSportsTennis /></span>
            <p>TennisBall</p>
          </div>
          <div className="flex flex-col items-center text-red-700 ">
            <span className='mr-1 mt-[2px] transform rotate-180 '><GiShuttlecock /></span>
            <p>Badminton</p>
          </div>

        </div>
      </div>

      {/* <div className="flex gap-[40px] items-center justify-center mt-[20px]">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src='assets/slider5.jpg'
            alt="Card image cap"
          />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Card title</h5>
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src='assets/slider5.jpg'
            alt="Card image cap"
          />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Card title</h5>
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src='assets/slider5.jpg'
            alt="Card image cap"
          />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Card title</h5>
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}

    </div >
  )
}
const data = [
  {
    name: 'bony',
    img: 'assets/sports6.jpg',
    review: 'Combines AI and h to get you .List. Easy Integration.'
  },
  {
    name: 'bony',
    img: 'assets/sports6.jpg',
    review: 'Combines AI and h to get you .List. Easy Integration.'
  },
  {
    name: 'bony',
    img: 'assets/sports6.jpg',
    review: 'Combines AI and h to get you .List. Easy Integration.'
  },
  {
    name: 'bony',
    img: 'assets/sports6.jpg',
    review: 'Combines AI and humans for speed and accuracy. Plus expert consulting to get you started. Filter text submissions. Moderate images and video. Get your free trial today! Free Trial. Fast, Accurate & Reliable. Custom Block & Allow List. Easy Integration.'
  },
  {
    name: 'bony',
    img: 'assets/sports6.jpg',
    review: 'Combines AI and humans for speed and accuracy. Plus expert consulting to get you started. Filter text submissions. Moderate images and video. Get your free trial today! Free Trial. Fast, Accurate & Reliable. Custom Block & Allow List. Easy Integration.'
  },
]

export default Body