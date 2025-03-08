import React from 'react'
import { motion } from 'motion/react'
import Button from './UI/Button'
import { illustrationIntro } from '../assets'

const HeroSection = () => {
    return (
        <section className='max-w-6xl mx-auto p-2'>
            <motion.div
                className='min-h-[80vh] lg:min-h-screen lg:my-10 flex items-center'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <motion.div className='flex-1'>
                    <motion.p
                        className="text-6xl font-bold text-[#242d52] mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Bring everyone together to build better products

                    </motion.p>
                    <motion.p
                        className="text-[#9095a7] text-left mb-8 leading-6.5"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        Manage makes it simple for software teams <br /> to plan day-to-day tasks while keeping <br /> the larger team goals in view.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                    >
                        <Button text="Get Started" primary={true} />
                    </motion.div>
                </motion.div>
                <motion.div
                    className='flex-1 hidden lg:block'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
                    <img src={illustrationIntro} alt="" />
                </motion.div>
            </motion.div>
        </section >
    )
}

export default HeroSection