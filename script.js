class Calculator {
    constructor(prevOperand,currentOperand){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if (this.currentOperand === "") return
        if (this.previousOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+': 
                computation = prev + current
                break
            case '-': 
                computation = prev - current
                break  
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev/current
                break
            default: 
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }

    updateDisplay(){
        this.previousOperandTextElement.innerText = this.previousOperand
        if (this.operation != null){
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        }
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.value)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})



// dark mode/light  mode
const sun = document.querySelector('.fa-sun')
const moon = document.querySelector('.fa-moon')

sun.addEventListener('click', ()=> {
    sun.style.color = '#272b33'
    moon.style.color = "#707378"
    lightmode()
})

moon.addEventListener('click', ()=> {
    moon.style.color = '#cfcfcf'
    sun.style.color = "#707378"
    darkmode()
})

function lightmode(){
    document.documentElement.style.setProperty('--black', '#ffffff');
    document.documentElement.style.setProperty('--toggle_icon', '#22252d');
    document.documentElement.style.setProperty('--toggle_container', '#f9f9f9');
    document.documentElement.style.setProperty('--real_white', '#22252d');
    document.documentElement.style.setProperty('--dark_gray', '#f3f3f3');
    document.documentElement.style.setProperty('--gray', '#f9f9f9');
    
}

function darkmode(){
    document.documentElement.style.setProperty('--black', '#22252d');
    document.documentElement.style.setProperty('--toggle_icon', '#707378');
    document.documentElement.style.setProperty('--toggle_container', '#292d36');
    document.documentElement.style.setProperty('--real_white', '#fff');
    document.documentElement.style.setProperty('--dark_gray', '#272b33');
    document.documentElement.style.setProperty('--gray', '#292d36');
}
