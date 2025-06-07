document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load and display discover data
        const discoverData = await fetchDiscoverData();
        console.log('Loaded data:', discoverData); // Debug log
        displayDiscoverCards(discoverData);
        
        // Handle visitor message
        displayVisitorMessage();
        
        // Mobile menu functionality
        setupMobileMenu();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

async function fetchDiscoverData() {
    try {
        // Note the corrected path to your JSON file
        const response = await fetch('../chamber/data/discoverData.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Validate the received data
        if (!Array.isArray(data)) {
            console.warn('Expected array but got:', typeof data);
            return [];
        }
        
        console.log('Successfully loaded discover data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching discover data:', error);
        // Return sample data if fetch fails
        return [
            {
                "name": "Bortianor Beach",
                "address": "Bortianor Beach Road, Bortianor",
                "image": "bortianor-beach.webp",
                "description": "A beautiful sandy beach perfect for relaxation."
            },
            {
                "name": "Bortianor Market",
                "address": "Main Market Square, Bortianor",
                "image": "bortianor-market.webp",
                "description": "The vibrant local market."
            }
        ];
    }
}

function displayDiscoverCards(data) {
    const gallery = document.querySelector('.discover-gallery');
    
    if (!gallery) {
        console.error('Discover gallery element not found');
        return;
    }

    // Clear existing content
    gallery.innerHTML = '';

    // Validate data
    if (!data || !Array.isArray(data) || data.length === 0) {
        gallery.innerHTML = `
            <div class="error-message">
                <p>No attractions found. Please check back later.</p>
            </div>
        `;
        return;
    }

    console.log('Displaying cards for data:', data); // Debug log

    // Create and append cards for each item
    data.forEach((item, index) => {
        try {
            // Validate required fields
            if (!item.image) {
                console.warn(`Item at index ${index} is missing image property`);
                item.image = 'placeholder.webp';
            }

            const card = document.createElement('article');
            card.className = 'discover-card';
            card.setAttribute('data-index', index);
            
            // Construct image path - adjust if your images are in a different location
            const imagePath = `../images/${item.image}`;
            
            card.innerHTML = `
                <h2>${item.name || 'Attraction'}</h2>
                <figure>
                    <img src="${imagePath}" 
                         alt="${item.name || ''}" 
                         loading="lazy"
                         onerror="this.onerror=null;this.src='../images/placeholder.webp'">
                </figure>
                <address>${item.address || 'Address not available'}</address>
                <p>${item.description || 'Description coming soon'}</p>
                <a href="#" class="learn-more">Learn More</a>
            `;
            
            gallery.appendChild(card);
            console.log(`Added card for: ${item.name}`); // Debug log
        } catch (error) {
            console.error(`Error creating card for item ${index}:`, error);
        }
    });
}

function displayVisitorMessage() {
    const visitMessage = document.getElementById('visit-message');
    if (!visitMessage) return;

    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSinceLastVisit === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate.toString());
}

function setupMobileMenu() {
    const menuButton = document.getElementById('menuButton');
    const primaryNav = document.getElementById('primaryNav');

    if (!menuButton || !primaryNav) return;

    menuButton.addEventListener('click', () => {
        const isOpen = primaryNav.classList.toggle('open');
        menuButton.innerHTML = isOpen ? '✕' : '☰';
        menuButton.setAttribute('aria-expanded', isOpen.toString());
    });
}