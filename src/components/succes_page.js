import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleGoBackToCatalog = () => {
        navigate("/catalog"); // Повернення на каталог
    };

    return (
        <div className="success-page">
            <Navigation />
            <div className="success-container">
                <h2 style={{ color: '#d87093' }}>Success!</h2>
                <div style={{ fontSize: '50px', color: '#d87093' }}>✔</div> {/* Рожева галочка */}
                <p>Your order was sent to processing! Check your email box for further information.</p>
                <button className="back-btn" onClick={handleGoBackToCatalog}>Go Back to Catalog</button>
            </div>
            <Footer />
        </div>
    );
};

export default SuccessPage;

