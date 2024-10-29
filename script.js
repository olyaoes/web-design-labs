class Flower {
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

const showroomList = [];

// Завантаження квітів з сервера при ініціалізації
const loadFlowers = async () => {
    try {
        const response = await fetch('http://localhost:3000/flowers');
        if (!response.ok) throw new Error('Failed to fetch flowers');

        const flowers = await response.json();
        flowers.forEach(flower => {
            showroomList.push(new Flower(flower.id, flower.name, flower.price, flower.description, flower.image));
        });
        drawList(showroomList);
    } catch (error) {
        console.error('Error loading flowers:', error);
    }
};

// Малювання списку квіток на сторінці
const drawList = (list) => {
    const showroom = document.getElementById('showroom');
    showroom.innerHTML = ''; // Очистка попереднього вмісту
    let totalExpenses = 0;

    list.forEach((el) => {
        showroom.innerHTML += `
            <div id="showroom-${el.id}" class="flower-card">
                <img src="${el.image}" alt="${el.name}">
                <h3>${el.name}</h3>
                <p>Price: $${el.price}</p>
                <p>${el.description}</p>
                <button onClick="deleteCard(${el.id})">Delete</button>
            </div>
        `;
        totalExpenses += parseFloat(el.price);
    });

    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
};

// Видалення картки
const deleteCard = (flowerId) => {
    deleteFlower(flowerId);
};

// Ініціалізація завантаження квітів при відкритті сторінки
document.addEventListener('DOMContentLoaded', loadFlowers);
