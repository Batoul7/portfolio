import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLinks } from "../../Data/SocialLinks";


export default function Footer() {
  return (
    <section className="py-5 bg-white dark:bg-my-primary text-my-primary dark:text-white" >
        <div className="container mx-auto flex flex-col gap-3 items-center justify-center text-center pb-5">
            <h5 className='text-lg lg:text-2xl font-medium font-poppins '>BATOUL <span className='text-my-secondery'>ALIBRAHEM</span></h5>
            <span className="hover:text-my-secondery font-semibold">batoulab268@gmail.com</span>
            <span className="hover:text-my-secondery font-semibold">+963 932 763 995</span>
            <div className="flex gap-4 ">
                {SocialLinks.map((link,index) => (
                    <a key={index} href={link.path} className="text-2xl hover:text-my-secondery hover:scale-110 transition-all duration-300"><FontAwesomeIcon icon={link.icon} /></a>
                ))}
            </div>
        </div>
        <span className="block border-t border-my-secondery border-opacity-70 pt-5 text-center" >Designed and Developed By <span className="block sm:inline text-my-secondery">Eng.Batoul Alibrahem</span> © 2025</span>
    </section>
  )
}
