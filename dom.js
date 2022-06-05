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
        
        case 'x':
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

//   getDisplayNumber(number){
//       let stringNumber = number.toString();
//       let integerDigits = parseFloat(stringNumber.split('.')[0]);
//       let decimalDigits = stringNumber.split('.')[1];

//       let integerDisplay

//       if(isNaN(integerDigits)){
//           integerDigits=''
//       }else{
//           integerDisplay=integerDigits.toLocaleString('en',{maximumFractionDigits:0})
//       }

//       if(decimalDigits != null){
//           return `${integerDisplay}.${decimalDigits}`
//       }else{
//           return integerDisplay
//       }
//   }

  
   updateText(){
       this.currentTextElement.innerText= this.currentOperand;
       if(this.operation != null){
           this.previousTextElement.innerText=`${this.previousOperand} ${this.operation}`;
           
       }
       else{
           this.previousTextElement.innerText=''
       }
    
   }
  
  }


let numbersBtn = document.querySelectorAll('[data-number]');
let operationsBtn = document.querySelectorAll('[data-operation]');
let delBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-allClear]');
let equalsBtn= document.querySelector('[data-equals]');
let previousTextElement = document.querySelector('[data-previous]');
let currentTextElement = document.querySelector('[data-current]');
let themeContainer = document.querySelector('.outer');
let themeBtn = document.querySelector('#btn_theme')
let container = document.querySelector('.calculator-container');
let ouputContainer = document.querySelector('#showcase');
let headerFontColor = document.querySelectorAll('[data-color]')
let innerKeys = document.querySelector('.calculator_keys')
let allButtons = document.querySelectorAll('[all_button ]');
let moveColor = document.querySelectorAll('[edit_button]');
let ball = document.querySelector('[capture_ball]');

let moveBy=1.3;
let set=0;


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


themeContainer.addEventListener('click',(e)=>{

    if(e.offsetX <= 11 && e.offsetX >=5){
        
        document.body.style.backgroundColor="#3a4663";
            //    themeBtn.style.backgroundColor="#d03f2f";
              ball.style.left= set +'rem';
              ball.style.backgroundColor="#d03f2f"
               ouputContainer.style.backgroundColor='#242D44';
               
               headerFontColor.forEach(item=>{
                   item.style.color="#fff"
               })
               innerKeys.style.backgroundColor="#242d44"
               console.log(e.offsetX)
              
               allClearBtn.classList.remove('select1')
               delBtn.classList.remove('select1')
               equalsBtn.classList.remove('equalBtn')

               moveColor.forEach(item=>{
                item.classList.remove('move')
            })
               allClearBtn.classList.remove('move_more');
               delBtn.classList.remove('move_more')
       
               equalsBtn.classList.remove('move_more_eq');
        
    }

    else if(e.offsetX <=43 && e.offsetX >=30){

                document.body.style.backgroundColor="#e6e6e6";
                // themeBtn.style.backgroundColor="#FF8A38";
                ball.style.left= moveBy +'rem';
                ball.style.backgroundColor="#FF8A38"
                ouputContainer.style.backgroundColor='#eee';
        
                headerFontColor.forEach(item=>{
                    item.style.color="#36362C"
                })
               
                innerKeys.style.backgroundColor="#d2cdcd"
                
                allClearBtn.classList.add('select1')
                delBtn.classList.add('select1')
                equalsBtn.classList.add('equalBtn')
              
                allButtons.forEach(item=>{
                    item.style.backgroundColor="#e5e4e1"
                })
             
                moveColor.forEach(item=>{
                    item.classList.remove('move')
                })

                allClearBtn.classList.remove('move_more');
                delBtn.classList.remove('move_more')

                equalsBtn.classList.remove('move_more_eq')
                console.log(e.offsetX)
           }

    else if(e.offsetX <=62 && e.offsetX >=49){
        document.body.style.backgroundColor="#180c2a";
        // themeBtn.style.backgroundColor="#60dfd0";
        ball.style.left=moveBy+ 1.5+ 'rem';
        ball.style.backgroundColor='#60dfd0'
        ouputContainer.style.backgroundColor='#1f1236';

        headerFontColor.forEach(item=>{
            item.style.color="#ffe53d"
        })
       
        innerKeys.style.backgroundColor="#1f1236";
     
        moveColor.forEach(item=>{
            item.classList.add('move')
        })

        allClearBtn.classList.add('move_more');
        delBtn.classList.add('move_more')

        equalsBtn.classList.add('move_more_eq');
   }

           else{
               console.log(e.offsetX)
           }


})


// ball.addEventListener('click',(e)=>{
//     if(e.offsetX <=10 && e.offsetX >=5){

//         ball.style.left=moveBy+'rem';
//         ball.style.backgroundColor="#FF8A38"
//     }else{
//         console.log(e.offsetX+'too bad keep going')
//     }
// })



