function percent(){
	var numbers = document.getElementById("numbers").innerHTML;
	var percent = document.getElementById("percent").innerHTML;
    var answer = document.getElementById("answer");	
	answer.innerHTML = percent * numbers / 100;
}

function minus() {
	var number1 = parseFloat(document.getElementById("number1").innerHTML);
	var number2 = parseFloat(document.getElementById("number2").innerHTML);
	var answerplus = document.getElementById("answerplus");

	answerplus.innerHTML = number1 - number2;
}



function plus() {
	var number1 = parseFloat(document.getElementById("number1").innerHTML);
	var number2 = parseFloat(document.getElementById("number2").innerHTML);
	var answerplus = document.getElementById("answerplus");

	answerplus.innerHTML = number1 + number2;
}


function devis() {
	var number3 = parseFloat(document.getElementById("number3").innerHTML);
	var number4 = parseFloat(document.getElementById("number4").innerHTML);
	var answermulti = document.getElementById("answermulti");

	answermulti.innerHTML = number3 / number4;
}

function multi() {
	var number3 = parseFloat(document.getElementById("number3").innerHTML);
	var number4 = parseFloat(document.getElementById("number4").innerHTML);
	var answermulti = document.getElementById("answermulti");

	answermulti.innerHTML = number3 * number4;
}

function findSquare() {
	var number5 = parseFloat(document.getElementById("number5").innerHTML);
	var answersquare = document.getElementById("answersquare");

	answersquare.innerHTML = Math.sqrt(number5);
}



