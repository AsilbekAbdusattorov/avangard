import React, { useState } from 'react';
import { section4Data } from '../data';
import { Link } from 'react-router-dom';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='bg-blue-100'>
            <div className="w-full max-w-[1300px] mx-auto px-4 md:px-10 lg:px-14 py-14 md:py-20 lg:py-28">

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-between border-2 border-gray-600 rounded-t-lg overflow-hidden">
                    {section4Data.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex-1 text-sm sm:text-base md:text-lg lg:text-xl text-center py-6 font-semibold transition-all duration-300 ${activeTab === index
                                ? 'border-t-4 border-red-500 text-black bg-white'
                                : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white border rounded-b-lg shadow-lg p-5 sm:p-8">
                    {section4Data.map((section, index) => (
                        activeTab === index &&
                        <div className='flex flex-col lg:flex-row gap-8' key={index}>
                            {/* Card 1 */}
                            <div className="w-full max-w-[500px] mx-auto border rounded-lg px-5 py-7 shadow-md flex flex-col items-center">
                                <img
                                    src={section.img}
                                    alt={section.name}
                                    className="w-full max-w-[300px] h-[300px] mb-5 object-cover rounded-lg"
                                />
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">{section.name}</h3>
                                <div className="w-full flex flex-col items-start text-sm md:text-base">
                                    <p>Kvadrat: <strong>{section.kvadrat}</strong></p>
                                    <p>Qavat/qavatlar soni: <strong>{section.qavatlarSoni}</strong></p>
                                    <p>Muddati: <strong>{section.muddat}</strong></p>
                                    <p>Narxi: <strong>{section.narxi}</strong></p>
                                </div>
                                <div className="mt-5 flex w-full justify-between text-sm">
                                    <Link to="/Xizmatlar" className="py-2 px-4 bg-red-500 text-white rounded">Batafsil ma'lumot</Link>
                                    <button className="text-red-500">PDF yuklab olish</button>
                                </div>
                            </div>

                            {/* Card 2 (duplicate) */}
                            <div className="w-full max-w-[500px] mx-auto border rounded-lg px-5 py-7 shadow-md flex flex-col items-center">
                                <img
                                    src={section.img}
                                    alt={section.name}
                                    className="w-full max-w-[300px] h-[300px] mb-5 object-cover rounded-lg"
                                />
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">{section.name}</h3>
                                <div className="w-full flex flex-col items-start text-sm md:text-base">
                                    <p>Kvadrat: <strong>{section.kvadrat}</strong></p>
                                    <p>Qavat/qavatlar soni: <strong>{section.qavatlarSoni}</strong></p>
                                    <p>Muddati: <strong>{section.muddat}</strong></p>
                                    <p>Narxi: <strong>{section.narxi}</strong></p>
                                </div>
                                <div className="mt-5 flex w-full justify-between text-sm">
                                    <Link to="/Xizmatlar" className="py-2 px-4 bg-red-500 text-white rounded">Batafsil ma'lumot</Link>
                                    <button className="text-red-500">PDF yuklab olish</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
