function initSlider() {
    const sliderItems = document.querySelectorAll('.slider__wrapper--items');
    const sliderItemsInner = document.querySelectorAll('.slider__wrapper--item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let innerIndex = 0;

    function showSlide(index, innerIdx = 0) {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('slider__wrapper--items-active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('dot--active', i === index);
        });

        if (window.innerWidth < 1080) {
            sliderItemsInner.forEach((item, i) => {
                item.classList.toggle('slider__item--visible', Math.floor(i / 2) === index && i % 2 === innerIdx);
            });
        } else {
            sliderItemsInner.forEach((item, i) => {
                item.classList.toggle('slider__item--visible', Math.floor(i / 2) === index);
            });
        }
    }

    function nextSlide() {
        if (window.innerWidth < 1080) {
            innerIndex = (innerIndex + 1) % 2;
            if (innerIndex === 0) {
                currentIndex = (currentIndex + 1) % sliderItems.length;
            }
        } else {
            currentIndex = (currentIndex + 1) % sliderItems.length;
        }
        showSlide(currentIndex, innerIndex);
    }

    function prevSlide() {
        if (window.innerWidth < 1080) {
            innerIndex = (innerIndex - 1 + 2) % 2;
            if (innerIndex === 1) {
                currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            }
        } else {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        }
        showSlide(currentIndex, innerIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showSlide(currentIndex);

    window.addEventListener('resize', () => {
        innerIndex = 0;
        showSlide(currentIndex);
    });
}

initSlider();
