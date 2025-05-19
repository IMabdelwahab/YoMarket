import { useState } from 'react';

export default function ProductCard({ product }) {
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl mb-8 hover:border-2"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    loading='lazy'
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                />
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                    {product.rating && (
                        <div className="flex items-center">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 px-6">
                    <button 
                        className="flex-1 bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-950 transition-colors duration-300"
                        onClick={() => {/* Add to cart logic */}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
} 