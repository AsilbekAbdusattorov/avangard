import React from 'react';
import { useEffect } from 'react';

const Xizmatlar = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='py-10 bg-blue-50'>
      <div className='w-full max-w-base mx-auto px-4'>
        <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-7 sm:mb-14'>Xizmatlar</h2>
        
        <div className='space-y-6 text-base sm:text-lg lg:text-xl text-[#1A1A1A]'>
          <p>
            Ushbu blokda siz taqdim etayotgan xizmatlar haqida kirish maqolasini ham, takliflarning to'liq katalogini ham joylashtirishingiz mumkin.
          </p>
          <p>
            Xizmatlarni tematik toifalarga ajratish foydali bo'lishi mumkin.
          </p>
          <p>
            Xizmat haqida batafsil ma'lumot, turli xarakteristikalar, rasmlar, narxlar, qo'llaniladigan chegirmalar va joriy aktsiyalar va boshqalar haqida ma'lumotni o'z ichiga olgan xizmat kartalari bo'lishi mumkin. Batafsil tavsif va buyurtma berish imkoniyati bilan xizmat sahifasiga o'tish imkoniyati bilan.
          </p>
        </div>

        <h3 className='font-bold text-2xl sm:text-3xl mt-10 mb-6'>Bunday bo'limni to'ldirishga misol:</h3>

        <div className='space-y-6 text-base sm:text-lg lg:text-xl text-[#1A1A1A]'>
          <p>
            Bizning mutaxassislarimiz sizga har doim keng ko'lamli xizmatlarni taklif qilishdan mamnun. Bizning xodimlarimiz sizga hamrohlik qilishga va yo'l-yo'riq ko'rsatishga tayyor bo'lgan faqat yuqori malakali, tajribali xodimlardan iborat.
          </p>

          <p>
            Taqdim etilgan xizmatlar orasida sizga quyidagilar taqdim etilishi mumkin:
          </p>

          <div className='space-y-4'>
            <p>
              <span className='block text-xl font-semibold text-black'>Kredit berish va maslahat:</span>
              Bizning xodimlarimiz sizga eng qulay kredit shartlarini tanlashda yordam beradi, sizga barcha nozikliklar va nuanslar haqida aytib beradi va agar kerak bo'lsa, barcha kerakli hujjatlarni to'plashga yordam beradi. Kredit olish uchun tezda bizning ofisimizga murojaat qilish mumkin.
            </p>

            <p>
              <span className='block text-xl font-semibold text-black'>Kafolat xizmati:</span>
              Har qanday mahsulotimiz bepul kafolatli xizmat va kafolatdan keyingi pullik yordam bilan ta'minlanadi.
            </p>

            <p>
              <span className='block text-xl font-semibold text-black'>Komponentlar, aksessuarlar va boshqalar:</span>
              Bizning do'konlarimizda siz har doim o'zingizni qiziqtirgan mahsulotga buyurtma berishingiz mumkin. Agar siz izlayotgan mahsulot omborda yoki hatto katalogda bo'lmasa ham, siz har doim bizning xodimlarimizga so'rov qoldirishingiz va so'rovingizga yaqin vaqt ichida javob olishingiz mumkin.
            </p>

            <p>
              <span className='block text-xl font-semibold text-black'>Sotib olish va almashtirish:</span>
              Bizdan sotib olingan mahsulotlar endi sizning ehtiyojlaringizni qondirmaydimi? Yangisini sotib olmoqchimisiz? Bizning professional baholovchilarimizga murojaat qiling — ular sizdagi tovarlar holatini ko'rib chiqib, narxni aniqlashda yoki yangisiga almashtirishda yordam beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xizmatlar;
