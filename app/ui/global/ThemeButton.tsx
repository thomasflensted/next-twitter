'use client'

import { useEffect, useState } from "react"
import { IoMdMoon, IoMdSunny } from "react-icons/io"

const ThemeButton = () => {


    const [theme, setTheme] = useState('light');

    const handleThemeChange = () => {
        theme === 'light' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <li onClick={handleThemeChange}
            className="group cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100 transition-colors ease-out flex items-center gap-2 dark:hover:bg-neutral-700">
            {theme === 'light'
                ? <IoMdMoon className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
                : <IoMdSunny className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />}
            <h2 className="font-medium text-md group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white">
                {theme === 'light'
                    ? 'Dark Mode'
                    : 'Light Mode'}
            </h2>
        </li>
    )
}
export default ThemeButton