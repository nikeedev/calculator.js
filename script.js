function percent(){
	var numbers = document.getElementById("numbers").value;
	var percent = document.getElementById("percent").value;
    var answer = document.getElementById("answer");	
	answer.value = percent * numbers / 100;
}

function minus() {
	var number1 = parseFloat(document.getElementById("number3").value);
	var number2 = parseFloat(document.getElementById("number4").value);
	var answerplus = document.getElementById("answerplus");

	answerplus.value = number3 - number4;
}


function plus() {
	var number1 = parseFloat(document.getElementById("number3").value);
	var number2 = parseFloat(document.getElementById("number4").value);
	var answerplus = document.getElementById("answerplus");

	answerplus.value = number4 + number3;
}


function devis() {
	var number3 = parseFloat(document.getElementById("number5").value);
	var number4 = parseFloat(document.getElementById("number6").value);
	var answermulti = document.getElementById("answermulti");

	answermulti.value = number1 / number2;
}

function multi() {
	var number3 = parseFloat(document.getElementById("number5").value);
	var number4 = parseFloat(document.getElementById("number6").value);
	var answermulti = document.getElementById("answermulti");

	answermulti.value = number1 * number2;
}