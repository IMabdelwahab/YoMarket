import { useEffect, useState } from 'react';


export default function Navbar() {

    useEffect(()=>{
        getCategories()
    },[])

    const [isDropdown, setIsDropdown] = useState(false);
    const [categories, setCategories] = useState([])

    const getCategories = ()=> fetch('http://localhost:8000/categories').then(resp => resp.json()).then(resp => setCategories(resp))  

    const displayCategories = ()=> categories.map((categorie, key)=>
            <a href="#" key={key} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{categorie.name}</a>
        )

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    {/* Logo and primary nav */}
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-16 w-auto" src="images/logo.png" alt="YoMarket" />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a href="/" className="text-gray-500 hover:border-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Home
                            </a>
                            <div className="relative inline-flex">
                                <button
                                    onClick={() => setIsDropdown(!isDropdown)}
                                    className=" text-gray-500 hover:border-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Categories
                                </button>
                                {isDropdown && ( 
                                    <div className="absolute z-10 mt-20 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu">
                                            {displayCategories()}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <a href="/stores" className="text-gray-500 hover:border-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Stores
                            </a>
                        </div>
                    </div>

                    {/* Search bar */}
                    <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Login
                        </button>
                        <button className="ml-4 bg-white text-green-500 border border-green-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}