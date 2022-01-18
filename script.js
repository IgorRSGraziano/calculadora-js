//Variáveis e funções

const calculatorKeysNumber = document.querySelectorAll('.calculator-keys input')


//Insere um número na área de resultado para depois realizar alguma operação com ele
function insert(number) {
    let result = document.querySelector(".calculator-result").textContent;
    document.querySelector(".calculator-result").textContent = result + number
}

//Limpa todos caracteres da área de resultado
function clean() {
    document.querySelector(".calculator-result").textContent = ''
}


//Limpa o útlimo caractere escrito na calculadora 
function backspace() {
    let result = document.querySelector(".calculator-result").textContent
    document.querySelector(".calculator-result").textContent = result.slice(0, -1);
}

//Função que verifica o valor escrito pelo usuario, e altera ele para o resultado
function calculate() {
    let account = document.querySelector(".calculator-result");
    const result = document.querySelector(".calculator-result").textContent = eval(account.textContent)

    //Reduz o tamanho da fonte em caso de dizimas periódicas

    result.toString().length > 15 ? account.style.fontSize = '2.5rem' : null

    return result
}

//Execução


//Verifica qual tecla foi pressionada, caso seja de alguma função irá executar a mesma, caso seja de algum número, irá inserir ele
calculatorKeysNumber.forEach((calculatorKey) => {
    calculatorKey.addEventListener('click', (e) => {
        if (e.target.value === "=") {
            calculate()
        } else if (e.target.value === "C") {
            clean()
        } else if (e.target.value === "<") {
            backspace()
        } else {
            insert(e.target.value)
        }
    })
})


//16 números