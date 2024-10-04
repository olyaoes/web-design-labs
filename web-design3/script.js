class Flower {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image; // Додаємо поле для локального зображення
    }
}

const showroomList = [];
let currentList = [];

// Використовуємо локальні зображення з папки 'images'
const data = [
    { name: 'Rose', price: 20, description: 'Classic red rose.', image: './images/rose.png' },
    { name: 'Tulip', price: 15, description: 'Bright and cheerful tulip.', image: './images/tulip.png' },
    { name: 'Daisy', price: 10, description: 'Simple and beautiful daisy.', image: './images/daisy.png' },
    { name: 'Peonies', price: 50, description: 'Incredible peonies.', image: './images/peonies.png' },
    { name: 'Orchid', price: 30, description: 'Exotic and elegant orchid.', image: './images/orchid.png' },
    { name: 'Lisianthus', price: 35, description: 'Cute lisianthus.', image: './images/lisianthus.png' },
];

data.forEach((flower) => {
    showroomList.push(new Flower(flower.name, flower.price, flower.description, flower.image));
});

const drawList = (list) => {
    const showroom = document.getElementById('showroom');
    showroom.innerHTML = '';
    let totalExpenses = 0;

    list.forEach((el, idx) => {
        showroom.innerHTML += `
            <div id="showroom-${idx}" class="flower-card">
                <img src="${el.image}" alt="${el.name}"> <!-- Відображаємо зображення квітки -->
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

const clearSearch = () => {
    drawList(showroomList);
};

const searchCard = () => {
    const search = document.getElementById('search-input').value;
    currentList = showroomList.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));
    drawList(currentList);
};

const deleteCard = (cardId) => {
    const showroom = document.getElementById('showroom');
    showroom.removeChild(document.getElementById(cardId));
    const cardIndex = +cardId.slice(8);
    showroomList.splice(cardIndex, 1);
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

drawList(showroomList);
