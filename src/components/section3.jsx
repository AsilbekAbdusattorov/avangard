import React from 'react';
import { section3 } from '../data';
import { Link } from 'react-router-dom';

const Section3 = () => {
    return (
        <section>
            <div className='max-w-base w-full mx-auto px-5 md:px-10 lg:px-12'>
                {
                    section3.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row-reverse items-center justify-between gap-10 mb-20`}
                        >
                            <div className='w-full max-w-[680px]'>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-7'>{section.name}</h2>
                                <p className='mb-4 md:mb-8 text-base md:text-lg text-[#1A1A1A99] leading-6'>{section.title}</p>
                                <p className='text-[#1A1A1A99] text-base md:text-lg'>{section.title2}</p>
                                <Link to="/Xizmatlar" className='text-[#ff5050] text-xl md:text-2xl font-semibold inline-block mt-4'>
                                    Batafsil ma'lumot oling
                                </Link>
                            </div>
                            <img
                                className='w-full max-w-[680px] h-auto rounded-xl object-cover'
                                src={section.img}
                                alt={section.name}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Section3;
