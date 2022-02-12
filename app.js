function updateCaseNumber(isIncreseing, product, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreseing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber

    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price
    // calculate Total
    calculateTotal()
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = subTotal + tax;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true, 'case', 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false, 'case', 59)
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber(true, 'phone', 1219)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber(false, 'phone', 1219)
})

