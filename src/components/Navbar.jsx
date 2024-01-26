import logo from "../assets/react.svg";
import usernotsign from "../assets/user-2.jpg";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaBars, FaRegBookmark, FaXmark } from "react-icons/fa6";
import { IoTriangleSharp } from "react-icons/io5";
import { PiFunnelBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { navItems } from "./navItems";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen)
    }

    return (
        <>
            <nav className="bg-white md:px-14 p-2 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                    {/* Logo */}
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="text-xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={logo} alt="" className="w-10 inline-block items-center" />
                        </a>
                    </div>

                    {/* language & signup */}
                    <div className="space-x-8 hidden md:flex items-center">

                        {/* nav items */}
                        <ul className="md:flex text-base space-x-16 hidden">
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-gray-400">{link}</a>)
                            }
                        </ul>

                        {/* Bookmark */}
                        <a href="/" className="hidden lg:flex pl-6 items-center hover:text-secondary"><FaRegBookmark className="mr-2" /><span></span></a>

                        {/* user menu */}
                        <img onClick={toggleUserMenu} src={usernotsign} alt="" className="w-10 inline-block items-center rounded-full hover:shadow-md " />
                        
                        <div className={` w-[200px] text-sm space-y-4  px-4 mt-12 pb-5 bg-primary ${isUserMenuOpen ? "block fixed top-0 right-10 shadow-xl" : "hidden"}`}>

                        <IoTriangleSharp className="right-7 -top-2 text-primary absolute " />
                            <a href='' className="flex items-center text-blue-300 hover:text-gray-300"><PiFunnelBold className="mr-2 text-[16px]" />My Preferences</a>
                            <a href='' className="flex items-center text-blue-300 hover:text-gray-300"><FaRegUser className="mr-2" />View Profile</a>
                            <a href='' className="flex items-center text-blue-300 hover:text-gray-300"><PiSignOutBold className="mr-2 text-[16px]" />Sign Out</a>

                        </div>
                    </div>

                    {/* menu btn. only display on mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white text-xl focus:outline-none
                     focus:text-gray-300">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary " />) : (<FaBars className="w-6 h-6 text-primary" />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* mobile view menu items */}
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                }
            </div>
        </>
    )
}

export default Navbar