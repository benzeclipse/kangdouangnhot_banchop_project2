// alert("JavaScript works!");
// Banchop Ben Kangdouangnht
// SDI 1304
// Project 2

var check =  0;

//Cell output conditions

var cellCondition = function ( good, bad ) {
	var cell = true;
if( cell === true ){
	console.log("You have a " + good + " or you might have a " + bad );
}
};

cellCondition( "cell that is good", "cell that is bad" );


var checkCells = function (con){
while( check <  4 ) {
    check++;
	console.log(con + check);
	var bCell = [ " Cell 1 good ", " Cell 2 good ", " Cell 3 bad! ", " Cell 4 good " ];
	
}
};

checkCells("Checking cells ");