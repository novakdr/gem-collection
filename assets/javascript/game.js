$(document).ready(function() {

	//GLOBAL VARIABLES
	var randomNumber = Math.floor(Math.random() * 160) + 19;
	console.log(randomNumber);
	$('#random-number').html(randomNumber);

	var userGuess = 0;
	var totalScore = 0;
	var crystalNumberOne = Math.floor(Math.random() * 12) + 1;
	var crystalNumberTwo = Math.floor(Math.random() * 12) + 1;
	var crystalNumberThree = Math.floor(Math.random() * 12) + 1;
	var crystalNumberFour = Math.floor(Math.random() * 12) + 1;
	var wins = 0;
	var losses = 0;

	$('#wins').html(wins);
	$('#losses').html(losses);
	$('#total-score').html(totalScore);

	
	//GAME FUNCTIONS
	//GAME RESET
	function gameReset(){

		//NUMBER RESETS
		randomNumber = Math.floor(Math.random() * 160) + 19;
		console.log(randomNumber);
		$('#random-number').html(randomNumber);

		var userGuess = 0;
		totalScore = 0;
		crystalNumberOne = Math.floor(Math.random() * 12) + 1;
		crystalNumberTwo = Math.floor(Math.random() * 12) + 1;
		crystalNumberThree = Math.floor(Math.random() * 12) + 1;
		crystalNumberFour = Math.floor(Math.random() * 12) + 1;
		wins;
		losses;

		//CLEARS THE CRYSTAL NUMBERS
		$('#number-one').empty();
		$('#number-two').empty();
		$('#number-three').empty();
		$('#number-four').empty();

		//SHOWS UPDATE WINS AND LOSSES
		$('#wins').html(wins);
		$('#losses').html(losses);
		$('#total-score').html(totalScore);

		console.log(totalScore);
	}


	//CRYSTAL RANDOM NUMBER FUNCTIONS
	//FIRST CRYSTAL
	$('#crystal-one').on('click', function() {
		totalScore = totalScore + crystalNumberOne;
		console.log(totalScore);
		userGuess = crystalNumberOne;
		$('#total-score').html(totalScore);
		$('#number-one').html(crystalNumberOne);
		$('#user-guess').html(userGuess);

		//WIN-LOSS CONDITIONS
		if(totalScore == randomNumber) {
			alert('YOU WIN!');
			wins++;
			$('#wins').html(wins);
			gameReset();
		}
		else if(totalScore > randomNumber) {
			alert('BETTER LUCK NEXT TIME');
			losses++;
			$('#losses').html(losses);
			gameReset();
		}
	});


	//CRYSTAL TWO
	$('#crystal-two').on('click', function() {
		totalScore = totalScore + crystalNumberTwo;
		console.log(totalScore);
		userGuess = crystalNumberTwo;
		$('#total-score').html(totalScore);
		$('#number-two').html(crystalNumberTwo);
		$('#user-guess').html(userGuess);

		//WIN-LOSS CONDITIONS
		if(totalScore == randomNumber) {
			alert('YOU WIN!');
			wins++;
			$('#wins').html(wins);
			gameReset();
		}
		else if(totalScore > randomNumber) {
			alert('BETTER LUCK NEXT TIME');
			losses++;
			$('#losses').html(losses);
			gameReset();
		}
	});


	//CRYSTAL THREE
	$('#crystal-three').on('click', function() {
		totalScore = totalScore + crystalNumberThree;
		console.log(totalScore);
		userGuess = crystalNumberThree;
		$('#total-score').html(totalScore);
		$('#number-three').html(crystalNumberThree);
		$('#user-guess').html(userGuess);

		//WIN-LOSS CONDITIONS
		if(totalScore == randomNumber) {
			alert('YOU WIN!');
			wins++;
			$('#wins').html(wins);
			gameReset();
		}
		else if(totalScore > randomNumber) {
			alert('BETTER LUCK NEXT TIME');
			losses++;
			$('#losses').html(losses);
			gameReset();
		}
	});


	//CRYSTAL FOUR
	$('#crystal-four').on('click', function() {
		totalScore = totalScore + crystalNumberFour;
		console.log(totalScore);
		userGuess = crystalNumberFour;
		$('#total-score').html(totalScore);
		$('#number-four').html(crystalNumberFour);
		$('#user-guess').html(userGuess);

		//WIN-LOSS CONDITIONS
		if(totalScore == randomNumber) {
			alert('YOU WIN!');
			wins++;
			$('#wins').html(wins);
			gameReset();
		}
		else if(totalScore > randomNumber) {
			alert('BETTER LUCK NEXT TIME');
			losses++;
			$('#losses').html(losses);
			gameReset();
		}
	});
});
