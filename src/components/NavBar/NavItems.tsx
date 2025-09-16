import { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

interface NavItem {
  name: string;
  path: string;
}

interface NavItemsProps {
  items: NavItem[];
  show?: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavItems: React.FC<NavItemsProps> = ({ items }) => {

  const [active, setActive] = useState(0);

      function activeLink(index: number) {
        if (active === index) {
            setActive(0);
        } else {
            setActive(index);
        }
    }

  return (
    <>
       <ul className='flex flex-col md:flex-row gap-5 md:gap-0  items-center'>
            {items?.map((item,index) => {
                return (
                    <li key={index} 
                    className={`flex items-center capitalize px-2 lg:px-3.5  md:py-8`}
                    onClick={() => activeLink(index)}>
                      <a href={`${item.path}`} className={`text-lg lg:text-xl font-normal ${active === index ? 'text-my-secondary border-b border-my-secondary' : ''} `}>{item.name}</a></li>
                )
            })}
            <DarkModeToggle/>
        </ul>
       
         
    </>
  )
}
export default NavItems;