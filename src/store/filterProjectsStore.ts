import { create } from "zustand/react";
import { Project, projects } from "../Data/ProjectsData";


type ProjectStore = {
  projects: Project[];
  filter: string;
  setFilter: (filter: string) => void;
  filteredProjects: () => Project[];
};

const useProjectStore = create<ProjectStore>((set, get) => ({
    projects: projects, 
    filter: '',
    setFilter: (filter) => set({ filter }),
    filteredProjects: () => {
      const { projects, filter } = get();
      return filter ? projects.filter((project) => project.type === filter) : projects;
    },
}));

export default useProjectStore;
