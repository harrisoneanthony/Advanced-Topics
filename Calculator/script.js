var displayDiv = document.querySelector("#display");
displayDiv.innerText = "Some new value";

var x = ''
var opp = ''
var y = ''

function press(element){
    if (opp == ''){
        x += element;
        displayDiv.innerText =  x;
    } 
    else if (opp == "/" || opp == "*" || opp == "-" || opp == "+") {
        y += element;
        displayDiv.innerText = y;
    }
}

function setOP(element){
    opp = element;
    displayDiv.innerText = opp
}

function clr(){
    x = ''
    y = ''
    opp = ''
    displayDiv.innerText = "Some new value";
}

function calculate(){
    if (opp =="/"){
        var calc = Number(x) / Number(y);
    } 
    else if (opp =="*") {
        var calc = Number(x) * Number(y);
    }
    else if (opp =="-") {
        var calc = Number(x) - Number(y); 
    }
    else if (opp =="+"){
        var calc = Number(x) + Number(y);
    } 
    displayDiv.innerText = calc;
    x = calc
    y = ''
    opp = ''
}

