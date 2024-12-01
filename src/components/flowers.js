import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import flowers from "./flowers_data";

const Flowers = ({ data=flowers, limit }) => {
    const location = useLocation();
    const displayedData = limit ? data.slice(0, limit) : data;

    return (
        <ul className="items-container">
            {displayedData.length > 0 ? (
                displayedData.map((flower) => (
                    <li className="flower-container" key={flower.id}>
                        <img className="flower-img" src={flower.img} alt={flower.title} />
                        <h1 className="title-flower">{flower.title}</h1>
                        <p className="description-flower">{flower.description}</p>
                        {location.pathname === '/catalog' && (
                            <>
                                <div className="price">
                                    <p className="txt-price">Price: </p>
                                    <p className="price-flower">{`${flower.price} грн`}</p>
                                </div>
                                <Link className="link" to={`/item-page/${flower.id}`}>
                                    <Button className="view-more-btn" text="View more" />
                                </Link>
                            </>
                        )}
                    </li>
                ))
            ) : (
                <p>No items found</p> // Додаємо відповідь для випадку, коли `displayedData` порожній
            )}
        </ul>
    );
}

export default Flowers;
