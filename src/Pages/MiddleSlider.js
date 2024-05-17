import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiddleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="relative">
            <div className="relative">
                <img src="assets/banner.png" className="h-[400px] w-full" alt="Banner" />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 py-[30px]">
                <div className='w-3/4 mx-auto'>
                    <div className='mt-20 '>
                        <Slider {...settings}>
                            {data.map((d) => (
                                <div>
                                    <div key={d.name} className=' h-[100px] text-black rounded-xl'>
                                        <div className='h-[100px] rounded-t-xl  flex justify-center items-center mt-[40px] '>
                                            <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                                        </div>

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
            </div>
            
        </div>

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

export default MiddleSlider