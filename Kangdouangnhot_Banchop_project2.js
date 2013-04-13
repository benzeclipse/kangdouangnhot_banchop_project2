// alert("JavaScript works!");
// Banchop Ben Kangdouangnhot
// SDI 1304
// Project 2


// variables
var check =  0;
var cell3 = 15;
var cell1 = 5; 
var cell2 = 5; 
var cell4 = 5;

var getReadings = function (m) {
// returning bad cell reading
    var mV = 15.5;
    return mV;
};

// Cell output conditions
var cellCondition = function ( good, bad, mV ) {
	var cell = true;
if( cell === true ){
	console.log("You have " + good + "and you have a " + bad  + mV + " milliVolts");
}

};

// checking number of cells conditions
var checkCells = function ( checkCell , message ) {

while ( check <  4 ) {
    check++;
	console.log( checkCell + check + message );
	var cells = [ " Cell 1 good ", " Cell 2 good ", "Cell 3 bad! ", " Cell 4 good " ];
};


//  checking when cells under 8 (milliVolts reading) anything over would be bad
if ( cell1 < 8 && cell2 < 8 && cell3 < 8 && cell4 < 8 ) { 
	console.log("Cells 1, 2, 3, and 4 are good...");
	 }

// if a single cells checks false, this block of code would then run and output a bad cell #	
else { console.log(cells[2] ) }


};


// calling the cellCondition and checkCells function

checkCells( "Checking cells ", " please wait..." );

var mV = getReadings(mV);

cellCondition( "3 good cells ", "cell that is reading " , mV );

