let infoButton = document.querySelector('.information-button');
let kidsInfoBlock = document.querySelector('.kids-info');
let modalButtons = document.querySelectorAll('.modal-button');
let modal = document.querySelector('.modal-container');
let modalCloseButton = document.querySelector('.modal-close-button');
let adults = document.querySelector('.adults-input');
let kids = document.querySelector('.kids-input');
let minusButtons = document.querySelectorAll('.minus-button');
let plusButtons = document.querySelectorAll('.plus-button');
const rangeInput = document.querySelectorAll('.price-range'),
    progress = document.querySelector('.progress');


infoButton.onmouseover = function () {
    kidsInfoBlock.classList.remove('visually-hidden');
}

infoButton.onmouseout = function () {
    kidsInfoBlock.classList.add('visually-hidden');
}

modalButtons.forEach(modalButton => {
    modalButton.onclick = function () {
        modal.classList.remove('modal-closed');
    };
});

modalCloseButton.onclick = function () {
    modal.classList.add('modal-closed');
}

for (let minusButton of minusButtons) {
    minusButton.onclick = function () {
        if (minusButton.parentElement.classList.contains('adults-wrapper')) {
            if (adults.value > 0) { adults.value -= 1; };
        } else {
            if (kids.value > 0) { kids.value -= 1; }
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

rangeInput.forEach(input => {
    input.addEventListener("input", () => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (minVal > maxVal) {
            let tmp = maxVal;
            maxVal = minVal;
            minVal = tmp;
        }

        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

        let minDisplay = document.querySelector('.price-input-min'),
            maxDisplay = document.querySelector('.price-input-max');
        minDisplay.value = minVal;
        maxDisplay.value = maxVal;
    });
});
