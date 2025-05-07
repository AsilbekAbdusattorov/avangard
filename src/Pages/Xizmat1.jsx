import React from 'react';
import xizmatImage from '../img/section6Gallarey4.jpg';
import xizmatImage1 from '../img/section6Gallarey5.webp';

const Xizmat1 = () => {
    return (
        <div className="py-16 bg-blue-50">
            <div className="w-full max-w-base mx-auto px-4">
                <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-7 sm:mb-14'>Xizmat №1</h2>
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Rasmlar qismi */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <img
                            className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md"
                            src={xizmatImage}
                            alt="xizmat rasmi 1"
                        />
                        <img
                            className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md"
                            src={xizmatImage1}
                            alt="xizmat rasmi 2"
                        />
                    </div>

                    {/* Matn qismi */}
                    <div className="w-full lg:w-1/2 space-y-5 text-[#1A1A1A] text-base sm:text-lg lg:text-xl leading-relaxed">
                        <p>
                            Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida hikoya qiluvchi,
                            biznesingiz maqsadlariga javob beradigan har qanday qulay katalog tuzilmasini yaratish bilan to‘liq katalogni joylashtirishni tavsiya etamiz.
                        </p>
                        <p>
                            <strong>Eslatma:</strong> Saytdagi matn ma'lumotlari individual bo'lishi kerak. Yandex shunday deydi:
                            "Biz boshqa manbalardan ma'lumot nusxa ko'chiruvchi va original kontent yoki xizmat yaratmaydigan saytlarni indekslamaslikka yoki yuqori darajaga bermaslikka harakat qilamiz."
                        </p>
                        <p>
                            <strong>Sahifani to‘ldirishga misol:</strong> Kompaniyaning asosiy faoliyati ... ishlab chiqarish va sotishdan iborat.
                            Kompaniyaning mahsulotlari "..." sohasida keng qo'llaniladi. Taklif etilayotgan barcha tovarlar Yevropa sifati va keng assortimentga ega.
                        </p>
                        <p>
                            Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli darajada pastligicha qolmoqda.
                            Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga / sifat standartlariga / GOSTlarga javob beradi.
                        </p>
                        <p>
                            Kompaniyaning asosiy faoliyati - bu ... sohasida xizmatlar ko'rsatish.
                            Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi.
                        </p>
                        <p>
                            Bunday arzon narxlarda biz eng qisqa vaqtni, siz uchun qulay vaqtni va beqiyos sifatni taklif qilmoqchimiz!
                        </p>

                        {/* Narx qismi */}
                        <div>
                            <p className="font-semibold">Narxi:</p>
                            <span className="text-lg font-bold">1500 rubl</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Xizmat1;
