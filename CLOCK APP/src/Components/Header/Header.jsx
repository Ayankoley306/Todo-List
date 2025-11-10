import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    const navItems = [{
        title: "Home",
        to: "/"
    }, {
        title: "Timer",
        to: "/timer"
    }, {
        title: "Stop Watch",
        to: "/stop-watch"
    },
    ]
    return (
        <header className='h-16  w-full flex justify-around items-center text-xl fixed top-0 bg-transparent'>
            <h3 className='text-3xl font-bold flex gap-2.5 text-(--element-color2)'>DIGITAL CLOCK</h3>
            <nav className='h-full w-2/5'>
                <ul className='h-full max-w-full flex justify-evenly items-center'>
                    {navItems ? navItems.map((item) => (
                        <NavLink
                            to={item.to}
                            key={item.title}
                            className={({ isActive }) => ` lg:text-2xl text-xl  ${isActive ? "text-orange-600" : "text-(--text-color)"} hover:text-orange-400`}
                        >
                            {item.title}
                        </NavLink>
                    )) : ""}
                </ul>
            </nav>
        </header>
    )
}

export default Header