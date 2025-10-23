// 🌙 Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle img');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 📱 Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// 🛍 Popup Logic
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupPrice = document.getElementById("popup-price");
const popupDesc = document.getElementById("popup-desc");
const popupImg = document.getElementById("popup-img");

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

function closePopup() {
  popup.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});
