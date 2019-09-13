var seaText = document.getElementById('seaText');
var seaHot = document.getElementById('seaHot');
var aHid = document.getElementById('aHid');

seaText.onfocus = function () {
    seaHot.className = "box_search hot";
    aHid.style.display = "none";
};

seaText.onblur = function () {
    seaHot.className = "box_search";
    aHid.style.display = "block";
};