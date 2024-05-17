import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Repeat = () =>  {
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
                <div key={d.name}className='bg-white h-[450px] text-black rounded-xl'>
                    <div className='h-56 rounded-t-xl bg-indigo-400 flex justify-center items-center '>
                        <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className='text-xl font-semibold'>{d.name}</p>
                        <p>{d.review}</p>
                        <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>


  )
}
const data=[
    {
    name:'boby Parashar',
    img:'assets/sports6.jpg',
    review:'internship,  HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React js.'
},
{
    name:'bony',
    img:'assets/sports6.jpg',
    review:'Combines AI and h to get you .List. Easy Integration.'},
{
    name:'bony',
    img:'assets/sports6.jpg',
    review:'Combines AI and h to get you .List. Easy Integration.'},
{
    name:'bony',
    img:'assets/sports6.jpg',
    review:'Combines AI and humans for speed and accuracy. Plus expert consulting to get you started. Filter text submissions. Moderate images and video. Get your free trial today! Free Trial. Fast, Accurate & Reliable. Custom Block & Allow List. Easy Integration.'
},
{
    name:'bony',
    img:'assets/sports6.jpg',
    review:'Combines AI and humans for speed and accuracy. Plus expert consulting to get you started. Filter text submissions. Moderate images and video. Get your free trial today! Free Trial. Fast, Accurate & Reliable. Custom Block & Allow List. Easy Integration.'
},
]

export default Repeat