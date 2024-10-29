class Flower {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

const showroomList = [];
let currentList = [];

// При завантаженні сторінки завантажуємо дані з localStorage
const loadData = () => {
    const savedData = localStorage.getItem('showroomList');
    if (savedData) {
        const flowers = JSON.parse(savedData);
        flowers.forEach(flower => {
            showroomList.push(new Flower(flower.name, flower.price, flower.description, flower.image));
        });
    }
};

loadData();  // Завантажуємо дані під час ініціалізації сторінки

const drawList = (list) => {
    const showroom = document.getElementById('showroom');
    showroom.innerHTML = '';
    let totalExpenses = 0;

    list.forEach((el, idx) => {
        showroom.innerHTML += `
            <div id="showroom-${idx}" class="flower-card">
                <img src="${el.image}" alt="${el.name}">
                <h3>${el.name}</h3>
                <p>Price: $${el.price}</p>
                <p>${el.description}</p>
                <button onClick="deleteCard('showroom-${idx}')">Delete</button>
            </div>
        `;
        totalExpenses += el.price;
    });

    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
};

// Виклик drawList з наявними квітами
drawList(showroomList);

const clearSearch = () => {
    drawList(showroomList);
};

const searchCard = () => {
    const search = document.getElementById('search-input').value;
    currentList = showroomList.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));
    drawList(currentList);
};

const deleteCard = (cardId) => {
    // Отримуємо елемент картки, який потрібно видалити
    const cardElement = document.getElementById(cardId);
    
    // Отримуємо індекс картки на основі її id
    const cardIndex = parseInt(cardId.split('-')[1], 10);  // cardId виглядає як "showroom-0", отримуємо індекс 0

    // Видаляємо картку з DOM
    if (cardElement) {
        cardElement.remove();  // видаляємо картку з DOM
    }

    // Перевіряємо, чи існує цей індекс у масиві
    if (cardIndex >= 0 && cardIndex < showroomList.length) {
        showroomList.splice(cardIndex, 1);  // видаляємо квітку з масиву showroomList
    }

    // Зберігаємо оновлений список у localStorage після видалення
    saveData();

    // Перемальовуємо список квітів після видалення
    drawList(showroomList);
};

const sortCheckbox = (checkbox) => {
    if (checkbox.checked) {
        currentList = [...showroomList];
        currentList.sort((a, b) => a.price - b.price);
        drawList(currentList);
    } else {
        drawList(showroomList);
    }
};

const alertAveragePrice = () => {
    const average = showroomList.reduce((accumulator, currentFlower) => accumulator + currentFlower.price, 0) / showroomList.length;
    alert(`Average Price: $${average.toFixed(2)}`);
};

// Функція збереження даних в localStorage
const saveData = () => {
    localStorage.setItem('showroomList', JSON.stringify(showroomList));
};

// Початкове заповнення списку квітів
const data = [
    { name: 'Rose', price: 20, description: 'Classic red rose.', image: './images/rose.png' },
    { name: 'Tulip', price: 15, description: 'Bright and cheerful tulip.', image: './images/tulip.png' },
    { name: 'Daisy', price: 10, description: 'Simple and beautiful daisy.', image: './images/daisy.png' },
    { name: 'Peonies', price: 50, description: 'Incredible peonies.', image: './images/peonies.png' },
    { name: 'Orchid', price: 30, description: 'Exotic and elegant orchid.', image: './images/orchid.png' },
    { name: 'Lisianthus', price: 35, description: 'Cute lisianthus.', image: './images/lisianthus.png' },
];

// Якщо showroomList порожній, заповнюємо його початковими даними
if (showroomList.length === 0) {
    data.forEach((flower) => {
        showroomList.push(new Flower(flower.name, flower.price, flower.description, flower.image));
    });
    saveData();  // Зберігаємо початкові дані в localStorage
}
