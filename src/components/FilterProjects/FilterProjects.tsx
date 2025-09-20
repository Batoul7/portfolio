import { useMemo } from "react";
import useProjectStore from "../../store/filterProjectsStore";
import FilterButtons from "../FilterButtons/FilterButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FilterProjects: React.FC = () => {
  const filter = useProjectStore((state) => state.filter);
  const projects = useProjectStore((state) => state.projects);

  const filteredProjects = useMemo(() => {
    return filter ? projects.filter((project) => project.type === filter) : projects;
  }, [filter, projects]);

  return (
    <div>
      <FilterButtons/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div  data-aos="fade-up" data-aos-duration="1000"
            key={project.id}
            className="relative  border border-opacity-50 border-my-secondary rounded-lg overflow-hidden group h-44 md:h-48 xl:h-56" >
            <img src={project.img} alt="project photo" className=" w-full h-full group-hover:scale-110 transition-all duration-200 ease-in-out " />
            <div className="absolute top-0 flex flex-col gap-2 bg-my-primary bg-opacity-80 w-full h-full justify-center items-center px-3 sm:px-5 text-center">
              <h2 className="text-lg lg:text-xl 2xl:text-3xl font-medium text-my-secondary">{project.name}</h2>
              <p className="text-sm lg:text-base 2xl:text-lg text-white">{project.description}</p>
              <div className="flex gap-3 items-center text-lg lg:text-xl 2xl:text-2xl">
                {project.demo && (<a href={project.demo} className="hover:scale-110 text-white hover:text-my-secondary"><FontAwesomeIcon icon={faLink} /></a>)}
                {project.code && (<a href={project.code} className="hover:scale-110 text-white hover:text-my-secondary"><FontAwesomeIcon icon={faGithub} /></a>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProjects;
