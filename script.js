
const calculatorScreen = document.querySelector('.calculator-screen')
let prev='',op='',curr='0' 


const updateScreen = (num) => {
    calculatorScreen.value = num
}

const num = document.querySelectorAll('.number')

num.forEach((n) => {
    n.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(curr)
    })
})


const inputNumber = (n)=>{
    if(curr==='0'){
        curr = n
    }else{
        curr += n
    }
}

const operator = document.querySelectorAll('.operator')

operator.forEach((op)=>{
    op.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})
let calcOp 
const inputOperator = (op)=>{
    prev = curr
    calcOp = op
    curr = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click",(event)=>{
 calculate()
 updateScreen(curr)
})

const calculate = ()=>{
    let res = 0
    switch (calcOp) {
        case "+": res = (parseFloat(prev)*10 + parseFloat(curr)*10)/10
            
            break
    
        case "-": res = prev - curr
            break
        case "*": res = prev*curr
            break
        case "/": res = prev/curr
            break     
            
          
    }
    calcOp = ''
    curr = res
}
const clear = ()=>{
    prev = ''
    calcOp = ''
    curr = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener("click",(event)=>{
    clear()
    updateScreen(curr)
})

const inputDecimal = (dot) => {
    if(curr.includes('.')){
        return
    }

    curr+= dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener("click",(event)=>{
    inputDecimal(event.target.value)
    updateScreen(curr)
})
