import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import Item from "./item"; // Імпортуємо компонент Item

function ItemPage() {
    const { id } = useParams(); // Отримуємо ID квітки з URL
    const [flower, setFlower] = useState(null); // Стан для зберігання інформації про квітку
    const [loading, setLoading] = useState(true); // Стан для завантаження
    const [error, setError] = useState(null); // Стан для помилок

    useEffect(() => {
        console.log("ID із URL:", id); // Логування ID квітки
        // Завантажуємо інформацію про квітку з API
        axios
            .get(`http://localhost:3002/api/flowers/${id}`)
            .then((response) => {
                setFlower(response.data); // Отримуємо дані квітки з відповіді
                setLoading(false); // Завершуємо завантаження
            })
            .catch((error) => {
                console.error("Error fetching flower:", error); // Логування помилки
                setError("Something went wrong. Please try again later."); // Встановлюємо помилку
                setLoading(false); // Завершуємо завантаження навіть при помилці
            });
    }, [id]); // Запит виконується щоразу, коли змінюється ID

    // Якщо дані ще завантажуються, показуємо повідомлення
    if (loading) return <div>Loading...</div>;

    // Якщо є помилка, показуємо повідомлення
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

    // Якщо квітку не знайдено, показуємо відповідь
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

    // Відображення сторінки з квіткою
    return (
        <div className="item-page">
            {/* Використовуємо компонент Item для відображення інформації */}
            <Item flower={flower} />

            {/* Додаткові кнопки навігації */}
            <div className="item-nav">
                <p className="item-price">Price: {`${flower.price} грн`}</p>
                <div className="item-buttons">
                    <Link to="/catalog">
                        <Button className="back-btn" text="Go back" />
                    </Link>
                    <Button className="add-btn" text="Add to cart" />
                </div>
            </div>
        </div>
    );
}

export default ItemPage;
