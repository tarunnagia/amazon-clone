import React from 'react'
import Product from './Product';
import './Home.css';
function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""/>

            <div className="home__row">
            {/* Product : id, title, Price, rating, image */}
                <Product 
                    id = "1"
                    title = "OPPO F11 (Marble Green, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price = {15000.00}
                    rating = {4}
                    image = "https://www.amazon.in/images/I/71kYwNNJUpL._SL1500_.jpg"
                />
                <Product 
                    id = "2"
                    title = "HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6 inch FHD Laptop (8GB/1TB HDD/ Win 10/GTX 1050 4GB/Backlit Keyboard/2.2kg), 15-dk0261TX (Shadow Black)"
                    price = { 88000.00}
                    rating = {5}
                    image = "https://www.amazon.in/images/I/61jsw0NsQHL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            {/* Product : id, title, Price, rating, image */}
                <Product 
                    id = "3"
                    title = "Redgear Blaze Semi-Mechanical wired Gaming keyboard with 3 colour backlit, full aluminium body & Windows key lock for PC ( Black )"
                    price = {5500.00}
                    rating = {4}
                    image = "https://www.amazon.in/images/I/81PjP2ejm0L._SL1500_.jpg"
                />
                <Product 
                    id = "4"
                    title = "Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)"
                    price = {38000.00}
                    rating = {5}
                    image = "https://www.amazon.in/images/I/91xnO7qHAeL._SL1500_.jpg"
                />
                <Product 
                id = "5"
                title = "OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery) "
                price = {35000.00}
                rating = {4}
                image = "https://www.amazon.in/images/I/71ncRs6HzyL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product 
                id = "6"
                title = "OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model) Smart TV Features: Android TV 9.0 | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay"
                price = {13000.00}
                rating = {4}
                image = "https://www.amazon.in/images/I/71rV31cfteL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
