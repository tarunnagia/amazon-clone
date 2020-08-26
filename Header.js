import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
function Header() {
    const [{ cart, user }] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    return <nav className="header">
        {/* Logo on the Left -> Image */}
        <Link to="/"><img className="header__image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        </Link>
    
        {/* Search Box */}
        <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
        </div>

        {/* 4 Links */}

        <div className="header__nav">

            {/* link 1 */}
            
            <Link to={!user && "/login"} className="header__link">
                <div onClick= {login} className="header__option">
                    <span className="header__optionLineOne">Hello ! {user?.email} </span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>
            

            {/* link 2 */}
            
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            

            {/* link 3 */}
            
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            {/* link 4 */}

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping Basket Icon */}
                    <ShoppingCart />
                    {/* Number of Items in Basket */}
                    <span>{cart?.length}</span>

                </div>
            </Link>
        </div>



        {/* Basket with Number of items in it */}
        </nav>
}

export default Header
