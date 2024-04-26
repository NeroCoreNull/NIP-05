// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to check the secret code
    function checkSecretCode() {
        const input = document.getElementById('secret-code');
        const secretContent = document.getElementById('hidden-content');

        if (input.value.toLowerCase() === 'nostr') {
            secretContent.style.display = 'block';
            secretContent.textContent = 'Core = Null';
            input.value = ''; // Clear the input field after successful entry
        } else {
            alert('Incorrect code. Try again.');
            input.value = ''; // Clear the input field after incorrect entry
        }
    }

    // Event listener for the secret code input
    document.getElementById('secret-code').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkSecretCode();
        }
    });
});
