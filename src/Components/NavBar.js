import { useState } from 'react';

const NavBar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Website</span>
                </a>
                
                <button
                    
                    type="button"
                    className="inline-flex items-center justify-center p-2 w-15 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    
                    onClick={toggleDarkMode}
                >
                     {darkMode? "Light" : "Dark" }
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
