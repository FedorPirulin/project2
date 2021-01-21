// Slider
$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight:true,
        slidesToShow: 2,
        responsive:[{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
        
    });
});

//burgerMenu
function burgerMenu (selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let link = menu.find('.burger-menu__link');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    link.on('click', () => toggleMenu());

    function toggleMenu () {
        menu.toggleClass('burger-menu--active');

    }
}

burgerMenu ('.burger-menu')

// Поиск 
if (document.getElementById('#search') !== null) {
    document.querySelector('#search').oninput = function() {
        let val = this.value.trim().toUpperCase();
        let searchItems = document.querySelectorAll('.catalog__link');
        if (val != '') {
            searchItems.forEach(function (elem) {
                if (elem.innerText.search(val) == -1) {
                    elem.closest('li').classList.add('catalog__hide');
                }
                else {
                    elem.closest('li').classList.remove('catalog__hide');
                }
            });
        }
        else {
            searchItems.forEach(function (elem) {
                    elem.closest('li').classList.remove('catalog__hide'); 
            });
        }
    }
}


// Подсказка при наведении
let tooltipElem;

document.onmouseover = function(event) {
    let target = event.target;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
    
    window.onmousemove = function(e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipElem.style.top = (y + 20) + 'px';

    tooltipElem.style.left = (x + 20) + 'px';
    }

  };

  document.onmouseout = function(e) {

    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }

  };



   
