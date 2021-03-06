var trustUsFeedback = function trustUsFeedback() {
    var self = this;

    this.items = Array.from(document.querySelectorAll('.trust-us__icons-item'));
    this.itemsWrapper = document.getElementsByClassName('trust-us__icons')[0];
    this.round = document.getElementById('js-logo-wrapper');
    this.backfeeds = Array.from(document.querySelectorAll('.audio-backfeed'));

    this.moveRound(this.items[0]);
    this.changeSlide(0);

    this.items.map(function (item, index) {
        item.onclick = function () {
            pauseAllPlayers();
            self.moveRound(item);
            self.changeSlide(index);
        };
    });
};

trustUsFeedback.prototype.moveRound = function(element){
    var logoRect = element.getBoundingClientRect();
    var containerRect = this.itemsWrapper.getBoundingClientRect();
    var pos = {
        left: logoRect.left - containerRect.left,
        top: logoRect.top - containerRect.top
    }    
    this.round.style.left = pos.left + 'px';
    this.round.style.top  = pos.top + 'px';
}

trustUsFeedback.prototype.changeSlide = function (item_index) {
    this.backfeeds.map(function (item, index) {
        if (item_index === index) {
            item.classList.remove('is_hidden');
        } else {
            item.classList.add('is_hidden');
        }
    });
};

// Slider 
function initSlider() {
    var mySwiper = new Swiper('.began-slider', {
        pagination: {
            el: '.began-slider__pagination'
        },
        navigation: {
            nextEl: '.began-slider__next',
            prevEl: '.began-slider__prev'
        },
        effect: 'coverflow',
        spaceBetween: 20,
        speed: 500,
        breakpointsInverse: true,
        breakpoints: {
            1920: {
                spaceBetween: 120
            },
            3996: {
                spaceBetween: 950
            }

        }
    });
}

function firstSectionAnimation() {
    var elemParagraphs = document.querySelectorAll('.first-section__content p');

    var delay = 2.5;
    for (var i = 0; i <= elemParagraphs.length - 1; i++) {
        elemParagraphs[i].style.animationDelay = delay + 's';
        delay = delay + 0.4;
    }

    setTimeout(function(){
        var iteration = 0;
        var elem = document.getElementsByClassName('first-section__figure-img')[0];

        var interval = setInterval(function(){
            requestAnimationFrame(function(){
                if (elem.style.transform) {
                    elem.style.transform = '';
                } else {
                    elem.style.transform = 'scale(-1, 1)';
                }
                iteration++;
                if (iteration >= 4) {
                    clearInterval(interval);
                }
            });
        }, 1000);
    }, 2000);
}
