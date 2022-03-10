const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;
productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    });
});

const sizeButtons = document.querySelectorAll(".size-radio-button");
let checkedButton = 0;

sizeButtons.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeButtons[checkedButton].classList.remove('checked');
        item.classList.add('checked');
        checkedButton = i;
    })
});