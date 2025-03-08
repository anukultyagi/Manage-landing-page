import React from 'react';

const TestimonialCard = ({ imgSrc, title, text }) => {
    return (
        <div>
            <div className="-mb-10 flex justify-center">
                <img
                    className="w-20 h-20 rounded-full "
                    src={imgSrc}
                    alt={title}
                />
            </div>
            <div className=" bg-[#fafafa] rounded-lg text-center p-10 pb-12">

                <p className="text-[#242d52] text-lg font-semibold mt-10">{title}</p>
                <p className="text-[#9095a7] font-light mt-2">{text}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
