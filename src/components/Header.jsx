import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Logo from '../img/logo_1.png';
import HeaderImg1 from '../img/HeaderImg1.svg';
import HeaderImg2 from '../img/HeaderImg2.svg';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    let timeoutId, companyTimeoutId;

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    const handleCompanyMouseEnter = () => {
        clearTimeout(companyTimeoutId);
        setIsCompanyDropdownOpen(true);
    };

    const handleCompanyMouseLeave = () => {
        companyTimeoutId = setTimeout(() => {
            setIsCompanyDropdownOpen(false);
        }, 300);
    };

    return (
        <header className='py-4 border-b'>
            <div className='w-full max-w-base mx-auto px-5'>
                <div className='flex flex-col items-center sm:flex-row lg:items-center justify-between gap-4'>
                    {/* Logo va shirkat nomi */}
                    <div className='flex items-center'>
                        <img src={Logo} alt="logo" className='w-20 h-20 mr-3' />
                        <div>
                            <p className='text-xl font-semibold'>Shirkat nomi</p>
                            <span className='text-black/80 text-sm'>Turar-joy majmuasi veb-sayti</span>
                        </div>
                    </div>

                    {/* Manzil va kontakt */}
                    <div className='flex flex-col lg:space-x-20 text-center sm:text-start lg:flex-row items-start sm:items-center'>
                        <div className='mb-3'>
                            <p className='text-black/80 text-sm'>Moskva, Leninskiy prospekti, bino</p>
                            <NavLink className='text-[#ff5050] border-b border-[#ff5050] text-sm' to='https://mos-residential-complex.oml.ru/#iqy9e17oe_0'>Xaritada ko‘rish</NavLink>
                        </div>

                        <div className='flex items-center gap-2'>
                            <h2 className='text-lg font-semibold'>+998 (77) 003-97-97</h2>
                            <img className='w-6 h-6 rounded-lg' src={HeaderImg1} alt="HeaderImg1" />
                            <img className='w-6 h-6 rounded-lg' src={HeaderImg2} alt="HeaderImg2" />
                        </div>
                    </div>
                </div>

                {/* Mobil menyu tugmasi */}
                <div className='md:hidden flex justify-center sm:justify-between items-center mt-4'>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-xl'>
                        ☰ Menyu
                    </button>
                </div>

                {/* Navigatsiya menyusi */}
                <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className='flex flex-col items-center space-y-2 sm:flex-row sm:space-x-5 lg:space-x-10 py-4'>
                        <li><NavLink to='/'>Uy</NavLink></li>

                        {/* Kompaniya haqida - dropdown */}
                        <li className='relative' onMouseEnter={handleCompanyMouseEnter} onMouseLeave={handleCompanyMouseLeave}>
                            <NavLink to='/KompaniyaHaqida'>Kompaniya haqida</NavLink>
                            {isCompanyDropdownOpen && (
                                <ul className='absolute left-0 bg-white shadow-lg rounded-lg py-2 w-40 z-10'>
                                    <li><NavLink className='block px-4 py-2 hover:bg-gray-200' to='/TolovShartlari'>To'lov shartlari</NavLink></li>
                                    <li><NavLink className='block px-4 py-2 hover:bg-gray-200' to='/YetkazibBerish'>Yetkazib berish</NavLink></li>
                                    {/* <li><NavLink className='block px-4 py-2 hover:bg-gray-200' to='/BizgaYozing'>Bizga yozin</NavLink></li> */}
                                </ul>
                            )}
                        </li>

                        {/* Xizmatlar - dropdown */}
                        <li className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <NavLink to='/Xizmatlar'>Xizmatlar</NavLink>
                            {isDropdownOpen && (
                                <ul className='absolute left-0 bg-white shadow-lg rounded-lg py-2 w-40 z-10'>
                                    <li><NavLink className='block px-4 py-2 hover:bg-gray-200' to='/Xizmat1'>Xizmat № 1</NavLink></li>
                                    <li><NavLink className='block px-4 py-2 hover:bg-gray-200' to='/Xizmat2'>Xizmat № 2</NavLink></li>
                                </ul>
                            )}
                        </li>

                        <li><NavLink to='/Mahsulotlar'>Mahsulotlar</NavLink></li>
                        <li><NavLink to='/NarxlarRoyhati1'>Narxlar ro'yxati</NavLink></li>
                        <li className='hidden xl:inline-block'><NavLink to='/Birja'>Birja</NavLink></li>
                        <li className='hidden xl:inline-block'><NavLink to='/MaqolalarVaMaslahatlar'>Maqolalar va maslahatlar</NavLink></li>

                        <div className="relative group hidden md:block">
                            <div className="cursor-pointer inline-block py-1 px-2 bg-indigo-900 rounded-xl">
                                {/* Uch nuqta ikonasi */}
                                <div>•••</div>

                                {/* Drop-down menyu */}
                                <div className="hidden w-60 group-hover:block absolute top-full bg-pink-300 shadow-lg px-2 pb-2 z-10 space-y-2 rounded-lg">
                                    <li><NavLink to='/Kontaktlar'>Kontaktlar</NavLink></li>
                                    <li className='inline-block xl:hidden'><NavLink to='/Birja'>Birja</NavLink></li>
                                    <li className='inline-block xl:hidden'><NavLink to='/MaqolalarVaMaslahatlar'>Maqolalar va maslahatlar</NavLink></li>
                                </div>
                            </div>
                        </div>

                    </ul>


                </nav>
            </div>
        </header>
    );
};

export default Header;
