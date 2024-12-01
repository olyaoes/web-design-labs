const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); // Імпортуємо mysql2
const app = express();

// Налаштування з'єднання з MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '21Olya0822/',
    database: 'flowerdb2'
});

// Перевірка з'єднання з базою даних
db.connect((err) => {
    if (err) {
        console.error("Помилка підключення до бази даних: ", err);
        return;
    }
    console.log("Успішно підключено до бази даних MySQL.");
});

// Додати CORS для дозволу запитів тільки з порту 3000 (React-додаток)
app.use(cors({
    origin: 'http://localhost:3000', // Дозволяє запити тільки з вашого React додатку
}));

// Маршрут для отримання квітки за id
app.get("/api/flowers/:id", (req, res) => {
    const flowerId = req.params.id;

    db.query("SELECT * FROM flowers WHERE id = ?", [flowerId], (err, results) => {
        if (err) {
            console.error("Помилка запиту до бази даних: ", err);
            return res.status(500).json({ message: "Помилка сервера" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Квітка не знайдена" });
        }

        res.json(results[0]); // Повертаємо перший (і єдиний) результат
    });
});

// Маршрут для отримання всіх квітів
app.get("/api/flowers", (req, res) => {
    db.query("SELECT * FROM flowers", (err, results) => {
        if (err) {
            console.error("Помилка запиту до бази даних: ", err);
            return res.status(500).json({ message: "Помилка сервера" });
        }

        res.json(results); // Повертаємо всі квітки
    });
});

// Слухаємо порт 3002
app.listen(3002, () => console.log("Server running on http://localhost:3002"));

