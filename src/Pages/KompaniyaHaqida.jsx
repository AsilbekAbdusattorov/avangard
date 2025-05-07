import React from 'react'
import Location from '../Location'

const KompaniyaHaqida = () => {
  return (
    <div className='py-12 sm:py-16 bg-blue-50'>
      <div className="w-full max-w-base mx-auto px-4 sm:px-6 lg:px-8">
        <Location />
        <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-16 lg:mb-24 text-[#1A1A1A]'>Kompaniya haqida</h2>
        <div className='space-y-5 sm:space-y-6 lg:space-y-7 text-[#1A1A1A]'>
          <p className='text-base sm:text-lg lg:text-xl'>
            Ushbu blokda biz taqdim etilayotgan xizmatlar yoki taklif qilinadigan tovarlar bozorida uning ahamiyati va ishonchliligini ta'kidlab,
            <br className='hidden sm:block' />
            tashkilotingiz haqidagi ma'lumotlarni joylashtirishni tavsiya qilamiz.
          </p>
          <p className='text-base sm:text-lg lg:text-xl'>
            Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak,
            <br className='hidden sm:block' />
            bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori
            <br className='hidden sm:block' />
            darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."
          </p>

          <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold mt-6'>Sahifani to'ldirishga misol:</h2>

          <p className='text-base sm:text-lg lg:text-xl'>
            {`Kompaniyaga xush kelibsiz "..." < kompaniya nomini kiriting  ! >`}
          </p>
          <p className='text-base sm:text-lg lg:text-xl'>
            … {`< kompaniya nomini kiriting > bu sohada/sohasida jadal rivojlanayotgan kompaniya. <faoliyat sohasini kiriting >.`}
          </p>
          <p className='text-base sm:text-lg lg:text-xl'>
            {`Biz sizga... uchun keng turdagi xizmatlarni taklif qilishdan mamnunmiz. < taklif etilayotgan xizmatlarni belgilang > eng yaxshi narxlarda.`}
          </p>

          <p className='text-base sm:text-lg lg:text-xl'>yoki</p>

          <p className='text-base sm:text-lg lg:text-xl'>
            {`Biz sizga keng assortimentni taklif qilishdan mamnunmiz... < taklif etilayotgan mahsulotlarni belgilang > eng yaxshi narxlarda.`}
          </p>
          <p className='text-base sm:text-lg lg:text-xl'>
            {`Uchun... < ko'rsating kompaniyaning ish tajribasi > yillar, kompaniyamiz bozorda kuchli o'ringa ega va faqat eng zamonaviy yechimlarni `}
            <br className='hidden sm:block' />
            taqdim etadi, bu esa mijozlarimizga veb-sayt orqali buyurtma berish imkonini beradi.
          </p>
          <p className='text-base sm:text-lg lg:text-xl'>
            {`Muvaffaqiyatli ish yillari davomida kompaniya ... < kompaniya nomini kiriting > mijozlarimizning xushomadgo'y mulohazalari shundan dalolat `}
            <br className='hidden sm:block' />
            beradiki, bebaho tajribaga ega bo'ldi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KompaniyaHaqida
