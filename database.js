import mysql from 'mysql2/promise'; // Використовуємо обіцянки для роботи з MySQL

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '21Olya0822/',
    database: 'flowerdb'
});

// Додати нову квітку
export const addFlower = async (flower) => {
    const { name, price, description, image } = flower; // Видалено color
    const query = 'INSERT INTO flowers (name, price, description, image) VALUES (?, ?, ?, ?)'; // Видалено color
    const [result] = await db.query(query, [name, price, description, image]); // Видалено color
    return { id: result.insertId, name, price, description, image }; // Видалено color
};

// Отримати всі квітки
export const getAllFlowers = async () => {
    const query = 'SELECT * FROM flowers';
    const [results] = await db.query(query);
    return results;
};

// Оновити квітку за ID
export const updateFlower = async (id, flower) => {
    const { name, price, description, image } = flower; // Видалено color
    const query = 'UPDATE flowers SET name = ?, price = ?, description = ?, image = ? WHERE id = ?'; // Видалено color
    const [result] = await db.query(query, [name, price, description, image, id]); // Видалено color
    return result.affectedRows > 0;
};

// Видалити квітку за ID
export const deleteFlower = async (id) => {
    const query = 'DELETE FROM flowers WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows > 0;
};

// Отримати квітку за ID
export const getFlowerById = async (id) => {
    const query = 'SELECT * FROM flowers WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
};
