// Directory Page JavaScript
document.addEventListener('DOMContentLoaded', async () => {
    // Fetch member data
    const members = await fetchMembers();
    displayMembers(members);
    
    // Set up event listeners
    document.getElementById('grid-view').addEventListener('click', () => toggleView('grid'));
    document.getElementById('list-view').addEventListener('click', () => toggleView('list'));
    document.getElementById('membership-filter').addEventListener('change', filterMembers);
    document.getElementById('search-input').addEventListener('input', filterMembers);
});

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch member data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching members:', error);
        return [];
    }
}

function displayMembers(members) {
    const container = document.getElementById('member-cards');
    container.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        // Determine membership level class
        const levelClass = `level-${member.membershipLevel}`;
        const levelText = 
            member.membershipLevel === 1 ? 'Member' :
            member.membershipLevel === 2 ? 'Silver Member' : 'Gold Member';
        
        card.innerHTML = `
            <img src="../images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <span class="membership-level ${levelClass}">${levelText}</span>
            <p>${member.description || ''}</p>
            <div class="contact-info">
                <p>📍 ${member.address}</p>
                <p>📞 ${member.phone}</p>
                <p>🌐 <a href="${member.website}" target="_blank">${member.website.replace(/^https?:\/\//, '')}</a></p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function toggleView(viewType) {
    const container = document.getElementById('member-cards');
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');
    
    if (viewType === 'grid') {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    }
}

function filterMembers() {
    const membershipFilter = document.getElementById('membership-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    fetchMembers().then(members => {
        const filtered = members.filter(member => {
            // Filter by membership level
            if (membershipFilter !== 'all' && member.membershipLevel != membershipFilter) {
                return false;
            }
            
            // Filter by search term
            if (searchTerm && !(
                member.name.toLowerCase().includes(searchTerm) ||
                member.description.toLowerCase().includes(searchTerm) ||
                member.address.toLowerCase().includes(searchTerm)
            )) {
                return false;
            }
            
            return true;
        });
        
        displayMembers(filtered);
    });
}
// Mobile menu functionality
document.getElementById('menuButton').addEventListener('click', () => {
    const primaryNav = document.getElementById('primaryNav');
    primaryNav.classList.toggle('open');
    
    const menuButton = document.getElementById('menuButton');
    if (primaryNav.classList.contains('open')) {
        menuButton.textContent = '✕'; // Change to close icon
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        menuButton.textContent = '☰'; // Change back to menu icon
        menuButton.setAttribute('aria-expanded', 'false');
    }
});