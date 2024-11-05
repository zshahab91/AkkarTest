import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Optional, for icons
import Link from 'next/link';
import { IProductState } from '@/interfaces/product';
import { useAppSelector } from '@/store/store';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartList = useAppSelector((state: { product: IProductState }) => state.product.cart);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-500">
                <Link href="/" >Akkar</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-blue-500">
                        Home
                    </Link>
                    <span className="text-gray-600 hover:text-blue-500">
                        <Link href="/wishList">
                            WishList
                        </Link>

                    </span>
                    <span className="text-gray-600 hover:text-blue-500">
                        <div className="relative py-2">
                            <div className="t-0 absolute left-3">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartList.length}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </span>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <XIcon className="h-6 w-6" /> // Close icon for mobile
                    ) : (
                        <MenuIcon className="h-6 w-6" /> // Hamburger icon for mobile
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col space-y-4 py-4 px-6">
                        <li>
                            <Link href="/" className="text-gray-600 hover:text-blue-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <span className="text-gray-600 hover:text-blue-500">
                                <Link href="/wishList">
                                    WishList
                                </Link>

                            </span>


                        </li>
                        <li>
                            <span className="text-gray-600 hover:text-blue-500">
                                <div className="relative py-2">
                                    <div className="t-0 absolute left-3">
                                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartList.length}</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                            </span>
                        </li>

                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;

