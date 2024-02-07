document.addEventListener('DOMContentLoaded', function () {
    const themeChanger = document.getElementById('themechanger');
    const body = document.body;

    // Check the user's preference from localStorage
    const isLightMode = localStorage.getItem('theme') === 'light';

    // Set the initial theme and icon based on user preference
    if (isLightMode) {
        body.classList.add('ligthmode');
        themeChanger.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    // Toggle theme and change icon when theme changer is clicked
    themeChanger.addEventListener('click', function () {
        body.classList.toggle('ligthmode');

        // Change icon and apply rotation animation
        const icon = themeChanger.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('rotate');

        // Save the user's preference in localStorage
        const currentTheme = body.classList.contains('ligthmode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
});



