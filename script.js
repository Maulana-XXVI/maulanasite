// script.js
window.addEventListener('load', function() {
    var percentageText = document.getElementById('percentage');
    var loadingText = document.getElementById('loading-text');
    var loadingScreen = document.getElementById('loading');
    var content = document.getElementById('content');
    
    if (!percentageText) console.error('Element with ID "percentage" not found.');
    if (!loadingText) console.error('Element with ID "loading-text" not found.');
    if (!loadingScreen) console.error('Element with ID "loading" not found.');
    if (!content) console.error('Element with ID "content" not found.');

    var percent = 0;
    var textArray = ['WELCOME', 'THIS IS MY...', 'PORTFOLIO'];
    var textIndex = 0;

    // Function to update percentage
    function updatePercentage() {
        if (percentageText) {
            percentageText.textContent = percent + '%';
            percent += 1;

            if (percent > 100) {
                clearInterval(percentageInterval);
                // Start pixelated transition effect
                if (loadingScreen) {
                    loadingScreen.style.filter = 'pixelate(10px)';
                    loadingScreen.style.opacity = '0'; // Fade out the loading screen
                    setTimeout(function() {
                        loadingScreen.style.visibility = 'hidden'; // Hide loading screen after animation
                        if (content) {
                            content.style.opacity = '1'; // Show content with fade-in effect
                            content.style.display = 'block'; // Ensure content is displayed
                        }
                    }, 1000); // Duration must match the animation time
                }
            }
        }
    }

    // Function to change text
    function changeText() {
        if (loadingText) {
            loadingText.textContent = textArray[textIndex];
            textIndex = (textIndex + 1) % textArray.length;
        }
    }

    // Update percentage every 70ms
    var percentageInterval = setInterval(updatePercentage, 69);

    // Change text every 2.5 seconds
    setInterval(changeText, 2500);

    // Initial call to changeText to start immediately
    changeText();

    // LANDING PAGE

    // Optional: Add auto-scroll effect for skills images
    window.addEventListener('DOMContentLoaded', () => {
        const skillsImages = document.querySelector('.skills-images');
        
        if (skillsImages) {
            let scrollAmount = 0;
            const scrollStep = 1; // Adjust scroll speed
            const scrollInterval = setInterval(() => {
                if (scrollAmount >= skillsImages.scrollWidth - skillsImages.clientWidth) {
                    scrollAmount = 0; // Reset scroll
                } else {
                    scrollAmount += scrollStep;
                }
                skillsImages.scrollLeft = scrollAmount;
            }, 10); // Adjust interval for smoother or faster scrolling
        }
    });

    // Function to handle the navigation slide animation
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links a');

        if (burger && nav && navLinks.length > 0) {
            burger.addEventListener('click', () => {
                // Toggle Nav
                nav.classList.toggle('nav-active');

                // Animate Links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animation
                burger.classList.toggle('toggle');
            });
        } else {
            console.error('Navigation elements not found.');
        }
    }

    // Initialize the navSlide function
    navSlide();

    // Function to handle the button following the cursor
    const handleSendButtonMovement = () => {
        const sendButton = document.getElementById('sendButton');
        if (sendButton) {
            // Add an event listener to make the button follow the cursor
            document.addEventListener('mousemove', function(e) {
                const x = e.clientX;
                const y = e.clientY;

                // Position the button near the cursor
                sendButton.style.position = 'absolute';
                sendButton.style.left = (x - 50) + 'px'; // Adjust to center button on cursor
                sendButton.style.top = (y - 50) + 'px';  // Adjust to center button on cursor
            });

            // Prevent the button from interfering with form submission
            sendButton.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default form submission for demo purposes
                alert('Message sent!');
            });
        } else {
            console.error('Send button not found.');
        }
    }

    // Initialize the send button movement function
    handleSendButtonMovement();
});
