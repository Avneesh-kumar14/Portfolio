import React from 'react';

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-r bg-primary text-textcolor px-4 md:px-8 py-20 relative overflow-hidden m-10">
      {/* Heading and Icon */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-6xl font-extrabold">Our Awesome Portfolio</h2>
        <img src="/assets/2circle.png" alt="Portfolio Icon" className="w-8 h-8" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ml:grid-cols-6 gap-8">
        <div className="h-[300px]">
          <div className=" p-4 rounded-xl shadow-lg w-50 h-50">
            <img src="/assets/sofaset.png" alt="atmosphere" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
        <div className="h-[300px] mt-6">
          <div className=" p-4 rounded-xl shadow-lg w-50 h-50">
            <img src="/assets/squidgame.png" alt="inviting" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
        <div className="h-[300px] mt-12">
          <div className=" p-4 rounded-xl shadow-lg w-50 h-50">
            <img src="/assets/popular.png" alt="Modern" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;