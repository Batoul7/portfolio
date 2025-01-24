
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {

    const [showScrollTo, setShowScrollTo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTo(true)
            } else {
                setShowScrollTo(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
      <button
        onClick={handleScrollToTop}
        className={`${showScrollTo ? "translate-x-0" : "translate-x-40"}
         w-10 h-10 2xl:w-14 2xl:h-14 cursor-pointer rounded-md transition-all duration-300 ease-in-out 
         fixed bottom-5 right-5 z-40 bg-my-secondery flex justify-center items-center hover:scale-110`}
      >
        <FontAwesomeIcon icon={faArrowUp}/>
    </button>
    )
}