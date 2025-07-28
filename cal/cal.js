let string ="";
let store=0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='MRC'){
            // string=string.slice(0,-1);
            // document.querySelector('input').value=string;
            string = eval(store);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M+'){
            document.querySelector('input').value=string;
            store = eval(string)+store;
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M-'){
            document.querySelector('input').value=string;
            store = eval(string)+store;
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string=""
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string =string+e.target.innerHTML;
        document.querySelector('input').value =string;
}})
})