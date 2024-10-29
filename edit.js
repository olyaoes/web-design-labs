const flowerSelect = document.getElementById('flower-select');

// Завантаження квіток у випадаючий список для редагування
const loadFlowersForEdit = () => {
    fetch('http://localhost:3000/flowers')
        .then(response => response.json())
        .then(flowers => {
            flowerSelect.innerHTML = '';

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Виберіть квітку для редагування';
            flowerSelect.appendChild(defaultOption);

            flowers.forEach((flower) => {
                const option = document.createElement('option');
                option.value = flower.id; // Використовуємо id квітки
                option.text = flower.name;
                flowerSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading flowers:', error));
};

loadFlowersForEdit();

// Обробка вибору квітки
flowerSelect.addEventListener('change', function() {
    const selectedId = flowerSelect.value;

    if (selectedId !== '') {
        fetch(`http://localhost:3000/flowers/${selectedId}`) // Використовуйте правильні лапки
            .then(response => response.json())
            .then(selectedFlower => {
                document.getElementById('name').value = selectedFlower.name;
                document.getElementById('price').value = selectedFlower.price;
                document.getElementById('description').value = selectedFlower.description;
                document.getElementById('image').value = selectedFlower.image;
            })
            .catch(error => console.error('Error loading selected flower:', error));
    }
});

// Обробка редагування квітки
document.getElementById('edit-flower-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedId = flowerSelect.value;
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const updatedFlower = { name, color, price, description, image };

    fetch(`http://localhost:3000/flowers/${selectedId}`, { // Правильний формат шаблонного рядка
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFlower)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Flower updated:', data);
        window.location.href = 'index.html';
    })
    .catch((error) => {
        console.error('Error updating flower:', error);
    });
});
