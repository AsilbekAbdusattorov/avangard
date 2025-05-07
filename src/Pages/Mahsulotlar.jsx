import React, { useState } from 'react';

const Mahsulotlar = () => {
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
      <div className="w-full max-w-base mx-auto px-4 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A]">Mahsulotlar</h2>

        <div className="space-y-4 text-base sm:text-lg lg:text-xl font-medium text-[#1A1A1A]">
          <p>
            Ushbu blokda siz taqdim etayotgan mahsulotlar haqida kirish maqolasini va takliflarning to'liq katalogini joylashtirishingiz mumkin.
          </p>
          <p>
            Mahsulotlarni tematik toifalarga guruhlash foydali bo'lishi mumkin.
          </p>
          <p>
            Mahsulot haqida batafsil ma'lumot, turli xil xususiyatlar, rasmlar, narxlar, qo'llaniladigan chegirmalar va joriy aktsiyalar haqida ma'lumotni o'z ichiga olgan mahsulot kartalari bo'lishi mumkin. Batafsil tavsifi va buyurtma berish imkoniyati bilan mahsulot sahifasiga o'tish imkoniyati mavjud.
          </p>

          <h3 className="text-2xl font-bold pt-4">Bunday bo'limni to'ldirishga misol:</h3>

          <p>
            Bizning veb-saytimizda siz <span className="text-red-500">{`< taklif etilayotgan mahsulot turlari ro'yxatini >`}</span> topishingiz mumkin.
          </p>

          <p>
            <span className="text-red-500">{`< Taklif etilayotgan tovarlar turini yoki toifasini ko'rsating >`}</span> – Turli ishlab chiqaruvchilarning keng assortimenti: <span className="text-red-500">{`< misol sifatida bir nechta ishlab chiqaruvchilarni sanab o'ting >.`}</span>
          </p>

          <p>
            <span className="text-red-500">{`< Taklif etilayotgan tovarlar turini yoki toifasini ko'rsating >`}</span> – Turli brendlardagi mahsulotlar: <span className="text-red-500">{`< kompaniyani ko'rsating >`}</span> dan <span className="text-red-500">{`< kompaniyani ko'rsating >.`}</span> <span className="text-red-500">{`< Mahsulot assortimentining qisqacha tavsifini bering >.`}</span>
          </p>

          <p>
            <span className="text-red-500">{`< Taklif etilayotgan tovarlar turini yoki toifasini ko'rsating >`}</span> – Bizda har doim mavjud: <span className="text-red-500">{`< mahsulot turini belgilang >.`}</span> <span className="text-red-500">{`< Mahsulot assortimentining qisqacha tavsifini bering >.`}</span>
          </p>

          <p>
            Bundan tashqari, biz taqdim etayotgan xizmatlar ro'yxati bilan tanishib chiqishingizni tavsiya qilamiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mahsulotlar;
