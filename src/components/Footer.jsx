import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 1000); // 100px dan keyin tugma chiqadi
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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
    <div className="relative">
      {/* Form qismi */}
      <div className="mt-16 bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-base mx-auto">
        {/* Form sarlavha */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black text-center">
          Ekskursiya uchun ro'yxatdan o'ting
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Inputlar */}
          <div>
            <label className="block font-semibold mb-1">Ismingiz</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ism *"
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (000) 000-00-00"
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Elektron pochta</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="test@example.com"
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Tartib turi</label>
            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded"
            >
              <option value="Studiya">Studiya</option>
              <option value="Muzey">Muzey</option>
              <option value="Tabiat">Tabiat</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Sana</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Vaqt</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className="block font-semibold mb-1">Istaklar</label>
            <textarea
              name="wishes"
              value={formData.wishes}
              onChange={handleChange}
              placeholder="O'z tilaklaringizni yozing *"
              className="w-full p-3 border border-gray-300 rounded h-32"
              required
            />
          </div>

          <div className="md:col-span-2 lg:col-span-3 flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-sm text-gray-600">
              <span className="underline">Men shaxsiy ma'lumotlarni</span> qayta ishlashga roziman *
            </label>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <button type="submit" className="w-full sm:w-auto bg-red-500 text-white py-4 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition">
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#212830] pt-12 pb-16 relative overflow-hidden mt-10">
        <div className="max-w-base mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Kontaktlar</h2>
            <p className="text-lg lg:text-[22px] text-[#B3BFC0]">
              Siz uchun qulay bo'lgan har qanday usulda biz bilan bog'lanishingiz mumkin.
            </p>
          </div>

          <div className="border-t pt-8 border-[#404e5f] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center sm:text-left">
              <p className="text-[#A6A9AB]">Ish vaqti:</p>
              <h4 className="text-white font-bold">Dushanba-Juma: 09:00 - 17:00</h4>
              <h4 className="text-white font-bold">Shanba: 11:00 - 15:00</h4>
              <p className="text-[#a6a9ab] mt-4">Ijtimoiy tarmoqlar:</p>
              <div className="flex justify-center sm:justify-start gap-4 mt-2"></div>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#A6A9AB]">Telefonlar:</p>
              <h4 className="text-white font-bold">+998 77-003-97-97</h4>
              <h4 className="text-white font-bold mt-2">+998 77-003-97-97</h4>
              <p className="text-[#a6a9ab] mt-4">Pochta:</p>
              <h4 className="text-[#ff5050] font-bold hover:border-b-2 border-[#ff5050] cursor-pointer">
                lonewolf_777_@gmail.com
              </h4>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#A6A9AB]">Manzil:</p>
              <h4 className="text-white font-bold">
                O'zbekiston, Andijon, <br /> Baliqchi, Chinobod
              </h4>
              <p className="text-[#a6a9ab] mt-6">To'lov:</p>
              <div className="flex justify-center sm:justify-start gap-4 mt-2"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
            <p className="text-[#a6a9ab] text-center lg:text-left">
              Mualliflik huquqi © 2022 - 2024 Kompaniya nomi
            </p>

            <div className="text-[#a6a9ab] text-center lg:text-right mt-4 lg:mt-0">
              <p>
                Qo'llab-quvvatlash. Megagroup-da{" "}
                <NavLink
                  to="https://megagroup.ru/?roistat_visit=30302099"
                  className="border-b border-[#a6a9ab] hover:text-white"
                >
                  veb-saytlarni ishlab chiqish
                </NavLink>
              </p>
            </div>
          </div>

          {/* Scroll to top tugmasi */}
          {isVisible && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:bottom-8">
              <button
                onClick={scrollToTop}
                className="bg-[#ff5050] text-white rounded-full p-4 shadow-lg hover:bg-[#ff4040] transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 14l-7-7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
