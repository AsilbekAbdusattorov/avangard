import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import hero1 from '../img/hero1.jpg';
import hero2 from '../img/hero2.jpg';

const Hero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div>
            <div className='max-w-base w-full mx-auto px-3 sm:px-5 relative'>

                <Swiper
                    loop={true}
                    spaceBetween={30}
                    effect={'fade'}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >

                    <SwiperSlide className="relative mb-10">
                        <img
                            className='h-[300px] sm:h-[450px] md:h-[550px] lg:h-[670px] w-full max-w-[1520px] object-cover'
                            src={hero1}
                            alt="hero image"
                        />
                        {/* Gradient overlay for md and above */}
                        <div className="block absolute inset-0 bg-black/60 lg:bg-transparent z-[5]"></div>

                        <div className="absolute top-10 sm:top-20 left-5 text-center sm:text-start sm:left-14 z-10 py-6 lg:py-10 my-3 rounded-2xl bg-transparent lg:bg-white px-5 sm:px-12 max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[730px]">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white md:text-white lg:text-black">
                                Avangard turar-joy majmuasi
                            </h1>
                            <div className="text-base sm:text-xl md:text-2xl mt-6 sm:mt-12 text-white lg:text-black/60 leading-relaxed">
                                Kvartiralar 4,3 million rubldan. <br />
                                To'lovlar hozir 20%, keyinroq 80%!
                            </div>
                            <div className="mt-5">
                                <button
                                    className="
                                    py-1 sm:py-2
                                    px-3 sm:px-5 md:px-7
                                    text-sm sm:text-base md:text-xl
                                    font-medium rounded-full
                                    text-white bg-red-500
                                    cursor-pointer transition-all
                                  "
                                >
                                    <Link to="/Xizmatlar">Batafsil ma'lumot oling</Link>
                                </button>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="relative mb-10">
                        <img
                            className='h-[300px] sm:h-[450px] md:h-[550px] lg:h-[670px] w-full max-w-[1520px] object-cover'
                            src={hero2}
                            alt="hero image"
                        />
                        {/* Gradient overlay for md and above */}
                        <div className="block absolute inset-0 bg-black/60 lg:bg-transparent z-[5]"></div>

                        <div className="absolute top-10 sm:top-20 left-5 text-center sm:text-start sm:left-14 z-10 py-6 lg:py-10 my-3 rounded-2xl bg-transparent lg:bg-white px-5 sm:px-12 max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[730px]">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white md:text-white lg:text-black">
                                Avangard turar-joy majmuasi
                            </h1>
                            <div className="text-base sm:text-xl md:text-2xl mt-6 sm:mt-12 text-white lg:text-black/60 leading-relaxed">
                                Kvartiralar 4,3 million rubldan. <br />
                                To'lovlar hozir 20%, keyinroq 80%!
                            </div>
                            <div className="mt-5">
                                <button
                                    className="
    py-1 sm:py-2
    px-3 sm:px-5 md:px-7
    text-sm sm:text-base md:text-xl
    font-medium rounded-full
    text-white bg-red-500
    cursor-pointer transition-all
  "
                                >
                                    <Link to="/Xizmatlar">Batafsil ma'lumot oling</Link>
                                </button>

                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Navigation tugmalari */}
                    {/* <button
                        ref={prevRef}
                        className="bg-white absolute z-20 rounded-full top-3 left-3 sm:top-10 sm:left-10 md:top-16 md:left-16 lg:top-20 lg:left-20 p-3 sm:p-4 md:p-5 shadow-lg hover:bg-[#ff5050] hover:text-white"
                    >
                        <span className="text-lg sm:text-2xl md:text-3xl">←</span>
                    </button>

                    <button
                        ref={nextRef}
                        className="bg-white absolute z-20 rounded-full top-3 left-16 sm:top-10 sm:left-28 md:top-16 md:left-36 lg:top-20 lg:left-40 p-3 sm:p-4 md:p-5 shadow-lg hover:bg-[#ff5050] hover:text-white"
                    >
                        <span className="text-lg sm:text-2xl md:text-3xl">→</span>
                    </button> */}

                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
