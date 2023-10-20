const infoButton = document.querySelector('.information-button');
const kidsInfoBlock = document.querySelector('.kids-info');
const modalButtons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');
const adults = document.querySelector('.adults-input');
const kids = document.querySelector('.kids-input');
const minusButtons = document.querySelectorAll('.minus-button');
const plusButtons = document.querySelectorAll('.plus-button');
const rangeInput = document.querySelectorAll('.price-range');
const progress = document.querySelector('.progress');


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
