import React from 'react';
import Image from './Common/Image';


const Header = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center bg-[#19191B] text-white px-4 md:px-8 py-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src="/assests/logo.png" alt="Logo" className="h-7" />
          <span className="text-xl font-bold tracking-wide">Enver</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-5 justify-center md:ml-10 text-sm md:text-base opacity-70">
          <li>Home</li>
          <li>Service</li>
          <li>Our Project</li>
          
          <li>About</li>
        </ul>

        {/* Contact Button */}
        <button className="border-2 rounded-sm px-4 py-1 text-sm md:text-base mt-4 md:mt-0">
          Contact Us
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row w-full h-full items-center bg-[#19191B] px-4 md:px-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-6 md:mt-10">
            <h2>Build Your</h2>
            <h2>Awesome</h2>
            <h2>Platform</h2>
          </div>

          <div className="text-gray-400 text-base md:text-lg mt-6 space-y-1">
            <p>Enver studio is a digital studio that offers several services</p>
            <p>such as UI/UX Design to developer, we will provide the best</p>
            <p>service for those of you who use services.</p>
          </div>

          <div className="mt-6">
            <button className="flex items-center gap-2 bg-btnclr text-white px-4 py-2 rounded-md text-sm md:text-base">
              <span>Our Services</span>
              {/* <Image src="/assests/btnarr.png" alt="arrow" className="h-5 w-5" /> */}
            </button>
          </div>
        </div>

       
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center h-[75vh]">
         
          {/* <img src="/assests/wave.png" alt="wave" className="h-7 w-20 absolute top-5 left-2" /> */}
         {/* c=" <img sr/assests/triangle.png" alt="triangle" className="h-[120px] w-[105px] absolute bottom-0 left-4" /> */}
          {/* <img src="/assests/2circle.png" alt="circle" className="h-[60px] w-[51px] absolute top-0 right-5" /> */}
          {/* <img src="/assests/+img.png" alt="plus" className="h-[33px] w-[33px] absolute bottom-4 right-10" /> */}

          
          <div className="relative flex justify-center items-center">
            {/* <img src="/assests/square.png" alt="square" className="h-[175px] w-[175px] absolute z-0" /> */}
            {/* <img src="/assests/WhatsApp2.png" alt="hero" className="" /> */}
            <Image src="/assests/WhatsApp2.png" alt="hero" className="" />
          </div>

          
        </div>

      </div>
      
    </div>
  );
};

export default Header;
