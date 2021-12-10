const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgArray = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Looping through images for Thumbnails and add Event-Listener */
for(image of imgArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/" + image);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', changeImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeBrightness);

function changeBrightness(e) {
    if (e.target.getAttribute('class') === "dark") {
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
    
}

/* Change Image */
function changeImage(e) {
    const imgPath = e.target.getAttribute('src');
    displayedImage.setAttribute('src', imgPath);
}
