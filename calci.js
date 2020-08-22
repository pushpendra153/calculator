window.addEventListener('load',bindEvent);
window.addEventListener('load',byDefault);
var isOperator=false;
var firstOperand=0;
var isPointPress=false;
var isResult=false;

function bindEvent(){
    //all numeric button
    document.querySelector('#btn1').addEventListener('click',print);
    document.querySelector('#btn2').addEventListener('click',print);
    document.querySelector('#btn3').addEventListener('click',print);
    document.querySelector('#btn4').addEventListener('click',print);
    document.querySelector('#btn5').addEventListener('click',print);
    document.querySelector('#btn6').addEventListener('click',print);
    document.querySelector('#btn7').addEventListener('click',print);
    document.querySelector('#btn8').addEventListener('click',print);
    document.querySelector('#btn9').addEventListener('click',print);
    document.querySelector('#btn0').addEventListener('click',print);
    document.querySelector('#btn00').addEventListener('click',print);
    //cancel button
    document.querySelector('#C').addEventListener('click',byDefault);
    //operators button
    document.querySelector('#plus').addEventListener('click',operator);
    document.querySelector('#subtract').addEventListener('click',operator);
    document.querySelector('#multiply').addEventListener('click',operator);
    document.querySelector('#divide').addEventListener('click',operator);
    document.querySelector('#equal').addEventListener('click',result);
    //ponit button
    document.querySelector('#point').addEventListener('click',point);
    //clear button
    document.querySelector('#clear').addEventListener('click',clear)
   //OFF button
   document.querySelector('#off').addEventListener('click',off);
}
//default function.....
function byDefault(){
    document.getElementById('textarea').value='0';
    isOperator=false;
    firstOperand=0;
    isPointPress=false;
    isResult=false;
}
//print function.....
function print(){
    if(isOperator===true)
    isOperator=false;
    if(isOperator===false)
    {
        var val=document.getElementById('textarea').value;
        if(val=='0')
        val='';
        document.getElementById('textarea').value=val+this.textContent;
        firstOperand=val+this.textContent;
    }
}
// operator functions.....
function operator(){
    if(isOperator===false)
       { 
            if(document.getElementById('textarea').value=='0' && this.textContent=='-')
            document.getElementById('textarea').value='-';
            else
           document.getElementById('textarea').value=firstOperand+this.textContent;
            firstOperand=firstOperand+this.textContent;
            if(isPointPress===true)
            isPointPress=false;
             isOperator=true;
       }
}
function result(){
    var result=eval(document.getElementById('textarea').value);
    document.getElementById('textarea').value=result;
    firstOperand=result;
    isPointPress=true;
    isResult=true;
}
//clear..... 
function clear(){
    isOperator=false;
    var lenOp=firstOperand.length;
    var c='';
    if(lenOp=='1' || isResult===true){
        isResult=false;
        byDefault();
    }
    else
    {
        for(var i=0;i<lenOp-1;i++)
        {
            c=c+firstOperand[i];
        }
        firstOperand=c;
        document.getElementById('textarea').value=firstOperand;
    }
}

//point.....
function point(){
    if(isPointPress===false)
    {
        document.getElementById('textarea').value=firstOperand+this.textContent;
        isPointPress=true;
    }
}
//off function.....
function off(){
    document.getElementById('textarea').value="";
    var allButton=document.querySelectorAll('button');
    for(var i=0;i<allButton.length;i++){
        allButton[i].disabled=true;
    }
}