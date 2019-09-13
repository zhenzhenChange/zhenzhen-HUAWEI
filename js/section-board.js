var boardHot = document.getElementsByClassName('board_hot'),
    boardAn = document.getElementsByClassName('board_an'),
    boardHotLen = boardHot.length,
    boardAnLen = boardAn.length;

for (var i = 0; i < boardHotLen; i++) {
    (function (k) {
        boardHot[k].onmouseover = boardAn[k].onmouseover = function () {
            boardAn[k].className = 'board_an a';
        };
        boardHot[k].onmouseout = boardAn[k].onmouseout = function () {
            boardAn[k].className = 'board_an';
        };
    }(i));
}