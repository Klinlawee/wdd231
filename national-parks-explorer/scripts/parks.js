/**
 * Author: Godson Morrison Halm
 * Description:  This script handles the display of national parks data on the webpage.
 * Created: June 2025
 */

// parks.js - complete version
document.addEventListener('DOMContentLoaded', function() {
    // Sample park data - in a real app, this would come from an API
    const parks = [
        {
            id: 1,
            name: "Acadia National Park",
            state: "Maine",
            image: "../images/Acadia-National-Park.webp",
            description: "The first national park east of the Mississippi River.",
            activities: ["hiking", "scenic drives", "wildlife", "water"],
            established: "1919-02-26",
            area: "49,075 acres",
            visitors: "3.5 million (2021)"
        },
        {
            id: 2,
            name: "Arches National Park",
            state: "Utah",
            image: "../images/Arches-National-Park.webp",
            description: "Contains over 2,000 natural sandstone arches.",
            activities: ["hiking", "photography", "rock climbing"],
            established: "1971-11-12",
            area: "76,679 acres",
            visitors: "1.8 million (2021)"
        },
        {
            id: 3,
            name: "Badlands National Park",
            state: "South Dakota",
            image: "../images/Badlands-National-Park.webp",
            description: "Known for its striking geologic deposits.",
            activities: ["hiking", "fossil viewing", "scenic drives"],
            established: "1978-11-10",
            area: "242,756 acres",
            visitors: "1.2 million (2021)"
        },
        {
            id: 4,
            name: "Big Bend National Park",
            state: "Texas",
            image: "../images/Big-Bend-National-Park.webp",
            description: "Features dramatic canyons, desert, and the Rio Grande.",
            activities: ["hiking", "river trips", "stargazing"],
            established: "1944-06-12",
            area: "801,163 acres",
            visitors: "581,000 (2021)"
        },
        {
            id: 5,
            name: "Biscayne National Park",
            state: "Florida",
            image: "../images/Biscayne-National-Park.webp",
            description: "95% water with coral reefs and mangrove forests.",
            activities: ["boating", "snorkeling", "fishing"],
            established: "1980-06-28",
            area: "172,971 acres",
            visitors: "705,000 (2021)"
        },
        {
            id: 6,
            name: "Bryce Canyon National Park",
            state: "Utah",
            image: "../images/Bryce-Canyon-National-Park.webp",
            description: "Famous for its unique geology of hoodoos.",
            activities: ["hiking", "horseback riding", "stargazing"],
            established: "1928-02-25",
            area: "35,835 acres",
            visitors: "2.1 million (2021)"
        },
        {
            id: 7,
            name: "Canyonlands National Park",
            state: "Utah",
            image: "../images/Canyonlands-National-Park.webp",
            description: "Dramatic desert landscape carved by the Colorado River.",
            activities: ["hiking", "mountain biking", "whitewater rafting"],
            established: "1964-09-12",
            area: "337,598 acres",
            visitors: "911,000 (2021)"
        },
        {
            id: 8,
            name: "Capitol Reef National Park",
            state: "Utah",
            image: "../images/Capitol-Reef-National-Park.webp",
            description: "Features the Waterpocket Fold, a 100-mile long monocline.",
            activities: ["hiking", "fruit picking", "scenic drives"],
            established: "1971-12-18",
            area: "241,904 acres",
            visitors: "1.4 million (2021)"
        },
        {
            id: 9,
            name: "Carlsbad Caverns National Park",
            state: "New Mexico",
            image: "../images/Carlsbad-Caverns-National-Park.webp",
            description: "Contains over 100 caves including the famous Big Room.",
            activities: ["cave tours", "bat viewing", "hiking"],
            established: "1930-05-14",
            area: "46,766 acres",
            visitors: "349,000 (2021)"
        },
        {
            id: 10,
            name: "Channel Islands National Park",
            state: "California",
            image: "../images/Channel-Islands-National-Park.webp",
            description: "Five remarkable islands with unique ecosystems.",
            activities: ["kayaking", "whale watching", "snorkeling"],
            established: "1980-03-05",
            area: "249,561 acres",
            visitors: "319,000 (2021)"
        },
        {
            id: 11,
            name: "Congaree National Park",
            state: "South Carolina",
            image: "../images/Congaree-National-Park.webp",
            description: "Protects the largest intact old-growth bottomland hardwood forest.",
            activities: ["canoeing", "bird watching", "boardwalk hiking"],
            established: "2003-11-10",
            area: "26,476 acres",
            visitors: "215,000 (2021)"
        },
        {
            id: 12,
            name: "Crater Lake National Park",
            state: "Oregon",
            image: "../images/Crater-Lake-National-Park.webp",
            description: "Famous for its deep blue lake formed in a volcanic caldera.",
            activities: ["scenic drives", "boat tours", "snowshoeing"],
            established: "1902-05-22",
            area: "183,224 acres",
            visitors: "647,000 (2021)"
        },
        {
            id: 13,
            name: "Cuyahoga Valley National Park",
            state: "Ohio",
            image: "../images/CuyahogaValleyNationalPark.webp",
            description: "Features waterfalls, hills, and the historic Ohio & Erie Canal.",
            activities: ["hiking", "biking", "scenic railroad"],
            established: "2000-10-11",
            area: "32,572 acres",
            visitors: "2.6 million (2021)"
        },
        {
            id: 14,
            name: "Death Valley National Park",
            state: "California",
            image: "../images/Death-Valley-National-Park.webp",
            description: "The hottest, driest, and lowest national park.",
            activities: ["scenic drives", "hiking", "stargazing"],
            established: "1994-10-31",
            area: "3,373,063 acres",
            visitors: "1.1 million (2021)"
        },
        {
            id: 15,
            name: "Denali National Park",
            state: "Alaska",
            image: "../images/Denali-National-Park.webp",
            description: "Home to North America's highest peak (Denali, 20,310 feet).",
            activities: ["wildlife viewing", "mountaineering", "bus tours"],
            established: "1917-02-26",
            area: "4,740,911 acres",
            visitors: "427,000 (2021)"
        },
        {
            id: 16,
            name: "Everglades National Park",
            state: "Florida",
            image: "../images/Everglades-National-Park.webp",
            description: "The largest subtropical wilderness in the United States.",
            activities: ["airboat tours", "bird watching", "kayaking"],
            established: "1947-12-06",
            area: "1,508,938 acres",
            visitors: "942,000 (2021)"
        },
        {
            id: 17,
            name: "Glacier National Park",
            state: "Montana",
            image: "../images/Glacier-National-Park.webp",
            description: "Known for its glaciers, alpine meadows, and Going-to-the-Sun Road.",
            activities: ["hiking", "scenic drives", "wildlife viewing"],
            established: "1910-05-11",
            area: "1,013,322 acres",
            visitors: "3.1 million (2021)"
        },
        {
            id: 18,
            name: "Grand Canyon National Park",
            state: "Arizona",
            image: "../images/Grand-Canyon-National-Park.webp",
            description: "The immense 277-mile long canyon carved by the Colorado River.",
            activities: ["hiking", "rafting", "scenic viewpoints"],
            established: "1919-02-26",
            area: "1,201,647 acres",
            visitors: "4.5 million (2021)"
        },
        {
            id: 19,
            name: "Great Smoky Mountains National Park",
            state: "Tennessee, North Carolina",
            image: "../images/Great-Smoky-Mountains-National-Park.webp",
            description: "Most visited national park with diverse plant and animal life.",
            activities: ["hiking", "waterfalls", "scenic drives"],
            established: "1934-06-15",
            area: "522,427 acres",
            visitors: "14.1 million (2021)"
        },
        {
            id: 20,
            name: "Haleakalā National Park",
            state: "Hawaii",
            image: "../images/Haleakalā-National-Park.webp",
            description: "Features a massive shield volcano with a stunning crater.",
            activities: ["hiking", "sunrise viewing", "bird watching"],
            established: "1916-08-01",
            area: "33,265 acres",
            visitors: "1.3 million (2021)"
        }
    ];

    // DOM elements
    const stateFilter = document.getElementById('state-filter');
    const activityFilter = document.getElementById('activity-filter');
    const parkList = document.querySelector('.park-list');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search parks...';
    searchInput.className = 'search-input';
    document.querySelector('.filters').prepend(searchInput);

    // Populate state filter
    const states = [...new Set(parks.map(park => park.state))];
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });

    // Render parks
    function renderParks(parksToRender) {
        parkList.innerHTML = '';
        
        if (parksToRender.length === 0) {
            parkList.innerHTML = '<div class="no-results">No parks match your filters.</div>';
            return;
        }

        parksToRender.forEach(park => {
            const parkCard = document.createElement('div');
            parkCard.className = 'park-card';
            parkCard.innerHTML = `
                <div class="park-image">
                    <img src="${park.image}" alt="${park.name}">
                </div>
                <div class="park-content">
                    <h3>${park.name}</h3>
                    <div class="location">${park.state}</div>
                    <p class="description">${park.description}</p>
                    <div class="activities">
                        ${park.activities.map(activity => 
                            `<span class="activity-tag">${activity}</span>`
                        ).join('')}
                    </div>
                    <div class="park-meta">
                        <span>Est: ${park.established}</span>
                        <span>${park.area}</span>
                        <span>${park.visitors}</span>
                    </div>
                </div>
            `;
            parkList.appendChild(parkCard);
        });
    }

    // Filter parks based on selections
    function filterParks() {
        const selectedState = stateFilter.value;
        const selectedActivity = activityFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        let filteredParks = parks.filter(park => {
            const matchesState = selectedState === 'all' || park.state === selectedState;
            const matchesActivity = selectedActivity === 'all' || 
                                   park.activities.includes(selectedActivity);
            const matchesSearch = park.name.toLowerCase().includes(searchTerm) || 
                                park.description.toLowerCase().includes(searchTerm);
            
            return matchesState && matchesActivity && matchesSearch;
        });

        renderParks(filteredParks);
    }

    // Event listeners
    stateFilter.addEventListener('change', filterParks);
    activityFilter.addEventListener('change', filterParks);
    searchInput.addEventListener('input', filterParks);

    // Initial render
    renderParks(parks);
});