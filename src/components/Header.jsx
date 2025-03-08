import React from 'react';
import Navbar from './Navbar';
import { bgTablet } from '../assets';
import HeroSection from './HeroSection';

const Header = () => {
    return (
        <header
            className="min-h-screen flex flex-col bg-right-top bg-no-repeat bg-cover px-3 md:px-6  py-8 md:py-12"
            style={{ backgroundImage: `url(${bgTablet})` }}
        >
            <Navbar />
            <HeroSection />
        </header>
    );
};

export default Header;
