var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");
var buttonClick = document.querySelector("audio");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function() {
	numSquares = 3;
	resetColors(numSquares);
	easy.classList.add("selected");
	medium.classList.remove("selected");
	hard.classList.remove("selected");

});

medium.addEventListener("click", function() {
	numSquares = 6;
	resetColors(numSquares);
	medium.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");

});

hard.addEventListener("click", function() {
	numSquares = 9;
	resetColors(numSquares);
	hard.classList.add("selected");
	easy.classList.remove("selected");
	medium.classList.remove("selected");
});


resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
});

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//ass click listeners to square
	squares[i].addEventListener("click", function() {
		// buttonClick.load();	
		buttonClick.play();
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr
}

function randomColor() {
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green from 0-255"
	var green = Math.floor(Math.random() * 256);
	//pick a "blue from 0-255"
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue +")";
}

function resetColors(num) {
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	if (num === 3) {
		for (var i = 3; i < 9; i++) {
			squares[i].style.display = "none";
		}
	}  
	else if (num === 6) {
		for (var i = 0; i < 6; i++) {
			squares[i].style.display = "block"
		}
		for (var i = 6; i < 9; i++) {
			squares[i].style.display = "none"
		}

	} else
		for (var i = 0; i < 9; i++) {
			squares[i].style.display = "block"
		}
}
