// alert("JavaScript works!");
// Banchop Ben Kangdouangnhot
// SDI 1304
// Project 2

// variables

var callTech = "1-800-555-5555";

// Cell output conditions
var cellCondition = function ( good, bad, mV ) {
	var cell = true;
if( cell === true ){
	console.log("You have" + good + ", you have a " + bad  + mV + " milliVolts");
}
else {
	console.log("Checking");
}
return cell;

};

var getReadings = function(m){
// returning bad cell reading
    var mV = 5 + 10.5;
    return mV;
};


var getFeedBack = function( ){
	var feed = ", Thank you for your time..."
    return feed;
};


// checking number of cells conditions
var getCheckCells = function ( checkCell , message, feed ) {

var check =  0,
    cell3 = 15,
    cell1 = 5,
    cell2 = 5,
    cell4 = 5;

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
else { console.log(cells[2] , "Please call" , callTech + feed ) }

};

// calling the cellCondition and checkCells function

var feedBack = getFeedBack();

getCheckCells( "Checking cells ", " please wait...", feedBack );

var mV = getReadings ();

cellCondition( " 3 good cells", "cell that is reading " , mV );

