
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <i className="fas fa-shopping-cart text-2xl sm:text-3xl text-blue-600"></i>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                        VaiNaLista!
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
