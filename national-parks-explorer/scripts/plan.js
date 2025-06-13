/**
 * Author: Godson Morrison Halm
 * Description:   This script handles the trip planning form for the National Parks Explorer application.
 *                It populates the park selection dropdown, initializes the date picker,
 *                and processes the form submission to collect user data and display a summary.
 * Version: 1.0
 * Created: June 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // Sample park data - in a real app, this would come from an API
    const parks = [
        { id: 1, name: "Acadia National Park", state: "Maine" },
        { id: 2, name: "Arches National Park", state: "Utah" },
        { id: 3, name: "Badlands National Park", state: "South Dakota" },
        { id: 4, name: "Big Bend National Park", state: "Texas" },
        { id: 5, name: "Biscayne National Park", state: "Florida" },
        { id: 6, name: "Black Canyon of the Gunnison National Park", state: "Colorado" },
        { id: 7, name: "Bryce Canyon National Park", state: "Utah" },
        { id: 8, name: "Canyonlands National Park", state: "Utah" },
        { id: 9, name: "Capitol Reef National Park", state: "Utah" },
        { id: 10, name: "Carlsbad Caverns National Park", state: "New Mexico" },
        // Add more parks as needed
    ];

    // Populate the park select dropdown
    const parkSelect = document.getElementById('park');
    parks.forEach(park => {
        const option = document.createElement('option');
        option.value = park.id;
        option.textContent = `${park.name} (${park.state})`;
        parkSelect.appendChild(option);
    });

    // Initialize date picker (using a library like flatpickr in production)
    const dateInput = document.getElementById('dates');
    dateInput.addEventListener('focus', function() {
        this.type = 'date';
    });

    // Form submission handler
    const tripForm = document.getElementById('trip-form');
    tripForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            parks: Array.from(document.getElementById('park').selectedOptions)
                        .map(option => option.textContent),
            dates: document.getElementById('dates').value,
            interests: Array.from(document.querySelectorAll('input[name="interests"]:checked'))
                         .map(checkbox => checkbox.value),
            questions: document.getElementById('questions').value
        };

        // Basic validation
        if (!formData.name || !formData.email) {
            alert('Please fill in all required fields.');
            return;
        }

        if (formData.parks.length === 0) {
            alert('Please select at least one park.');
            return;
        }

        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your request! We will send park information to your email shortly.');
        
        // Reset form
        tripForm.reset();
        
        // For demo purposes, display the collected data
        displayFormData(formData);
    });

    // Helper function to display form data (for demo purposes)
    function displayFormData(data) {
        const summary = document.createElement('div');
        summary.className = 'form-summary';
        summary.innerHTML = `
            <h3>Your Trip Request Summary</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Parks:</strong> ${data.parks.join(', ')}</p>
            <p><strong>Dates:</strong> ${data.dates || 'Not specified'}</p>
            <p><strong>Interests:</strong> ${data.interests.length > 0 ? data.interests.join(', ') : 'None selected'}</p>
            ${data.questions ? `<p><strong>Questions:</strong> ${data.questions}</p>` : ''}
        `;
        
        const formContainer = document.querySelector('.trip-planner');
        const existingSummary = document.querySelector('.form-summary');
        if (existingSummary) {
            formContainer.replaceChild(summary, existingSummary);
        } else {
            formContainer.appendChild(summary);
        }
    }

    // Add any additional interactive elements
    const activityCheckboxes = document.querySelectorAll('input[name="interests"]');
    activityCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                console.log(`Selected activity: ${this.value}`);
            }
        });
    });
});