const productContainers = [...document.querySelectorAll('.products-container')];
const previousButton = [...document.querySelectorAll('.previous-button')];
const nextButton = [...document.querySelectorAll('.next-button')];

productContainers.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;
    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });
    previousButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
})