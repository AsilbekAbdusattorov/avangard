import React from 'react';
import section9img1 from '../img/section9img1.webp';
import section9img2 from '../img/section9img2.webp';
import section9img3 from '../img/section9img3.webp';
import section9img4 from '../img/section9img4.webp';
import section9img5 from '../img/section9img5.webp';
import section9img6 from '../img/section9img6.webp';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Button
const PrevButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-gray-600 z-10 transition-all duration-300"
    >
        ‹
    </button>
);

// Custom Next Button
const NextButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-gray-600 z-10 transition-all duration-300"
    >
        ›
    </button>
);

const Section9 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="py-16 bg-gray-100">
            <div className="w-full max-w-base mx-auto px-5">
                <div className="py-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Biz ipotekani 2,99% dan subsidiyalaymiz
                    </h2>
                    <p className="text-base md:text-lg xl:text-xl text-gray-600 mt-2">
                        Ayniqsa siz uchun biz yetakchi banklarning joriy va juda foydali takliflarini tanladik.
                    </p>
                </div>

                <div className="relative">
                    <Slider {...settings}>
                        {[section9img1, section9img2, section9img3, section9img4, section9img5, section9img6].map((img, index) => (
                            <div key={index} className='px-2'>
                                <img
                                    src={img}
                                    className="h-64 w-full object-cover rounded-md"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Section9;
