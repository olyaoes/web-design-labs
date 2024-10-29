// Отримуємо елемент селекту для вибору квітки
const flowerSelect = document.getElementById('flower-select');

// Завантаження квітів для редагування
const loadFlowersForEdit = () => {
    // Отримуємо список квітів з localStorage
    const showroomList = JSON.parse(localStorage.getItem('showroomList')) || [];

    // Очищаємо попередні опції в селекті
    flowerSelect.innerHTML = '';

    // Створюємо першу опцію для інструкції
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Виберіть квітку для редагування';
    flowerSelect.appendChild(defaultOption);

    // Додаємо опції для кожної квітки
    showroomList.forEach((flower, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = flower.name;
        flowerSelect.appendChild(option);
    });
};

// Завантажуємо квіти в селект під час завантаження сторінки
loadFlowersForEdit();

// Вибір квітки та завантаження даних у форму для редагування
flowerSelect.addEventListener('change', function() {
    const selectedIndex = flowerSelect.value;

    if (selectedIndex !== '') {
        const showroomList = JSON.parse(localStorage.getItem('showroomList')) || [];
        const selectedFlower = showroomList[selectedIndex];

        // Заповнюємо форму даними вибраної квітки
        document.getElementById('name').value = selectedFlower.name;
        document.getElementById('price').value = selectedFlower.price;
        document.getElementById('description').value = selectedFlower.description;
        document.getElementById('image').value = selectedFlower.image;
    }
});

// Обробка форми редагування
document.getElementById('edit-flower-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedIndex = flowerSelect.value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    // Отримуємо список квітів з localStorage
    let showroomList = JSON.parse(localStorage.getItem('showroomList')) || [];

    // Перевіряємо чи є обрана квітка для редагування
    if (selectedIndex !== '') {
        // Оновлення інформації про квітку
        if (name) showroomList[selectedIndex].name = name;
        if (price) showroomList[selectedIndex].price = parseFloat(price); // Конвертуємо ціну в число
        if (description) showroomList[selectedIndex].description = description;
        if (image) showroomList[selectedIndex].image = image;

        // Зберігаємо оновлений список у localStorage
        localStorage.setItem('showroomList', JSON.stringify(showroomList));

        // Повертаємося на головну сторінку після збереження
        window.location.href = 'index.html';
    } else {
        alert('Будь ласка, виберіть квітку для редагування.');
    }
});
