// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart_slice"; // Використовуємо дефолтний експорт

const store = configureStore({
    reducer: {
        cart: cartReducer, // Головний reducer для кошика
    },
});

export default store;
