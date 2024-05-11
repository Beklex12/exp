let products = document.querySelectorAll('.product');
let cartItems = [];

products.forEach((product) => {
    let addButton = product.querySelector('button');
    addButton.addEventListener('click', () => {
        let productName = product.querySelector('h3').textContent;
        let productPrice = product.querySelector('p').textContent;
        let cartItem = {
            name: productName,
            price: productPrice
        };
        cartItems.push(cartItem);
        console.log(cartItems);
    });
});
