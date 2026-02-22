let currentLang = 'en';

async function loadContent(lang) {
    const response = await fetch('content.json');
    const data = await response.json();
    const content = data[lang];

    // Update Text
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerText = content[key];
    });

    // Update Direction
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
}

document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fa' : 'en';
    loadContent(currentLang);
    document.getElementById('lang-switch').innerText = currentLang === 'en' ? 'فارسی' : 'English';
});
