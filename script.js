const images = document.getElementById("img1");
const arrayImages = ["mustang.jpg","lamborgini.jpg","sports.jpeg","mercedes.jpeg"];

function changeImage(index) {
    images.setAttribute("src", arrayImages[index]);
}