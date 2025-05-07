import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Narxlarroyhati = () => {
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
      <div className="w-full max-w-base mx-auto px-4">
        <div>
          <h2 className="font-bold text-3xl sm:text-4xl mb-10 text-[#1A1A1A]">Narxi</h2>
          <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 space-y-5 mb-6">
            Ushbu blokda kompaniyangiz tomonidan taklif qilinadigan tovarlar yoki xizmatlar uchun narxlar ro'yxatini joylashtirishni tavsiya etamiz.
          </p>
          <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 space-y-5 mb-5">
            Eslatma. Boshqaruv tizimi veb-saytda jadval ko'rinishida narxlar ro'yxatini yaratish yoki Exceldan jadvalni import qilish imkonini beradi. Excel'dan jadvallarni import qilishda ularning kengligi va o'lchamlariga e'tibor berish tavsiya etiladi. Jadvalingiz murakkab bo'lsa, u turli brauzerlar va monitor o'lchamlari tufayli saytingizga tashrif buyuruvchilar uchun yaxshi yuklanmasligi mumkin.
          </p>
          <p className="text-[#1A1A1A] text-base sm:text-lg leading-8 space-y-5 mb-5">
            Agar jadval sayt uchun juda katta bo'lsa, uni narxlar ro'yxati faylini boshqaruv tizimiga yuklash orqali yuklab olish havolasi sifatida taqdim etish mumkin.
          </p>
        </div>

        <div>
          <h3 className="text-[#1A1A1A] text-xl sm:text-2xl leading-8 mb-6 font-semibold">Sahifani to'ldirishga misol:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border-2 text-left">Yo'q.</th>
                  <th className="p-2 border-2 text-left">Mahsulot nomi</th>
                  <th className="p-2 border-2 text-left">Narxi (RUB)</th>
                  <th className="p-2 border-2 text-left">Narxi 25 donadan (RUB)</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((num) => (
                  <tr key={num} className="odd:bg-white even:bg-gray-100">
                    <td className="p-2 border-2">{num}</td>
                    <td className="p-2 border-2">Mahsulot/xizmat {num}</td>
                    <td className="p-2 border-2">80</td>
                    <td className="p-2 border-2">65</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xl mt-5">
            Narxlar ro'yxatini yuklab oling (<Link className="text-blue-500 hover:underline" to="#">Fayl havola</Link>!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Narxlarroyhati;
