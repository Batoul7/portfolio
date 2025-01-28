import  { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Modal/Modal";

interface ServProps {
    img:string;
    icon:any;
    title:string;
    desc:string;
    items: string[]; 
}
interface ServComponentProps {
    data: ServProps[]; 
}
export default function Serv({data} : ServComponentProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServProps | null>(null);

  const handleOpenModal = (service: ServProps) => {
      setSelectedService(service);
      setModalOpen(true);
  };

  const handleCloseModal = () => {
      setModalOpen(false);
      setSelectedService(null);
  };

  return (
    <>
    {data.map((serv,index) => (
        <div  data-aos="fade-up" data-aos-duration="2000" key={index} className="relative border border-opacity-95 border-my-secondery rounded-lg
        flex flex-col gap-5 overflow-hidden group">
            <img src={serv.img} alt="" className="w-full h-full group-hover:scale-110 group-hover:rotate-3 transition-all duration-200 ease-in-out" />
            <div className="absolute flex flex-col gap-2 bg-black bg-opacity-70 w-full h-full justify-center items-center px-3  text-center">
                <span className="text-2xl md:text-3xl xl:text-4xl text-white"><FontAwesomeIcon icon={serv.icon} /></span>
                <h4 className="text-lg sm:text-lg md:text-2xl font-semibold text-my-secondery">{serv.title}</h4>
                <p className="text-sm  text-white">{serv.desc}</p>
                <button onClick={() => handleOpenModal(serv)} className="w-fit text-base md:text-lg font-semibold text-my-secondery">
                view more <span><FontAwesomeIcon icon={faArrowRight} className="text-sm animate-moveRight"/></span>
                </button>
            </div>
        </div>
    ))}
     
    {selectedService && (
        <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={selectedService.title}
            description={selectedService.desc}
            items={selectedService.items}
        />
          )}
    </>
  );
}
