// Declare variables
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Async function to fetch prophet data
async function getProphetData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.table(data.prophets); // Check the data in console
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create card elements
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    const birthDate = document.createElement('p');
    const birthPlace = document.createElement('p');
    
    // Build the h2 content
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    
    // Build the image
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');
    
    // Add birth information
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    
    // Append elements to card
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    
    // Append card to cards div
    cards.appendChild(card);
  });
}

// Call the function
getProphetData();