// Engineer Essential Products Data
const engineerProducts = [
    {
        id: 1,
        name: "Casio FX-991EX Scientific Calculator",
        category: "Calculator",
        price: "₹1,299",
        rating: "4.5★",
        description: "Advanced scientific calculator with 552 functions, perfect for engineering students",
        image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500",
        amazonLink: "https://www.amazon.in/s?k=casio+fx-991ex+scientific+calculator",
        flipkartLink: "https://www.flipkart.com/search?q=casio+scientific+calculator",
        isNew: true
    },
    {
        id: 2,
        name: "Engineering Drawing Kit",
        category: "Drawing Tools",
        price: "₹899",
        rating: "4.3★",
        description: "Complete set with compass, divider, protractor, and mini drafter for technical drawings",
        image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=500",
        amazonLink: "https://www.amazon.in/s?k=engineering+drawing+kit",
        flipkartLink: "https://www.flipkart.com/search?q=engineering+drawing+instruments",
        isNew: false
    },
    {
        id: 3,
        name: "HP 15s Laptop (i5, 8GB RAM)",
        category: "Laptop",
        price: "₹45,990",
        rating: "4.6★",
        description: "Perfect for coding, CAD software, and all engineering applications",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        amazonLink: "https://www.amazon.in/s?k=hp+laptop+i5+8gb",
        flipkartLink: "https://www.flipkart.com/search?q=hp+laptop+intel+i5",
        isNew: true
    },
    {
        id: 4,
        name: "A4 Size Engineering Diary",
        category: "Stationery",
        price: "₹249",
        rating: "4.4★",
        description: "Premium quality diary with grid pages for notes, calculations, and sketches",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500",
        amazonLink: "https://www.amazon.in/s?k=engineering+notebook+a4",
        flipkartLink: "https://www.flipkart.com/search?q=engineering+diary+notebook",
        isNew: false
    },
    {
        id: 5,
        name: "Adjustable Laptop Stand",
        category: "Accessories",
        price: "₹599",
        rating: "4.2★",
        description: "Ergonomic portable laptop stand with 6 adjustable heights for better posture",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        amazonLink: "https://www.amazon.in/s?k=laptop+stand+adjustable",
        flipkartLink: "https://www.flipkart.com/search?q=laptop+stand+portable",
        isNew: false
    },
    {
        id: 6,
        name: "USB 3.0 Pen Drive 64GB",
        category: "Storage",
        price: "₹499",
        rating: "4.5★",
        description: "High-speed data transfer for storing projects, assignments, and study materials",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        amazonLink: "https://www.amazon.in/s?k=sandisk+64gb+usb+3.0",
        flipkartLink: "https://www.flipkart.com/search?q=pen+drive+64gb+usb+3.0",
        isNew: false
    },
    {
        id: 7,
        name: "Noise Cancelling Headphones",
        category: "Audio",
        price: "₹1,999",
        rating: "4.4★",
        description: "Perfect for focusing on studies in noisy environments or hostel rooms",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        amazonLink: "https://www.amazon.in/s?k=noise+cancelling+headphones",
        flipkartLink: "https://www.flipkart.com/search?q=wireless+headphones+noise+cancelling",
        isNew: true
    },
    {
        id: 8,
        name: "Whiteboard with Markers",
        category: "Study Tools",
        price: "₹799",
        rating: "4.3★",
        description: "Portable whiteboard for brainstorming, practice problems, and group study",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500",
        amazonLink: "https://www.amazon.in/s?k=whiteboard+with+markers",
        flipkartLink: "https://www.flipkart.com/search?q=white+board+small",
        isNew: false
    },
    {
        id: 9,
        name: "Study Table LED Lamp",
        category: "Lighting",
        price: "₹649",
        rating: "4.6★",
        description: "Adjustable brightness desk lamp with USB charging port for late-night studies",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
        amazonLink: "https://www.amazon.in/s?k=led+desk+lamp+usb",
        flipkartLink: "https://www.flipkart.com/search?q=study+table+lamp+led",
        isNew: false
    },
    {
        id: 10,
        name: "Digital Vernier Caliper",
        category: "Measurement",
        price: "₹549",
        rating: "4.5★",
        description: "Essential precision measuring tool for mechanical engineering workshops",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500",
        amazonLink: "https://www.amazon.in/s?k=digital+vernier+caliper",
        flipkartLink: "https://www.flipkart.com/search?q=vernier+caliper+digital",
        isNew: true
    },
    {
        id: 11,
        name: "Technical Engineering Books Set",
        category: "Books",
        price: "₹2,499",
        rating: "4.7★",
        description: "Complete set of reference books for core engineering subjects",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500",
        amazonLink: "https://www.amazon.in/s?k=engineering+textbooks",
        flipkartLink: "https://www.flipkart.com/search?q=engineering+books",
        isNew: false
    },
    {
        id: 12,
        name: "Logitech Wireless Mouse",
        category: "Computer Accessories",
        price: "₹495",
        rating: "4.5★",
        description: "Comfortable wireless mouse for long coding sessions and CAD work",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
        amazonLink: "https://www.amazon.in/s?k=logitech+wireless+mouse",
        flipkartLink: "https://www.flipkart.com/search?q=wireless+mouse+logitech",
        isNew: false
    }
];

// Function to render engineer products
function renderEngineerProducts() {
    const container = document.getElementById('engineerProducts');
    
    if (!container) return;
    
    container.innerHTML = engineerProducts.map(product => `
        <div class="engineer-card">
            ${product.isNew ? '<span class="new-badge">New</span>' : ''}
            <img src="${product.image}" alt="${product.name}" class="engineer-card-image">
            <div class="engineer-card-content">
                <span class="engineer-category">${product.category}</span>
                <h3 class="engineer-card-title">${product.name}</h3>
                <p class="engineer-card-description">${product.description}</p>
                <div class="engineer-price-row">
                    <div class="engineer-price">${product.price}</div>
                    <div class="engineer-rating">${product.rating}</div>
                </div>
                <div class="engineer-buttons">
                    <a href="${product.amazonLink}" target="_blank" class="btn-amazon">
                        🛒 Amazon
                    </a>
                    <a href="${product.flipkartLink}" target="_blank" class="btn-flipkart">
                        🛍️ Flipkart
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Modal functions for used products
function openModal(title, image, price, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('productModal').classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Render engineer products
    renderEngineerProducts();
    
    // Modal click outside to close
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.engineer-card, .product-card, .feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Optional: Add search/filter functionality
function filterProducts(category) {
    const cards = document.querySelectorAll('.engineer-card');
    
    cards.forEach(card => {
        const cardCategory = card.querySelector('.engineer-category').textContent;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}