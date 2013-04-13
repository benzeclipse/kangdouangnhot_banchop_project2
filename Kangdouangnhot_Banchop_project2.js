// alert("JavaScript works!");
// Banchop Ben Kangdouangnhot
// SDI 1304
// Project 2
//testing 1..2..3..


// variables

var check =  0;
var cell3 = 15;
var cell1 = 5; 
var cell2 = 5; 
var cell4 = 5;

// Cell output conditions

var cellCondition = function ( good, bad ) {
	var cell = true;
if( cell === true ){
	console.log("You have a " + good + " or you might have a " + bad );
}

};

// checking number of cells conditions

var checkCells = function ( checkCell , message ) {

while ( check <  4 ) {
    check++;
	console.log( checkCell + check + message );
	var cells = [ " Cell 1 good ", " Cell 2 good ", "Cell 3 bad! ", " Cell 4 good " ];
};

//  checking when cells are over 8 mv (milliVolts reading) and would then be considered bad

if ( cell1 < 8 && cell2 < 8 && cell3 < 8 && cell4 < 8 ) { 
	console.log("Cells 1, 2, 3, and 4 are good...");
	 }

// if all cells checks good, this block of code would then run and output a bad cell #	

else { console.log(cells[2] ) }

};

// calling the cellCondition and checkCells function

cellCondition( "cell that is good", "cell that is bad" );

checkCells( "Checking cells ", " please wait..." );

<<<<<<< HEAD
<<<<<<< HEAD
 
=======
 

=======
 
>>>>>>> 7ee255f5f2b1a2dce21cf8d4559d601fa646597b

>>>>>>> 7ee255f5f2b1a2dce21cf8d4559d601fa646597b
