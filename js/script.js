const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const nameOutput = document.getElementById('username')
const imageSlider = document.getElementById('slider')

submitButton[0].addEventListener("click", function(event){
    if (nameInput.value.length === 0 || emailInput.value.length === 0) {
        alert("Nama atau email tidak boleh kosong")
    } else {
        nameOutput.textContent = nameInput.value
    }
}) 

var i = 0
const images = [
    "assets/1.jpg", 
    "assets/2.jpg", 
    "assets/3.jpg"
]

function bannerSlide() {
    i += 1
    if (i == images.length) {
        i = 0
    }
    imageSlider.src = images[i]
}
setInterval(bannerSlide, 1000)