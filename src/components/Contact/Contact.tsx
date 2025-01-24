import Title from "../Title/Title"
import Box from "../Box/Box"
import ContactForm from "../ContactForm/ContactForm"
import { TalkData } from "../../Data/TalkData"


const Contact = () => {

  return (
    <section id="contact" className="p-main-padding bg-white dark:bg-my-primary text-my-primary dark:text-white border-b border-green-800 border-opacity-70" >
        <Title title='Contact' subTitle='Contact information '/>
        <div className="container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className=' flex flex-col items-center justify-center gap-3 sm:gap-4 '>
              <Box data={TalkData} style='w-3/4 sm:max-w-1/2' />
          </div>
          <div>
            <ContactForm/>
          </div>
        </div>
    </section>
  )
}

export default Contact