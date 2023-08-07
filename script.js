let slider = document.querySelectorAll('.slide');
let sliderArry = Array.from(slider);

let leftArow = document.querySelector('.left')
let rightArow = document.querySelector('.right')

// right slider
rightArow.addEventListener('click', function(){

    function rightButton(){

        let activeSlider = document.querySelector('.slide.active')
        let currentIndex = sliderArry.indexOf(activeSlider)
        if(currentIndex == sliderArry.length - 1){

            rightButton = sliderArry[0]
            activeSlider.classList.remove('active')
            rightButton.classList.add('active')

        }else{

            rightButton = sliderArry[ currentIndex + 1 ]
            activeSlider.classList.remove('active')
            rightButton.classList.add('active')

        }
    }
    rightButton()
})

// left slider
leftArow.addEventListener('click', function(){

    function leftButton(){

        let activeSlider = document.querySelector('.slide.active')
        let currentIndex = sliderArry.indexOf(activeSlider)
        if(currentIndex == sliderArry.length - 1){

            leftButton = sliderArry[0]
            activeSlider.classList.remove('active')
            leftButton.classList.add('active')

        }else{

            leftButton = sliderArry[ currentIndex + 1 ]
            activeSlider.classList.remove('active')
            leftButton.classList.add('active')

        }
    }
    leftButton()
})