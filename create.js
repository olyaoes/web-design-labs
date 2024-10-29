document.getElementById('create-flower-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value; // Додано для опису
    const image = document.getElementById('image').value; // Додано для зображення

    const newFlower = { name, color, price, description, image };

    fetch('http://localhost:3000/flowers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFlower)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Flower added:', data);
        window.location.href = 'index.html';  
    })
    .catch((error) => {
        console.error('Error adding flower:', error);
    });
});
