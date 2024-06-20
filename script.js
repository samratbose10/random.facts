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

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
