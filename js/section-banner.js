var lis = document.getElementsByClassName('item'),
    dots = document.getElementsByClassName('dot'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    lisLen = lis.length,
    dotsLen = dots.length,
    index = 0,
    time = 0;

var clearPeak = function () {
    for (var i = 0; i < lisLen; i++) {
        lis[i].className = 'item';
    }
    for (var j = 0; j < dotsLen; j++) {
        dots[j].className = 'dot';
    }
};

var addPeak = function () {
    clearPeak();
    lis[index].className = "item peak";
    dots[index].className = "dot check";
};

var goNextImg = function () {
    if (index == 7) {
        index = 0;
    } else {
        index++;
    }
    addPeak();
};

var goPrevImg = function () {
    if (index == 0) {
        index = 7;
    } else {
        index--;
    }
    addPeak();
};

prevBtn.addEventListener('click', function () {
    time = 0;
    goPrevImg();
}, false);

nextBtn.addEventListener('click', function () {
    time = 0;
    goNextImg();
}, false);

for (var i = 0; i < dotsLen; i++) {
    (function (j) {
        dots[j].addEventListener('mouseover', function () {
            var dotsIndex = this.getAttribute('data');
            index = dotsIndex;
            addPeak();
            time = 0;
        });
    }(i));
}

setInterval(function () {
    time++;
    if (time == 30) {
        goNextImg();
        time = 0;
    }
}, 100);
