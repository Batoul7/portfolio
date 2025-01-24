import { useEffect, useState } from 'react'
import NavItems from './NavItems'
import useDarkModeStore from '../../store/darkModeStore';
import { navItems } from '../../Data/NavLinkData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false); 
  const darkMode = useDarkModeStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) { 
           setIsFixed(true); 
        } else {
           setIsFixed(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
    <nav className={`px-5 py-6 md:py-0
     bg-white dark:bg-my-primary text-my-primary dark:text-white  
      ${isFixed ? 'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out shadow-sm shadow-my-secondery' : 'relative'} `}>
        <div className='container mx-auto flex justify-between items-center '>
        <h1 className='text-lg lg:text-2xl font-medium font-poppins '>BATOUL <span className='text-my-secondery'>ALIBRAHEM</span></h1>
        <div className='hidden md:flex w-70 justify-between items-center'>
          <NavItems items={navItems} />
        </div>
        <button className='md:hidden text-my-secondery dark:text-white'
        onClick={() => setActive(prev => !prev)}>
           <FontAwesomeIcon icon={faBars} className='w-6 h-6 text-my-secondery'/>
        </button>
        </div>
    </nav>
    <div className={`menu md:hidden transition-all duration-500 opacity-95
       ${active ? 'translate-x-0': 'translate-x-full'} fixed top-0 h-screen w-full
        bg-white dark:bg-my-primary text-my-primary dark:text-white z-50`}>
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 '>
    <h1 className='text-center text-lg lg:text-2xl font-medium font-poppins mb-10'>BATOUL <span className='text-my-secondery'>ALIBRAHEM</span></h1>
    <NavItems items={navItems} />
    </div>
    <button className='absolute top-5 left-0 translate-x-2/4'
        onClick={() => setActive(prev => !prev)}>
        <FontAwesomeIcon icon={faClose} className='w-6 h-6 text-my-secondery'/>
    </button>
    </div>
    </>
  )
}
