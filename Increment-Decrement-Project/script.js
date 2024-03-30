const getvalue = document.querySelector('#output');

const increment = function(){
    let value =  parseInt (getvalue.innerText);
    value=value+1;
    getvalue.innerText= value;



};

const decrement = function(){
    let value = parseInt( getvalue.innerText);
    value = value -1;
    getvalue.innerText = value;
        


}