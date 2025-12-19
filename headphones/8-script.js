document.addEventListener('DOMContentLoaded', () => {

    const menubtn = document.getElementById('mobile-menu');
    const nav_links = document.querySelector('.nav-links');

    if (menubtn && nav_links) {
        
        menubtn.addEventListener('click', () => {
            nav_links.classList.toggle('active');
            menubtn.classList.toggle('is-active');
        });
    }
});