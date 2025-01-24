
import useDarkModeStore from '../../store/darkModeStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";


const DarkModeToggle = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
      <button
        onClick={toggleDarkMode}
        className={`relative w-20 xl:w-23 h-9 flex items-center rounded-full p-1 transition duration-500  max-w-24
          ${darkMode ? 'bg-white': 'bg-my-primary'} `}
      >
        <div className={`absolute left-3 w-5 h-5 transition duration-500 opacity-100 dark:opacity-0 `}  >
           <FontAwesomeIcon icon={faSun} className='text-white w-full h-full'/>
        </div>
        <div className={`absolute right-3 transition duration-500 w-5 h-5
          ${darkMode? 'opacity-100': 'opacity-0'}`}>
            <FontAwesomeIcon icon={faMoon} className='text-my-primary w-full h-full '/>
        </div>
        <div
          className={`w-6 h-6 rounded-full transform transition duration-500 
         ${darkMode ? 'translate-x-3 bg-my-primary' : 'translate-x-10 bg-white '} `}>
        </div>
      </button>
  );
};

export default DarkModeToggle;
