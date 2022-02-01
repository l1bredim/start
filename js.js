const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
//стрелки
const active = document.querySelector('.active');
//активный клас
const slides = document.querySelectorAll('.slide');
//колекция всех слайдов

let index = 0;

function activeSlide(n){
        console.log(n);
for (slide of slides) {
      slide.classList.remove('active');
}
    slides[n].classList.add('active') ;  
 }
 function nextSlide() {
 if (index == slides.length - 1) {
         index = 0;
         activeSlide(index);
 } else {
         index++;
         activeSlide(index);
 }
 }

 function prevSlide() {
        if (index == 0) {
                index = slides.length - 1;
                activeSlide(index);
        } else {
                index--;
                activeSlide(index);
        }
    
 }

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);


