
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    items: string[];
    link?:boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, items,link }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-my-primary bg-opacity-50 backdrop-blur-sm px-5">
            <div data-aos="zoom-in" className="bg-white dark:bg-my-primary rounded-2xl p-5 sm:p-8 w-full max-w-2xl  shadow-inner shadow-my-secondery">
                <div className="mb-6 flex flex-col gap-5">
                    <h2 className="text-2xl lg:text-4xl font-bold text-my-secondery">{title}</h2>
                    <p className="text-base lg:text-lg font-medium text-white text-opacity-85">{description}</p>
                    <ul className="flex flex-col gap-3">
                        {items.map((item, index) => (
                            <li key={index} className='flex gap-3 items-center text-sm sm:text-base'><FontAwesomeIcon icon={faCheck} className='text-my-secondery'/>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col justify-between gap-3'>
                {link && <a href="mailto:batoulab268@gmail.com" className='underline text-my-secondery'>Click here to contact me via email</a>}
                <button
                    onClick={onClose}
                    className="block px-3 py-2 text-sm ml-auto w-fit shadow-btnshadow rounded-lg font-medium font-poppins hover:bg-my-secondery transition-all" >
                    OK
                </button>
                </div>
               
            </div>
        </div>
    );
};

export default Modal;
