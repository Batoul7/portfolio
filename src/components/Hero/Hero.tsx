import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from '../../assets/me2.jpg'
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { SocialLinks } from "../../Data/SocialLinks";


const Hero = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const roles = ["Software Engineer", "Front End Developer"];
  
    useEffect(() => {
        const handleTyping = () => {
          const currentRole = roles[loopIndex % roles.length];
          if (!isDeleting) {
            setText(currentRole.slice(0, text.length + 1));
            if (text.length === currentRole.length) {
              setTimeout(() => setIsDeleting(true), 1000);
            }
          } else {
            setText(currentRole.slice(0, text.length - 1));
            if (text.length === 1) {
              setIsDeleting(false); 
              setLoopIndex(loopIndex + 1);
            }
          }
          setTypingSpeed(isDeleting ? 50 : 150); 
        };
        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
      }, [text, isDeleting, loopIndex, roles, typingSpeed]);


    return (
     <div className="h-auto px-5 py-[50px] md:pt-[90px] md:h-hero bg-white dark:bg-my-primary text-my-primary dark:text-white">
        <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-5 md:gap-8">
            <div data-aos="fade-right" className="hidden sm:flex flex-col gap-4 md:p-5 sm:pr-5">
                {SocialLinks.map((link,index) => (
                    <a key={index} href={link.path} className="text-2xl md:text-4xl hover:text-my-secondery hover:scale-110 transition-all duration-300"><FontAwesomeIcon icon={link.icon} /></a>
                ))}
            </div>
            <div className=" w-full flex flex-col gap-4" data-aos="fade-up">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-medium mt-3 md:mt-0">Hello, It’s <span className="text-my-secondery">BATOUL</span></h1>
                    <h2 className="text-xl md:text-2xl font-poppins font-medium ">I’m a  <span className="text-my-secondery shadow-text">{text}</span></h2>
                    <p className="text-sm md:text-base xl:text-xl opacity-90 sm:w-full"> I have extensive experience in developing applications using React, which allows me to create interactive and dynamic interfaces. </p>  
                </div>
               <div className="flex gap-5">
                <button onClick={handleOpenModal} className="py-1 px-4 bg-my-secondery rounded-lg text-base md:text-lg font-medium font-poppins shadow-btnshadow">Hire me!</button>
                <a href="#contact" className="py-1 px-4 shadow-btnshadow rounded-lg text-base md:text-lg font-medium font-poppins hover:bg-my-secondery">Contact</a>
               </div>   
            </div>
            <div className="flex w-full justify-start gap-12 items-center">
                <div data-aos="fade-right" className="flex sm:hidden flex-col gap-3 md:p-5  ">
                    {SocialLinks.map((link,index) => (
                        <a key={index} href={link.path} className="text-2xl sm:text-3xl lg:text-4xl hover:text-my-secondery hover:scale-110 transition-all duration-300"><FontAwesomeIcon icon={link.icon} /></a>
                    ))}
                </div>
                <div data-aos="fade-left" className="sm:flex-1 lg:flex-0 flex justify-center items-center  h-full ">
                    <img src={me} alt="" className="w-[200px] lg:w-[300px] xl:w-[400px] rounded-full shadow-myshadow object-cover"/>
                </div>
            </div>  
        </div>
        <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title="Why Hire Me?"
            description="I am committed to delivering the best solutions to meet your needs"
            items={[
                "Experienced in HTML, CSS, JavaScript and React.",
                "Enhancing user experience in projects.",
                "Stay updated with front-end development trends.",
                "I enjoy teamwork and value communication.",
                "Innovate solutions to challenges.",
                "Deliver projects on time.",
                "Develop beautiful and functional interfaces."
            ]}
            link={true}
            />
        </div>
    );
}

export default Hero
