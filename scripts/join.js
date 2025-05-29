document.addEventListener('DOMContentLoaded', () => {
    // Set timestamp when form loads
    const now = new Date();
    document.getElementById('timestamp').value = now.toISOString();
    
    // Initialize membership cards with animation order
    const cards = document.querySelectorAll('.membership-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--order', index);
    });
    
    // Modal functionality
    const modalLinks = document.querySelectorAll('.info-link');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('href');
            document.querySelector(modalId).style.display = 'flex';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Mobile menu functionality (same as directory.js)
    document.getElementById('menuButton').addEventListener('click', () => {
        const primaryNav = document.getElementById('primaryNav');
        primaryNav.classList.toggle('open');
        
        const menuButton = document.getElementById('menuButton');
        if (primaryNav.classList.contains('open')) {
            menuButton.textContent = '✕';
            menuButton.setAttribute('aria-expanded', 'true');
        } else {
            menuButton.textContent = '☰';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
});