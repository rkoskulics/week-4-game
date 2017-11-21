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
		goal = Math.floor((Math.random() * 101) + 19);
		crystal1 = Math.floor((Math.random() * 12) + 1);
		crystal2 = Math.floor((Math.random() * 12) + 1);
		crystal3 = Math.floor((Math.random() * 12) + 1);
		crystal4 = Math.floor((Math.random() * 12) + 1);
		pointsToGoal = 0;
		$("#goal_number").text(goal);
		console.log(goal, crystal1, crystal2, crystal3, crystal4);
	};

	// If statement to actually run game, currently working!
	function checkIfGameOver(){
		if(pointsToGoal === goal) {
			wins = wins + 1;
			$("#wins").text(wins);
			initializeGame();
		}else if(pointsToGoal >= goal) {
			losses = losses + 1;
			$("#losses").text(losses);
			initializeGame();
		};
	};
	initializeGame();
		// If the user clicks a button it adds the button's value to the pointsToGoal var
	$("#crystal1").on("click", function(){
		pointsToGoal = pointsToGoal + crystal1
		$("#points_to_goal").text(pointsToGoal);
		checkIfGameOver();
	});
	$("#crystal2").on("click", function(){
		pointsToGoal = pointsToGoal + crystal2
		$("#points_to_goal").text(pointsToGoal);
		checkIfGameOver();
	});
	$("#crystal3").on("click", function(){
		pointsToGoal = pointsToGoal + crystal3
		$("#points_to_goal").text(pointsToGoal);
		checkIfGameOver();
	});
	$("#crystal4").on("click", function(){
		pointsToGoal = pointsToGoal + crystal4
		$("#points_to_goal").text(pointsToGoal);
		checkIfGameOver();
	});
});


