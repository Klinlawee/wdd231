async function displaySpotlights() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Filter for Silver (2) and Gold (3) members
    const filtered = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
    const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="../images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p><strong>Level:</strong> ${member.membershipLevel === 2 ? 'Silver' : 'Gold'} Member</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading spotlights:', err);
  }
}

displaySpotlights();