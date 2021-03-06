
let numbersBtn = document.querySelectorAll('[data-number]');
let operationsBtn = document.querySelectorAll('[data-operation]');
let delBtn = document.querySelector('[data-delete]');
let bodyTheme = document.querySelector('[bodyTheme]')
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
let btnHovers = document.querySelectorAll('[btn_hover]');
let title = document.querySelector('.title');
let createDelHover = document.querySelector('.delt');

let screen = document.querySelector('#display');
let calButtons = Array.from(document.querySelectorAll('[adapt]'));

calButtons.map(button=>{
    button.addEventListener('click',(e)=>{
       switch(e.target.innerText){
           case 'RESET':
               screen.innerText=""
               break;
            case 'DEL':
                screen.innerText = screen.innerText.slice(0,-1)
                break;
            case '=':
                try {
                screen.innerText = eval(screen.innerText);
                    
                } catch (error) {
                    screen.innerText='Error!'
                }
                break;    
           default:
               screen.innerText +=e.target.innerText
       }
    })
})




let moveBy=1.3;
let set=0;



themeContainer.addEventListener('click',(e)=>{

    if(e.offsetX <= 11 && e.offsetX >=4){
        
        // document.body.style.backgroundColor="#3a4663";
        bodyTheme.classList.add('defaultColor');
            //    themeBtn.style.backgroundColor="#d03f2f";
              ball.style.left= set +'rem';
              ball.style.backgroundColor="#d03f2f"
               ouputContainer.style.backgroundColor='#181f33';
               
               headerFontColor.forEach(item=>{
                   item.style.color="#fff"
               })
               innerKeys.style.backgroundColor="#242d44"
               console.log(e.offsetX)
              
               btnHovers.forEach(item=>{
                item.classList.add('hov')
               })

               allClearBtn.classList.remove('select1')
               delBtn.classList.remove('select1')
               equalsBtn.classList.remove('equalBtn')

               moveColor.forEach(item=>{
                item.classList.remove('move')
                })

               allClearBtn.classList.remove('move_more');
               delBtn.classList.remove('move_more')    
               equalsBtn.classList.remove('move_more_eq');
               createDelHover.classList.add('createDelBtn')
        
    }



    else if(e.offsetX <=43 && e.offsetX >=30){

        bodyTheme.classList.add('secondTheme');
        bodyTheme.classList.remove('defaultColor');
        bodyTheme.classList.remove('thirdTheme');
        
        
                // document.body.style.backgroundColor="#e6e6e6";
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


                btnHovers.forEach(item=>{
                    item.classList.add('hov')
                })



           }

    else if(e.offsetX <=62 && e.offsetX >=49){
        bodyTheme.classList.remove('defaultColor');
        bodyTheme.classList.remove('secondTheme');
        bodyTheme.classList.add('thirdTheme');
        // document.body.style.backgroundColor="#180c2a";
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

        btnHovers.forEach(item=>{
            item.classList.remove('hov')
        })
        btnHovers.forEach(item=>{
            item.classList.add('hovers')
        })

   }

        
})

let firstBackground="#3a4663;"
let firstKeys="#242d44;"

let secondBackground="#e6e6e6"
let secondKeys="#d2cdcd"

let thirdBackground="#180c2a"
let thirdKeys="#1f1236"



function reload(){
    btnHovers.forEach(item=>{
        item.classList.add('hov')
    })

    // delBtn.classList.add('loadHover') 
}



// document.addEventListener('mouseenter',(e)=>{
//    if(document.body.backgroundColor =firstBackground){
//        btnHovers.forEach(item=>{
//            item.classList.add('hovers')
//        })
//    }else if(document.body.backgroundColor !== secondBackground){
//        btnHovers.forEach(item=>{
//            item.classList.add('range')
//            item.classList.remove('hovers')
//        })
//    }else if(document.body.backgroundColor != thirdBackground){
//        btnHovers.forEach(item=>{
//            item.classList.add('kush')
//        })
//    }

//    return
// })



















