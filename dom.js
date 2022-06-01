class Calculator{

    constructor(previousTextElement,currentTextElement){
        this.previousTextElement=previousTextElement;
        this.currentTextElement=currentTextElement;
        this.clear();
    }
  
    clear(){
       this.previousOperand = '';
       this.currentOperand  =  '';
       this.operation = undefined;
    }
  
    delete(){
      this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
  
   appendText(number){
       if(number === '.' && this.currentOperand.includes('.'))return
       this.currentOperand= this.currentOperand.toString() + number.toString();
  
   }

   chooseOperation(operation){
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){
        this.compute();
    }
    this.operation = operation;
    this.previousOperand=this.currentOperand;
    this.currentOperand=''
   }


   compute(){
   let computation;

   let prev = parseFloat(this.previousOperand);
   let current = parseFloat(this.currentOperand);

   switch(this.operation){
       case '+':
           computation = prev + current
           break;

        case '-':
            computation = prev -current
            break;
        
        case '*':
            computation = prev * current
            break;

        case '/':
            computation = prev /current
            break;
        default:
            return;
   }

   this.currentOperand=computation;
   this.operation=undefined;
   this.previousOperand=''
}


  
   updateText(){
       this.currentTextElement.innerHTML=this.currentOperand;
       this.previousTextElement.innerHTML=this.previousOperand;
   }


  
  }


let numbersBtn = document.querySelectorAll('[data-number]');
let operationsBtn = document.querySelectorAll('[data-operation]');
let delBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-allClear]');
let equalsBtn= document.querySelector('[data-equals]');
let previousTextElement = document.querySelector('[data-previous]');
let currentTextElement = document.querySelector('[data-current]');


let calculator = new Calculator(previousTextElement,currentTextElement)


numbersBtn.forEach(item=>{
    item.addEventListener('click',()=>{
         calculator.appendText(item.innerHTML);
         calculator.updateText();
        
    })
})


operationsBtn.forEach(operation=>{
    operation.addEventListener('click',()=>{
        calculator.chooseOperation(operation.innerHTML);
        calculator.updateText();
    })
})

equalsBtn.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateText();
})

allClearBtn.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateText();
})


delBtn.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateText();
})