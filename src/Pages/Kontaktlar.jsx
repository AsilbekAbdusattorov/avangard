import React, { useState } from "react";
import { Link } from "react-router-dom";

import whatsup from "../img/whatsup.png";
import telegram from "../img/telegramlogo.png";
import wake from "../img/waket.svg";
import ok from "../img/okey.svg";
import r from "../img/rr.svg";

const Kontaktlar = () => {
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
        <div className="py-10 bg-blue-50">
            <div className="w-full max-w-base mx-auto px-6">
                {/* Kontaktlar Bo'limi */}
                <div>
                    <h2 className="font-bold text-3xl sm:text-4xl mb-10 text-[#1A1A1A]">Kontaktlar</h2>
                    <div className="flex justify-between items-center flex-wrap-reverse gap-10">
                        <div className="max-w-md w-full">
                            {/* Kontakt ma'lumotlari */}
                            <div className="flex items-center space-x-2 mb-5">
                                <span className="text-lg sm:text-2xl font-semibold">+7 (000) 000-00-00</span>
                                <div className="flex gap-2">
                                    <img src={whatsup} alt="WhatsApp" className="w-12 h-12" />
                                    <img src={telegram} alt="Telegram" className="w-12 h-12" />
                                </div>
                            </div>
                            <p className="text-[#1A1A1A] text-lg sm:text-xl my-8">Moskva, st. Leninskaya, uy 0, bino 0, ofis 0</p>
                            <p className="text-[#1A1A1A] text-lg sm:text-xl my-8">Dushanba-Jum 11:00 dan 21:00 gacha</p>
                            <p className="text-[#1A1A1A] text-lg sm:text-xl my-8">Shanba kuni yopiq</p>
                            <Link className="text-blue-400 text-lg sm:text-xl" to="mailto:mail@company.ru">mail@company.ru</Link>
                            <p className="text-[#1A1A1A] text-lg sm:text-xl my-4">INN 000000000 OGRN 000000000</p>
                            <div className="flex space-x-3 mt-6">
                                <img className="w-12 h-12 rounded-xl" src={wake} alt="Wake" />
                                <img className="w-12 h-12 rounded-xl" src={ok} alt="OK" />
                                <img className="w-12 h-12 rounded-xl" src={r} alt="R" />
                            </div>
                        </div>

                        {/* Google Maps iframe */}
                        <div className="w-full max-w-4xl">
                            <iframe
                                src="https://www.google.com/maps/embed?... (URL qisqartirildi)"
                                width="100%"
                                height="460"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontaktlar;
