import React from 'react'
import { motion } from 'motion/react';
import Button from './UI/Button'

const FeatureSection = () => {

    const features = [
        {
            id: '1',
            title: 'Track company-wide progress',
            desc: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.'
        },
        {
            id: '2',
            title: 'Advanced built-in reports',
            desc: 'Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },
        {
            id: '3',
            title: 'Everything you need in one place',
            desc: 'Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.'
        }
    ];

    return (
        <section className='min-h-screen px-3'>
            <div className='max-w-6xl mx-auto lg:my-30 lg:flex justify-between'>
                <motion.div
                    className='p-2 lg:basis-2/5'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <p className='text-4xl font-bold text-[#242d52] mb-8'>What's different about Manage?</p>
                    <p className='text-[#9095a7] text-left mb-8 leading-6.5'>Manage provides all the  functionality your <br />team needs, without the complexity. Our <br /> software is tailor-made for modern digital <br /> product teams.</p>
                </motion.div>
                <motion.div className="basis-1/2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className="flex justify-between mb-10 gap-10"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                            viewport={{ once: true }}>
                            <div>
                                <Button text={feature.id} primary={true} />
                            </div>
                            <div className=''>
                                <p className='text-[#242d52] mb-5 font-bold'>{feature.title}</p>
                                <p className='text-[#9095a7] text-left leading-6.5'> {feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section >
    )
}

export default FeatureSection