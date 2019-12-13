document.addEventListener("DOMContentLoaded", function(event) { 

    let chevron = document.querySelectorAll('.works > .works__item > .works__header > i');

    for(let key in chevron) {
        chevron[key].onclick = function(event) {
            if (event.target.classList.contains('chevron-rotate') === true) {
                return false;
            }
            // === Некий незнакомец, если ты видишь этот ужас, то знай что я пытался через циклы
            // === увы не получилось т.к js очень странный (или я слишком тупой) -_-. 
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


    // =============== TEAM SLIDER ================
    let leftNav = document.querySelector('.team-left-chevron');
        leftNav.onclick = function(event) {
            let direction = 'left';
            slideMove(direction);
        }

    let rightNav = document.querySelector('.team-right-chevron');
        rightNav.onclick = function(event) {
            let direction = 'right';
            slideMove(direction);
        }

    let mainElement = document.querySelector('.team-slider');
    let slideWrapper = mainElement.querySelector('.team-slider__wrapper');
    let sliderItems = slideWrapper.querySelectorAll('.team-slider__item')
    let wrapperWidth = parseFloat(getComputedStyle(slideWrapper).width);
    let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
    let transofrmValue = 0;
    let currentNumberItem = 0;
    let stepSlide = itemWidth / wrapperWidth * 100;
    let countSlideItem = sliderItems.length - 1;

    function slideMove(direction) {
        if (direction === "right") {
            if (currentNumberItem === countSlideItem) {
                currentNumberItem = 0;
                transofrmValue = 0;
                slideWrapper.style.transform = 'translateX('+  transofrmValue + '%)';
        
            } else {
                currentNumberItem++;
                transofrmValue += stepSlide;
                slideWrapper.style.transform = 'translateX(-'+  transofrmValue + '%)';

            }
        }

        if (direction === "left") {
            currentNumberItem--;
            if (currentNumberItem < 0) {
                transofrmValue = 100 * countSlideItem;
                currentNumberItem = countSlideItem;
                slideWrapper.style.transform = 'translateX(-'+  transofrmValue + '%)';
            } else {
                transofrmValue -= stepSlide;
                slideWrapper.style.transform = 'translateX(-'+  transofrmValue + '%)';
            }
        }
    }

    
});
