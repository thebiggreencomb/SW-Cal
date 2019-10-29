function MealOneSyn() {
	var mealOneSyn = parseInt(document.getElementById("food-one").value);
	var foodOneItem = document.getElementById("food-one-item").value;

	document.getElementById("meal-one").innerHTML = mealOneSyn;
	document.getElementById("syn").innerHTML = foodOneItem;
}



function DayValue() {
	var mealOneSyn = parseInt(document.getElementById("food-one").value);
	var mealTwoSyn = parseInt(document.getElementById("food-two").value);
	var mealThreeSyn = parseInt(document.getElementById("food-three").value);
	var mealFourSyn = parseInt(document.getElementById("food-four").value);
	var mealFiveSyn = parseInt(document.getElementById("food-five").value);

	document.getElementById("day-value").innerHTML = mealOneSyn + mealTwoSyn + mealThreeSyn + mealFourSyn + mealFiveSyn;
}


function BreakDown() {
	var mealOneSyn = parseInt(document.getElementById("food-one").value);
	var foodOneItem = document.getElementById("food-one-item").value

	document.getElementById("break-down").innerHTML = mealOneSyn + foodOneItem;
}

// function newInput() {
//     var buttonTwo = document.createElement("a",{"href":"http://google.com","style":"color:#FFF;background:#333;"},"google");
//     var t = document.createTextNode("New");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }

// function newInput() {
// var sheet = document.createElement('btn')
// document.body.appendChild(sheet);
// }