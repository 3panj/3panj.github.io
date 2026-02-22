const contentUrl = "https://raw.githubusercontent.com/3panj/3panj.github.io/refs/heads/main/assets/content.json";

let siteData = null;
let currentLang = 'en';

// The function that fetches the data
async function init() {
    try {
        const response = await fetch(contentUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        siteData = await response.json();
        render();
    } catch (e) {
        console.error("Could not load content.json:", e);
        document.getElementById('gallery').innerHTML = "Check console for errors. Data could not be loaded.";
    }
}

// The function that builds the HTML
function render() {
    if (!siteData) return;

    const data = siteData[currentLang];

    // Update Text Content
    document.getElementById('main-title').textContent = data.title;
    document.getElementById('main-bio').textContent = data.bio;
    document.getElementById('lang-switch').textContent = data.btn;

    // Handle Layout Direction (LTR vs RTL)
    document.documentElement.dir = (currentLang === 'fa' ? 'rtl' : 'ltr');
    document.documentElement.lang = currentLang;

    // Update Gallery Items
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear current gallery

    data.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Missing'">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Switch Language Listener
document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = (currentLang === 'en' ? 'fa' : 'en');
    render();
});

// Run on load
init();
