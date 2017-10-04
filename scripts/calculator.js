window.calculator = window.calculator || {};

function render(value) {
    document.querySelector('#render').innerHTML = value
}

function isOdd(number) {
    return number % 2 === 0;
}

function manageInput() {
    var value = document.querySelector('#text').value
    var oddValue = isOdd(value)
    render(oddValue)
}

window.calculator.init = function () {
    document.querySelector('#calculate-btn').addEventListener('click', manageInput)
}