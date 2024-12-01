import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Додаємо Redux-хук
import Footer from "./footer";
import Navigation from "./navigation";
import axios from "axios";
import Button from "./Button";
import Item from "./item";
import { addToCart } from "./cart_slice"; // Імпортуємо екшн

function ItemPage() {
    const { id } = useParams(); // Отримуємо ID квітки з URL
    const [flower, setFlower] = useState(null); // Стан для квітки
    const [loading, setLoading] = useState(true); // Стан завантаження
    const [error, setError] = useState(null); // Стан помилки
    const dispatch = useDispatch(); // Ініціалізуємо хук для dispatch

    useEffect(() => {
        axios
            .get(`http://localhost:3002/api/flowers/${id}`)
            .then((response) => {
                setFlower(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching flower:", error);
                setError("Something went wrong. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        if (flower) {
            dispatch(addToCart(flower)); // Додаємо товар до кошика через Redux
            alert(`${flower.title} added to cart!`);
        }
    };

    if (loading) return <div>Loading...</div>;

    if (error) {
        return (
            <div>
                <h2>{error}</h2>
                <Link to="/catalog">
                    <Button className="back-btn" text="Go back to catalog" />
                </Link>
            </div>
        );
    }

    if (!flower) {
        return (
            <div>
                <h2>Item not found</h2>
                <Link to="/catalog">
                    <Button className="back-btn" text="Go back to catalog" />
                </Link>
            </div>
        );
    }

    return (
        <div className="item-page">
            <Navigation />
            <Item flower={flower} />
            <div className="item-nav">
                <p className="item-price">Price: {`${flower.price} грн`}</p>
                <div className="item-buttons">
                    <Link to="/catalog">
                        <Button className="back-btn" text="Go back" />
                    </Link>
                    <Button className="add-btn" text="Add to cart" onClick={handleAddToCart} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ItemPage;

