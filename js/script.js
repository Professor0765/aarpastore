document.addEventListener('DOMContentLoaded', function() {
    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://www.facebook.com/YourPageName'; // Replace with your Facebook page URL
    facebookLink.target = '_blank';
    facebookLink.textContent = 'Visit our Facebook Page';
    
    const container = document.getElementById('facebook-container'); // Ensure this ID exists in your HTML
    container.appendChild(facebookLink);
});