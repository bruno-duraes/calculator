function insert(element) {
    let firstNumber = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = `${firstNumber}${element}`
}

function clean() {
    document.getElementById('display').innerHTML = ''
}

function backspace() {
    let stringNumbers = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = stringNumbers.substring(0, stringNumbers.length - 1)
}

function verifyOperation(string) {

    let display = string

    // verification multiply
    if (
        display.indexOf("+", 0) == -1 &
        display.indexOf("-", 0) == -1 &
        display.indexOf("÷", 0) == -1
    ) {
        return "×"
    }

    // verification split
    else if (
        display.indexOf("+", 0) == -1 &
        display.indexOf("-", 0) == -1 &
        display.indexOf("×", 0) == -1
    ) {
        return "÷"
    }

    // verification sum
    else if (
        display.indexOf("÷", 0) == -1 &
        display.indexOf("-", 0) == -1 &
        display.indexOf("×", 0) == -1
    ) {
        return "+"
    }

    // verification subtract
    else if (
        display.indexOf("+", 0) == -1 &
        display.indexOf("÷", 0) == -1 &
        display.indexOf("×", 0) == -1
    ) {
        return "-"
    } else {

        document.write(NaN);

    }

}

function result() {
    let display = document.getElementById('display').innerText

    if (verifyOperation(display) == '+') {
        sum(display)
    }
    else if (verifyOperation(display) == '-') {
        subtract(display)
    }
    else if (verifyOperation(display) == '×') {
        multiply(display)
    }
    else if (verifyOperation(display) == '÷') {
        split(display)
    }

}
// Operations functions

function sum() {
    let display = document.getElementById('display').innerText
    let numbersList = display.split('+')
    let resultOperation = numbersList.map((item) => {
        return parseFloat(item)
    }).reduce((acc, cur) => acc + cur)
    document.getElementById('display').innerText = resultOperation
}

function subtract() {
    let display = document.getElementById('display').innerText
    let numbersList = display.split('-')
    let resultOperation = numbersList.map((item) => {
        return parseFloat(item)
    }).reduce((acc, cur) => acc - cur)
    document.getElementById('display').innerText = resultOperation
}

function split() {
    let display = document.getElementById('display').innerText
    let numbersList = display.split('÷')
    let resultOperation = numbersList.map((item) => {
        return parseFloat(item)
    }).reduce((acc, cur) => acc / cur)
    document.getElementById('display').innerText = resultOperation
}

function multiply() {
    let display = document.getElementById('display').innerText
    let numbersList = display.split('×')
    let resultOperation = numbersList.map((item) => {
        return parseFloat(item)
    }).reduce((acc, cur) => acc * cur)
    document.getElementById('display').innerText = resultOperation
}