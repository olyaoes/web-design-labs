import React from "react";
import { Link, useParams } from 'react-router-dom';
import flowers from "./flowers_data";
import Button from "./Button";
import { Select } from 'antd';

function Item() {
    const { id } = useParams();
    const flower = flowers.find(item => item.id === parseInt(id));

    // Якщо товар не знайдено
    if (!flower) {
        return (
            <div>
                <h2>Item not found</h2>
                <Link to="/catalog">
                    <Button className="back-btn" text="Go back to catalog"/>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div className="item-descriptions">
                <img className="item-img" src={flower.img} alt={flower.title} />
                <div>
                    <h2>{flower.title}</h2>
                    <p className="item-description">{flower.description}</p>
                    <div className="item-selects">
                        <div className="item-select">
                            <label className="label" htmlFor="type-select">Тип</label>
                            <Select id="type-select" className="select" defaultValue="бензиновий">
                                <Select.Option>бензиновий</Select.Option>
                                <Select.Option>акумуляторний</Select.Option>
                                <Select.Option>електричний</Select.Option>
                            </Select>
                        </div>
                        <div className="item-select">
                            <label className="label" htmlFor="power-select">Потужність</label>
                            <Select id="power-select" className="select" defaultValue="4,95 кВт">
                                <Select.Option>4,95 кВт</Select.Option>
                                <Select.Option>3,35 кВт</Select.Option>
                                <Select.Option>2,65 кВт</Select.Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-nav">
                <p className="item-price">Price: {`${flower.price} грн`}</p>
                <div>
                    <Link className="link" to="/catalog">
                        <Button className="back-btn" text="Go back"/>
                    </Link>
                    <Button className="add-btn" text="Add to cart"/>
                </div>
            </div>
        </div>
    );
}

export default Item;
