import React, { useState } from "react";
import Navigation from "./navigation";
import Filter from "./filter";
import Footer from "./footer";
import Flowers from "./flowers";
import flowers from "./flowers_data";

function CatalogPage() {
    const [filteredData, setFilteredData] = useState(flowers.slice(0, 4));

    const handleSearch = (searchTerm) => {
        const filtered = flowers.filter(flower =>
            flower.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };
    const handleSort = (sortCriteria) => {
        let sortedFlowers = [...filteredData];
        if (sortCriteria === "Name") {
            sortedFlowers.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortCriteria === "Price") {
            sortedFlowers.sort((a, b) => a.price - b.price);
        }
        setFilteredData(sortedFlowers);
    };
    return(<div>
        <Navigation onSearch={handleSearch}/>
        <Filter onSort={handleSort} />
        <Flowers data={filteredData.slice(0, 4)} />
        <Footer />
    </div>)
}

export default CatalogPage;