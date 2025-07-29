const form = document.querySelector('form');
let result= document.querySelector('.result');
let msg = document.querySelector('.msg');

form.addEventListener('submit', function(e){
    e.preventDefault();
const weight = document.querySelector('.weight').value;
let height = document.querySelector('.height').value;
height= height*30.48;
const bmi =(weight/((height*height)/10000)).toFixed(2) ;

if(weight<0|| isNaN(weight)||weight==""){
    result.innerHTML="Invalid weight"
}
else if(height<0|| isNaN(height)||height==""){
    result.innerHTML="Invalid height"
}
else{
result.innerHTML=bmi;
}
if (bmi<18.6){
    msg.innerHTML="Underweight"
}
else if (bmi>=18.6&&bmi<=24.9){
    msg.innerHTML="Normal"
}
else if (bmi>=24.9){
    msg.innerHTML="Overweight"
}
})



