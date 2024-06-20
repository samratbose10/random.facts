const facts = [
    "The Creatura can change its color to blend into any environment.",
    "Creaturas are known to communicate through melodic sounds.",
    "A Creatura's fur is said to be as soft as the finest silk.",
    "Creaturas can run faster than any known animal on Earth.",
    "The mythical Creatura has a lifespan of over 200 years.",
    "Creaturas are omnivorous, enjoying both plants and smaller creatures.",
    "The eyes of a Creatura can see in complete darkness.",
    "Creaturas are known for their extraordinary intelligence.",
    "A group of Creaturas is called a 'mystery'.",
    "Creaturas build elaborate nests high in the treetops."
];

let factCounter = 0;

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
    
    // Show the corresponding image
    factCounter++;
    showImage(factCounter);
}

function showImage(counter) {
    // Hide all images first
    document.getElementById('image1').style.display = 'none';
    document.getElementById('image2').style.display = 'none';
    document.getElementById('image3').style.display = 'none';
    
    // Show the specific image based on the counter
    if (counter === 1) {
        document.getElementById('image1').style.display = 'block';
    } else if (counter === 2) {
        document.getElementById('image2').style.display = 'block';
    } else if (counter === 3) {
        document.getElementById('image3').style.display = 'block';
        factCounter = 0;  // Reset the counter after the third image
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function moveButton() {
    const button = document.getElementById('no-button');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Show the popup when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};

// Add click event to lazy-note to open image4.jpg in new tab
document.getElementById('lazy-note').addEventListener('click', function() {
    window.open('image4.jpg', '_blank');
});
