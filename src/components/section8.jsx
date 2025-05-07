import React from 'react'

const Section8 = () => {
    return (
        <div className='py-16'>
            <div className='w-full max-w-base mx-auto px-5'>
                <div className='py-10'>
                    <h2 className='text-4xl md:text-6xl font-bold py-3'>Qulay sharoitlar</h2>
                    <p className='text-[#1A1A1AB3] text-xl md:text-2xl'>Batafsil ipoteka kreditlash shartlari va bank stavkalari uchun savdo bo'limiga murojaat qiling.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='bg-pink-100 w-full border-2 p-6 md:p-12 rounded-xl'>
                        <span className='font-bold text-2xl md:text-3xl block pb-2'>Ipoteka 2,99%</span>
                        <p className='text-[#1A1A1AB3] text-lg md:text-xl'>Butun davr uchun belgilangan stavka</p>
                    </div>
                    <div className='bg-gray-200 w-full border-2 p-6 md:p-12 rounded-xl'>
                        <span className='font-bold text-2xl md:text-3xl block pb-2'>Chegirma bilan naqd to'lov</span>
                        <p className='text-[#1A1A1AB3] text-lg md:text-2xl'>Bankdan kreditsiz bitta to'lov</p>
                    </div>
                    <div className='bg-slate-100 w-full border-2 p-6 md:p-12 rounded-xl'>
                        <span className='font-bold text-2xl md:text-3xl block pb-2'>Oilaviy ipoteka</span>
                        <p className='text-[#1A1A1AB3] text-lg md:text-2xl'>Bolali oilalar uchun qulay stavka</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section8
