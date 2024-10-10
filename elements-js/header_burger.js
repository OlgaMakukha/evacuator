const burgerBtns = document.querySelectorAll('.header__burger');
const navs = document.querySelectorAll('.header__nav');
const closeBtns = document.querySelectorAll('.header__nav-close');

function showMenu() {
    if (window.innerWidth > 960) {
        navs.forEach(nav => nav.style.display = 'flex');
        burgerBtns.forEach(btn => btn.style.display = 'none');
    } else {
        navs.forEach(nav => nav.style.display = 'none');
        burgerBtns.forEach(btn => btn.style.display = 'block');
    }
}

window.addEventListener('resize', showMenu);
showMenu();

burgerBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const targetNav = event.target.closest('.header__wrapper').querySelector('.header__nav');
        targetNav.style.display = 'block';
    });
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const targetNav = event.target.closest('.header__nav');
        targetNav.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (window.innerWidth <= 960) {
        navs.forEach(nav => {
            const headerWrapper = nav.closest('.header__wrapper');
            const burgerBtn = headerWrapper.querySelector('.header__burger');
            
            if (nav.style.display === 'block' && 
                !nav.contains(e.target) && 
                e.target !== burgerBtn && 
                !burgerBtn.contains(e.target)) {
                nav.style.display = 'none';
            }
        });
    }
});
