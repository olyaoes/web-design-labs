import axios from "axios";

const API_BASE_URL = "http://localhost:3002/api"; // Серверний URL

const handleError = (error) => {
    if (error.response) {
        console.error("Помилка відповіді сервера:", error.response.data);
        console.error("Код статусу:", error.response.status);
    } else if (error.request) {
        console.error("Помилка запиту:", error.request);
    } else {
        console.error("Щось пішло не так:", error.message);
    }
};

const getFlowers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/flowers`);
        return response.data; // Переконайтеся, що сервер повертає коректний формат
    } catch (error) {
        handleError(error);
        throw error;
    }
};

const getFlowerById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/flowers/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};

export default {
    getFlowers,
    getFlowerById,
};
