import ProductCard from './ProductCard';

const sampleProducts = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        discount: 20,
        rating: 4.8
    },
    {
        id: 2,
        name: "Smart Watch Series 5",
        description: "Latest smartwatch with health monitoring, GPS, and long battery life.",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        rating: 4.5
    },
    {
        id: 3,
        name: "Professional Camera Kit",
        description: "Complete camera kit with lens, tripod, and carrying case.",
        price: 899.99,
        originalPrice: 999.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        discount: 10,
        rating: 4.9
    },
    {
        id: 4,
        name: "Gaming Laptop Pro",
        description: "High-performance gaming laptop with RTX graphics and 32GB RAM.",
        price: 1499.99,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        rating: 4.7
    },
];

export default function ProductList(props) {
    return (
        <div className="container mx-auto py-8">
            <div className='mb-6'>
                <h2 className="text-2xl font-bold text-blue-950 mb-3">{props.title}</h2>
                <hr className='bg-blue-950 '/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 overflow-auto">
                {sampleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}