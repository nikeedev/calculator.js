function percent(){
	let numbers = document.getElementById("numbers").value;
	let percent = document.getElementById("percent").value;
    let answer = document.getElementById("answer");	
	answer.value = percent * numbers / 100;
}
