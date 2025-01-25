import { faDownload} from '@fortawesome/free-solid-svg-icons'
import me from '../../assets/me2.jpg' 
import Title from '../Title/Title'
import Box from '../Box/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BoxData } from '../../Data/BoxData'
import Cv from "/src/assets/BATOUL ALIBRAHEM.pdf"
const About = () => {


  return (
    <section id="about" className="p-main-padding bg-white dark:bg-my-primary text-my-primary dark:text-white border-y border-green-800 border-opacity-70" >
        <Title title='About Me' subTitle='My introduction'/>
        <div className="container mx-auto  flex items-center justify-between sm:gap-10 lg:gap-0 pt-10 text-center sm:text-start">
            <div data-aos="fade-right" className="hidden sm:flex justify-center items-center h-full sm:basis-[40%] ">
                <img src={me} alt="" className="w-[250px] rounded-lg shadow-myshadow object-cover"/>
            </div>
            <div className='sm:basis-[60%] flex flex-col gap-5'>
                <div className='flex items-center justify-center sm:justify-start gap-2 sm:gap-3'>
                  <Box data={BoxData} style='w-full sm:w-[120px]' />
                </div>
                <p  data-aos="fade-up" >I am a passionate front-end developer specializing in creating engaging user experiences. I focus on transforming ideas into dynamic applications with an emphasis on responsive design and optimal performance. I am eager to take on new projects and deliver innovative solutions that meet user needs.
                </p>
                <a  data-aos="fade-up"  href={Cv} download={"batoul_Alibraheem.pdf"}
                  className="py-1 px-4 shadow-btnshadow rounded-lg text-base md:text-lg font-medium font-poppins cursor-pointer
                            flex gap-3 items-center w-fit justify-center mx-auto sm:mx-0 hover:bg-my-secondery">
                  Download CV
                  <FontAwesomeIcon icon={faDownload}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About