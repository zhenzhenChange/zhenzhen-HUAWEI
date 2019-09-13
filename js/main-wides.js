var wides = document.getElementsByClassName('wide'),
    wideDots = document.getElementsByClassName('wideDot'),
    widesLen = wides.length,
    wideDotsLen = wideDots.length,
    mainIndex = 0,
    mainTime = 0;

var clear = function () {
    for (var i = 0; i < widesLen; i++) {
        wides[i].className = 'wide';
    }
    for (var j = 0; j < wideDotsLen; j++) {
        wideDots[j].className = 'wideDot';
    }
};

var add = function () {
    clear();
    wides[mainIndex].className = "wide ig";
    wideDots[mainIndex].className = "wideDot wd"
};

var next = function () {
    if (mainIndex == 8) {
        mainIndex = 0;
    } else {
        mainIndex++;
    }
    add();
};

for (var i = 0; i < wideDotsLen; i++) {
    (function (j) {
        wideDots[j].addEventListener('mouseover', function () {
            var wideDotsIndex = this.getAttribute('mainData');
            mainIndex = wideDotsIndex;
            add();
            mainTime = 0;
        });
    }(i));
}
clearInterval(timer);
var timer = setInterval(function () {
    mainTime++;
    if (mainTime == 40) {
        next();
        mainTime = 0;
    }
}, 100);