import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
            <header>
                <div
                    class="h-16 bg-gray-300 fixed w-full flex justify-between items-center p-5 md:px-10"
                >
                    <div class="text-blue-500">Logo</div>

                    <nav class="hidden md:flex space-x-5">
                        <Link  to="/" class="hover:text-blue-500">Home</Link>
                        <Link to="/about" class="hover:text-blue-500">About</Link>
                        <Link to="/product" class="hover:text-blue-500">Product</Link>
                        <Link to="/contact" class="hover:text-blue-500">Contact</Link>
                    </nav>

                    <div class="hidden md:flex text-3xl space-x-5">
                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                        <a href="#"><i class="fa fa-user"></i></a>
                    </div>

                    <button class="md:hidden text-3xl">
                        <i class="fa fa-bars"></i>
                    </button>

                    <div class="absolute top-14 left-0 w-full bg-gray-400 hidden">
                        <Link to="/" class="block px-10 py-5 hover:bg-gray-400">Home</Link>
                        <Link to="/about" class="block px-10 py-5 hover:bg-gray-400">About</Link>
                        <Link to="/product" class="block px-10 py-5 hover:bg-gray-400">Product</Link>
                        <Link to="/contact" class="block px-10 py-5 hover:bg-gray-400">Contact</Link>
                    </div>
                </div>
            </header>
    )
}

export default Header