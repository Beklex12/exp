document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('exampleColorInput');
    const circle = document.querySelector('.circle');

    colorPicker.addEventListener('input', (event) => {
        const color = event.target.value;
        circle.style.backgroundColor = color;
    });
});
// Text to be typed
const textToType = "Something that really matters... ";

// Function to type the text
function typeText() {
    const typingText = document.getElementById("typing-text");
    let index = 0;

    // Interval to simulate typing effect
    const typingInterval = setInterval(() => {
        // Append one character at a time
        typingText.textContent += textToType[index];
        index++;

        // Stop when all characters are typed
        if (index === textToType.length) {
            clearInterval(typingInterval);
        }
    }, 200); // Adjust typing speed here
}

// Call the function when the page loads
window.onload = typeText;

// Function to create typing effect
function typeText(elementId, textToType) {
    const typingText = document.getElementById(elementId);
    let index = 0;

    const typingInterval = setInterval(() => {
        typingText.textContent += textToType[index];
        index++;
        if (index === textToType.length) {
            clearInterval(typingInterval);
        }
    }, 100); // Adjust typing speed here
}
// Call the function when the page loads
window.onload = function() {
    // Typing effect for middle circle
    typeText("typing-text", "Something that really matters... ");

    // Typing effect for right circle
    typeText("right-typing-text", "The princess of pretiness");

    typeText("left-typing-text", "Karina Golovkova");
};
document.addEventListener("DOMContentLoaded", function() {
    // Get the sign element
    const sign = document.querySelector(".sign");
    
    // Add the 'appear' class to show the sign slowly after 3 seconds
    setTimeout(function() {
        sign.classList.add("appear");
    }, 3000); // 3 seconds delay
});
