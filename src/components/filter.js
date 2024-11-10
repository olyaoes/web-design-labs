import React, { useState } from "react";
import { Select } from 'antd';
import Button from "./Button";

const Filter = () => {
    const [filter1, setFilter1] = useState("Filter1");
    const [filter2, setFilter2] = useState("Filter2");

    return (
        <div className="filter">
            <div className="selects">
                <Select className="select" value={filter1} onChange={value => setFilter1(value)}>
                    <option value="Tulip">Tulip</option>
                    <option value="Rose">Rose</option>
                    <option value="Daisy">Daisy</option>
                </Select>
                <Select className="select" value={filter2} onChange={value => setFilter2(value)}>
                    <option value="Price">Price</option>
                    <option value="Name">Name</option>
                </Select>
            </div>
            <div>
                <Button className="apply-btn" text='Apply'/>
            </div>
        </div>
    )
}

export default Filter;
