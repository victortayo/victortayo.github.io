document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if(darkModeToggle) darkModeToggle.checked = true;
    }

    if(darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    const recentUpdatesContainer = document.getElementById('recent-updates-container');

    if (recentUpdatesContainer && typeof articles !== 'undefined') {
        const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        const recentArticles = sortedArticles.slice(0, 3);

        recentArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'bg-white p-6 rounded-lg shadow-md';
            articleElement.innerHTML = `
                <h3 class="font-semibold text-lg"><a href="${article.url}" class="hover:underline">${article.title}</a></h3>
                <p class="text-sm text-gray-600">${article.category} - ${new Date(article.date).toLocaleDateString()}</p>
            `;
            recentUpdatesContainer.appendChild(articleElement);
        });
    }
});