const tabs = document.querySelector('.price__wrapper--tabs');
const content = document.querySelectorAll('.price__content--item');

function changeClass(element) {
    Array.from(tabs.children).forEach((tab) => {
        tab.classList.remove('price__tab--active');
    });
    element.classList.add('price__tab--active');
}

tabs.addEventListener('click', function(e) {
    const clickedTab = e.target.closest('[data-btn]');
    if (!clickedTab) return;

    const currentTab = clickedTab.dataset.btn;
    changeClass(clickedTab);

    content.forEach((item) => {
        item.classList.toggle('price__content--item-active', item.dataset.content === currentTab);
    });
});