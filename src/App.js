import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CatalogPage from "./components/catalog_page";
import ItemPage from "./components/item_page";
import CartPage from "./components/cart_page"; 
import CheckoutPage from "./components/checkout_page";
import SuccessPage from "./components/succes_page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/item-page/:id" element={<ItemPage />} />
                <Route path="/cart" element={<CartPage />} /> 
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

