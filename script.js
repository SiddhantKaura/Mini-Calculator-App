var calculatorDisplay = document.getElementsByClassName("display");
var options = document.getElementsByClassName("button");
var op2;

var operators = ['+','-','/','*'];

function rectifyEnd(){
    let last = op2.length-1;
    let breaked = false;
    while(true){
        for(let i = 0;i < operators.length;i++){
            if(op2[last] == operators[i]){
                console.log("yes");
                op2 = op2.substr(0,op2.length-1);
                last = op2.length-1;
            }
            else{
                breaked = true;
                break;
            }
        }
        if(breaked == true){
            break;
        }
    }

}

function factorial(temp){
    if(temp == 0){
        return 1;
    }

    return factorial(temp-1)*temp;
}

function clickHandler(){
    var inp = this.getAttribute('data-val');

    if((inp >= 0 && inp <= 9) || inp == 'sqrt' || inp == 'cbrt' || inp == '(' || inp == 'sin' || inp == 'cos' || inp == 'tan' || inp == 'log'){
        if(calculatorDisplay[0].innerHTML == "0"){
            calculatorDisplay[0].innerHTML = inp;
        }
        else{
            if(calculatorDisplay[0].innerHTML.length < 9)
            calculatorDisplay[0].innerHTML += inp;
        }
        
    }

    else if(inp == '='){
        op2 = (calculatorDisplay[0].innerHTML);
        
        if(op2[op2.length-1] == '!' && op2.length == 2 && op2[0] >= 0 && op2[0] <= 9){
            op2 = factorial(parseInt(op2.substr(0,op2.length-1)));
        }

        else if(op2.substr(0,4) == "sqrt"){
            if(op2.length > 4){
                let temp = "sqrt";
                if(op2[4] != '('){
                   temp += '(';
                   temp += op2.substr(4,op2.length-4);
                   if(op2[op2.length-1] != ')' && temp[temp.length-1] != ')'){
                    temp += ')';
                   }
                   op2 = temp;
                }
                

                console.log(temp);
                
                let sqrtElement = op2.substr(5,op2.length-5-1);
                console.log(sqrtElement);
                op2 = Math.sqrt(parseFloat(sqrtElement));
            }
            else{
               op2 = undefined;
            }

        }

        else if((op2.substr(0,4)) == "cbrt"){
            if(op2.length > 4){
                let temp = "cbrt";
                if(op2[4] != '('){
                   temp += '(';
                   temp += op2.substr(4,op2.length-4);
                   if(op2[op2.length-1] != ')' && temp[temp.length-1] != ')'){
                    temp += ')';
                   }
                   op2 = temp;
                }
                

                console.log(temp);
                
                let cbrtElement = op2.substr(5,op2.length-5-1);
                console.log(cbrtElement);
                op2 = Math.cbrt(parseFloat(cbrtElement));
            }
            else{
               op2 = undefined;
            }

        }

        else if((op2.substr(0,3)) == 'sin' || (op2.substr(0,3)) == 'cos' || (op2.substr(0,3)) == 'tan' || (op2.substr(0,3)) == 'log'){
            let substring = op2.substr(0,3);
            let angularElement = op2.substr(4,op2.length-4-1);
            if(substring == 'sin'){
               op2 = Math.sin(angularElement*(Math.PI/180));
            }
            if(substring == 'cos'){
               op2 = Math.cos(angularElement*(Math.PI/180));
            }
            if(substring == 'tan'){
               op2 = Math.tan(angularElement*(Math.PI/180));
            }
            if(substring == 'log'){
                op2 = Math.log(angularElement);
            }
        }

        console.log(op2);
        rectifyEnd(op2);
        console.log(op2);
        var result = eval(op2);
        calculatorDisplay[0].innerHTML = result; 
    }

    else if(inp == 'AC'){
        calculatorDisplay[0].innerHTML = "0";
    }

    else if(inp == 'Clear'){
        let tempString = calculatorDisplay[0].innerHTML;
        tempString = tempString.substr(0,tempString.length-1);
        if(tempString.length == 0){
          tempString = "0";
        }
        calculatorDisplay[0].innerHTML = tempString
    }
    
    else{
        calculatorDisplay[0].innerHTML += inp;
    }
}

for(var i = 0;i < options.length;i++){
    options[i].addEventListener('click',clickHandler);
}

