
function inputReturn (id,newValue) {
    let inputElement = document.getElementById(id);
    let inputValue = document.getElementById(id).value;
    let totalInput;
    
    if(newValue === "C"){
        inputElement.value = '';
    }else if (newValue === "<") {
        let splitArray = inputValue.split('');
        let popArray = splitArray.pop();
        inputElement.value = splitArray.join('');
    }
    else {
        totalInput  = inputValue+ newValue;
        inputElement.value = totalInput;
    }
}




document.getElementById("calculator-digits").addEventListener("click",(e) => {
    const digit = e.target.innerText;
    inputReturn ("calculator-input",digit);
})