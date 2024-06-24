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
            const initialCart = [
                {
                    id: 1681323912259,
                    name: "Pears",
                    price: 3
                },
                {
                    id: 1681323954156,
                    name: "Apples",
                    price: 2
                }
            ];
            localStorage.setItem('cart', JSON.stringify(initialCart));
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

