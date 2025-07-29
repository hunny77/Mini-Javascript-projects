let box = document.querySelector('.clock');
setInterval(function(){
let date = new Date();
box.innerHTML=date.toLocaleTimeString();
},1000)
