const btnAdd = document.querySelector(`button[data-add]`);
const resetBtn = document.querySelector(`button[data-reset]`);
const valueInput = document.querySelector(`input[data-value]`);
const outputEl = document.querySelector(`.js-output span`);


let total = 0;

btnAdd.addEventListener("click", () => {
    const value = Number(valueInput.value);
    total += value;
    outputEl.textContent = total;
valueInput.value -= total;
});


resetBtn.addEventListener("click", () => {
    total = 0;
    outputEl.textContent = total;
})