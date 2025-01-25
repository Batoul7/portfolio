import { faDownload} from '@fortawesome/free-solid-svg-icons'
import me from '../../assets/me.webp' 
import Title from '../Title/Title'
import Box from '../Box/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BoxData } from '../../Data/BoxData'
import cv from "/src/assets/BATOUL ALIBRAHEM.pdf"

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
                <p  data-aos="fade-up" >I’m a software engineer specializing in front-end development, with extensive experience in designing and building user interfaces using React. Strong skills in transforming creative ideas into interactive web applications enhance the user experience. Experience across various projects has fostered an understanding of customer needs and the ability to translate them into effective technical solutions. Committed to staying up to date with the latest trends and technologies, with a strong belief in the importance of collaboration and teamwork. A creative and dedicated front-end developer ready to add real value to any team.
                </p>
                <a  data-aos="fade-up"  href={cv} download="batoul_Alibraheem.pdf"
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