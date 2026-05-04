let inp = document.querySelector('.number-input');
let result =document.querySelector('.result');
let btn =document.querySelector('.sbtn');
let container =document.querySelector('form');
let level =document.querySelector('.level');

let levelcount=level.value;
console.log(levelcount);

if(levelcount==0){
   btn.disabled=true;
}
let number = Math.floor( Math.random()*levelcount)+1;
level.addEventListener('change',()=>{
   btn.disabled=false;
   levelcount=level.value;
   number = Math.floor( Math.random()*levelcount)+1;
})

let count =10;
let counter= document.createElement("h1");
container.append(counter);
 counter.textContent=`you have only ${count}  attempt`;
function counterr(){
   counter.textContent=`you have only ${count}  attempt`;
}
console.log(number);


btn.addEventListener('click',(e)=>{
   e.preventDefault();
    
   count--;
   counterr();
  
   if(count<1){
      btn.disabled=true;
      counter.textContent="Game Over! Number was " + number;
   }
   
   
    result.style.display="initial";
   if(inp.value>number){
    result.textContent=" You Entred To High"
   }
   if(inp.value<number){
    result.textContent="You Entred To Low"
   }
   if(inp.value==number){
    result.textContent="You Win The Number is "+number;
    counter.textContent=` Great win in ${10-count} counts`
   }
})





