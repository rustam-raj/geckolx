// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle img');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Popup Elements
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupPrice = document.getElementById("popup-price");
const popupDesc = document.getElementById("popup-desc");
const popupImg = document.getElementById("popup-img");

// Show Popup with Product Info
document.querySelectorAll(".buy-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    popupTitle.textContent = card.dataset.name;
    popupPrice.textContent = "Price: " + card.dataset.price;
    popupDesc.textContent = card.dataset.desc;
    popupImg.src = card.dataset.img;
    popup.style.display = "flex";
  });
});

// Close Popup
function closePopup() {
  popup.style.display = "none";
}

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});
