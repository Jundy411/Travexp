// input display //
const search = document.getElementById("search");
const input = document.getElementById("input-search");

search.addEventListener("click", searchEngine);

function searchEngine() {
    if (input.style.display == "none") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}



// Carousel Start

const carousel = document.querySelector(".carousel-content");
const image = carousel.querySelectorAll("img")[0];

const arrowLeft = document.querySelectorAll("#left i");
const arrowRight = document.querySelectorAll("#right i");

let firstImgWidth = image.clientWidth + 20;


for (var i = 0; i < arrowRight.length; i++) {
    arrowRight[i].addEventListener("click", function () {
        carousel.scrollLeft += firstImgWidth;
    });
}

for (var i = 0; i < arrowLeft.length; i++) {
    arrowLeft[i].addEventListener("click", function () {
        carousel.scrollLeft -= firstImgWidth;
    });
}


// end slider

// tablink active //

const tablink = document.querySelectorAll(".select");

function tablinkActive() {
    tablink.forEach(e => e.classList.remove("active"));
    this.classList.add("active");
}

tablink.forEach(e => e.addEventListener("click", tablinkActive));

// Ends //
