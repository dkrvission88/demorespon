
import React from 'react';
import { FaFilter, FaLocationCrosshairs } from 'react-icons/fa6';
// import React from 'react-icons';
// import logo from '../assets/image2.jpg'

// import userLogin from './src/assets/yellow.png';
// import address from 'assets/img/address.png';
// import myLocation from 'assets/img/my_location_regular_icon.png';

const Navbar = () => {
    return (

        <nav className="bg-white text-white p-4 w-full text-nowrap">

            <div className="container mx-auto flex items-center justify-between">

          
                <a className="flex items-center pl-[2px]" href="/">
                    <img src='assets/nav1.jpg' alt="Game Hunt" title="Game Hunt" className="h-10" />
                </a>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div>

               


                <div>

                    <button
                        id="actionsDropdownButton"
                        data-dropdown-toggle="actionsDropdown"
                        className=" md:w-auto flex items-center justify-center py-1 rounded-[8px] px-3 text-sm font-medium text-black  bg-white  border border-slate-300"
                        type="button"
                    >
                        <div className='flex justify-start'>
                            <span className='text-black text-[16px] flex-grow mr-[200px] font-[400] text-nowrap'>Current Location..</span>
                            <span className='text-[20px] mr-1 mt-[2px] text-red-500'><FaLocationCrosshairs /></span>
                        </div>
                    </button>
                </div>

                
                <div className="hidden md:flex space-x-4">
                    <span className="cursor-pointer text-black Text-nowrap">Gamehunt Academy</span>

                </div>

              
                <div className="relative hidden md:block">
                    <button className="flex items-center text-black px-4 py-2 rounded">
                        Partner
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg hidden group-hover:block">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
                    </div>
                </div>

                <button className="bg-red-600 hover:bg-blue-500 text-white px-4 py-2 rounded-[200px]">
                    Login /Sign Up
                </button>
            </div>
        </nav>
      


    );
};

export default Navbar;

// import { useState } from 'react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="bg-white text-white p-4">
//             <div className="container mx-auto flex items-center justify-between">
//                 <a className="flex items-center" href="/">
//                     <img src='assets/nav1.jpg' alt="Game Hunt" title="Game Hunt" className="h-10" />
//                 </a>
//                 <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
//                     <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                     </svg>
//                 </button>
//                 <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
//                     <div>
//                         {/* Your other navbar content here */}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


