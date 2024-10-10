document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        cityLink: document.querySelector('.banner__link'),
        modal: document.querySelector('.modal__city'),
        overlay: document.querySelector('.overlay'),
        closeButton: document.querySelector('.modal__city--btn-close'),
        cityInput: document.getElementById('city'),
        cityList: document.querySelector('.modal__city--list'),
        cityItems: document.querySelectorAll('.modal__city--item')
    };

    function toggleModal(show) {
        elements.modal.classList.toggle('active', show);
        elements.overlay.style.display = show ? 'block' : 'none';
        if (!show) {
            elements.cityInput.value = '';
            elements.cityItems.forEach(item => item.style.display = 'block');
        }
    }

    function filterCities() {
        const filter = elements.cityInput.value.toLowerCase();
        elements.cityItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(filter) ? 'block' : 'none';
        });
    }

    function selectCity(city) {
        elements.cityLink.textContent = city;
        toggleModal(false);
    }

    elements.cityLink.addEventListener('click', e => {
        e.preventDefault();
        toggleModal(true);
    });

    elements.closeButton.addEventListener('click', () => toggleModal(false));
    elements.overlay.addEventListener('click', () => toggleModal(false));

    elements.cityInput.addEventListener('input', filterCities);

    elements.cityItems.forEach(item => {
        item.addEventListener('click', () => selectCity(item.textContent));
    });
});
