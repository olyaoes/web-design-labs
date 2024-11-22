import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Filter from "./filter";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SpinnerHeart from "./Spinner";

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
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3002/api/flowers");
                console.log("Flowers fetched successfully:", response.data);
                setFlowers(response.data);
            } catch (error) {
                console.error("Error fetching flowers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlowers();
    }, []);

    useEffect(() => {
        if (!loading) {
            setFilteredData(getFilteredData());
        }
    }, [flowers, searchFilter, sortCriteria, loading]);

    const getFilteredData = () => {
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

        return filtered.slice(0, 6); // Вибираємо лише 6 квіток
    };

    const handleSearch = (searchTerm) => {
        setSearchFilter(searchTerm);
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
        navigate(`?sort=${criteria}`);
    };

    const handleApplyFilter = () => {
        setFiltering(true);
        const filteredResults = getFilteredData();
        setFilteredData(filteredResults);
        setTimeout(() => {
            setFiltering(false);
        }, 2000);
    };

    return (
        <div>
            <Navigation onSearch={handleSearch} />
            <Filter onSort={handleSort} onApply={handleApplyFilter} />
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
