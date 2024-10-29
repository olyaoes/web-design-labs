document.getElementById('create-flower-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const newFlower = { name, price, description, image };

    let showroomList = JSON.parse(localStorage.getItem('showroomList')) || [];
    showroomList.push(newFlower);
    localStorage.setItem('showroomList', JSON.stringify(showroomList));

    window.location.href = 'index.html';  // Повертаємося на головну сторінку
});


