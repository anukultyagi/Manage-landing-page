import React from 'react';
import { brandLogo, iconFacebook, iconInstagram, iconPinterest, iconTwitter, iconYoutube } from '../assets';
import Button from './UI/Button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-[#1e1e26] px-6 py-8'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-8 py-10  text-center md:text-left'>

                {/* Logo & Social Icons */}
                <div className='py-2 flex flex-col items-center md:items-start gap-5'>
                    <img className='invert w-auto' src={brandLogo} alt="Brand Logo" />
                    <div className='flex gap-3'>
                        {[iconFacebook, iconPinterest, iconTwitter, iconYoutube, iconInstagram].map((icon, index) => (
                            <button key={index} className='hover:scale-125 transition transform duration-300 ease-in-out' aria-label="Social Media">
                                <img src={icon} alt="Social Icon" className='w-6 h-6' />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className='py-2 flex justify-center md:justify-start'>
                    <ul className='flex flex-col gap-4'>
                        {["Home", "Pricing", "Products", "About Us"].map((item) => (
                            <li key={item} className='text-white font-extralight text-sm cursor-pointer hover:text-[#f25f3a] transition'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className='py-2 flex justify-center md:justify-start'>
                    <ul className='flex flex-col gap-4'>
                        {["Careers", "Community", "Privacy Policy"].map((item) => (
                            <li key={item} className='text-white font-extralight text-sm cursor-pointer hover:text-[#f25f3a] transition'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Newsletter Input */}
                <div className='flex flex-col items-center justify-between md:items-end gap-4'>
                    <form onSubmit={(e) => e.preventDefault()} className='flex flex-col sm:flex-row gap-3 w-full'>
                        <input
                            className='bg-white w-full ps-3 py-3 md:py-1 rounded-full text-sm focus:outline-none placeholder:text-stone-400 font-extralight'
                            type="text"
                            placeholder='Updates in your inbox...'
                        />
                        <Button text='Go' primary={true} className='w-fit mx-auto' />
                    </form>
                    <p className='text-sm text-[#9095a7]'>Copyright {currentYear}. All Rights Reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
