function startFlowerShower() {
    let flowerShower = document.querySelector('.flower-shower');
    let roseText = document.querySelector('.rose-text h1');
    let music = document.getElementById('background-music');

    music.play(); // Start the background music
    // Make the text appear after the flower shower starts
    roseText.style.animationPlayState = 'running'; // Start text animation
    
    // Animate the flowers for 3 minutes
    setInterval(() => {
        let flower = document.createElement('div');
        flower.classList.add('rose');
        
        // Random position and speed for each flower
        let randomX = Math.random() * window.innerWidth;
        let randomDelay = Math.random() * 3; // Random delay for each flower
        
        flower.style.left = `${randomX}px`;
        flower.style.animationDelay = `${randomDelay}s`; // Delay for smooth animation
        flowerShower.appendChild(flower);

        // Remove flower after animation ends
        setTimeout(() => {
            flower.remove();
        }, 9000); // After 6 seconds, remove the flower
    }, 200); // Drop flowers continuously every 200ms
}
