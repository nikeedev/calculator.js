function percent(){
	var numbers = document.getElementById("numbers").value;
	var percent = document.getElementById("percent").value;
    var answer = document.getElementById("answer");	
	answer.value = percent * numbers / 100;
}

function minus() {
	var number1 = parseFloat(document.getElementById("number1").value);
	var number2 = parseFloat(document.getElementById("number2").value);
	var answerplus = document.getElementById("answerplus");

	answerplus.value = number1 - number2;
}


function plus() {
	var number1 = parseFloat(document.getElementById("number1").value);
	var number2 = parseFloat(document.getElementById("number2").value);
	var answerplus = document.getElementById("answerplus");

	answerplus.value = number1 + number2;
}


function devis() {
	var number3 = parseFloat(document.getElementById("number3").value);
	var number4 = parseFloat(document.getElementById("number4").value);
	var answermulti = document.getElementById("answermulti");

	answermulti.value = number3 / number4;
}

function multi() {
	var number3 = parseFloat(document.getElementById("number3").value);
	var number4 = parseFloat(document.getElementById("number4").value);
	var answermulti = document.getElementById("answermulti");

	answermulti.value = number3 * number4;
}

function findSquare() {
	var number5 = parseFloat(document.getElementById("number5").value);
	var answersquare = document.getElementById("answersquare");

	answersquare.value = Math.sqrt(number5);
}



