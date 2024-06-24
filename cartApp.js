document.addEventListener('DOMContentLoaded', (event) => {
    initializeCart();

    const addItemForm = document.getElementById('addItemForm');
    const displayCartButton = document.getElementById('displayCartButton');

    addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemName = document.getElementById('itemName').value;
        const itemPrice = parseFloat(document.getElementById('itemPrice').value);
        const newItem = {
            id: Date.now(),
            name: itemName,
            price: itemPrice
        };
        addItem(newItem);
        addItemForm.reset();
    });

    displayCartButton.addEventListener('click', displayCart);

    function initializeCart() {
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }

    function addItem(item) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function displayCart() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
    }
});
