import React from 'react'

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 bg-blue-800 text-white h-72 py-4 px-[100px] gap-x-8">
    {/* First Column */}
    <div className="flex  justify-center mt-[30px] gap-[100px]">
    <div className="flex flex-col">
    <div className="font-bold text-xl">Make money with us</div>
            <div>Careers</div>
            <div>Blog</div>
            <div>About Sports</div>
            <div>Investor relations</div>
            <div>Sports devices</div>
            <div>Sports science</div>
        </div>
        <div className="flex flex-col">
        <div className="font-bold text-xl">Make money with us</div>
            <div>Careers</div>
            <div>Blog</div>
            <div>About Sports</div>
            <div>Investor relations</div>
            <div>Sports devices</div>
            <div>Sports science</div>
        </div>
    </div>
    
    {/* Second Column */}
    <div className="flex flex-col justify-center items-center mt-[0px]">
        <div className="font-bold text-xl">Make money with us</div>
        <div className="flex flex-col">
            <div>Sell product </div>
            <div>Sell on </div>
            <div>Shop with points</div>
            <div>Reload your balance</div>
            <div>Sports currency converter</div>
        </div>
    </div>
    
    {/* Third Column */}
    <div className="flex flex-col justify-center items-center mt-[25px]">
        <div className="font-bold text-xl">These are the games</div>
        <div className="flex flex-col">
            <div>Cricket</div>
            <div>Bollyball</div>
            <div>Badminton</div>
            <div>Chess</div>
            <div>Carrom</div>
            <div>KHO KHO</div>
            <div>Hidency</div>
        </div>
    </div>
</footer>



  )
}

export default Footer