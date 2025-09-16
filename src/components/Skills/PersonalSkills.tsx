import  { useEffect, useState } from "react";
import { ProSkillsData } from "../../Data/SkillsData";

const PersonalSkills = () => {

  const [progress, setProgress] = useState<number[]>(ProSkillsData.map(() => 0));

  useEffect(() => {
    const interval = setTimeout(() => {
      setProgress(ProSkillsData.map((skill) => skill.percentage));
    }, 300); 
    return () => clearTimeout(interval);
  }, []);

  return (
    <div data-aos="fade-up" className="w-full sm:basis-1/2 border-t border-green-800 sm:border-t-0 pt-10">
      <h2 className="text-xl sm:text-2xl font-medium font-poppins"><span className="text-my-secondary">Personal</span> Skills</h2>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {ProSkillsData.map((skill, index) => (
          <div key={index} className="text-center">
            <div className="relative w-20 h-20 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  className="text-gray-300 dark:text-white"
                  strokeWidth="3.8"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="text-my-secondary -rotate-90 "
                  strokeWidth="3.8"
                  strokeDasharray={`${progress[index]}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                  style={{
                    transformOrigin: "50% 50%",
                    transition: "stroke-dasharray 2s ease-in-out",
                  }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                {progress[index]}%
              </span>
            </div>
            <p className="text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;
