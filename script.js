// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '☀️';
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '🌙';
        }
    });
});
