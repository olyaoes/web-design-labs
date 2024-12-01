import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cart_slice";
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";

function CartPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
    };

    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            dispatch(removeFromCart(item));
        } else {
            dispatch(removeFromCart(item));
        }
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleBackToCatalog = () => {
        navigate("/catalog");
    };

    const handleContinue = () => {
        navigate("/checkout");
    };

    return (
        <div>
            <Navigation />
            <div className="cart-page">
                <div className="cart-container">
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            <ul className="cart-items-list">
                                {cartItems.map((item, index) => (
                                    <li key={index} className="cart-item">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="cart-item-img"
                                        />
                                        <div className="cart-item-details">
                                            <h3>{item.title}</h3>
                                            <p>{item.price} грн</p>
                                            <div className="quantity-controls">
                                                <button
                                                    className="quantity-btn"
                                                    onClick={() => handleDecrement(item)}
                                                >
                                                    -
                                                </button>
                                                <span className="quantity">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    className="quantity-btn"
                                                    onClick={() => handleIncrement(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-summary">
                                <h2>Total: {totalPrice} грн</h2>
                                <div className="cart-buttons">
                                    <button
                                        onClick={handleBackToCatalog}
                                        className="back-btn"
                                    >
                                        Back to Catalog
                                    </button>
                                    <button
                                        onClick={handleContinue}
                                        className="continue-btn"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;

