console.log("hello world");
//need to assign a keydown function to each box
//

const playerOne = document.getElementById('red');
const playerTwo = document.getElementById('blue');


console.log(playerOne);
console.log(playerTwo);


//Empty arrays for each lane to push the square to the next spot in the table
const lane1 = [];
const lane2 = [];


//This is an event listern to see how the square is being targeted (for a click)
// playerOne.addEventListener('click', (event) => {
// 	console.log(event);
// 	playerOne.style.color="black";
// });


//function that will communicate with the red square and move it right one place
//this moves the red square across the page but with no winning alert
//by adding an empty string into the .puch command it remembers the value that was in the array
const moveRed = (event) => {
	document.getElementById('red').nextElementSibling.setAttribute('id', 'red');
	document.querySelector('#red').removeAttribute('id');
	lane1.push('');
	//this console.log allowed me to see the values in the array as I clicked the key right
	//console.log(lane1);
	if (lane1.length >= 7) {
		alert("red wins");
	}
	
};

//function that will tell blue square to move right one place
const moveBlue = (event) => {
	document.getElementById('blue').nextElementSibling.setAttribute('id', 'blue');
	document.querySelector('#blue').removeAttribute('id');
	lane2.push('');
	if(lane2.length >= 7) {
		alert("blue wins");
	}

};

//found the keycodes for right-arrow and 'd' key online. need to someonehow create the function
//since both squares are moving right you can combine both keys to the same function.
//once they are pressed they should act in the same way
const moveRight = (event) => {
	if (event.keyCode == 39) {
		moveRed();
	}
	if (event.keycode == 68) {
		moveBlue();
	}
};

document.onkeydown = moveRight;
