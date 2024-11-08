
function handleDonateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodGroup = document.getElementById('blood-group').value;

   
    const resultMessage = document.getElementById('donate-result-message');
    resultMessage.textContent = `Thank you, ${name}, for registering to donate blood!`;
    resultMessage.style.color = 'green'; 
}

function submitJoinForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bloodGroup = document.getElementById('blood-group').value;

   
    const resultMessage = document.getElementById('join-result-message');
    resultMessage.textContent = `Thank you, ${name}, for joining the blood donation camp! We will send further details to ${email}.`;
    resultMessage.style.color = 'green';
}

function handleContactForm(event) {
    event.preventDefault(); 

    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactMessage = document.getElementById('contact-message').value;

   
    const resultMessage = document.getElementById('contact-result-message');
    resultMessage.textContent = `Thank you, ${contactName}, for reaching out! We will get back to you shortly.`;
    resultMessage.style.color = 'green'; 
}

function checkAvailability() {
    const bloodGroup = document.getElementById('search-blood-group').value;
    const availabilityResult = document.getElementById('availability-result');

    
    if (bloodGroup) {
        availabilityResult.textContent = `Blood group ${bloodGroup} is available.`;
    } else {
        availabilityResult.textContent = 'Please select a blood group.';
    }
}
