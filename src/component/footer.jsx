import React from 'react';
import { Plus } from 'lucide-react'; 


const Footer = () => {
  return (
    <div>
    <div className="bg-[#1e1e20] text-white px-6 py-16 relative overflow-hidden ">
        
          <div className="absolute top-6 right-6 text-white text-xl">
            <Plus size={20} />
          </div>
    
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Heading */}
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Contact us for the service<br />you want to use
              </h2>
            </div>
    
            {/* Button */}
            <div className="mt-6 md:mt-0">
              <button className="bg-[#5454D4] hover:bg-[#4444c4] text-white text-sm px-6 py-2 rounded-md transition translate-x-[-40px] ">
                Contact us
              </button>
            </div>
          </div>
    
          {/* Decorative Circles */}
          {/* Decorative Circles */}
    <div className="absolute bottom-[17%] left-6">
      <div className="w-6 h-6 border-[2px] border- border-white rounded-full absolute"></div>
      <div className="w-6 h-6 border border-white rounded-full absolute translate-x-2 translate-y-2"></div>
    </div>
    
        </div>
    <div
      id="footer"
      className="flex flex-col md:flex-row justify-between items-center bg-[#19191a] text-white px-8 py-6 "
    >
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img src= "/assets/logo.png" alt="logo" className="w-10 h-10" />
        <span className="text-xl font-bold tracking-wide">Enver</span>
      </div>
      <ul className="flex space-x-6 text-sm font-normal mb-4 md:mb-0">
        <li >Support Size</li>
        <li >Policy Privacy</li>
        <li >Terms and Conditions</li>
      </ul>

      <div className="text-xs text-white-400 text-center md:text-right">
        © 2020 Enver, All Rights Reserved
      </div>
    </div>
    </div>
  );
};

export default Footer;
