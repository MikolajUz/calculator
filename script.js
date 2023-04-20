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

const ac=document.querySelector('button');
ac.addEventListener('click',clicked);

const c=document.querySelector('button');
c.addEventListener('click',clicked);

function clicked(){
    console.log('clicked');
}