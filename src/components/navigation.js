import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const Navigation = ({ onSearch }) => {
    const location = useLocation();
    const logo = process.env.PUBLIC_URL + '/img/logo1.png';
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

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
                        <li><Link className="link" to="/cart">Cart</Link></li>
                    </ul>
                </nav>
            </div>
            {location.pathname === '/catalog' && (
                <div className="search-container">
                    <input
                        id="catalog-search" // Додаємо id
                        name="search" // Додаємо name
                        className="nav-input"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <GoSearch className="icons-search" onClick={handleSearchClick} />
                </div>
            )}
        </header>
    );
};

export default Navigation;
