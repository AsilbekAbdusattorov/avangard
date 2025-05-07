import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sectionMaqolalar } from '../data';

const MaqolalarVaMaslahatlar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const sections = [
        { title: "Bo'lim 1", link: '/bolim1' },
        { title: "Bo'lim 2", link: '/bolim2' },
        { title: "Bo'lim 3", link: '/bolim3' },
    ];

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
                <h2 className="font-bold text-3xl sm:text-4xl mb-10 text-[#1A1A1A]">Maqolalar va maslahatlar</h2>

                {/* Dropdown Button */}
                <button
                    className="px-5 py-2 text-base m-5 border border-blue-400 bg-white text-red-500 rounded-md cursor-pointer hover:shadow-sm hover:border-none hover:shadow-gray-600"
                    onClick={toggleDropdown}
                >
                    Bo'limlar
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="bg-white border border-blue-300 rounded-md shadow-md mt-2 p-3">
                        <ul className="space-y-2">
                            {sections.map((section, index) => (
                                <li key={index}>
                                    <Link
                                        to={section.link}
                                        className="text-blue-500 hover:underline cursor-pointer"
                                    >
                                        {section.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Articles List */}
                <ul className="space-y-5 mt-8">
                    {sectionMaqolalar.map((sectionMaqola, index) => (
                        <li key={index} className="py-8 bg-white px-5 rounded-md shadow-md">
                            <p className="text-[#7b7b7b]">{sectionMaqola.data}</p>
                            <Link
                                to={sectionMaqola.Link}
                                className="text-red-400 underline text-xl mb-2 inline-block"
                            >
                                {sectionMaqola.Link}
                            </Link>
                            <div className="flex gap-4 justify-between mt-4">
                                <img
                                    src={sectionMaqola.img}
                                    alt={sectionMaqola.img}
                                    className="w-32 h-32 hidden md:inline-block object-cover rounded-lg"
                                />
                                <p className="text-[#7b7b7b]">{sectionMaqola.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MaqolalarVaMaslahatlar;
