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
playerOne.addEventListener('click', (event) => {
	console.log(event);
	playerOne.style.color="black";
});


//function that will communicate with the red square and move it right one place
const moveRed = () => {
	
};

//function that will tell blue square to move right one place
const moveBlue = () => {

}

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
