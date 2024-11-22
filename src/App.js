import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CatalogPage from "./components/catalog_page";
import ItemPage from "./components/item_page";  // Імпортуємо нову сторінку

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/item-page/:id" element={<ItemPage />} /> {/* Замінили /flower/:id на /item-page/:id */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
