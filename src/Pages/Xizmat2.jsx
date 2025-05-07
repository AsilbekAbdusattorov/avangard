import React from 'react';
import XizmatBmw from './Xizmat2'; // Ehtimol rasm emas, komponent import qilingan – rasm bo'lsa, import to'g'rilanishi kerak

const Xizmat2 = () => {
    return (
        <div className="py-16 bg-blue-50">
            <div className="w-full max-w-base mx-auto px-4">
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-12 text-center">Xizmat № 2</h2>

                {/* Tavsif matnlari */}
                <div className="space-y-6 text-base sm:text-lg lg:text-xl text-[#1A1A1A] mb-10">
                    <p>
                        Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida hikoya qiluvchi,
                        biznesingiz maqsadlariga javob beradigan har qanday qulay katalog tuzilmasini yaratish bilan to‘liq katalogni joylashtirishni tavsiya etamiz.
                    </p>
                    <p>
                        <strong>Eslatma:</strong> Saytdagi matn ma'lumotlari individual bo'lishi kerak. Yandex shunday deydi:
                        "Biz boshqa manbalardan ma'lumot nusxa ko'chiruvchi va original kontent yoki xizmat yaratmaydigan saytlarni indekslamaslikka yoki yuqori darajaga bermaslikka harakat qilamiz."
                    </p>
                    <p><strong>Sahifani to'ldirishga misol:</strong></p>
                </div>

                {/* Kartalar grid tarzida joylashtirilgan */}
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((id) => (
                        <div key={id} className="bg-white rounded-xl shadow-md p-5 flex flex-col h-full">
                            <img
                                src={XizmatBmw}
                                alt={`Sumka ${id}`}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h3 className="font-bold text-2xl mb-2">Katta qog'oz sumka {id}</h3>
                            <p className="text-[#1A1A1A] text-base mb-3">
                                Mahsulot tavsifi. Bir necha qatorda mahsulot yoki xizmat haqida qisqacha e'lon. Test tavsifi.
                                Mahsulot haqidagi blokning taxminiy matn tarkibi. Tavsif 170 belgi bilan cheklangan.
                            </p>
                            <div className="mt-auto">
                                <p className="text-[#1A1A1A] text-base">Narxi</p>
                                <span className="font-bold text-2xl">
                                    65 500 rubl <del className="text-sm text-gray-500 ml-2">69 000 rubl</del>
                                </span>
                                <div className="mt-4">
                                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                                        Ko'proq o'qish
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Xizmat2;
