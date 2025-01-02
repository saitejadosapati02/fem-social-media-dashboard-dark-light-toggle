 document.addEventListener('DOMContentLoaded', () => {
    const storedMode = localStorage.getItem('colorMode');
    const body = document.querySelector('body');
    const darkButton = document.getElementById('dark');
    const lightButton = document.getElementById('light');

    if (storedMode === 'dark') {
        body.classList.add('dark');
        darkButton.checked = true;
    } else {
        body.classList.add('light');
        lightButton.checked = true;
    }

    document.querySelectorAll('.toggle__wrapper input').forEach((radio) => {
        radio.addEventListener('click', () => {
            if (darkButton.checked) {
                body.classList.remove('light');
                body.classList.add('dark');
                localStorage.setItem('colorMode', 'dark');
            } else if (lightButton.checked) {
                body.classList.remove('dark');
                body.classList.add('light');
                localStorage.setItem('colorMode', 'light');
            }
        });
    });
});
