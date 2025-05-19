import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductList from '../components/productList';
import Hero from '../components/hero';


export default function Home(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <ProductList title ="Category 1"/>
            <ProductList title ="Category 2"/>
            <ProductList title ="Category 3"/>
            <Footer/>
        </>
    )
}