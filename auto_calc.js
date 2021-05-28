function calc(cBox) {
    let sum;
    let sumText = document.getElementById("sumtext");
    if(cBox.checked)
        sum = parseInt(cBox.value);
    else
        sum = (-1) * parseInt(cBox.value);
    sumText.value = sum + parseInt(sumText.value);
}