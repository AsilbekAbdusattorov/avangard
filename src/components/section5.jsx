import React from 'react';
import section5img1 from '../img/section5img1.svg';
import section5img2 from '../img/section5img2.svg';
import section5img3 from '../img/section5img3.svg';
import section5img4 from '../img/section5img4.svg';
import section5img5 from '../img/section5img5.svg';
import section5img6 from '../img/section5img6.svg';
import section5img7 from '../img/section5img7.svg';
import section5img8 from '../img/section5img8.svg';

const Section5 = () => {
    return (
        <section className='py-12 md:py-16'>
            <div className='w-full max-w-base mx-auto px-4 sm:px-6 lg:px-12'>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center lg:text-left'>
                    Murakkab infratuzilma
                </h2>
                <p className='text-[#1A1A1A99] text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-center lg:text-left leading-relaxed'>
                    Kundalik hayot uchun zarur bo'lgan barcha narsalar majmua yonida, shuningdek, uning hududida <br className="hidden lg:block" /> joylashgan. Birinchi qavatlarda tijorat binolari joylashgan: kelajakdagi do'konlar, dorixonalar, novvoyxonalar, <br className="hidden lg:block" /> go'zallik salonlari.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10'>
                    {[
                        { img: section5img1, text: "2 ta bolalar bog'chasi" },
                        { img: section5img2, text: "2 ta maktab" },
                        { img: section5img3, text: "3 Dorixonalar" },
                        { img: section5img4, text: "1 ta supermarket" },
                        { img: section5img5, text: "3 do'kon" },
                        { img: section5img6, text: "Shahar kasalxonasi" },
                        { img: section5img7, text: "Kafe va restoranlar" },
                        { img: section5img8, text: "Avtomobil xizmati" },
                    ].map((item, index) => (
                        <div key={index} className='flex items-center space-x-4 sm:space-x-5'>
                            <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] flex items-center justify-center p-3 sm:p-4 bg-blue-700 rounded-full border-[5px] border-blue-300 shrink-0'>
                                <img src={item.img} alt={`icon-${index}`} className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]' />
                            </div>
                            <p className='font-bold text-base sm:text-lg md:text-xl'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section5;
