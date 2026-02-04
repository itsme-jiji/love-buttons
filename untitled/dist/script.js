const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const message = document.querySelector(".message");
const heartsContainer = document.querySelector(".hearts-container");

// Show message + hearts + hide buttons on Yes click
yesBtn.addEventListener("click", () => {
  message.classList.add("active");
  
  // Hide buttons
  yesBtn.style.opacity = "0";
  noBtn.style.opacity = "0";
  
  // Optional: remove buttons from pointer events so they don't interfere
  yesBtn.style.pointerEvents = "none";
  noBtn.style.pointerEvents = "none";

  createHearts();
});

// Move No button randomly on hover or tap
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const windowWidth = window.innerWidth - btnWidth;
  const windowHeight = window.innerHeight - btnHeight;

  const randX = Math.floor(Math.random() * windowWidth);
  const randY = Math.floor(Math.random() * windowHeight);

  noBtn.style.left = randX + "px";
  noBtn.style.top = randY + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton); // for mobile tap

// Floating hearts
function createHearts() {
  const heartSymbols = ["💞","❤️","🩷","💖","✨"];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}