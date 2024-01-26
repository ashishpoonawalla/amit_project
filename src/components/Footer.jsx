import { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { footerItems } from "./navItems";

const Footer = () => {

   
    return (
        <div>
            <nav className="text-footerPrimary text-sm bg-footerSecondary md:px-14 py-2  max-w-screen-2xl border-t mx-auto fixed bottom-0 right-0 left-0">
                <div className="container mx-auto flex justify-between items-center font-medium">
                    {/* Left Panel */}
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="font-semibold flex items-center space-x-3">
                            <span>&copy; Copyright </span>
                        </a>

                        {/* footer menu items */}
                        <ul className="md:flex space-x-8 hidden">
                            {
                                footerItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                            }
                        </ul>

                       
                       
                    </div>

                    {/* Right Panel */}
                    <div className="space-x-4 hidden md:flex items-center">

                        {/* Version */}
                        <a href='#' className="block hover:text-gray-300">Version 1.0.0</a>

                        {/* Social Link */}
                        <a href="/" className="hidden lg:flex pl-6 items-center hover:text-secondary"><AiFillTwitterCircle className="text-xl" /><span></span></a>
                        <a href="/" className="hidden lg:flex  items-center hover:text-secondary"><IoLogoFacebook className="text-xl" /><span></span></a>
                        <a href="/" className="hidden lg:flex  items-center hover:text-secondary"><RiInstagramFill className="text-xl" /><span></span></a>

                       
                       
                    </div>

                   
                </div>
            </nav>
            
        </div>
    )
}

export default Footer