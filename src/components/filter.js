import React, { useState } from "react";
import { Select } from 'antd';
import Button from "./Button";

const Filter = ({ onSort, onApply }) => {
    const [selectedValue, setSelectedValue] = useState("Filter 1");

    const handleChange = (value) => {
        setSelectedValue(value);
    }

    const handleApply = () => {
        onSort(selectedValue); // Сортування
        onApply(); // Запускаємо фільтрацію і спінер
    }

    return (
        <>
            <div className="filter">
                <div className="selects">
                    <Select
                        id="filter-select" // Додаємо id
                        name="filter" // Додаємо name
                        className="select"
                        value={selectedValue}
                        onChange={handleChange}
                    >
                        <Select.Option value="Name">Name</Select.Option>
                        <Select.Option value="Price">Price</Select.Option>
                    </Select>
                </div>
                <div>
                    <Button className="apply-btn" text="Apply" onClick={handleApply} />
                </div>
            </div>
        </>
    );
};

export default Filter;

