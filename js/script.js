'use strict'

const hamburgerButton = document.querySelector('.hamburgerButton'),
    carouselScreen = document.querySelector('.carouselScreen'),
    sliders = document.querySelectorAll('.slide'),
    dotBox = document.querySelector('.dotBox'),
    carousel = document.querySelector('.carousel');

let activeSlide = document.querySelector('.slide');
let dots=[];
let offset=0;
let startTimer;

hamburgerButton.addEventListener('click',()=>{
    clearTimeout(startTimer);
    if(carouselScreen.classList.contains('carouselScreen-active'))
    {
        carouselScreen.classList.remove('carouselScreen-active');
        activeSlide.classList.add('slide-fade');
        dotBox.classList.add('dotBox-fade');
        hamburgerButton.classList.remove('hamburgerButton-active');

    }else{
        carouselScreen.classList.add('carouselScreen-active');
        
        startTimer = setTimeout(() => {
            activeSlide.classList.remove('slide-fade');
            dotBox.classList.remove('dotBox-fade');
        }, 500);

        hamburgerButton.classList.add('hamburgerButton-active');
    }
    
});

console.log(sliders.length);
sliders.forEach(function(item,i){
    let element = document.createElement('div');
    element.classList.add('dot');
    let text = item.querySelector('a1').textContent;
    element.innerHTML = `<a1>${text}</a1>`;
    element.addEventListener('click', () => {

        showSlider(i);

    });
    let textElement = element.querySelector('a1');
    
    element.addEventListener('mouseover', () => {

        textElement.style.opacity=1;

    });
    element.addEventListener('mouseleave', () => {

        textElement.style.opacity=0;

    });
    dots.push(element);
    dotBox.append(element);
    console.log("Added!");
});

function showSlider(num){
    console.log(num);
    if(offset != 400*num){
        offset = 400*num;
        carousel.style.transform = `translateY(-${offset}px)`;
        console.log(offset);
    }
    activeSlide=sliders[num];
}
   


