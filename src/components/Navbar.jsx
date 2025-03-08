import React, { useState } from 'react';
import Button from './UI/Button';
import { brandLogo, iconHamburger, iconCLose } from '../assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="max-w-6xl w-full mx-auto p-2 flex justify-between items-center relative">
            {/* Logo */}
            <div className="cursor-pointer">
                <img src={brandLogo} alt="brand logo" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 items-center text-sm font-medium text-[#242d52]">
                {["Pricing", "Product", "About Us", "Careers", "Community"].map((item, index) => (
                    <li key={index} className="hover:text-[#9095a7] cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <div className="hidden md:block">
                <Button text="Get Started" primary={true} />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <img src={isOpen ? iconCLose : iconHamburger} alt="menu toggle" />
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <ul className="flex flex-col items-center gap-4 p-6 text-lg font-medium text-[#242d52]">
                        {["Pricing", "Product", "About Us", "Careers", "Community"].map((item, index) => (
                            <li key={index} className="hover:text-[#9095a7] cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="text-center pb-4">
                        <Button text="Get Started" primary={true} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
