console.log("Hello World <3")


function insert(number) {
    let result = document.querySelector(".calculator-result").textContent;
    document.querySelector(".calculator-result").textContent = result + number

}

function clean() {
    document.querySelector(".calculator-result").textContent = ''
}

function backspace() {
    let result = document.querySelector(".calculator-result").textContent
    document.querySelector(".calculator-result").textContent = result.slice(0, -1);
}

function calculate() {
    let result = document.querySelector(".calculator-result").textContent
    document.querySelector(".calculator-result").textContent = eval(result)
}