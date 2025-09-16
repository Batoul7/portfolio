
interface TitleProps {
    title: string;
    subTitle: string
}
const Title = ({title,subTitle}: TitleProps) => {
  return (
    <div className="container mx-auto text-center font-poppins">
        <h3 className="text-2xl lg:text-3xl font-medium text-my-secondary  uppercase">{title}</h3>
        <p className="text-sm lg:text-base opacity-90">{subTitle}</p>
    </div>
  )
}

export default Title