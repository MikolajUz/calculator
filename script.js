function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function getInput(input){
    if(input==='clear'){
        ac();
    }
    if(input==='backspace'){
        c();
    }
    if(input==='equals'){
            equals();
    }
   
    if(input==='substract'){
        operator=input;
    }
    if(input==='multiply'){
        operator=input;
    }
    if(input==='divide'){
        operator=input;
    }
    if(input==='add'){
        operator=input;
    }
    if(input==='0' ||input==='1' ||input==='2' ||input==='3'||input==='4' ||input==='5' ||input==='6' ||input==='7' ||input==='8' ||input==='9' || input==='dot' ){
        
        a=a+input;
    }
}
function isNumber(input){
    return (input=='0' ||input=='1' ||input=='2' ||input=='3'||input=='4' ||input=='5' ||input=='6' ||input=='7' ||input=='8' ||input=='9')
}

function fullInputs(a,b,operator,operator2){
    if(a!=='' && b!=='' && operator!=='' && operator2!=='' ){
        console.log('funkcja do dzialania');
    }
}
function twoImputs(a,operator){
    if (a!=='' && operator!==''){
        b=a;
        a=''
        operator2=operator;
        operator='';
    }
}
/*function checkString(string2){
    let i=0;
    array=Array.from(string2);
    //console.log(array.length);
    

    while(i<array.length){
    
     if(isNumber(array[i])===true){
        //console.log('number');
        break;
     }
    i++;
    console.log('pierwszapetla');
    }
    console.log(i);
    
    while(i<array.length){
        if(isNumber(array[i])===false){
            break;
    }
    i++; 
    console.log(i);   
    console.log(array[i]);
    a=a+array[i];
    
    console.log('drugapetla');
    }
    /*
    while(isNumber(array[i])===false && i<=array.length){
        i++;
      
    }
    operator=array[i];
    while(isNumber(array[i])===true && i<=array.length){
        b=b+array[i];
      
    }
    //console.log(a);
    //console.log(b);
    //console.log(operator);


}
*/

function checkString(string2){
    a='';
    operator='';
    b='';
    
    array=Array.from(string2);
    
    for(i=0;i<array.length;i++){
        if(isNumber(array[i])===true){
            //a=a+array[i];
            console.log(i);
            for(i;i<array.length;i++){
                if(isNumber(array[i])===true){
                    a=a+array[i];
            }
            else{
                operator=array[i];
                for(i;i<array.length;i++){
                    if(isNumber(array[i])===false){
                        operator=array[i];
                    }
                    else{
                        //b=b+array[i];
                        for(i;i<array.length;i++){
                            if(isNumber(array[i])===true){
                            b=b+array[i];
                        }
                        else{
                            console.log('wykonaj dzialanie');
                        }
                    }
                }
            }
        }
    }
    }
}
}




var a='';
var b='';
var operator='';
var operator2='';
var string='';

const buttons=document.querySelectorAll('button');
const display=document.querySelector('display');
buttons.forEach(el=>el.addEventListener('click',event=>{
    string=string+el.id;
    //console.log(string);
    
    checkString(string);
    
    //console.log(el.id);
    //getInput(el.id);
    //fullInputs(a,b,operator,operator2);
    //twoImputs(a,operator);
    //console.log(typeof(el.id));
    //display.textContent=display.textContent+el.id;
    //console.log(a);
    //console.log(operator);
}));
