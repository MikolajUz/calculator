function add(a,b){
    
    return +(Number(a)+Number(b)).toFixed(3);
}
function substract(a,b){
    return +(a-b).toFixed(3);
}
function multiply(a,b){
    return +(a*b).toFixed(3);
    
}
function divide(a,b){
  
    return +(a/b).toFixed(3);
    
}

function isNumber(input){
    return (input=='0' ||input=='1' ||input=='2' ||input=='3'||input=='4' ||input=='5' ||input=='6' ||input=='7' ||input=='8' ||input=='9')
}




function checkString(string2){
    a='';
    operator='';
    b='';
    array=Array.from(string2);
    let t='n';          
    
    for(i=0;i<array.length;i++){
        if(isNumber(array[i])===true ){
            for(i;i<array.length;i++){
                if(isNumber(array[i])===true || array[i]==='.'){    // checks if first button was operation and then assign to 2nd variable
                    if(a=='0' && operator!==''){
                        b=b+array[i];

                    }else{
                        //if()
                        a=a+array[i];
                    }
                    if(a.slice(0,1)=='0' && a.length>1 && a.slice(1,2)!=='.' ){   // protects displaying 0 before number like. 04566
                        a=a.slice(1);
                    }
            }
            
            else{
                operator=array[i];
                
                for(i;i<array.length;i++){
                    if(isNumber(array[i])===false && array[i]!=='.'){
                        operator=array[i];
                    }
                    else{
                        for(i;i<array.length;i++){
                            if(isNumber(array[i])===true || array[i]==='.'){
                                if(array[i]==='.' && b===''){
                                
                                    array[i]='0.';
                                }
                                
                                
                                if(b!=='0'){
                                    
                            b=b+array[i];
                                }
                                else{
                                    if(array[i-1]==='0' && array[i]==='.'){
                                        b='0.';
                                    }
                                    else{
                                    b=array[i];
                                    }
                                }
                                
                        }
                        else{
                            
                               
                            if(b==0 && operator=='/'){
                                alert('End of World, choose not 0');
                                string=string.slice(0,-1);
                                console.log(string);
                                
                            } else{
                            showResult();
                            return;
                            }
                        }
                    }
                }
            }
        }
       
    }
    }
    else{
        if(array[0]==='-'){
            a='-';

        }
        else{
        if(array[0]==='.'){
            a='0.';
        }
        else{
        a='0';
        string='0'+string;
        if(array[i]!=='.'){
        operator=array[i];
        
        }
        }
    }
    }
}

disableDot();
    
}


function popDisplay(){
    if(a.length>7){a=Number(a).toExponential(3);}
    if(b.length>7){b=Number(b).toExponential(3);}
    display.textContent=a+operator+b;
}
function clearAll(){
   
    document.getElementById('.').addEventListener('click',buttonListener);   
    document.getElementById('.').classList.remove("disabled");
    a='';
    b='';
    operator='';
    string='';
    display.textContent='0';
    
}

function removeDot(){
  
    array=Array.from(a.toString());
    
    if(string.slice(-1)!=='='){
        document.getElementById('.').addEventListener('click',buttonListener);
        document.getElementById('.').classList.remove("disabled");
        
    }
    if(string.slice(-1)==='='){
    array.forEach(element=>{
        if(element==='.'){
            document.getElementById('.').removeEventListener('click',buttonListener);
            document.getElementById('.').classList.add("disabled");
        }
    })
}
}


function showResult(){
    
    
    switch (operator) {
        case 'x':
            a=multiply(a,b);
            if(a.toString().length>7){a=Number(a).toExponential(3);}
            removeDot();
            b='';
            if(string.slice(-1)==='='){
                operator='';
                string=a;
               }else{
            operator=string.slice(-1);   
            string=a+operator;      
               }
            
            
            break;

        case '/':

                        a=divide(a,b); 
                        if(a.toString().length>7){a=Number(a).toExponential(3);}
                        removeDot();
                        b='';
                        if(string.slice(-1)==='='){
                            operator='';
                            string=a;
                        }else{
                        operator=string.slice(-1);   
                        string=a+operator;      
                        }
                    
            break;
        case '-':
            a=substract(a,b);
            if(a.toString().length>7){a=Number(a).toExponential(3);}
            removeDot();
            b='';
            if(string.slice(-1)==='='){
                operator='';
                string=a;
               }else{
            operator=string.slice(-1);   
            string=a+operator;      
               } 
            break;
        case '+':
            a=add(a,b);
            if(a.toString().length>7){a=Number(a).toExponential(3);}
            removeDot();
            b='';
            if(string.slice(-1)==='='){
                operator='';
                string=a;
               }else{
            operator=string.slice(-1);   
            string=a+operator;      
               } 
            break;
        case '=':
            a=b;
            b='';
            operator=string.slice(-1);
            string=a+operator;
    }
}
function disableDot(){
    array=Array.from(a);
    array2=Array.from(b);
    
    array.forEach((element)=>{
    if((element==='.') && (operator==='')){
            document.getElementById('.').removeEventListener('click',buttonListener);
            document.getElementById('.').classList.add("disabled");
            
        }
    if((element==='.') && (operator!=='')){
            document.getElementById('.').addEventListener('click',buttonListener);
            document.getElementById('.').classList.remove("disabled");
        }
        });
    
    
    array2.forEach((element)=>{
    if(element==='.'){
            document.getElementById('.').removeEventListener('click',buttonListener);
            document.getElementById('.').classList.add("disabled");
        }
        });
        
    }



var a='';
var b='';
var operator='';
var string='';

function buttonListener(){
    if(this.id!=="Delete" && this.id!=="Backspace"){
        string=string+this.id;
        checkString(string);
        popDisplay();
        }
        else{
            if(this.id==="Delete"){
                clearAll();
            }
            else{
                document.getElementById('.').addEventListener('click',buttonListener); 
                document.getElementById('.').classList.remove("disabled");
                string=string.toString().slice(0,-1) ;                 
                display.textContent=display.textContent.slice(0,-1);
                checkString(string);
            }
    
        }
}

function buttonClick(e){                 // keyboard handler
    if (e.key==='Enter'){
        document.getElementById('=').click();
        document.getElementById('=').classList.add('active')
        setTimeout(() => { document.getElementById('=').classList.remove('active');},100);
    }
    else{
    document.getElementById(`${e.key}`).click();
    document.getElementById(`${e.key}`).classList.add('active');
    setTimeout(() => { document.getElementById(`${e.key}`).classList.remove('active');},100);
    }
    
}


const buttons=document.querySelectorAll('button');
const display=document.querySelector('display');

buttons.forEach((el)=>el.addEventListener('click', buttonListener));
window.addEventListener('keydown', buttonClick);



  
    



