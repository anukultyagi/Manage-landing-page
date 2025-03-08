import React from 'react';
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from './UI/TestimonialCard';
import { avatarAli, avatarAnisha, avatarRichard, avatarShanai } from '../assets';
import Button from './UI/Button';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            img: avatarAnisha,
            name: 'Anisha Li',
            review: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'
        },
        {
            id: 2,
            img: avatarAli,
            name: 'Ali Bravo',
            review: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion, and everyone is much more focused.'
        },
        {
            id: 3,
            img: avatarRichard,
            name: 'Richard Watts',
            review: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'
        },
        {
            id: 4,
            img: avatarShanai,
            name: 'Shanai Gough',
            review: 'Their software allows us to track, manage, and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'
        },
    ];

    return (
        <section className='py-16'>

            <motion.div
                className='mx-auto'
                initial={{ scale: 0 }} animate={{ scale: 1 }}
            >
                <h2 className='text-4xl font-bold text-center text-[#242d52] mb-12'>What They've Said</h2>

                <div className='py-10'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className='flex justify-center '>
                                <TestimonialCard imgSrc={testimonial.img} title={testimonial.name} text={testimonial.review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='text-center mt-8'>
                    <Button primary={true} text='Get Started' />
                </div>
            </motion.div>
        </section >
    );
};

export default Testimonials;
