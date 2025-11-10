import React, { useEffect, useState } from 'react'
import Button from '../Button';

function Header() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
    useEffect(() => (console.log(theme)), [theme])
    return (
        <header className='dark:bg-gray-800 bg-cyan-900 text-white h-14 w-screen flex justify-between items-center'>
            <div className='w-full flex justify-center items-center mr-8'>
                <h1 className='text-4xl font-bold dark:text-white'>TIC TAC TOE</h1>
            </div>

            <Button className='dark:bg-indigo-500  fixed right-10 md:right-16 bg-gray-800 text-white w-8  rounded-2xl h-8 transition-all ease-in transition-discrete duration-200 hover:scale-100' value={theme === "dark" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>} onClick={toggleTheme} />
        </header>
    )
}

export default Header