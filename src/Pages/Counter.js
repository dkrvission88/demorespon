import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { GiWhistle } from 'react-icons/gi'
import { PiFlagPennantFill } from 'react-icons/pi'

const Counter = () => {
    return (
        <div className="relative">
            <section id="counter" className="absolute inset-0 flex justify-center items-center z-10 text-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center justify-center gap-[8px]">
                            <span id="count1" className='text-4xl font-bold' ><BsPeopleFill />
                            </span>
                            <div className='flex flex-col'>
                                <span className='text-4xl font-bold'>1045</span>
                                <p className="mt-2 text-lg">SAVINGS</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-[8px]">
                            <span id="count1" className='text-4xl font-bold' ><PiFlagPennantFill />
                            </span>
                            <div className='flex flex-col'>
                                <span className='text-4xl font-bold'>1045</span>
                                <p className="mt-2 text-lg">SAVINGS</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-[8px]">
                            <span id="count1" className='text-4xl font-bold' > <GiWhistle />
                            </span>
                            <div className='flex flex-col'>
                                <span className='text-4xl font-bold'>1045</span>
                                <p className="mt-2 text-lg">SAVINGS</p>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </section>

            <div className="relative">
                <img src="assets/banner.png" className="h-[200px] w-full" alt="Banner" />
            </div>
        </div>


    )
}

export default Counter