import React from 'react'
import { motion } from 'motion/react'

const Button = ({ text, primary, className }) => {
    return (
        <motion.button
            className={`px-8 text-sm py-3 rounded-4xl font-semibold cursor-pointer shadow-2xl shadow-[#f25f3a] ${primary ? 'border-2 text-white border-[#f25f3a] bg-[#f25f3a] hover:text-[#f25f3a] hover:border-[#f25f3a] hover:bg-white' : 'border-2 border-white bg-white text-[#f25f3a] hover:bg-[#f25f3a] hover:border-white hover:text-white'} ${className} `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

        >{text}</motion.button>
    )
}

export default Button