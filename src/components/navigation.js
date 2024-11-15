import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const Navigation = () => {
    const location = useLocation();
    const logo = process.env.PUBLIC_URL + '/img/logo1.png';

    return (
        <header className="navigation">
            <img className="nav-logo" src={logo} alt="Brand Logo" />
            <div className="header__nav">
                <nav>
                    <ul>
                        <li>
                            <Link className="link home-button" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link catalog-button" to="/catalog">Catalog</Link>
                        </li>
                        <li><a href="#services" className="link">Cart</a></li>
                    </ul>
                </nav>
            </div>
            {location.pathname === '/catalog' && (
                <div className="search-container">
                    <input className="nav-input" type="text" placeholder="Search..." />
                    <GoSearch className="icons-search" />
                </div>
            )}
        </header>
    );
};

export default Navigation;
