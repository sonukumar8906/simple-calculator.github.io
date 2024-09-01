
const buttons = document.querySelectorAll('.btn');
const in_put = document.querySelector('.input');

let string = "";
Array.from(buttons).forEach(button =>{
button.addEventListener('click', (e)=>{

    if(e.target.innerHTML == 'Ac'){
        string = "";
        in_put.value = string;
    }else if(e.target.innerHTML == 'Del'){
        string = string.substring(0, string.length - 1);
        in_put.value = string;
    }else if(e.target.innerHTML == '='){
        string = eval(string);
        in_put.value = string;
    }else{    
  string += e.target.innerHTML;
   in_put.value = string;
}
})
})
