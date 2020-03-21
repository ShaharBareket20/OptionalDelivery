'use strict'

setLocalStorage();

function colorNums(elCell, cell) {
    if (cell.minesAroundCount === 1) {
        elCell.style = 'color: blue';
    } else if (cell.minesAroundCount === 2) {
        elCell.style = 'color: red';
    } else if (cell.minesAroundCount === 3) {
        elCell.style = 'color: green';
    } else if (cell.minesAroundCount === 4) {
        elCell.style = 'color: yellow';
    } else(elCell.style = 'color: fuchsia');
}

function resetTime() {
    clearInterval(gGameInterval);
    gGameInterval = null;
    gGame.secsPassed = 0;
    var elTimer = document.querySelector('.timer');
    elTimer.innerHTML = `<span>${gGame.secsPassed}</span>`;
}

function createHints() {
    var strHTML = '';
    for (var i = 3; i >= 1; i--) {
        strHTML += `<span class="hint hint${i}" onclick="hintClicked(this)">${HINT}</span>`;
    }
    document.querySelector('.hints').innerHTML = strHTML;
}


function createLifes() {
    var strHTML = '';
    for (var i = 3; i >= 1; i--) {
        strHTML += `<span class="life life${i}">${LIFE}</span>`;
    }
    document.querySelector('.lifes').innerHTML = strHTML;
}

function createSafeClicks() {
    var strHTML = '';
    for (var i = 3; i >= 1; i--) {
        strHTML += `<span class="safe safe${i}" onclick="safeClickClicked(this)">${SAFE_CLICK}</span>`;
    }
    document.querySelector('.safe-clicks').innerHTML = strHTML;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setLocalStorage() {
    localStorage.setItem(0, Infinity);
    localStorage.setItem(1, Infinity);
    localStorage.setItem(2, Infinity);
    localStorage.removeItem('easy');
    localStorage.removeItem('hard');
    localStorage.removeItem('expert');
}