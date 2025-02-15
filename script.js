document.addEventListener("DOMContentLoaded", function () {
    // Fun messages for each product
    const messages = {
        "iphone16pro": "Before you proceed... have you checked your bank balance lately? We wouldn't want your wallet to go on vacation! 🏝️💸",
        "iphone16": "Experience innovation! But don't forget—your current phone still works, right? 📱😂",
        "watch": "It won’t make you fit instantly, but it will judge you for skipping workouts. ⌚😆",
        "airpods": "Welcome to the club of lost AirPods. Say hi to the ones under your bed! 🔍🎧",
        "macbookair": "Are you buying this for 'work' or just to look cool at a café? ☕💻",
        "macbookpro": "Powerful enough for pros, but will you really use all that power or just browse memes? 😂💻",
        "ipad": "A powerful tool! But will you use it for productivity or just endless Netflix binges? 🍿📺",
        "valentines": "Big spender alert! Let’s hope they don’t break your heart after this. 💔😂"
    };

    // Learn more links
    const learnMoreLinks = {
        "iphone16pro": "https://www.apple.com/in/iphone-16-pro/",
        "iphone16": "https://www.apple.com/in/iphone-16/",
        "watch": "https://www.apple.com/in/apple-watch-series-10/",
        "macbookair": "https://www.apple.com/in/macbook-air/",
        "macbookpro": "https://www.apple.com/in/macbook-pro/",
        "ipad": "https://www.apple.com/in/ipad-pro/",
        "airpods": "https://www.apple.com/in/airpods-4/"
    };

    // Buy links
    const buyLinks = {
        "iphone16pro": "https://www.apple.com/in/shop/buy-iphone/iphone-16-pro",
        "iphone16": "https://www.apple.com/in/shop/buy-iphone/iphone-16",
        "watch": "https://www.apple.com/in/shop/buy-watch/apple-watch",
        "macbookair": "https://www.apple.com/in/shop/buy-mac/macbook-air",
        "macbookpro": "https://www.apple.com/in/shop/buy-mac/macbook-pro",
        "ipad": "https://www.apple.com/in/shop/buy-ipad/ipad-pro",
        "airpods": "https://www.apple.com/in/shop/buy-airpods/airpods-4"
    };

    // White Buy & Estimate buttons
    const whiteBuyLink = "https://www.apple.com/in/shop/product/MDF54ZM/A/46mm-black-unity-sport-loop-unity-rhythm";
    const estimateLink = "https://www.apple.com/in/shop/trade-in";

    // Function to handle Buy button clicks (shows message then redirects)
    function handleBuyClick(productKey) {
        if (messages[productKey]) {
            alert(messages[productKey]);
            setTimeout(() => {
                window.open(buyLinks[productKey], "_blank");
            }, 800); // Redirect after 0.8 seconds
        }
    }

    // Function to handle Learn More button clicks (directly redirects)
    function handleLearnMoreClick(productKey) {
        if (learnMoreLinks[productKey]) {
            window.open(learnMoreLinks[productKey], "_blank");
        }
    }

    // Attach event listeners to all Buy, White Buy, Estimate, and Learn More buttons
    document.querySelectorAll(".buy, .whitebuy, .estimate-btn, .learn-more").forEach(button => {
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

            // Check if it's a Buy button
            if (button.classList.contains("buy")) {
                if (productName.includes("iphone 16 pro")) handleBuyClick("iphone16pro");
                else if (productName.includes("iphone 16")) handleBuyClick("iphone16");
                else if (productName.includes("series 10") || productName.includes("watch")) handleBuyClick("watch");
                else if (productName.includes("macbook air")) handleBuyClick("macbookair");
                else if (productName.includes("macbook pro")) handleBuyClick("macbookpro");
                else if (productName.includes("ipad")) handleBuyClick("ipad");
                else if (productName.includes("airpods")) handleBuyClick("airpods");
            }
            // White Buy button
            else if (button.classList.contains("whitebuy")) {
                setTimeout(() => {
                    window.open(whiteBuyLink, "_blank");
                }, 800);
            }
            // Estimate button
            else if (button.classList.contains("estimate-btn")) {
                setTimeout(() => {
                    window.open(estimateLink, "_blank");
                }, 800);
            }
            // Learn More button
            else if (button.classList.contains("learn-more")) {
                if (productName.includes("iphone 16 pro")) handleLearnMoreClick("iphone16pro");
                else if (productName.includes("iphone 16")) handleLearnMoreClick("iphone16");
                else if (productName.includes("series 10") || productName.includes("watch")) handleLearnMoreClick("watch");
                else if (productName.includes("macbook air")) handleLearnMoreClick("macbookair");
                else if (productName.includes("macbook pro")) handleLearnMoreClick("macbookpro");
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
