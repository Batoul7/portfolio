import React from "react";
import Title from "../Title/Title";
import { timelineData } from "../../Data/TimelineData";



const Timeline: React.FC = () => {
  return (
    <section id="education" className="p-main-padding bg-white dark:bg-my-primary text-my-primary dark:text-white border-b border-green-800 border-opacity-70
    flex flex-col items-center" >
    <Title title='Education' subTitle='My personal journy'/>

      <div className="relative w-full max-w-4xl mt-10 container mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-my-secondery h-full"></div>
        <div className="space-y-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-my-secondery rounded-full border-4 border-black"></div>

              <div className="w-24 mr-5 md:mr-0 md:text-center font-bold text-xl text-my-secondery mb-4 md:mb-0">
                {item.year}
              </div>

              <div data-aos="flip-up" className="bg-black border border-my-secondery rounded-xl p-6 shadow-lg max-w-md relative text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-4 text-white">{item.title}</h2>
                <p className="text-sm text-gray-300">{item.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-my-secondery to-transparent rounded-xl opacity-20 blur-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
