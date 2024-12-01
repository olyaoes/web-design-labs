import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; // Для запитів до API
import Button from "./Button";
import { Select } from 'antd';

function Item({ flower }) {
    return (
        <div className="item-descriptions">
            <img className="item-img" src={flower.img} alt={flower.title} />
            <div className="item">
                <h2>{flower.title}</h2>
                <p className="item-description">{flower.description}</p>
                <div className="item-selects">
                    <div className="item-select">
                        <label className="label" htmlFor="height-select">Height of the bouquet</label>
                        <Select
                            id="height-select"
                            className="select"
                            defaultValue={flower.height || "70-80 см"}
                        >
                            <Select.Option value="70-80 см">70-80 см</Select.Option>
                            <Select.Option value="80-90 см">80-90 см</Select.Option>
                            <Select.Option value="90-100 см">90-100 см</Select.Option>
                        </Select>
                    </div>
                    <div className="item-select">
                        <label className="label" htmlFor="size-select">Size</label>
                        <Select
                            id="size-select"
                            className="select"
                            defaultValue={flower.size || "Medium"}
                        >
                            <Select.Option value="Standard">Standard</Select.Option>
                            <Select.Option value="Medium">Medium</Select.Option>
                            <Select.Option value="Big">Big</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;