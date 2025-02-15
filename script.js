document.addEventListener("DOMContentLoaded", function () {
    // Fun messages for each product
    const messages = {
        "iphone16pro": "Before you proceed... have you checked your bank balance lately? We wouldn't want your wallet to go on vacation! 🏝️💸",
        "iphone16": "Experience innovation! But don't forget—your current phone still works, right? 📱😂",
        "watch": "It won’t make you fit instantly, but it will judge you for skipping workouts. ⌚😆",
        "airpods": "Welcome to the club of lost AirPods. Say hi to the ones under your bed! 🔍🎧",
        "macbook": "Are you buying this for 'work' or just to look cool at a café? ☕💻",
        "ipad": "A powerful tool! But will you use it for productivity or just endless Netflix binges? 🍿📺",
        "valentines": "Big spender alert! Let’s hope they don’t break your heart after this. 💔😂"
    };

    // Learn more descriptions
    const learnMoreMessages = {
        "iphone16pro": "iPhone 16 Pro: Discover the future of performance and intelligence.",
        "iphone16": "iPhone 16: Experience innovation, redefined.",
        "watch": "Apple Watch: Track your health, stay connected, and do more—right from your wrist.",
        "macbook": "MacBook Air: Power meets portability with the M3 chip.",
        "ipad": "iPad Pro: A powerful tool for work, creativity, and everything in between.",
        "airpods": "AirPods: Immerse yourself in high-quality sound with seamless connectivity."
    };

    // Function to handle Buy button clicks
    function handleBuyClick(productKey) {
        if (messages[productKey]) {
            alert(messages[productKey]);
        }
    }

    // Function to handle Learn More button clicks
    function handleLearnMoreClick(productKey) {
        if (learnMoreMessages[productKey]) {
            alert(learnMoreMessages[productKey]);
        }
    }

    // Attach event listeners to all Buy and Learn More buttons
    document.querySelectorAll(".buy, .learn-more").forEach(button => {
        button.addEventListener("click", function () {
            // Find the closest hero or grid-item parent
            const parentSection = button.closest(".hero, .grid-item");

            // Get the product name from <h1> or <h4>
            let productName = "";
            if (parentSection.querySelector("h1")) {
                productName = parentSection.querySelector("h1").textContent.trim().toLowerCase();
            } else if (parentSection.querySelector("h4")) {
                productName = parentSection.querySelector("h4").textContent.trim().toLowerCase();
            }

            // Check if it's a "Buy" or "Learn More" button
            if (button.classList.contains("buy")) {
                if (productName.includes("iphone 16 pro")) handleBuyClick("iphone16pro");
                else if (productName.includes("iphone 16")) handleBuyClick("iphone16");
                else if (productName.includes("series 10") || productName.includes("watch")) handleBuyClick("watch");
                else if (productName.includes("macbook")) handleBuyClick("macbook");
                else if (productName.includes("ipad")) handleBuyClick("ipad");
                else if (productName.includes("airpods")) handleBuyClick("airpods");
            } else if (button.classList.contains("learn-more")) {
                if (productName.includes("iphone 16 pro")) handleLearnMoreClick("iphone16pro");
                else if (productName.includes("iphone 16")) handleLearnMoreClick("iphone16");
                else if (productName.includes("series 10") || productName.includes("watch")) handleLearnMoreClick("watch");
                else if (productName.includes("macbook")) handleLearnMoreClick("macbook");
                else if (productName.includes("ipad")) handleLearnMoreClick("ipad");
                else if (productName.includes("airpods")) handleLearnMoreClick("airpods");
            }
        });
    });

    // Valentine's Day Shop button
    const valentinesButton = document.querySelector(".blueshop");
    if (valentinesButton) {
        valentinesButton.addEventListener("click", function () {
            handleBuyClick("valentines");
        });
    }
});
