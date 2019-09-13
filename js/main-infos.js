var infos = document.getElementsByClassName('info'),
    infosLen = infos.length,
    infoIndex = 0,
    infoTime = 0;

var clear = function () {
    for (var k = 0; k < infosLen; k++) {
        infos[k].className = "info";
    }
};

var add = function () {
    clear();
    infos[infoIndex].className = "info h";
};

var next = function () {
    if (infoIndex == 6) {
        infoIndex = 0;
    } else {
        infoIndex++;
    }
    add();
};

setInterval(function () {
    infoTime++;
    if (infoTime == 40) {
        next();
        infoTime = 0;
    }
}, 100);