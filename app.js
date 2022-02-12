function updateCaseNumber(isIncreseing, itemNumber, itemTotal, price) {
    const itemInput = document.getElementById(itemNumber);
    itemNumber = itemInput.value;
    if (isIncreseing == true) {
        itemNumber = parseInt(itemNumber) + 1;
    }
    else if (itemNumber > 0) {
        itemNumber = parseInt(itemNumber) - 1;
    }
    itemInput.value = itemNumber

    const caseTotal = document.getElementById(itemTotal)
    caseTotal.innerText = parseInt(itemNumber) * price
}
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true, 'case-number', 'case-total', 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false, 'case-number', 'case-total', 59)
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber(true, 'phone-number', 'phone-total', 1219)
})


document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber(false, 'phone-number', 'phone-total', 1219)
})