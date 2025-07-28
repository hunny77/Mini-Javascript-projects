const buttons = document.querySelectorAll('.button');
const body= document.querySelector("body");
let mid = document.getElementById("mid");
let text = mid.querySelector("h2")
let def_text=text.innerHTML;
buttons.forEach(function(button){
    button.addEventListener('click',e=>{
        e.target.style.borderRadius="190px";
        if(e.target.id=="grey"){
            mid.style.backgroundColor=e.target.id;
            text.innerHTML=`Yeah! I have turned ${e.target.id}`;
            
        }
        if(e.target.id=="red"){
            mid.style.backgroundColor=e.target.id;
            text.innerHTML=`Yeah! I have turned ${e.target.id}`;
            
        }
        if(e.target.id=="blue"){
            mid.style.backgroundColor=e.target.id;
            text.innerHTML=`Yeah! I have turned ${e.target.id}`
        }
        if(e.target.id=="purple"){
            mid.style.backgroundColor=e.target.id;
            text.innerHTML=`Yeah! I have turned ${e.target.id}`
        }
        if(e.target.id=="reset"){
            mid.style.backgroundColor="white";
            text.innerHTML=def_text;
            buttons.forEach(button=>{
            button.style.borderRadius="";
            })
            
        }
        
    
    })
})
