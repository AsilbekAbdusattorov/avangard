import React, { useState } from 'react';

const Birja = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        tourType: "Studiya",
        date: "",
        time: "09:00",
        wishes: "",
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="py-16 bg-blue-50">
            <div className="w-full max-w-base mx-auto px-5">
                <h2 className="font-bold text-3xl sm:text-4xl mb-10 text-[#1A1A1A]">Birja</h2>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-14">
                    Ushbu blokda biz reklama aktsiyalari haqida ma'lumot joylashtirishni va ularning ahamiyatini ta'kidlashni tavsiya qilamiz.
                </p>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-8">
                    Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu <br />
                    Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori <br />
                    darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."
                </p>
                <h2 className="font-bold text-2xl sm:text-3xl mb-10 text-[#1A1A1A]">Bunday bo'limni to'ldirishga misol:</h2>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-5">
                    Bizning do'konimiz turli xil moslashuvchan chegirmalar va aktsiyalar taklif qiladi. Siz har doim yangi aktsiyalarning paydo bo'lishi haqida <br />
                    "<a className="text-blue-400 underline" href="#">Maqolalar</a>" bo'limida bilib olishingiz mumkin. Har doim eng so'nggi ajoyib narxlardan xabardor bo'lish uchun yangilanishlarni kuzatib boring.
                </p>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-8">
                    Hozirda bizda quyidagi chegirma turlari mavjud:
                </p>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-5">
                    <b>Jamg'arma kartasi</b>. Birinchi xaridingizdan so'ng siz omonat kartasini olasiz, har bir keyingi xaridda har bir xarid qilingan mahsulot narxining <br />
                    kichik foizi hisobga olinadi. Siz kartada to'plangan summani istalgan vaqtda xarid uchun to'lash uchun ishlatishingiz mumkin.
                </p>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-5">
                    <b>“1 narxiga 2” aksiyasi</b>. Narx belgilariga e'tibor bering. To'q sariq rangda (veb-saytda bunday mahsulotlar "2=1" belgisi bilan ta'kidlangan) <br />
                    o'sha mahsulotlar ajratib ko'rsatilgan, ularni sotib olgandan so'ng siz ikkinchi nusxasini sovg'a sifatida olasiz.
                </p>
                <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 mb-8">
                    Shuningdek, qizil narx belgilari bo'lgan mahsulotlarga 10% chegirma mavjud (veb-saytda bunday mahsulotlar "Maxsus taklif" belgisi bilan <br />
                    ta'kidlangan). Tanlashda ehtiyot bo'ling.
                </p>
            </div>
        </div>
    );
};

export default Birja;
