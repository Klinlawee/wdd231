// Fashion Product List Script
const products = [
    {
        id: "1",
        title: "Men Wear",
        price: 340.00,
        image: "images/men_2.jpg", // ✅ no leading slash
        description: "Fashionable men two piece"
    },
    {
        id: "2",
        title: "Tailored Blazer",
        price: 320.00,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Custom-fit blazer with premium wool fabric"
    },
    {
        id: "4",
        title: "Women wear",
        price: 195.00,
        image: "images/women-2.jpg",
        description: "Smart and elegant"
    }
];

function renderProducts(productList) {
    const container = document.getElementById('product-list');
    container.innerHTML = ''; // Clear existing content

    productList.forEach(product => {
        const productHTML = `
            <div class="product">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">GH₵${product.price.toFixed(2)}</div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-actions">
                        <button type="button" class="add-to-cart" 
                                data-id="${product.id}" 
                                data-title="${product.title}" 
                                data-price="${product.price}" 
                                data-image="${product.image}"
                                title="Add ${product.title} to cart">
                            Add to Cart
                        </button>
                        <button type="button" class="wishlist" 
                                data-id="${product.id}" 
                                data-title="${product.title}" 
                                data-price="${product.price}" 
                                data-image="${product.image}"
                                aria-label="Add to wishlist" 
                                title="Add ${product.title} to wishlist">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Render products on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});