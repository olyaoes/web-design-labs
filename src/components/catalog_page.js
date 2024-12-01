import React, { useState, useEffect, useCallback } from "react";
import Navigation from "./navigation";
import Filter from "./filter";
import Footer from "./footer";
import SpinnerHeart from "./Spinner";
import api from "../api";
import { useNavigate } from "react-router-dom";

function CatalogPage() {
    const [flowers, setFlowers] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [sortCriteria, setSortCriteria] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtering, setFiltering] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchFlowers = async () => {
            setLoading(true);
            try {
                const data = await api.getFlowers();
                setFlowers(data);
            } catch (error) {
                console.error("Помилка завантаження квітів:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlowers();
    }, []);

    const getFilteredData = useCallback(() => {
        let filtered = [...flowers];

        if (searchFilter) {
            filtered = filtered.filter((item) =>
                item.title.toLowerCase().includes(searchFilter.toLowerCase())
            );
        }

        if (sortCriteria) {
            if (sortCriteria === "Name") {
                filtered.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortCriteria === "Price") {
                filtered.sort((a, b) => Number(a.price) - Number(b.price));
            }
        }

        return filtered.slice(0, 6);
    }, [flowers, searchFilter, sortCriteria]);

    useEffect(() => {
        setFilteredData(getFilteredData());
    }, [flowers, searchFilter, sortCriteria, getFilteredData]);

    const handleSearch = (searchTerm) => {
        setSearchFilter(searchTerm);
    };

    const handleSort = async (criteria) => {
        setFiltering(true); 
        try {
            setSortCriteria(criteria);
        } finally {
            setTimeout(() => setFiltering(false), 1000);
        }
    };

    return (
        <div>
            <Navigation onSearch={handleSearch} />
            <Filter onSort={handleSort} onApply={() => setFiltering(true)} />
            {(loading || filtering) ? (
                <SpinnerHeart />
            ) : (
                <div className="flowers-wrapper">
                    <div className="flowers-list">
                        {filteredData.map((flower) => (
                            <div className="flowers-container" key={flower.id}>
                                <img src={flower.img} alt={flower.title} className="flowers-img" />
                                <div className="title-flowers">{flower.title}</div>
                                <div className="description-flowers">{flower.description}</div>
                                <div className="price">
                                    <label
                                        htmlFor={`price-${flower.id}`}
                                        className="txt-price"
                                    >
                                        Ціна:
                                    </label>
                                    <span id={`price-${flower.id}`} className="price-flowers">
                                        {flower.price} грн
                                    </span>
                                </div>
                                <button
                                    className="view-more-btn"
                                    onClick={() => navigate(`/item-page/${flower.id}`)}
                                >
                                    View More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default CatalogPage;

