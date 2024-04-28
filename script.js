document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('secret-code');
    const secretInput = document.getElementById('secret-code');
    
    secretInput.addEventListener('keyup', function(e) {
        if (e.code === 'Enter' && e.target.value.toLowerCase() === 'nero') {
            activateSecretMode();
            sleep(2000).then(() => { e.target.value = 'The cake is a lie...'; });
        }
    });
});

function activateSecretMode() {
    const body = document.body;
    const hiddenContent = document.getElementById('hidden-content');
    const currentScrollPosition = window.pageYOffset; // Save current scroll position

    body.classList.add('secret-mode');
    hiddenContent.style.display = 'flex';
    hiddenContent.style.opacity = '0';
    hiddenContent.style.transition = 'opacity 0.65s';

    setTimeout(() => {
        hiddenContent.style.opacity = '1';
    }, 650);

    setTimeout(() => {
        hiddenContent.style.opacity = '0';
    }, 5000);

    setTimeout(() => {
        body.classList.remove('secret-mode');
        hiddenContent.style.display = 'none';
        window.scrollTo(0, currentScrollPosition); // Restore the scroll position
    }, 5650);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}