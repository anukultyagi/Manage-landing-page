import React from 'react';
import { ctcBackgroundDesktop } from '../assets';
import Button from './UI/Button';

const CTASection = () => {
    return (
        <section
            className='px-6 md:px-8 py-6 min-h-[250px] flex justify-between items-center bg-[#f25f3a]'
            style={{
                backgroundImage: `url(${ctcBackgroundDesktop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}
        >
            <div className='max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left'>
                <p className='text-4xl md:text-4xl font-medium text-white'>
                    Simplify how your team <br className='hidden md:block' /> works today.
                </p>
                <Button text='Get Started' primary={false} />
            </div>
        </section>
    );
}

export default CTASection;
