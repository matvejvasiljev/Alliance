let callMe = document.getElementById("callMe")
let callMeButton = document.getElementById("callMeButton")

let slideLeft = document.getElementById("slideLeft")
let slideRight = document.getElementById("slideRight")
let modal = document.getElementsByClassName("modal")[0]
let slider = document.getElementsByClassName("slider")[0]

let sliderDistance = 0

slideLeft.onclick = function () {
    console.log("слайд на лево")
    sliderDistance -= 50;
    console.log(sliderDistance)

    if (sliderDistance < 0) {
        console.log("слайдер начало в конец");
        sliderDistance = slider.children.length * 50 - 100;
    }
    slider.style.transform = `translateX(-${sliderDistance}%)`
}

slideRight.onclick = function () {
    console.log("слайд на право");
    sliderDistance += 50;
    console.log(sliderDistance);

    if (sliderDistance == (slider.children.length * 50 - 50)) {
        console.log("слайдер конец в начало");
        sliderDistance = 0;
    }
    slider.style.transform = `translateX(-${sliderDistance}%)`
}