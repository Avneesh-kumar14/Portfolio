import React from 'react';
import { Plus } from 'lucide-react'; 
const Footer = () => {
  return (
    <div className='m-0 '>
    <div className="bg-primary text-textcolor px-6 py-16 relative overflow-hidden ">
         <div className="absolute -top-12 left-6 text-textcolor text-xl opacity-70 m-10">
           <Plus size={50} />
            </div>
         <div className="absolute top-6 right-16 text-textcolor text-xl opacity-70 m-10">
           <Plus size={50} />
            </div>
          <div className="flex flex-col md:flex-row justify-between items-center m-10">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold p-8 leading-tight">
                Contact us for the service<br />you want to use
              </h2>
            </div>
            <div className="mt-6 md:mt-0 m-10">
              <button className="bg-buttoncolor text-textcolor text-sm px-6 py-2 rounded-md transition translate-x-[-40px] ">
                Contact us
              </button>
            </div>
          </div>
    <div className="absolute bottom-6 left-6 p-14  ">
       <div className="w-6 h-6 border-[2px] border- border-textcolor rounded-full absolute"></div>
       <div className="w-6 h-6 border border-textcolor rounded-full absolute translate-x-2 translate-y-2"></div>
    </div>
    
        </div>
    <div
      id="footer"
      className="flex flex-col md:flex-row justify-between items-center bg-primary text-textcolor px-8 py-8 "
    >
      <div className="flex items-center p-10 gap-2 mb-4 md:mb-0">
        <img src= "/assets/logo.png" alt="logo" className="w-10 h-10" />
        <span className="text-xl font-bold tracking-wide">Enver</span>
      </div>
      <ul className="flex space-x-6 text-sm font-normal mb-4 md:mb-0">
        <li >Support Size</li>
        <li >Policy Privacy</li>
        <li >Terms and Conditions</li>
      </ul>

      <div className="text-xs text-white-400 text-center m-10 md:text-right">
        © 2020 Enver, All Rights Reserved
      </div>
    </div>
    </div>
  );
};
export default Footer;
