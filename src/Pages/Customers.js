import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (

    <div className='w-3/4 mx-auto'>
      <div className='mt-20 '>
        <Slider {...settings}>
          {data.map((d) => (
            
              <div className="key={d.name} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
                <div className="flex justify-center gap-[20px]">
                  <div className="bg-white text-black shadow-lg w-1/4 py-[20px] h-[500px]  rounded-xl">
                    <div className="h-32 flex justify-center items-center pt-4 pb-4">
                      <img src="assets/sports6.jpg" alt="Profile" className="h-32 w-32 rounded-full  "></img>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                      <p className="text-xl font-semibold text-black">Aarti</p>
                      <span className='text-4xl font-bold text-red-500'><FaQuoteLeft /></span>
                      <p className="text-black"> internship, hands-on experience in front-end technologies such as HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React js</p>
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="bg-white text-black shadow-lg w-1/4 py-[20px] h-[450px]  rounded-xl">
                    <div className="h-32 flex justify-center items-center pt-4 pb-4">
                      <img src={d.img} alt="Profile" className="h-32 w-32 rounded-full  "></img>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">

                      <p className='text-xl font-semibold'>{d.name}</p>
                      <span className='text-4xl font-bold text-red-500'><FaQuoteLeft /></span>
                      <p>{d.review}</p>  
                       <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="bg-white text-black shadow-lg w-1/4 py-[20px] h-[500px]  rounded-xl">
                    <div className="h-32 flex justify-center items-center pt-4 pb-4">
                      <img src="assets/sports6.jpg" alt="Profile" className="h-32 w-32 rounded-full  "></img>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                      <p className="text-xl font-semibold text-black">Aarti</p>
                      <span className='text-4xl font-bold text-red-500'><FaQuoteLeft /></span>
                      <p className="text-black"> internship, hands-on experience in front-end technologies such as HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React js</p>
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                        Read More
                      </button>
                    </div>
                  </div>

                </div>
              </div>



           
          ))}
        </Slider>
      </div>
    </div>

  )
}
const data = [
  {
    name: 'boby Parashar',
    img: 'assets/sports6.jpg',
    review: 'internship,  HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React js.'
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
    review: 'Combines AI and h to get you .List. Easy Integration.'
  },
  {
    name: 'bony',
    img: 'assets/sports6.jpg',
    review: 'Combines AI and h to get you .List. Easy Integration.'
  },
 
]

export default Customers