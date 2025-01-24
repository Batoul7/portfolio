import Title from "../Title/Title";
import PersonalSkills from "./PersonalSkills";
import TechnicalSkills from "./TechnicalSkills";


export default function Skills() {
  return (
    <section id="skills" className="p-main-padding bg-white dark:bg-my-primary text-my-primary dark:text-white border-b border-green-800 border-opacity-70" >
    <Title title='Skills' subTitle='My core skills'/>
    <div className="container mx-auto flex flex-col sm:flex-row gap-10 items-center ">
        <TechnicalSkills />
        <PersonalSkills />   
    </div>
  </section>
  )
}
