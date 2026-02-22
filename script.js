const siteData = {
    en: {
        title: "Tazhib & Woodwork",
        bio: "Showcasing the intersection of traditional Persian illumination and handcrafted wood.",
        btn: "فارسی",
        items: [
            { 
                title: "Traditional Tazhib", 
                desc: "Gold leaf and hand-ground pigments.", 
                img: "https://raw.githubusercontent.com/3panj/3panj.github.io/refs/heads/main/assets/images/tazhib1.jpg" // Replace with your image path
            },
            { 
                title: "Hand-carved Walnut", 
                desc: "Intricate wood carving project.", 
                img: "https://raw.githubusercontent.com/3panj/3panj.github.io/refs/heads/main/assets/images/tazhib1.jpg" 
            }
        ]
    },
    fa: {
        title: "تذهیب و هنر چوب",
        bio: "نمایشگاهی از تذهیب‌های سنتی و ساخته‌های چوبی دست‌ساز.",
        btn: "English",
        items: [
            { 
                title: "تذهیب سنتی", 
                desc: "ورق طلا و رنگ‌های معدنی.", 
                img: "https://raw.githubusercontent.com/3panj/3panj.github.io/refs/heads/main/assets/images/wood1.jpg" 
            },
            { 
                title: "تراش گردو", 
                desc: "پروژه منبت‌کاری ظریف روی چوب گردو.", 
                img: "https://raw.githubusercontent.com/3panj/3panj.github.io/refs/heads/main/assets/images/wood1.jpg" 
            }
        ]
    }
};

let lang = 'en';

function render() {
    const data = siteData[lang];
    
    // Update text
    document.getElementById('main-title').innerText = data.title;
    document.getElementById('main-bio').innerText = data.bio;
    document.getElementById('lang-switch').innerText = data.btn;
    
    // Update direction
    document.documentElement.dir = (lang === 'fa' ? 'rtl' : 'ltr');
    
    // Render Gallery
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = data.items.map(item => `
        <div class="card">
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

document.getElementById('lang-switch').onclick = () => {
    lang = (lang === 'en' ? 'fa' : 'en');
    render();
};

// Initial Render
render();
