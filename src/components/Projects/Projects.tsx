import FilterProjects from "../FilterProjects/FilterProjects";
import Title from "../Title/Title";


export default function Projects() {
  return (
    <section id="projects" className="p-main-padding bg-white dark:bg-my-primary text-my-primary dark:text-white border-b border-green-800 border-opacity-70" >
        <Title title='Projects' subTitle='Most recent work'/>
        <div className="container mx-auto">
            <FilterProjects/>
        </div>     
    </section>
  )
}
