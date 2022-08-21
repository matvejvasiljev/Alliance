let callMe = document.getElementById("callMe")
let callMeButton = document.getElementById("callMeButton")

let slideLeft = document.getElementById("slideLeft")
let slideRight = document.getElementById("slideRight")
let modal = document.getElementsByClassName("modal")[0]
let slider = document.getElementsByClassName("slider-container__slider")[0]
let num_sliders = slider.children.length
let sliderDistance = 0

slideLeft.onclick = function () {
    console.log("слайд налево")
    sliderDistance -= 525;
    console.log(sliderDistance)

    if (sliderDistance < 0) {
        console.log("слайдер начало в конец");
        sliderDistance = slider.children.length * 525 - 1050;
    }
    slider.style.transform = `translateX(-${sliderDistance}px)`
}

slideRight.onclick = function () {
    console.log("слайд направо");
    sliderDistance += 525;
    console.log(sliderDistance);

    if (sliderDistance > (slider.children.length * 525 - 1050)) {
        console.log("слайдер конец в начало");
        sliderDistance = 0;
    }
    slider.style.transform = `translateX(-${sliderDistance}px)`
}