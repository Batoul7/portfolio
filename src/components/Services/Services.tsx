import { servData } from "../../Data/ServiceData";
import Title from "../Title/Title";
import Serv from "./Serv";

export default function Services() {
  
  return (
    <section id="services" className="p-main-padding bg-white dark:bg-my-primary text-my-primary dark:text-white border-b border-green-800 border-opacity-70" >
        <Title title='Services' subTitle='What I offer'/>
        <div className="container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <Serv data={servData} />
        </div>
    </section>
  )
}
