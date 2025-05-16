export default function Home() {





    
    return (
        <div className="hero-section bg-gray-100 py-20 w-full h-fit">
            <div className="mx-auto w-full sm:px-6  grid grid-cols-4 grid-rows-2 gap-6 min-h-[550px]">
                <a className="text-white text-3xl font-extrabold border-solid  hover:shadow-gray-600 hover:shadow-2xl flex col-span-2 row-span-2 items-center justify-center bg-[url('images/women-clothes.png')] bg-cover bg-center bg-no-repeat">Women Clothes</a>
                <a className="text-white text-3xl font-extrabold border-solid  hover:shadow-gray-600 hover:shadow-2xl flex items-center justify-center bg-[url('images/accessories.png')] bg-cover bg-center bg-no-repeat">Accessories</a>
                <a className="text-white text-3xl font-extrabold border-solid  hover:shadow-gray-600 hover:shadow-2xl flex items-center justify-center bg-[url('images/men-clothes.png')] bg-cover bg-center bg-no-repeat">Men Clothes</a>
                <a className="text-white text-3xl font-extrabold border-solid  hover:shadow-gray-600 hover:shadow-2xl flex items-center justify-center bg-[url('images/electronics.png')] bg-cover bg-center bg-no-repeat">Electronics</a>
                <a className="text-white text-3xl font-extrabold border-solid  hover:shadow-gray-600 hover:shadow-2xl flex items-center justify-center bg-[url('images/motors.png')] bg-cover bg-center bg-no-repeat">Motorcycles</a>
            </div>
        </div>
        
    );
}