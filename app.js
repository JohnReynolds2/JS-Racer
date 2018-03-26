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
let lane3 = 0;



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
	if (lane1.length >= 22) {
		alert("red wins");
	}
	
};

//function that will tell blue square to move right one place
const moveBlue = (event) => {

	document.getElementById('blue').nextElementSibling.setAttribute('id', 'blue');
	document.querySelector('#blue').removeAttribute('id');
	lane2.push('');
	console.log(lane2);
	if (lane2.length >= 22) {
		alert("blue wins");
	}

};

//trying to move green square with pixels

const moveGreen = (event) => {

	player3 = document.getElementById('green');
	player3.style.position= 'relative';
	player3.style.right=10 + "px";
	lane3 += player3.style.right +=10 + "px";
	console.log(lane3); 

};

//found the keycodes for right-arrow and 'd' key online. need to someonehow create the function
//since both squares are moving right you can combine both keys to the same function.
//once they are pressed they should act in the same way

//The reason why the blue wasn't working was because I had a syntactical error.
const moveRight = (event) => {
	if (event.keyCode == 39) {
		moveRed();
	}
	if (event.keyCode == 68) {
		moveBlue();
	}
	// if (event.keyCode == 73) {
	// 	moveGreen();
	// }
};

document.onkeydown = moveRight;
console.log(moveRight);



//JOE GOING THROUGH HOW TO IN CLASS
//This help from JOe allowed my green square to move across the screen, no finish line yet
//set an alert to notify green won

//I want to grab html element that is green box and add margin-left to it
const green = document.getElementById("green");

let marginValue = 0;

//how to add an event listner to a key to see the keyCode for that key
document.addEventListener('keydown', (event) => {
		if (event.keyCode == 73) {
			marginValue += 10;
			green.style.marginLeft = marginValue + "px";
		}
	});



//
green.style.marginLeft = "10px";
"10px"


