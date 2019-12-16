document.addEventListener("DOMContentLoaded", function(event) { 

    let chevron = document.querySelectorAll('.works > .works__item > .works__header > i');

    for(let key in chevron) {
        chevron[key].onclick = function(event) {
            if (event.target.classList.contains('chevron-rotate') === true) {
                return false;
            }
           
            chevron[0].parentElement.nextElementSibling.classList.add('work-txt-toggle');
            chevron[0].classList.remove('chevron-rotate');
            chevron[1].parentElement.nextElementSibling.classList.add('work-txt-toggle');
            chevron[1].classList.remove('chevron-rotate');
            chevron[2].parentElement.nextElementSibling.classList.add('work-txt-toggle');
            chevron[2].classList.remove('chevron-rotate');
        
            event.target.classList.toggle('chevron-rotate');
            event.target.parentElement.nextElementSibling.classList.toggle('work-txt-toggle');
        }
    }

    // =============== SLIDER FUNCTION ============
    function slideMove(direction, slider, wrapper, slider_item) {
        let mainElement = document.querySelector(slider);
        let slideWrapper = mainElement.querySelector(wrapper);
        let sliderItems = slideWrapper.querySelectorAll(slider_item)
        let wrapperWidth = parseFloat(getComputedStyle(slideWrapper).width);
        let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
        let stepSlide = itemWidth / wrapperWidth * 100;
        let countSlideItem = sliderItems.length - 1;

        if (direction === "right") {
            if (currentNumberItemTeam === countSlideItem) {
                currentNumberItemTeam = 0;
                transofrmValueTeam = 0;
                slideWrapper.style.transform = 'translateX('+  transofrmValueTeam + '%)';
            } else {
                currentNumberItemTeam++;
                transofrmValueTeam += stepSlide;
                slideWrapper.style.transform = 'translateX(-'+  transofrmValueTeam + '%)';

            }
        }
        if (direction === "left") {
            currentNumberItemTeam--;
            if (currentNumberItemTeam < 0) {
                transofrmValueTeam = 100 * countSlideItem;
                currentNumberItemTeam = countSlideItem;
                slideWrapper.style.transform = 'translateX(-'+  transofrmValueTeam + '%)';
            } else {
                transofrmValueTeam -= stepSlide;
                slideWrapper.style.transform = 'translateX(-'+  transofrmValueTeam + '%)';
            }
        }
    }

    // =============== TEAM SLIDER ================
    let leftNav = document.querySelector('.team-left-chevron');
        leftNav.onclick = function(event) {
            let direction = 'left';
            slideMove(direction, '.team-slider', '.team-slider__wrapper', '.team-slider__item');
        }

    let rightNav = document.querySelector('.team-right-chevron');
        rightNav.onclick = function(event) {
            let direction = 'right';
            slideMove(direction, '.team-slider', '.team-slider__wrapper', '.team-slider__item');
        }
        
    let transofrmValueTeam = 0;
    let currentNumberItemTeam = 0;
    
    //============== TESTIMONIALS SLIDER ===============
    let leftTestimonials = document.querySelector('.testimonials-left-chevron');
        leftTestimonials.onclick = function(event) {
            let direction = 'left';
            slideMove(direction, '.testimonials-slider', '.testimonials-slider__wrapper', '.testimonials-slider__item');
        }

    let rightTestimonials = document.querySelector('.testimonials-right-chevron');
        rightTestimonials.onclick = function(event) {
            let direction = 'right';
            slideMove(direction, '.testimonials-slider', '.testimonials-slider__wrapper', '.testimonials-slider__item');
        }
   
});
