import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux"; // Імпортуємо Provider
import store from "./components/store"; // Імпортуємо Store
import App from "./App";
import "./css/styles.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
