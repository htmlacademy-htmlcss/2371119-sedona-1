let infoButton = document.querySelector('.information-button');
let kidsInfoBlock = document.querySelector('.kids-info');
let modalButton = document.querySelector('.modal-button');
let modal = document.querySelector('.modal-container');
let modalCloseButton = document.querySelector('.modal-close-button');
let adults = document.querySelector('.adults-input');
let kids = document.querySelector('.kids-input');
let minusButtons = document.querySelectorAll('.minus-button');
let plusButtons = document.querySelectorAll('.plus-button');

infoButton.onmouseover = function () {
    kidsInfoBlock.classList.remove('visually-hidden');
}

infoButton.onmouseout = function () {
    kidsInfoBlock.classList.add('visually-hidden');
}

modalButton.onclick = function () {
    modal.classList.remove('modal-closed');
}

modalCloseButton.onclick = function () {
    modal.classList.add('modal-closed');
}

for (let minusButton of minusButtons) {
    minusButton.onclick = function () {
        if (minusButton.parentElement.classList.contains('adults-wrapper')) {
            adults.value -= 1;
        } else {
            kids.value -= 1;
        }
    }
}

for (let plusButton of plusButtons) {
    plusButton.onclick = function () {
        if (plusButton.parentElement.classList.contains('adults-wrapper')) {
            adults.value = parseInt(adults.value) + 1;
        } else {
            kids.value = parseInt(kids.value) + 1;
        }
    }
}
