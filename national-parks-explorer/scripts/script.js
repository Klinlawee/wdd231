/**
 * Author: Godson Morrison Halm
 * Description:   This script handles the main functionality of the National Parks Explorer application.
 *                It includes mobile menu toggle, loading featured parks, and smooth scrolling for anchor links.
 * Version: 1.0
 * Created: June 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Sample park data - in a real app, this would come from an API
    const parks = [
        {
            id: 1,
            name: "Yosemite National Park",
            location: "California",
            image: "../images/Yosemite-National-Park.jpg",
            description: "Famous for its waterfalls, deep valleys, and giant sequoias."
        },
        {
            id: 2,
            name: "Yellowstone National Park",
            location: "Wyoming, Montana, Idaho",
            image: "../images/Yellowstone-National-Park.jpg",
            description: "The first national park in the world, known for its geothermal features."
        },
        {
            id: 3,
            name: "Grand Canyon National Park",
            location: "Arizona",
            image: "../images/Grand-Canyon-National-Park.jpg",
            description: "Home to one of the most spectacular canyons in the world."
        },
        {
            id: 4,
            name: "Zion National Park",
            location: "Utah",
            image: "../images/Zion-National-Park.jpg",
            description: "Famous for its red cliffs and stunning canyon views."
        },
        {
            id: 5,
            name: "Rocky Mountain National Park",
            location: "Colorado",
            image: "../images/Rocky-Mountain-National-Park.jpg",
            description: "Features majestic mountain views and diverse wildlife."
        },
        {
            id: 6,
            name: "Acadia National Park",
            location: "Maine",
            image: "../images/Acadia-National-Park.jpg",
            description: "The first national park east of the Mississippi River."
        }
    ];

    // Load featured parks
    const parkGrid = document.querySelector('.park-grid');
    
    parks.forEach(park => {
        const parkCard = document.createElement('div');
        parkCard.className = 'park-card';
        parkCard.innerHTML = `
            <img src="${park.image}" alt="${park.name}">
            <div class="park-info">
                <h3>${park.name}</h3>
                <p><strong>Location:</strong> ${park.location}</p>
                <p>${park.description}</p>
                <a href="projects/park.html?id=${park.id}" class="btn">Learn More</a>
            </div>
        `;
        parkGrid.appendChild(parkCard);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});