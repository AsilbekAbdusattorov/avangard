import React from 'react'
import section7img1 from '../img/section7img1.webp'

const Section7 = () => {
    return (
        <div className='py-16 bg-white'>
            <div className='w-full max-w-base mx-auto px-4 sm:px-6'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>

                    {/* Left side - Text */}
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-3xl sm:text-5xl lg:text-6xl font-semibold mb-4'>Kompaniya haqida</h2>
                        <p className='text-[#1A1A1AB3] text-base sm:text-lg lg:text-xl py-4'>
                            Bizning vazifamiz yanada qulay, xavfsiz va ekologik toza yashash <br className='hidden lg:block' />
                            sharoitlarini yaratish orqali kundalik hayotni o'zgartirishdir.
                        </p>
                        <p className='text-[#1A1A1AB3] text-base sm:text-lg lg:text-xl'>
                            Biz 2012 yildan beri uylar qurmoqdamiz va komfort toifali uy-<br className='hidden lg:block' />
                            joylarga ixtisoslashganmiz. Rossiyaning 10 ta hududida loyihalarimiz <br className='hidden lg:block' />
                            bor. Biz har kuni siz yashashni xohlagan hududlarni yaratamiz <br className='hidden lg:block' />
                            - shinam uylar va hovlilar, zamonaviy bog'cha va maktablar, bolalar <br className='hidden lg:block' />
                            maydonchalari va poliklinikalar, avtoturargohlar va <br className='hidden lg:block' />
                            obodonlashtirish.
                        </p>

                        <ul className='py-8 space-y-4'>
                            {[1, 2, 3].map((_, i) => (
                                <li key={i} className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                                    </svg>
                                    <span className='font-bold text-lg sm:text-xl lg:text-2xl'>10 yillik muvaffaqiyatli ish</span>
                                </li>
                            ))}
                        </ul>

                        <button className="py-2 px-4 text-red-500 text-xl sm:text-2xl font-semibold rounded hover:underline transition-all">
                            Batafsil ma'lumot
                        </button>
                    </div>

                    {/* Right side - Image */}
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <img className='w-full h-auto rounded-lg' src={section7img1} alt="Kompaniya haqida rasm" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7
