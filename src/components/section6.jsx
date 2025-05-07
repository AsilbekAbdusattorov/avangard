import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import section6Gallarey1 from '../img/section6Gallarey1.jpg';
import section6Gallarey2 from '../img/section6Gallarey2.jpg';
import section6Gallarey3 from '../img/section6Gallarey3.jpg';
import section6Gallarey4 from '../img/section6Gallarey4.jpg';
import section6Gallarey5 from '../img/section6Gallarey5.webp';
import section6Gallarey6 from '../img/section6Gallarey6.webp';

const Section6 = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const galleryImages = [
        section6Gallarey1,
        section6Gallarey2,
        section6Gallarey3,
        section6Gallarey4,
        section6Gallarey5,
        section6Gallarey6,
    ];

    return (
        <div className='py-16 bg-gray-100'>
            <div className="w-full max-w-base mx-auto px-4 sm:px-6">
                <div className='text-center lg:text-left'>
                    <h2 className='text-3xl sm:text-4xl lg:text-6xl font-bold font-sans mb-4'>Galereya</h2>
                    <p className='text-[#1A1A1AB3] text-base sm:text-lg md:text-xl lg:text-2xl py-4 leading-relaxed'>
                        Biz ko'chmas mulkning barcha sohalarida innovatsion yechimlarni topish imkonini beruvchi ilg'or <br className='hidden lg:block' />
                        texnologik xizmatlar va mahsulotlarni yaratamiz.
                    </p>
                </div>

                <div className="mt-10">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
                    >
                        {galleryImages.map((img, index) => (
                            <a
                                key={index}
                                className='group overflow-hidden rounded-xl block'
                                href={img}
                                data-lg-size="1600-1200"
                            >
                                <img
                                    className='w-full aspect-[3/2] object-cover group-hover:scale-110 transition-transform duration-300 rounded-xl'
                                    alt={`gallery-img-${index}`}
                                    src={img}
                                />
                            </a>
                        ))}
                    </LightGallery>
                </div>
            </div>
        </div>
    );
};

export default Section6;
