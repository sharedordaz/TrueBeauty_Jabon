console.log('show_catalog.js loaded');
catalog = document.querySelector('.catalog-grid'); 

function createCard(product) {
    const card = document.createElement('article');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);
    const title = document.createElement('h3');
    title.textContent = product.name;
    cardBody.appendChild(title);

    const description = document.createElement('p');
    description.textContent = product.description;
    cardBody.appendChild(description);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${product.price.toFixed(2)}`;
    cardBody.appendChild(price);
    
    return card;
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        console.log('Products loaded:', data);
        data.productos.forEach(product => {
            const card = createCard(product);
            catalog.appendChild(card);
        })
    })
    .catch(error => console.error('Error loading products:', error));