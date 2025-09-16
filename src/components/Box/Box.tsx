import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BoxProps {
    icon:any;
    title:string;
    text:string
}
interface BoxComponentProps {
    data: BoxProps[]; 
    style: string
}
export default function Box({data,style}: BoxComponentProps) {
  return (
    <>
    {data.map((item: BoxProps,index:number) => (
        <div data-aos="fade-up" key={index} className={` ${style} px-1 py-2 md:x-4 border border-opacity-50 border-my-primary dark:border-white rounded-lg text-center`}>
            <span className="text-xl lg:text-2xl 2xl:text-3xl block text-my-secondary mb-2"><FontAwesomeIcon icon={item.icon} /></span>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm opacity-90">{item.text}</p> 
        </div>
      ))}
 </>
  )
}
