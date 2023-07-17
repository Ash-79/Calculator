var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var operand1 = null;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        
        var pressed = this.getAttribute('data-value');
        var text = display.textContent;

        if (isOperator(pressed)) {
            operator = pressed;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if(pressed == "AC"){
            display.textContent = "";
        }
        else if(pressed == "+/-"){
            operand1 = -1 * parseFloat(text);
            display.textContent = operand1;
        }
        else if(pressed == "%"){
            operand1 = parseFloat(text) / 100;
            display.textContent = operand1;
        }
        else if (pressed == ".") {
            if(text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }
        else if(pressed == "="){
            operand2 = parseFloat(text);
            var ans = eval(operand1+" "+operator+" "+operand2);
            display.textContent = ans;
            operand1 = ans;
            operand2 = null;
            operator = null;
        }
        else
            display.textContent += pressed;
    });
}