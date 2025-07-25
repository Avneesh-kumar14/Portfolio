import React from 'react';
import Image from './Common/Image';


const Header = () => {
  return (
    <div>
     
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center bg-primary text-textcolor px-4 md:px-8 py-6 md:py-8 mx-10">
       
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          
          <Image src="/assests/logo.png" alt="Logo" className="h-7" />
          <span className="text-xl font-bold tracking-wide">Enver</span>
        </div>

        
        <ul className="flex flex-wrap gap-5 justify-center md:ml-10 text-sm md:text-base opacity-70">
          <li>Home</li>
          <li>Service</li>
          <li>Our Project</li>
          
          <li>About</li>
        </ul>

        
        <button className="border-2 rounded-lg px-4 py-1 text-sm md:text-base  mt-4 md:mt-0">
          Contact Us
        </button>
      </div>

      
      <div className="flex flex-col lg:flex-row w-full h-full items-center bg-primary px-4 md:px-8 mx-10">
        
        <div className="w-full lg:w-1/2">
          <div className="text-textcolor text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-6 md:mt-10">
            <h2>Build Your</h2>
            <h2>Awesome</h2>
            <h2>Platform</h2>
          </div>

          <div className="text-textcolor opacity-70 text-base md:text-lg mt-6 space-y-1">
            <p>Enver studio is a digital studio that offers several services</p>
            <p>such as UI/UX Design to developer, we will provide the best</p>
            <p>service for those of you who use services.</p>
          </div>

          <div className="mt-6">
            <button className="flex items-center gap-2 bg-buttoncolor text-textcolor px-4 py-2 rounded-md text-sm md:text-base">
              <span>Our Services</span>
              
            </button>
          </div>
        </div>

       
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center h-[75vh]">
          <div className="relative flex justify-center items-center"> 
            <Image src="/assests/WhatsApp2.png" alt="hero"  />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Header;
