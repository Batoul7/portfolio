import { useEffect, useState } from "react";
import { TechSkillsData } from "../../Data/SkillsData";

const TechnicalSkills = () => {

  const [progress, setProgress] = useState<number[]>(TechSkillsData.map(() => 0));

  useEffect(() => {
    const interval = setTimeout(() => {
      setProgress(TechSkillsData.map((skill) => skill.percentage));
    }, 300); 
    return () => clearTimeout(interval);
  }, []);

  return (
    <div data-aos="fade-up" className="w-full sm:basis-[45%] pt-10">
      <h2 className="text-xl sm:text-2xl font-medium font-poppins mb-6 "><span className="text-my-secondery">Technical</span>  Skills</h2>
      <div className="flex flex-col gap-5">
        {TechSkillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span className="text-my-secondery">{progress[index]}%</span>
            </div>
            <div className="bg-gray-300 dark:bg-white rounded-full h-2.5">
              <div
                className="bg-my-secondery h-2.5 rounded-full "
                style={{ width: `${progress[index]}%`,  transition: "width 2s ease-in-out",}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
