$(document).ready(function() {
	// Create the variables for the goal number and the crystal numbers
	var goal = 1;
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;
	var wins = 0;
	var losses = 0;
	var pointsToGoal = 0;
	$("#wins").text(wins);
	$("#losses").text(losses);


	

	// Create a function for the game
	function initializeGame() {

		// Randomize variables
		goal = Math.floor((Math.random() * 120) + 1);
		crystal1 = Math.floor((Math.random() * 12) + 1);
		crystal2 = Math.floor((Math.random() * 12) + 1);
		crystal3 = Math.floor((Math.random() * 12) + 1);
		crystal4 = Math.floor((Math.random() * 12) + 1);
		$("#goal_number").text(goal);

		console.log(goal, crystal1, crystal2, crystal3, crystal4);
	};
		// If the user clicks a button it adds the button's value to the pointsToGoal var
	$("#crystal1").on("click", function(){
		pointsToGoal = pointsToGoal + crystal1
		$("#points_to_goal").text(pointsToGoal);
	});
	$("#crystal2").on("click", function(){
		pointsToGoal = pointsToGoal + crystal2
		$("#points_to_goal").text(pointsToGoal);
	});
	$("#crystal3").on("click", function(){
		pointsToGoal = pointsToGoal + crystal3
		$("#points_to_goal").text(pointsToGoal);
	});
	$("#crystal4").on("click", function(){
		pointsToGoal = pointsToGoal + crystal4
		$("#points_to_goal").text(pointsToGoal);
	});
	
	if(pointsToGoal === goal) {
		wins = wins + 1;
		initializeGame();
	}else if(pointsToGoal > goal) {
		losses = losses + 1;
		initializeGame();
	};
		// Start the game with random variables
	initializeGame();



	
	


});


