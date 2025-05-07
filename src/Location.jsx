import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Location = () => {

    const location = useLocation();
    const pathnames = location.pathname;
    const pathArr = pathnames.split('/').filter((path) => path !== '');

    // uy uchun
    const home = location.pathname === '/';
    return (
        <div className='pl-5 py-10'>
            <ul className='flex space-x-3 items-center'>
                <li>
                    <Link
                        className="text-blue-500 underline text-lg font-medium"
                        to="/"
                    >
                        Uy
                    </Link>
                </li>

                {pathArr.map((path, index) => {
                        const isLast = index === pathArr.length - 1;

                        return (
                            <li key={index}>
                                <span>/</span>
                                {!isLast ? (
                                    <Link
                                        className="text-blue-500 underline text-lg font-medium"
                                        to={`/${pathArr.slice(0, index + 1).join('/')}`}
                                    >
                                        {decodeURIComponent(path)}
                                    </Link>
                                ) : (
                                    <span className="text-lg font-medium text-black/60">
                                        {decodeURIComponent(path)}
                                    </span>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    )
}

export default Location