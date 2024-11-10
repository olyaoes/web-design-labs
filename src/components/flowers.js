// src/components/Flowers.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Flowers = () => {
    const [flowers, setflowers] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchFlowers = async () => {
            try {
                const response = await fetch("/api/flowersData.json");
                const data = await response.json();
                setflowers(data);
            } catch (error) {
                console.error("Помилка при завантаженні даних про квіти:", error);
            }
        };
        fetchFlowers();
    }, []);

    return (
        <div className={location.pathname === '/catalog' ? 'catalog-page' : ''}>
            <ul className="items-container">
                {flowers.map((flower) => (
                    <li className="flowers-container" key={flower.id}>
                        <img className="flowers-img" src={flower.imageUrl} alt={flower.title} />
                        <h1 className="title-flowers">{flower.title}</h1>
                        <p className="description-flowers">{flower.description}</p>
                        {location.pathname === '/catalog' && (
                            <div className="details-container">
                                <div className="price">
                                    <p className="txt-price">Price: </p>
                                    <p className="price-flowers">{`${flower.price} грн`}</p>
                                </div>
                                <Button className="view-more-btn" text="view-more" />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Flowers;
