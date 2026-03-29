// Generate Random Stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
    starsContainer.appendChild(star);
}

// Layer Transition Function
function nextLayer(currentLayerNumber) {
    // Hide current
    const current = document.getElementById(`layer${currentLayerNumber}`);
    current.classList.remove('active');
    
    // Show next
    const next = document.getElementById(`layer${currentLayerNumber + 1}`);
    if (next) {
        // Short delay for smooth transition
        setTimeout(() => {
            next.classList.add('active');
        }, 300);
    }
}
