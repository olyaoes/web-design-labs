import React from "react";
import Navigation from "./navigation";
import Filter from "./filter";
import Footer from "./footer";
import Flowers from "./flowers";

function CatalogPage() {
    return(<div>
        <Navigation />
        <Filter />
        <Flowers />
        <Footer />
    </div>)
}

export default CatalogPage;