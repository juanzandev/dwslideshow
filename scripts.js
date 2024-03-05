// JavaScript Document
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
];
let currentIndex = 0;
let currentImgElement = null;

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    if (currentImgElement) {
        currentImgElement.style.opacity = 0; // Hide current image
    }
    setTimeout(() => {
        if (currentImgElement) {
            document.getElementById('slideshow').removeChild(currentImgElement);
        }
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 0;
        document.getElementById('slideshow').appendChild(imgElement);
        setTimeout(() => imgElement.style.opacity = 1, 100); // Fade in new image
        currentImgElement = imgElement;
    }, 300); // Wait for the old image to fade out
}

document.getElementById('next').addEventListener('click', () => changeImage(1));
document.getElementById('prev').addEventListener('click', () => changeImage(-1));

changeImage(0); // Load the initial image