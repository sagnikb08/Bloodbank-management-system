// script.js
function handleDonateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodGroup = document.getElementById('blood-group').value;

    // Handle the registration logic (e.g., send data to the server)

    // Display a thank-you message
    const resultMessage = document.getElementById('donate-result-message');
    resultMessage.textContent = `Thank you, ${name}, for registering to donate blood!`;
    resultMessage.style.color = 'green'; // Optional: Change the message color
}

function submitJoinForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bloodGroup = document.getElementById('blood-group').value;

    // Handle the join logic (e.g., send data to the server)

    // Display a thank-you message
    const resultMessage = document.getElementById('join-result-message');
    resultMessage.textContent = `Thank you, ${name}, for joining the blood donation camp! We will send further details to ${email}.`;
    resultMessage.style.color = 'green'; // Optional: Change the message color
}

function handleContactForm(event) {
    event.preventDefault(); // Prevent form submission

    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactMessage = document.getElementById('contact-message').value;

    // Handle the contact logic (e.g., send data to the server)

    // Display a thank-you message
    const resultMessage = document.getElementById('contact-result-message');
    resultMessage.textContent = `Thank you, ${contactName}, for reaching out! We will get back to you shortly.`;
    resultMessage.style.color = 'green'; // Optional: Change the message color
}

// Function to check availability
function checkAvailability() {
    const bloodGroup = document.getElementById('search-blood-group').value;
    const availabilityResult = document.getElementById('availability-result');

    // Mock availability check (replace this with actual logic)
    if (bloodGroup) {
        availabilityResult.textContent = `Blood group ${bloodGroup} is available.`;
    } else {
        availabilityResult.textContent = 'Please select a blood group.';
    }
}
