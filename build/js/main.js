document.addEventListener("DOMContentLoaded", function(event) { 

    let chevron = document.querySelectorAll('.works > .works__item > .works__header > i');

    for(let key in chevron) {
        chevron[key].onclick = function(event) {
            if (event.target.classList.contains('chevron-rotate') === true) {
                return false;
            }
            
            // === Некий незнакомец, если ты видишь этот ужас, то знай что я пытался через циклы
            // === увы не получилось, js очень странный (или я слишком тупой) -_-. 
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
});
