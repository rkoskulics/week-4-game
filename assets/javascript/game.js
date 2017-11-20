$(document).ready(function() {
	// Create the variables for the goal number and the crystal numbers
	var goal = 0;
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;

	// Create the function to generate random numbers within a range
	var minNumber = 0;
	var maxNumber = 0;

	var randomNumber = randomNumberFromRange(minNumber, maxNumber);

	function randomNumberFromRange(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	// console.log(randomNumberFromRange(1, 12));

	// Create a function for the game
	function initializeGame() {
		// Generate random numbers for each of the elements we need.



	};


});

