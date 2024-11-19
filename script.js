const products = {
    home: [
        { name: "Cushion", price: 20, image: "https://via.placeholder.com/150" },
        { name: "Lamp", price: 30, image: "https://via.placeholder.com/150" }
    ],
    beauty: [
        { name: "Lipstick", price: 15, image: "https://via.placeholder.com/150" },
        { name: "Foundation", price: 25, image: "https://via.placeholder.com/150" }
    ],
    food: [
        { name: "Chips", price: 5, image: "https://via.placeholder.com/150" },
        { name: "Chocolate", price: 3, image: "https://via.placeholder.com/150" }
    ],
    mobile: [
        { name: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
        { name: "Tablet", price: 499, image: "https://via.placeholder.com/150" }
    ]
};

function showCategory(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $<span class="price">${product.price}</span></p>
            <input type="number" min="0" value="1" onchange="updatePrice(this, '${product.name}')">
        `;
        productList.appendChild(productDiv);
    });
}

function updatePrice(input, productName) {
    const priceElement = input.parentElement.querySelector('.price');
    const basePrice = products[Object.keys(products).find(key => products[key].some(p => p.name === productName))].find(p => p.name === productName).price;
    const quantity = input.value;
    const totalPrice = basePrice * quantity;
    priceElement.textContent = totalPrice.toFixed(2);
}