import React from "react";
import { FaCode, FaLayerGroup, FaPalette, FaFilm, FaCamera, FaBezierCurve } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Development",
      description: "Create a platform with the best and coolest quality from us.",
      icon: <FaCode size={30} className="text-blue-400" />,
    },
    {
      title: "UI/UX Designer",
      description: "We provide UI/UX Design services, and of course with the best quality",
      icon: <FaLayerGroup size={30} className="text-red-400" />,
    },
    {
      title: "Graphik Designer",
      description: "We provide Graphic Design services, with the best designers",
      icon: <FaPalette size={30} className="text-yellow-400" />,
    },
    {
      title: "Motion Graphik",
      description: "Create a platform with the best and coolest quality from us.",
      icon: <FaBezierCurve size={30} className="text-yellow-500" />,
    },
    {
      title: "Photography",
      description: "We provide Photography services, and of course with the best quality",
      icon: <FaCamera size={30} className="text-purple-400" />,
    },
    {
      title: "Videography",
      description: "Create a platform with the best and coolest quality from us.",
      icon: <FaFilm size={30} className="text-red-500" />,
    },
  ];
  return (
    <section className="relative bg-[#19191B] text-white py-20 px-4 md:px-20 overflow-hidden">
 <div className="absolute top-4 right-[15%] z-10 w-5 h-5">
  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform -translate-y-1/2" />
  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white transform -translate-x-1/2" />
</div>
<div className="absolute bottom-4 left-[10%] z-10 w-5 h-5">
  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform -translate-y-1/2" />
  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white transform -translate-x-1/2" />
</div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          The Service We Provide <br /> For You
        </h2>
      </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {services.map((service, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

